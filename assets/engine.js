/* Kodland — Refund mini-training: shared engine (all languages).
   Each <lang>.html loads assets/content-<lang>.js first (defines PAGE_LANG and CONTENT), then this file. */

/* ---------- safe storage ----------
   Inside the LMS iframe the browser treats this site's storage as third-party:
   Safari and strict privacy settings can block or wipe it. Every value is kept
   in memory + localStorage + sessionStorage and reads never throw, so the
   training keeps its progress for the whole visit even when storage is blocked. */
const STORE=(function(){
  const mem={};
  function areas(){ const a=[]; try{ a.push(window.localStorage); }catch(e){} try{ a.push(window.sessionStorage); }catch(e){} return a; }
  return {
    get(k){ for(const st of areas()){ try{ const v=st.getItem(k); if(v!==null) return v; }catch(e){} } return Object.prototype.hasOwnProperty.call(mem,k)?mem[k]:null; },
    getAll(k){ const out=[]; for(const st of areas()){ try{ const v=st.getItem(k); if(v!==null) out.push(v); }catch(e){} } if(Object.prototype.hasOwnProperty.call(mem,k)) out.push(mem[k]); return out; },
    set(k,v){ v=String(v); mem[k]=v; for(const st of areas()){ try{ st.setItem(k,v); }catch(e){} } },
    remove(k){ delete mem[k]; for(const st of areas()){ try{ st.removeItem(k); }catch(e){} } }
  };
})();

const PROG_KEY=window.PROG_KEY_OVERRIDE||'kl-mt-progress';
const THEME_KEY='kl-rf-theme';
const DEV_KEY='kl-rf-devmode';
const LANG_KEY='kl-rf-lang';
const KNOWN_LANGS=['en'];
const LANG=(typeof PAGE_LANG!=='undefined')?PAGE_LANG:(STORE.get(LANG_KEY)||'en');

let MODULES=[];
let currentModule=null;
let ixState=null;

/* ---------- i18n ---------- */
function T(key,vars){
  let s=(typeof CONTENT!=='undefined'&&CONTENT.ui&&CONTENT.ui[key]!=null)?CONTENT.ui[key]:null;
  if(s==null){ console.warn('Missing UI string:',key); return key; }
  if(vars) Object.keys(vars).forEach(k=>{ s=s.split('{'+k+'}').join(vars[k]); });
  return s;
}
function applyStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=T(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML=T(el.getAttribute('data-i18n-html')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{ el.setAttribute('title',T(el.getAttribute('data-i18n-title'))); });
  document.title=T('pageTitle');
}
function setLang(lang){
  if(KNOWN_LANGS.indexOf(lang)===-1) return;
  STORE.set(LANG_KEY,lang);
  // Carry progress in the URL so switching language never loses it, even if storage is blocked.
  const q=new URLSearchParams(location.search); q.delete('p');
  q.set('p', JSON.stringify(getProgress()));
  location.href=lang+'.html?'+q.toString();
}
function toggleLang(e){
  e.stopPropagation();
  document.getElementById('langMenu').classList.toggle('show');
}
document.addEventListener('click',function(){
  const m=document.getElementById('langMenu');
  if(m) m.classList.remove('show');
});

/* ---------- progress ---------- */
// Progress only ever moves forward: a module passed anywhere stays passed, best score wins.
function mergeProgress(a,b){
  const out={};
  [a||{},b||{}].forEach(src=>{ Object.keys(src).forEach(k=>{
    const v=src[k]||{}; const prev=out[k]||{};
    out[k]={passed: prev.passed===true||v.passed===true, score: Math.max(Number(prev.score)||0, Number(v.score)||0)};
  }); });
  return out;
}
function getProgress(){
  let p={};
  STORE.getAll(PROG_KEY).forEach(raw=>{ try{ p=mergeProgress(p, JSON.parse(raw||'{}')); }catch(e){} });
  return p;
}
function saveProgress(p){ STORE.set(PROG_KEY, JSON.stringify(p)); lmsSync(); }
function isPassed(id){ const p=getProgress(); return p[id]?.passed===true; }
function getScore(id){ const p=getProgress(); return p[id]?.score||0; }
function setResult(id,pct,passed){ const p=getProgress(); const prev=p[id]||{}; p[id]={passed:passed||prev.passed===true,score:Math.max(pct,prev.score||0)}; saveProgress(p); }
/* ---------- LMS bridge ----------
   Talks to the LMS (parent frame) via postMessage. Outside an iframe it does nothing.
   Training -> LMS: {source:'kodland-training', training, lang, event:'ready'|'progress'|'completed', progress, done, total, score}
   The LMS unlocks the test (DST) when it receives 'completed' ("Material first, then the test" on):
   that happens once every module of the learning path is passed. Nothing is sent in developer mode.
   LMS -> Training (optional): {source:'kodland-lms', event:'progress', progress:{...}} restores saved progress. */
