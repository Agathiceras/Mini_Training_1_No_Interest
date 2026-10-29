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
function renderHome(){
  const grid=document.getElementById('mgrid');
  let doneCount=0;
  grid.innerHTML = MODULES.map((m,idx)=>{
    const prevId = idx===0 ? null : MODULES[idx-1].id;
    const locked = prevId!==null && !isPassed(prevId);
    const done = isPassed(m.id);
    if(done) doneCount++;
    const pct = getScore(m.id);
    return `<div class="mc ${locked?'locked':''} ${done?'done':''}" onclick="${locked?'':'openModule('+idx+')'}">
      <div class="mc-stripe" style="background:${m.color||'var(--blue)'}"></div>
      <div class="mc-body">
        <div class="mc-top"><span class="mc-num">${m.numLabel||T('moduleN',{n:idx+1})}</span><span class="mc-em-circle" style="background:${idx%2===0?'var(--hi-bg)':'#E4F5D3'}">${m.emoji}</span></div>
        <div class="mc-title">${m.title}</div>
        <div class="mc-desc">${m.desc}</div>
        <div class="mc-foot">
          ${locked?`<span class="badge bl">${T('locked')}</span>`:done?(m.ix?`<span class="badge bd">${T('passedBadge',{pct:pct})}</span>`:`<span class="badge bd">${T('reviewedBadge')}</span>`):(m.ix?`<span class="badge br">${T('startBadge')}</span>`:`<span class="badge br">${T('reviewBadge')}</span>`)}
        </div>
      </div>
    </div>`;
  }).join('');
  const ntag=document.getElementById('ntag');
  if(ntag){ ntag.style.display='inline'; ntag.textContent = T('modulesPassed',{done:doneCount,total:MODULES.length}); }
}

function openModule(idx){
  const m=MODULES[idx];
  currentModule=m.id;
  if(!m.ix){ setResult(m.id,100,true); }
  const body=document.getElementById('contentBody');
  const eyebrow = m.eyebrow || ((m.numLabel||T('moduleN',{n:idx+1}))+' '+T('of')+' '+MODULES.length);
  let html = `<div class="meyebrow">${eyebrow}</div>
  <h1 class="mh1">${m.emoji} ${m.title}</h1>
  <div class="mobj-box"><div class="mobj-ic">🎯</div><div class="mobj-txt"><strong>${T('objective')}</strong><p>${m.obj}</p></div></div>`;
  m.sections.forEach(sec=>{
    if(sec.t) html += `<div class="sch">${sec.t}</div>`;
    html += sec.html;
  });
  if(m.ix){
    html += `<div class="ix-wrap" id="ixWrap"></div>`;
  }
  html += `<button class="ctabtn" id="moduleCta" onclick="${m.ix?'startInteraction('+idx+')':(m.gateExam?'goToExamIntro()':'goDashboard()')}">${m.ix?T('startCheck'):(m.gateExam?T('finishBtn'):T('doneBack'))}</button>`;
  body.innerHTML = html;
  if(LANG!=='en'){ body.querySelectorAll('iframe[src^="Simulacion_BO_"]').forEach(f=>{ f.src=f.getAttribute('src').split('?')[0]+'?lang='+encodeURIComponent(LANG); }); }
  showScreen('screen-content');
  window.scrollTo(0,0);
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
  <div class="ix-title">${m.ix.title}</div>`;
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
  return `<div class="icon-grid">${items.map(it=>`<div class="icon-grid-item"><div class="igi-ic">${it.ic}</div><div class="igi-txt">${it.html}</div></div>`).join('')}</div>`;
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