const TRAINING_ID='mini-'+String(PROG_KEY).replace(/^kl-mt-/,'').replace(/-progress$/,'');
const IN_LMS=(function(){ try{ return window.parent!==window; }catch(e){ return true; } })();
let lmsReady=false, completedSent=false;
function isDevMode(){ return STORE.get(DEV_KEY)==='1'; }
function allModulesPassed(){ const p=getProgress(); return MODULES.length>0 && MODULES.every(m=>p[m.id]?.passed===true); }
function lmsSend(event){
  try{
    if(!IN_LMS || !lmsReady || isDevMode() || !MODULES.length) return;
    const p=getProgress();
    const done=MODULES.filter(m=>p[m.id]?.passed===true).length;
    const score=Math.round(MODULES.map(m=>Number(p[m.id]?.score)||0).reduce((a,b)=>a+b,0)/MODULES.length);
    window.parent.postMessage({source:'kodland-training', training:TRAINING_ID, lang:LANG, event:event, progress:p, done:done, total:MODULES.length, score:score}, '*');
  }catch(e){}
}
// 'completed' is sent once per page load, as soon as every module is passed (also on load, if it was already done).
function lmsSync(){ if(!lmsReady) return; lmsSend('progress'); if(!completedSent && !isDevMode() && allModulesPassed()){ completedSent=true; lmsSend('completed'); } }
window.addEventListener('message', function(e){
  try{
    if(!IN_LMS || e.source!==window.parent) return;
    const d=e.data; if(!d || d.source!=='kodland-lms' || d.event!=='progress' || !d.progress || typeof d.progress!=='object') return;
    STORE.set(PROG_KEY, JSON.stringify(mergeProgress(getProgress(), d.progress)));
    const onPath=document.getElementById('screen-path').classList.contains('active');
    renderHome(); if(onPath) showScreen('screen-path');
    lmsSync();
  }catch(err){}
});
function shuf(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* ---------- screens / theme ---------- */
function showScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function goHome(){ showScreen('screen-home'); window.scrollTo(0,0); }
function toggleTheme(){
  const html=document.documentElement;
  const cur=html.getAttribute('data-theme');
  const next = cur==='dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  STORE.set(THEME_KEY, next);
}
(function(){ const t=STORE.get(THEME_KEY); if(t) document.documentElement.setAttribute('data-theme',t); })();

function goDashboard(){ renderHome(); showScreen('screen-path'); window.scrollTo(0,0); }

/* ---------- dev mode: reviewers only ----------
   The 🔓 button and Shift+D x3 work only when the page is opened with ?dev=1
   (same rule as the Attendance training). Turning developer mode off restores the
   real progress saved before it was turned on, so it can never be used to skip modules. */
const DEV_ALLOWED=/[?&]dev=1(&|$)/.test(location.search);
const DEV_BACKUP=PROG_KEY+'-devbackup';
function restoreRealProgress(){
  const b=STORE.get(DEV_BACKUP);
  STORE.set(PROG_KEY, b||'{}');
  STORE.remove(DEV_BACKUP);
  STORE.remove(DEV_KEY);
}
function devUnlockAll(){
  if(!DEV_ALLOWED) return;
  if(!isDevMode()) toggleDevMode();
  else { renderHome(); alert(T('devUnlockAlert')); }
}
function toggleDevMode(){
  if(!DEV_ALLOWED) return;
  if(!isDevMode()){
    STORE.set(DEV_BACKUP, JSON.stringify(getProgress()));
    STORE.set(DEV_KEY,'1');
    const p=getProgress(); MODULES.forEach(m=>{ p[m.id]={passed:true,score:100}; }); STORE.set(PROG_KEY, JSON.stringify(p));
    showDevBadge(true);
    renderHome();
    alert(T('devOn'));
  } else {
    restoreRealProgress();
    showDevBadge(false);
    renderHome();
    alert(T('devOff'));
  }
}
(function(){
  let _dSeq=0, _dTimer=null;
  document.addEventListener('keydown',function(e){
    if(e.key==='D' && e.shiftKey){
      if(!DEV_ALLOWED) return;
      clearTimeout(_dTimer);
      _dSeq++;
      _dTimer=setTimeout(()=>_dSeq=0,1200);
      if(_dSeq>=3){ _dSeq=0; toggleDevMode(); }
    }
  });
  window.showDevBadge=function(on){
    let b=document.getElementById('dev-badge');
    if(!b){
      b=document.createElement('div');
      b.id='dev-badge';
      b.style.cssText="position:fixed;bottom:12px;right:12px;background:var(--coral);color:#fff;font-family:'Baloo 2','Nunito',sans-serif;font-weight:900;font-size:12px;padding:4px 10px;border-radius:20px;z-index:9999;pointer-events:none;letter-spacing:.5px";
      b.textContent=T('devBadge');
      document.body.appendChild(b);
    }
    b.style.display=on?'block':'none';
  };
})();

/* ---------- learning path ---------- */
// Modules without their own colour / illustration get one by position (intro, middle modules, final checklist).
const MOD_COLORS=['#5DD39E','#7EA8FF','#FFB44D','#B79DF2','#F58AC4','#FFD34D'];
function moduleColor(m,idx){ return m.color || (m.gateExam ? '#FFD34D' : MOD_COLORS[idx%(MOD_COLORS.length-1)]); }
function moduleArt(m,idx){ return m.art || (idx===0 ? 'lifebuoy' : m.gateExam ? 'shield' : ['chat','report','clock'][(idx-1)%3]); }
function leadEmoji(s){
  const m=/^((?:\p{Extended_Pictographic}|\p{Regional_Indicator})(?:\uFE0F|\u200D\p{Extended_Pictographic}|\p{Emoji_Modifier})*)\s*([\s\S]*)$/u.exec(s||'');
  return m?{e:m[1],t:m[2]}:{e:'',t:s||''};
}
function renderHome(){
  const grid=document.getElementById('mgrid');
  let doneCount=0;
  grid.innerHTML = MODULES.map((m,idx)=>{
    const prevId = idx===0 ? null : MODULES[idx-1].id;
    const locked = prevId!==null && !isPassed(prevId);
    const done = isPassed(m.id);
    if(done) doneCount++;
    const pct = getScore(m.id);
    const badge = locked?`<span class="badge bl">${T('locked')}</span>`:done?(m.ix?`<span class="badge bd">${T('passedBadge',{pct:pct})}</span>`:`<span class="badge bd">${T('reviewedBadge')}</span>`):(m.ix?`<span class="badge br">${T('startBadge')}</span>`:`<span class="badge br">${T('reviewBadge')}</span>`);
    return `<div class="mc ${locked?'locked':''} ${done?'done':''}" style="--mcol:${moduleColor(m,idx)}" onclick="${locked?'':'openModule('+idx+')'}">
      <div class="mc-body">
        <div class="mc-num">${m.numLabel||T('moduleN',{n:idx+1})}</div>
        <span class="mc-big">${m.emoji}</span>
        <div class="mc-title">${m.title}</div>
        <div class="mc-desc">${m.desc}</div>
        <div class="mc-foot">${badge}</div>
      </div>
    </div>`;
  }).join('');
  const ntag=document.getElementById('ntag');
  if(ntag){ ntag.style.display='inline'; ntag.textContent = T('modulesPassed',{done:doneCount,total:MODULES.length}); }
  const pf=document.getElementById('pbFill'), pc=document.getElementById('pbCount');
  if(pf) pf.style.width=Math.round(doneCount/MODULES.length*100)+'%';
  if(pc) pc.textContent=doneCount+'/'+MODULES.length;
}

function openModule(idx){
  const m=MODULES[idx];
  currentModule=m.id;
  if(!m.ix){ setResult(m.id,100,true); }
  const body=document.getElementById('contentBody');
  const eyebrow = m.eyebrow || ((m.numLabel||T('moduleN',{n:idx+1}))+' '+T('of')+' '+MODULES.length);
  const secs = m.sections.map((s,i)=>({s:s,i:i,lead:leadEmoji(s.t)}));
  const learn = (m.learn&&m.learn.length) ? m.learn : secs.filter(x=>x.s.t).slice(0,4).map(x=>[x.lead.e||'✨',x.lead.t]);
  const chips = secs.filter(x=>x.s.t).map(x=>`<button class="chip" type="button" data-jump="sec-${x.i}">${x.lead.e} ${x.lead.t}</button>`).join('');
  let html = `<div class="rdbar"><i id="rdFill"></i></div>
  <div class="mhead reveal">
    <div>
      <div class="meyebrow">${eyebrow}</div>
      <h1 class="mh1"><span class="mh1-em">${m.emoji}</span> ${m.title}</h1>
      <div class="mobj-box"><div class="mobj-ic">🎯</div><div class="mobj-txt"><strong>${T('objective')}</strong><p>${m.obj}</p></div></div>
    </div>
    <div class="mhead-art">${ill(moduleArt(m,idx))}</div>
  </div>
  ${learn.length?`<div class="learn reveal">${learn.map(l=>`<div class="lcard"><span>${l[0]}</span><p>${l[1]}</p></div>`).join('')}</div>`:''}
  ${chips?`<div class="chips reveal">${chips}</div>`:''}`;
  secs.forEach(x=>{
    html += `<section class="sec reveal" id="sec-${x.i}">${x.s.t?`<div class="sh"><span class="se">${x.lead.e||'📌'}</span><h2>${x.lead.t}</h2></div>`:''}${x.s.html}</section>`;
  });
  if(m.ix){
    html += `<div class="ix-wrap" id="ixWrap"></div>`;
  }
  html += `<button class="ctabtn" id="moduleCta" onclick="${m.ix?'startInteraction('+idx+')':(m.gateExam?'goToExamIntro()':'goDashboard()')}">${m.ix?T('startCheck'):(m.gateExam?T('finishBtn'):T('doneBack'))}</button>`;
  body.innerHTML = html;
  if(LANG!=='en'){ body.querySelectorAll('iframe[src^="Simulacion_BO_"]').forEach(f=>{ f.src=f.getAttribute('src').split('?')[0]+'?lang='+encodeURIComponent(LANG); }); }
  showScreen('screen-content');
  window.scrollTo(0,0);
  observeReveals(body);
  if(m.ix){ renderIxIntro(m); }
}

/* ---------- module check (choice + sort) ---------- */
function renderIxIntro(m){
  document.getElementById('ixWrap').innerHTML = `
    <span class="ix-badge">${T('ixBadge')}</span>
    <div class="ix-title">${m.ix.title}</div>
    <div class="ix-instr">${m.ix.instr}</div>
  `;
  document.getElementById('moduleCta').style.display='block';
}
function startInteraction(idx){
  ixState = { m:MODULES[idx], i:0, correct:0, total:0, itemDone:false };
  document.getElementById('moduleCta').style.display='none';
  renderIxStep();
  document.getElementById('ixWrap').scrollIntoView({behavior:'smooth',block:'start'});
}
function ixTotalSteps(m){ return m.ix.items.length; }
function renderIxStep(){
  const {m,i} = ixState;
  const item = m.ix.items[i];
  const wrap = document.getElementById('ixWrap');
  let inner = `<span class="ix-badge">${T('ixItemBadge',{i:i+1,n:ixTotalSteps(m)})}</span>
  <div class="ix-title">${m.ix.title}</div>
  <div class="ix-bar"><i style="width:${Math.round(i/ixTotalSteps(m)*100)}%"></i></div>`;
  if(item.type==='choice'){
    if(!item._shuffled){
      const order = shuf(item.opts.map((_,idx)=>idx));
      item._opts = order.map(idx=>item.opts[idx]);
      item._correct = order.indexOf(item.correct);
      item._shuffled = true;
    }
    inner += `<div class="ix-instr">${item.prompt}</div><div id="ixOpts">`;
    item._opts.forEach((o,oi)=>{
      inner += `<div class="ix-card" id="ixOpt${oi}" onclick="ixAnswerChoice(${oi})">${o}</div>`;
    });
    inner += `</div><div id="ixFbBox"></div>`;
  } else if(item.type==='sort'){
    inner += `<div class="ix-instr">${item.prompt}</div>
    <div class="ix-card locked" style="font-weight:700;text-align:center;background:var(--surface);border-style:solid" id="ixSortCard">${item.card}</div>
    <div class="ix-zones" id="ixZones">`;
    item.zones.forEach((z,zi)=>{
      inner += `<button class="ix-zone-btn" style="min-height:44px" onclick="ixAnswerSort(${zi})">${z.label}</button>`;
    });
    inner += `</div><div id="ixFbBox"></div>`;
  }
  inner += `<div class="ix-progress">${T('scoreSoFar',{c:ixState.correct,t:ixState.total})}</div>
  <button class="ix-nextbtn" id="ixNext" onclick="ixNextStep()">${T('continue')}</button>`;
  wrap.innerHTML = inner;
}
function ixShowFeedback(isCorrect, text){
  ixState.total++;
  if(isCorrect) ixState.correct++;
  document.getElementById('ixFbBox').innerHTML = `<div class="ix-fb ${isCorrect?'ok':'bad'}">${isCorrect?'✅ ':'❌ '}${text}</div>`;
  document.getElementById('ixNext').classList.add('show');
  ixState.itemDone = true;
}
function ixAnswerChoice(oi){
  if(ixState.itemDone) return;
  const item = ixState.m.ix.items[ixState.i];
  const isCorrect = oi===item._correct;
  item._opts.forEach((o,i2)=>{
    const el=document.getElementById('ixOpt'+i2);
    el.classList.add('locked');
    el.onclick=null;
    if(i2===item._correct) el.classList.add('correct');
    else if(i2===oi) el.classList.add('wrong');
  });
  ixShowFeedback(isCorrect, item.fb);
}
function ixAnswerSort(zi){
  if(ixState.itemDone) return;
  const item = ixState.m.ix.items[ixState.i];
  const isCorrect = zi===item.correctZone;
  document.querySelectorAll('#ixZones .ix-zone-btn').forEach((b,bi)=>{ b.disabled=true; if(bi===item.correctZone) b.classList.add('correct-zone'); else if(bi===zi) b.classList.add('wrong-zone'); });
  const text = isCorrect ? (item.zones[zi].fb || item.fb || '') : (item.zones[zi].fb || item.fb || T('sortWrong',{label:item.zones[item.correctZone].label}));
  ixShowFeedback(isCorrect, text);
}
function ixNextStep(){
  ixState.i++;
  ixState.itemDone=false;
  if(ixState.i >= ixTotalSteps(ixState.m)){
    const pct = Math.round((ixState.correct/ixState.total)*100);
    const passed = pct>=70;
    setResult(ixState.m.id, pct, passed);
    showModuleResult(ixState.m, pct, passed);
    return;
  }
  renderIxStep();
}
function showModuleResult(m, pct, passed){
  const body=document.getElementById('resultsBody');
  const isLast = passed && m.gateExam;
  body.innerHTML = `
  <div class="remi">${passed?'🎉':'🔁'}</div>
  <div class="rtitle">${passed?T('resPassed'):T('resFailed')}</div>
  <div class="rpct ${passed?'pass':'fail'}">${pct}%</div>
  <div class="rsub">${passed?(isLast?T('resDone'):T('resUnlocked')):T('resNeed')}</div>
  <button class="bdark" onclick="${isLast?'goToExamIntro()':'goDashboard()'}">${passed?(isLast?T('resFinish'):T('resContinue')):T('resBack')}</button>
  ${passed?'':`<button class="bline" onclick="openModule(MODULES.findIndex(x=>x.id==='${m.id}'))">${T('resReview')}</button>`}
  `;
  showScreen('screen-results');
  window.scrollTo(0,0);
  if(passed) setTimeout(()=>confetti(isLast?160:110),250);
}

/* ---------- end of the training: hand-off to the DST in the LMS ---------- */
function goToExamIntro(){
  const body=document.getElementById('contentBody');
  body.innerHTML = `
  <div class="meyebrow">${T('doneEyebrow')}</div>
  <h1 class="mh1">${T('doneTitle')}</h1>
  <div class="card"><p>${T('doneP1')}</p>
  <p>${T('doneP2')}</p>
  <p>${T('doneP3')}</p>
  <p>${T('doneP4')}</p>
  ${T('doneP5')?'<p>'+T('doneP5')+'</p>':''}</div>
  `;
  showScreen('screen-content');
  window.scrollTo(0,0);
  setTimeout(()=>confetti(170),300);
}

/* ---------- content helpers (used by the modules in content-<lang>.js) ---------- */
function co(cls,icon,html){ return `<div class="callout ${cls}"><div class="co-ic">${icon}</div><div class="co-body">${html}</div></div>`; }
function doavoid(doItems,avoidItems){
  return `<div class="doavoid">
    <div class="dobox"><h5>${T('doLabel')}</h5><ul>${doItems.map(i=>`<li><span class="lic">✅</span><span>${i}</span></li>`).join('')}</ul></div>
    <div class="avoidbox"><h5>${T('avoidLabel')}</h5><ul>${avoidItems.map(i=>`<li><span class="lic">🚫</span><span>${i}</span></li>`).join('')}</ul></div>
  </div>`;
}
function patternCards(cards,cols){
  const st=cols?` style="grid-template-columns:repeat(${cols},1fr)"`:'';
  return `<div class="pattern-row"${st}>${cards.map(c=>`
    <div class="pattern-card">
      <div class="pattern-ic">${c.ic}</div>
      <div class="pattern-title">${c.title}</div>
      <div class="pattern-desc">${c.desc}</div>
      <div class="pattern-note">${c.note}</div>
    </div>`).join('')}</div>`;
}
function stepFlow(steps){
  return `<div class="step-flow">${steps.map((s,i)=>`<div class="step-box"><div class="step-ic">${s.ic}</div><div class="step-lbl">${s.label}</div></div>${i<steps.length-1?'<div class="step-arrow">→</div>':''}`).join('')}</div>`;
}
function bigStat(big,html){
  return `<div class="bigstat"><div class="bigstat-num">${big}</div><div class="bigstat-txt">${html}</div></div>`;
}
function checkbox(items){
  return `<div class="ck-list">${items.map(it=>`<div class="ck-row"><span class="ck-box">☐</span><span class="ck-txt">${it}</span></div>`).join('')}</div>`;
}
function numlist(items){
  return `<div class="nc-list">${items.map((it,i)=>`<div class="nc-row"><span class="nc-num">${i+1}</span><span class="nc-txt">${it}</span></div>`).join('')}</div>`;
}
function iconGrid(items){
  return `<div class="icon-grid ig${items.length}">${items.map(it=>`<div class="icon-grid-item"><div class="igi-ic">${it.ic}</div><div class="igi-txt">${it.html}</div></div>`).join('')}</div>`;
}
function stepIconBlock(icon,subtitle,bodyHtml){
  return `<div class="card sib"><div class="sib-head"><div class="sib-ic">${icon}</div><h4>${subtitle}</h4></div><div class="sib-body">${bodyHtml}</div></div>`;
}
function accItem(title,bodyHtml){
  return `<details class="acc-item"><summary>${title}</summary><div class="acc-body">${bodyHtml}</div></details>`;
}
function noticeLine(html){
  return `<div class="notice-line"><span class="nl-ic">👁️</span><div><strong>${T('noticeLabel')}</strong> ${html}</div></div>`;
}
function classifyCard(cls,icon,seeHtml,doHtml){
  return `<div class="callout ${cls}"><div class="co-ic">${icon}</div><div class="co-body">
    <div class="cv-see"><span class="cv-lbl">👀</span><div><strong>${T('cvSee')}</strong> ${seeHtml}</div></div>
    <div class="cv-do"><span class="cv-lbl">🎯</span><div><strong>${T('cvDo')}</strong> ${doHtml}</div></div>
  </div></div>`;
}
function dimTabs(tabs,doneText){
  const id='dt'+Math.random().toString(36).slice(2,8);
  const bar = tabs.map((t,i)=>`<button class="dt-btn ${i===0?'on':''}" onclick="dtShow('${id}',${i})"><span class="dt-btn-ic">${t.ic}</span><span class="dt-btn-lbl">${t.title}</span></button>`).join('');
  const panels = tabs.map((t,i)=>{
    const vid = t.video ? `<div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">${t.video.title}</div><div class="vslot-meta">${T('dtExample')}</div></div></div><div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="${t.video.src}" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div><div class="vslot-brief">${t.video.brief}</div></div>` : '';
    const next = i<tabs.length-1 ? `<button class="dt-next" onclick="dtShow('${id}',${i+1},true)">${T('dtNext')} ${tabs[i+1].ic} ${tabs[i+1].title} →</button>` : `<div class="dt-done">${doneText||T('dtDone')}</div>`;
    return `<div class="dt-panel ${i===0?'on':''}"><div class="dt-intro"><span class="dt-intro-ic">${t.ic}</span><div><div class="dt-intro-t">${t.title}</div><p>${t.intro}</p></div></div>${iconGrid(t.tips)}${vid}${next}</div>`;
  }).join('');
  return `<div class="dt" id="${id}"><div class="dt-bar">${bar}</div>${panels}</div>`;
}
function dtShow(id,i,scroll){
  const w=document.getElementById(id); if(!w) return;
  w.querySelectorAll('.dt-btn').forEach((b,j)=>b.classList.toggle('on',j===i));
  w.querySelectorAll('.dt-panel').forEach((p,j)=>p.classList.toggle('on',j===i));
  if(scroll) w.scrollIntoView({behavior:'smooth',block:'start'});
}
function timeline(steps){
  return `<div class="tl-wrap">${steps.map((s,i)=>`
    <div class="tl-item"><div class="tl-ic">${s.ic}</div><div class="tl-body"><div class="tl-lbl">${s.label}</div><ul>${s.items.map(it=>`<li>${it}</li>`).join('')}</ul></div>${s.video?`<div class="tl-vid"><div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">${T('tlVideoTitle',{label:s.label.replace(/^\d+\s*·\s*/,'')})}</div><div class="vslot-meta">${T('tlVideoMeta')}</div></div></div><div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="${s.video}" width="100%" height="380" style="border:none;display:block" allow="autoplay" loading="lazy"></iframe></div></div></div>`:''}</div>${i<steps.length-1?'<div class="tl-connector"></div>':''}`).join('')}</div>`;
}

/* ==========================================================================
   v2 components — illustrations and interactive widgets used by the content
   (declared BEFORE the init section: the content calls them while building)
   ========================================================================== */

/* ---------- illustrations (inline SVG, Kodland palette) ---------- */
const ILL = {
  laptopWarn:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="134" rx="80" ry="8" fill="rgba(0,0,0,.09)"/><rect x="38" y="20" width="124" height="86" rx="10" fill="#2B2F3A"/><rect x="45" y="27" width="110" height="72" rx="6" fill="#fff"/><path d="M100 38 L130 88 H70 Z" fill="#FFD34D" stroke="#F59E0B" stroke-width="4" stroke-linejoin="round"/><rect x="97" y="54" width="6" height="19" rx="3" fill="#111"/><circle cx="100" cy="80" r="3.8" fill="#111"/><path d="M20 106 H180 L172 121 Q170 125 164 125 H36 Q30 125 28 121 Z" fill="#C4F046" stroke="#8FB61F" stroke-width="2.5"/><rect x="84" y="109" width="32" height="5" rx="2.5" fill="#8FB61F"/><circle cx="30" cy="30" r="6" fill="#F03D9E"/><circle cx="176" cy="46" r="4" fill="#3E7BFA"/><path d="M168 18 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4z" fill="#FFD34D"/></svg>`,
  clock:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="138" rx="56" ry="7" fill="rgba(0,0,0,.09)"/><rect x="86" y="10" width="28" height="13" rx="4" fill="#111"/><rect x="95" y="21" width="10" height="11" fill="#111"/><circle cx="100" cy="82" r="54" fill="#fff" stroke="#111" stroke-width="6"/><path d="M100 82 L100 40 A42 42 0 0 1 136 61 Z" fill="#C4F046"/><g stroke="#111" stroke-width="4" stroke-linecap="round"><path d="M100 36v8M100 120v8M54 82h8M138 82h8"/></g><path d="M100 82 L100 48" stroke="#F03D9E" stroke-width="6" stroke-linecap="round"/><path d="M100 82 L122 95" stroke="#111" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="82" r="7" fill="#111"/><circle cx="160" cy="30" r="7" fill="#3E7BFA"/><path d="M38 24 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFD34D"/></svg>`,
  micCam:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="138" rx="82" ry="7" fill="rgba(0,0,0,.09)"/><rect x="34" y="22" width="36" height="62" rx="18" fill="#3E7BFA"/><path d="M26 74 a26 26 0 0 0 52 0" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/><path d="M52 102 v22 M36 126 h32" stroke="#111" stroke-width="6" stroke-linecap="round"/><rect x="42" y="34" width="20" height="4" rx="2" fill="#fff" opacity=".7"/><rect x="104" y="44" width="62" height="50" rx="11" fill="#F03D9E"/><path d="M166 60 L192 44 V94 L166 78 Z" fill="#F03D9E"/><circle cx="135" cy="69" r="14" fill="#fff"/><circle cx="135" cy="69" r="7" fill="#111"/><circle cx="116" cy="54" r="3" fill="#fff"/><circle cx="150" cy="30" r="6" fill="#C4F046" stroke="#8FB61F" stroke-width="2"/></svg>`,
  phoneDesk:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="138" rx="84" ry="7" fill="rgba(0,0,0,.09)"/><rect x="22" y="20" width="108" height="76" rx="9" fill="#2B2F3A"/><rect x="28" y="26" width="96" height="62" rx="5" fill="#fff"/><path d="M60 58 l12 12 22-26" fill="none" stroke="#1FA45A" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="96" width="12" height="16" fill="#2B2F3A"/><rect x="52" y="110" width="48" height="8" rx="4" fill="#2B2F3A"/><rect x="132" y="48" width="48" height="84" rx="10" fill="#111"/><rect x="137" y="56" width="38" height="66" rx="4" fill="#FFE4F2"/><path d="M146 80 l20 20 M166 80 l-20 20" stroke="#E5484D" stroke-width="7" stroke-linecap="round"/><circle cx="156" cy="127" r="2.6" fill="#555"/></svg>`,
  report:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="138" rx="62" ry="7" fill="rgba(0,0,0,.09)"/><rect x="52" y="14" width="96" height="116" rx="10" fill="#fff" stroke="#111" stroke-width="5"/><rect x="78" y="6" width="44" height="18" rx="6" fill="#F03D9E" stroke="#111" stroke-width="4"/><g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"><path d="M70 50h8M70 76h8M70 102h8"/></g><path d="M64 52 l5 5 9-11" fill="none" stroke="#1FA45A" stroke-width="0"/><rect x="88" y="45" width="42" height="9" rx="4.5" fill="#C4F046"/><rect x="88" y="71" width="30" height="9" rx="4.5" fill="#C4F046"/><rect x="88" y="97" width="38" height="9" rx="4.5" fill="#C4F046"/><circle cx="160" cy="104" r="22" fill="#1FA45A" stroke="#fff" stroke-width="4"/><path d="M150 104 l8 8 14-16" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="138" rx="58" ry="7" fill="rgba(0,0,0,.09)"/><path d="M100 10 L156 30 V74 C156 106 132 126 100 138 C68 126 44 106 44 74 V30 Z" fill="#C4F046" stroke="#111" stroke-width="6" stroke-linejoin="round"/><path d="M100 24 L142 39 V74 C142 98 124 114 100 124 Z" fill="#AEDD2E" opacity=".55"/><path d="M76 74 l17 17 32-36" fill="none" stroke="#111" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="168" cy="26" r="6" fill="#F03D9E"/><path d="M30 40 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4z" fill="#FFD34D"/></svg>`,
  lifebuoy:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="140" rx="62" ry="7" fill="rgba(0,0,0,.09)"/><circle cx="100" cy="76" r="54" fill="#fff" stroke="#111" stroke-width="6"/><circle cx="100" cy="76" r="25" fill="#E8FABD" stroke="#111" stroke-width="6"/><g fill="#F03D9E" stroke="#111" stroke-width="5"><path d="M100 22 a54 54 0 0 1 26 7 l-12 22 a29 29 0 0 0 -14 -4z"/><path d="M100 130 a54 54 0 0 1 -26 -7 l12 -22 a29 29 0 0 0 14 4z"/><path d="M46 76 a54 54 0 0 1 7 -26 l22 12 a29 29 0 0 0 -4 14z"/><path d="M154 76 a54 54 0 0 1 -7 26 l-22 -12 a29 29 0 0 0 4 -14z"/></g><circle cx="168" cy="28" r="6" fill="#3E7BFA"/></svg>`,
  chat:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="140" rx="74" ry="7" fill="rgba(0,0,0,.09)"/><path d="M30 24 H128 Q140 24 140 36 V76 Q140 88 128 88 H70 L48 108 V88 H30 Q18 88 18 76 V36 Q18 24 30 24Z" fill="#fff" stroke="#111" stroke-width="5" stroke-linejoin="round"/><rect x="34" y="42" width="72" height="8" rx="4" fill="#C4F046"/><rect x="34" y="58" width="50" height="8" rx="4" fill="#C4F046"/><path d="M80 52 H172 Q184 52 184 64 V100 Q184 112 172 112 H162 V132 L140 112 H80 Q68 112 68 100 V64 Q68 52 80 52Z" fill="#F03D9E" stroke="#111" stroke-width="5" stroke-linejoin="round" transform="translate(0 6)"/><path d="M126 100 c-14 -9 -20 -15 -20 -23 a9 9 0 0 1 17 -4 a9 9 0 0 1 17 4 c0 8 -6 14 -14 23z" fill="#fff" transform="translate(5 8) scale(.9) translate(8 4)"/></svg>`,
  wifi:`<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="140" rx="60" ry="7" fill="rgba(0,0,0,.09)"/><g fill="none" stroke="#111" stroke-width="12" stroke-linecap="round"><path d="M30 64 Q100 6 170 64" stroke="#3E7BFA"/><path d="M52 88 Q100 46 148 88" stroke="#F03D9E"/><path d="M76 110 Q100 90 124 110" stroke="#C4F046"/></g><circle cx="100" cy="126" r="9" fill="#111"/></svg>`
};
function ill(name,cls){ return `<span class="ill ${cls||''}" aria-hidden="true">${ILL[name]||''}</span>`; }

/* ---------- symptom cards: tap to open, 4 colour-coded rows ---------- */
function symCards(items){
  const cols=[['#7EA8FF','#E8F0FF'],['#FFB44D','#FFF3DC'],['#B79DF2','#F0EAFF'],['#5DD39E','#E6F8EE'],['#F58AC4','#FFE4F2'],['#FFD34D','#FFF9D6']];
  const row=(cls,lbl,x)=>x?`<div class="sr ${cls}"><b class="l">${lbl}</b><div class="x">${x}</div></div>`:'';
  return `<div class="sym-grid">${items.map((it,i)=>{
    const c=cols[i%cols.length];
    return `<div class="sym" style="--sc:${c[0]};--sbg:${c[1]}">
      <button class="sym-head" type="button" aria-expanded="false"><span class="sym-ic">${it.ic}</span><span class="sym-t">${it.title}<small>${it.sub||T('tapOpen')}</small></span><span class="sym-chev">▾</span></button>
      <div class="sym-body">${row('see','👀 '+T('lblSee'),it.see)}${row('do','🎯 '+T('lblDo'),it.do)}${row('say','💬 '+T('lblSay'),it.say)}${row('rep','📮 '+T('lblReport'),it.rep)}${row('avoid','🚫 '+T('lblAvoid'),it.avoid)}${row('tip','💡 '+T('lblTip'),it.tip)}</div>
    </div>`;}).join('')}</div>`;
}

/* ---------- flip cards ---------- */
function flipCards(items){
  return `<div class="flip-grid n${items.length}">${items.map(it=>`<button class="flip" type="button"><div class="flip-in"><div class="flip-f"><span class="fi">${it.ic}</span><span class="ft">${it.title}</span><span class="fh">${T('tapFlip')}</span></div><div class="flip-b"><div>${it.back}</div></div></div></button>`).join('')}</div>`;
}

/* ---------- tabs ---------- */
function tabsBlock(tabs){
  const id='tb'+Math.random().toString(36).slice(2,8);
  return `<div class="tabs" id="${id}"><div class="tab-bar">${tabs.map((t,i)=>`<button class="tab-btn ${i?'':'on'}" type="button" data-tab="${i}">${t.ic} ${t.title}</button>`).join('')}</div>${tabs.map((t,i)=>`<div class="tab-panel ${i?'':'on'}" data-pane="${i}">${t.html}</div>`).join('')}</div>`;
}

/* ---------- stepper (step-by-step card with a big emoji) ---------- */
function stepper(steps){
  const id='sp'+Math.random().toString(36).slice(2,8);
  return `<div class="stp" id="${id}" data-n="${steps.length}">
    <div class="stp-l"><div class="big">${steps[0].ic}</div><div class="of">${T('stepOf',{i:1,n:steps.length})}</div></div>
    <div class="stp-r">
      ${steps.map((s,i)=>`<div class="stp-pane" data-i="${i}" data-ic="${s.ic}" style="${i?'display:none':''}"><h4>${s.title}</h4><div class="stp-body">${s.html}</div></div>`).join('')}
      <div class="stp-nav"><button class="stp-btn prev" type="button" disabled>←</button><div class="stp-dots">${steps.map((s,i)=>`<button class="stp-dot ${i?'':'on'}" type="button" data-go="${i}">${s.ic}</button>`).join('')}</div><button class="stp-btn next" type="button">${T('next')} →</button></div>
    </div></div>`;
}
function stpGo(root,i){
  const n=+root.dataset.n; i=Math.max(0,Math.min(n-1,i));
  root.querySelectorAll('.stp-pane').forEach(p=>{ p.style.display=(+p.dataset.i===i)?'':'none'; });
  root.querySelectorAll('.stp-dot').forEach((d,k)=>d.classList.toggle('on',k===i));
  const pane=root.querySelector('.stp-pane[data-i="'+i+'"]');
  const big=root.querySelector('.stp-l .big'); big.textContent=pane.dataset.ic; big.style.animation='none'; void big.offsetWidth; big.style.animation='';
  root.querySelector('.stp-l .of').textContent=T('stepOf',{i:i+1,n:n});
  root.querySelector('.stp-btn.prev').disabled=(i===0);
  root.querySelector('.stp-btn.next').disabled=(i===n-1);
  root.dataset.cur=i;
}

/* ---------- chat (WhatsApp-style) practice: pick a reply, see the effect ---------- */
const CHATS={};
function chatMock(c){
  const id='ch'+Math.random().toString(36).slice(2,8); CHATS[id]=c;
  return `<div class="chat-wrap" id="${id}">
    <div class="phone"><div class="ph-top"><span class="ph-av">${c.avatar||'👩'}</span><span class="ph-name">${c.name}<small>${c.sub||''}</small></span></div>
      <div class="ph-body">${c.msgs.map(m=>`<div class="bub in">${m}<small>${c.time||''}</small></div>`).join('')}</div></div>
    <div class="chat-q"><h4>${c.title}</h4><p>${c.text}</p>
      <div class="chat-opts">${c.opts.map((o,i)=>`<button class="chat-opt" type="button" data-i="${i}"><b>${String.fromCharCode(65+i)}</b>${o.t}</button>`).join('')}</div></div>
  </div>`;
}
function chatPick(root,i){
  const c=CHATS[root.id], o=c.opts[i], body=root.querySelector('.ph-body');
  body.querySelectorAll('.bub.out,.bub.fb').forEach(b=>b.remove());
  body.insertAdjacentHTML('beforeend',`<div class="bub out">${o.reply||o.t}<small>✓✓</small></div><div class="bub fb ${o.ok?'good':'bad'}">${o.ok?'✅ ':'❌ '}${o.fb}</div>`);
  root.querySelectorAll('.chat-opt').forEach((b,k)=>{ b.classList.remove('good','bad'); if(k===i) b.classList.add(o.ok?'good':'bad'); else if(b.classList.contains('seen')) b.classList.add('used'); });
  root.querySelectorAll('.chat-opt')[i].classList.add('seen');
  body.scrollTop=body.scrollHeight;
}

/* ---------- response clock (timeline of the first hours / days) ---------- */
function rclock(steps){
  return `<div class="rclock">${steps.map(s=>`<div class="rc"><div class="rc-dot">${s.ic}</div><div class="rc-when">${s.when}</div><div class="rc-t">${s.t}</div><div class="rc-d">${s.d}</div></div>`).join('')}</div>`;
}

/* ---------- confetti ---------- */
function confetti(n){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let c=document.getElementById('confetti'); if(!c){ c=document.createElement('canvas'); c.id='confetti'; document.body.appendChild(c); }
  const ctx=c.getContext('2d'); c.width=innerWidth; c.height=innerHeight;
  const cols=['#C4F046','#F03D9E','#3E7BFA','#FFD34D','#8B5CF6','#1FA45A'];
  const ps=Array.from({length:n||100},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.4,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,s:6+Math.random()*7,r:Math.random()*6,vr:(Math.random()-.5)*.3,c:cols[(Math.random()*cols.length)|0]}));
  let f=0;
  (function step(){
    ctx.clearRect(0,0,c.width,c.height);
    ps.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.r+=p.vr; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c; ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6); ctx.restore(); });
    if(++f<170) requestAnimationFrame(step); else ctx.clearRect(0,0,c.width,c.height);
  })();
}

/* ---------- scroll reveal + reading progress ---------- */
let _io=null;
function observeReveals(root){
  const els=(root||document).querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  if(!_io) _io=new IntersectionObserver(es=>{ es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); _io.unobserve(en.target); } }); },{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  els.forEach(e=>_io.observe(e));
}
window.addEventListener('scroll',function(){
  const f=document.getElementById('rdFill'); if(!f) return;
  const h=document.documentElement.scrollHeight-innerHeight;
  f.style.width=(h>0?Math.min(100,Math.max(0,scrollY/h*100)):0)+'%';
},{passive:true});

/* ---------- one delegated click handler for all the widgets ---------- */
document.addEventListener('click',function(e){
  const t=e.target;
  let el;
  if((el=t.closest('.sym-head'))){ const s=el.parentElement; const o=s.classList.toggle('open'); el.setAttribute('aria-expanded',o); return; }
  if((el=t.closest('.flip'))){ el.classList.toggle('on'); return; }
  if((el=t.closest('.tab-btn'))){
    const root=el.closest('.tabs'), i=el.dataset.tab;
    root.querySelectorAll(':scope > .tab-bar > .tab-btn').forEach(b=>b.classList.toggle('on',b===el));
    root.querySelectorAll(':scope > .tab-panel').forEach(p=>p.classList.toggle('on',p.dataset.pane===i));
    return;
  }
  if((el=t.closest('.stp-dot'))){ stpGo(el.closest('.stp'),+el.dataset.go); return; }
  if((el=t.closest('.stp-btn'))){ const r=el.closest('.stp'); const cur=+(r.dataset.cur||0); if(!el.disabled) stpGo(r,cur+(el.classList.contains('next')?1:-1)); return; }
  if((el=t.closest('.chat-opt'))){ chatPick(el.closest('.chat-wrap'),+el.dataset.i); return; }
  if((el=t.closest('.chip'))){ const s=document.getElementById(el.dataset.jump); if(s) s.scrollIntoView({behavior:'smooth',block:'start'}); return; }
});

/* ---------- hero art (home screen) ----------
   Each mini-training can set window.HERO_ART={ill:'chat', orbs:['💬','🎯','📚','🛟']} in its <lang>.html. */
function initHeroArt(){
  const h=document.getElementById('heroArt'); if(!h) return;
  const a=window.HERO_ART||{ill:'laptopWarn',orbs:['📶','🎙️','💻','🛟']};
  h.innerHTML=a.orbs.map((o,i)=>`<span class="orb o${i+1}">${o}</span>`).join('')+ill(a.ill);
}

/* ---------- init ---------- */
// Opened without ?dev=1: leave developer mode and go back to the real progress.
if(isDevMode() && !DEV_ALLOWED) restoreRealProgress();
if(isDevMode() && window.showDevBadge) window.showDevBadge(true);
// The 🔓 developer button is shown only with ?dev=1.
if(!DEV_ALLOWED) document.querySelectorAll('[onclick="devUnlockAll()"]').forEach(b=>{ b.style.display='none'; });
MODULES = CONTENT.buildModules();
{ // progress carried over from a language switch (?p=...)
  const q=new URLSearchParams(location.search); const raw=q.get('p');
  if(raw){ try{ STORE.set(PROG_KEY, JSON.stringify(mergeProgress(getProgress(), JSON.parse(raw)))); }catch(e){}
    q.delete('p'); try{ history.replaceState(null,'',location.pathname+(q.toString()?'?'+q.toString():'')+location.hash); }catch(e){} }
}
document.documentElement.lang = LANG;
document.documentElement.dir = CONTENT.dir || 'ltr';
{ const btn=document.getElementById('langBtn'); if(btn) btn.innerHTML = `${CONTENT.flag||'🌐'} ${LANG.toUpperCase()} <span style="font-size:10px">▾</span>`; }
document.querySelectorAll('.lang-item').forEach(it=>{ it.classList.toggle('active', it.getAttribute('data-lang')===LANG); });
applyStaticI18n();
lmsReady=true; lmsSend('ready'); lmsSync();
renderHome();
if(location.search.indexOf('start=1')!==-1){ goDashboard(); }
initHeroArt();
observeReveals(document);
