/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Disengagement — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Catching <span class=\"h-pill\">Disengagement</span> Early",
    heroIntro:"You've received this training because you have students who have requested a refund because they aren't interested in programming or design. Here, we'll show you what you can do as a tutor and how to handle these situations.",
    heroWork:"Work through 4 short modules. Each module check needs 70%+ to unlock the next. About 15–20 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why this flag exists, why you\'re the one who can catch it — and the rules that apply once a refund request has already come in.',
 obj:'Understand why disengagement is easy to miss, why you are the person best placed to catch it, and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'💤 Disengagement is almost never loud', html:`
   <div class="card"><p>Tutors often describe a student as engaged — <em>"he participated, he asked questions"</em> — and that same student ends up requesting a refund weeks later. The disengagement was there the whole time. It just wasn't loud.</p></div>
   ${co('co-idea','💡',`<p><strong>Why you, specifically.</strong> Nobody else in the company sees this student every week. A dashboard shows attendance after the fact. You see the camera going off, the hand that stopped going up, the screen that stopped being shared — in real time, while there's still something you can do about it.</p>`)}
  `},
  {t:'🔎 What\'s usually behind it', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>The course wasn\'t the student\'s choice</strong> — a parent enrolled them, not the child.`},
     {ic:'📅', html:`<strong>A schedule that doesn\'t fit</strong> their attention or energy.`},
     {ic:'📈', html:`<strong>Frustration with the level</strong> — too hard, or too easy to feel like learning.`},
     {ic:'👀', html:`<strong>The parent has lost real visibility</strong> into the student\'s actual progress.`}
   ])}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Module 1', emoji:'👁️', color:'var(--coral)',
 title:'The Four Things to Watch — and What to Do About It',
 desc:'The four concrete dimensions of disengagement, what you can do about each one, and how to classify what you see into a colour and a next move.',
 obj:'Know precisely what "watching for disengagement" means in practice, what you can do in your lessons to improve each of the four areas, and how to classify what you see into Green, Yellow or Red.',
 sections:[
  {t:'👁️ The four things to watch, every lesson', html:`
   ${patternCards([
     {ic:'🧍', title:'Presence', desc:'Are they actually showing up?', note:'Unannounced absences or repeated excuses · two or more cancellations in three weeks · lateness becoming a habit · logs in and leaves before the class ends'},
     {ic:'🗣️', title:'Participation', desc:'Are they engaging, or just present?', note:'Camera consistently off · closed answers that don\'t invite conversation · delayed responses or none at all · stopped asking questions, only answers what\'s asked'},
     {ic:'🛠️', title:'Production', desc:'Is real work actually happening?', note:'Doesn\'t share their screen, or avoids it · shares, but shows no progress · another window open (game, video, chat) · two lessons in a row with homework not submitted'},
     {ic:'🧩', title:'Fit and environment', desc:'Does the setup around them work?', note:'Recurring technical failures · a schedule that clashes with school or other commitments · the course was chosen by the parents, not the student · verbalised frustration: "this is hard / boring"'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>One signal can just mean a bad day. Two signals — in the same lesson, or across two lessons — start showing a trend.</strong> Don't wait for a third: by the time a third signal shows up, it's often your Team Leader finding it during a refund investigation, not you.</p>`)}
  `},
  {t:'🛠️ What you can do about each one', html:`
   <div class="card"><p>Spotting the signal is only half the job. Pick each of the four areas below to see what you can actually do in your lessons to turn it around.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Presence',
      intro:'Absences can come from many things — a schedule change, health issues, technical problems, a mix-up about the time, holidays. Those are external factors, and they\'re handled in other ways. Here\'s what you can do when an absence is related to a <strong>lack of engagement</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Write to the parent the same day.</strong> If a student misses a lesson, message the parent that day to find out why — and to encourage them to come back.`},
       {ic:'💬', html:`<strong>Ask how the class feels.</strong> Ask parents and students how they feel about the lessons: is there anything to improve, do they enjoy the topics, what would they like to see? It shows you're genuinely willing to adapt the class to the group.`},
       {ic:'🤗', html:`<strong>Welcome them back.</strong> When they return, let them know they were missed — and pay close attention to their work that lesson: are they sharing their screen, staying for the whole class, asking questions, connecting with others?`},
       {ic:'🗨️', html:`<strong>Use the opening small talk.</strong> Build a community: use the first minutes of every lesson to get to know your students and connect with them.`},
       {ic:'🌟', html:`<strong>Contact parents for good news too.</strong> Don't only reach out about absences — point out something great the student did in class. It motivates the student, and encourages the parent to support them.`}
      ]},
     {ic:'🗣️', title:'Participation',
      intro:'Participation grows when students feel safe. <strong>Flexibility and knowing your students</strong> matter more than any single technique — meet each student where they\'re comfortable, then help them take the next step.',
      tips:[
       {ic:'📷', html:`<strong>Start by inviting cameras and mics on — for everyone.</strong> That's always the first recommendation, and it's the same for the whole group.`},
       {ic:'💬', html:`<strong>Then offer other ways in.</strong> If a student isn't comfortable with the camera or microphone, let them take part with the tools they <em>are</em> comfortable with: reactions, the public or private chat, sharing their screen.`},
       {ic:'🙋', html:`<strong>Ask real questions.</strong> Ask about their ideas and their work — and get to know them, so your questions connect with what they actually care about.`},
       {ic:'🔄', html:`<strong>Be flexible.</strong> Adjust how you invite participation to each student, instead of one rule that fits nobody.`},
       {ic:'🎲', html:`<strong>For the youngest, make it a game.</strong> Offer small rewards and use time-based games — <em>"who can find it in 30 seconds?"</em> — so taking part feels fun, not risky.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'A safe space to ask', brief:'In this video, students feel safe asking questions, contributing to their classmates\' problems and asking their tutor for help. Notice how kindly and understandingly the tutor speaks to them.'}},
     {ic:'🛠️', title:'Production',
      intro:'Keep the <strong>learning objective</strong> fixed — and be flexible about almost everything else. Real work happens when students know exactly what to do and feel it\'s theirs.',
      tips:[
       {ic:'🎯', html:`<strong>Keep the objective, free the topic.</strong> Let students explore the themes they enjoy most. Don't lock them into the storytelling if they aren't comfortable with it — as long as they're practising the skill.`},
       {ic:'🎬', html:`<strong>Model first, and give clear instructions.</strong> Show how it's done, explain exactly what you're going to do, and check that everyone understood — so the lesson never becomes confusing.`},
       {ic:'🖥️', html:`<strong>Ask everyone to share their screen</strong> — in turns, at different stages of the lesson — so every student's work is seen, not only the fastest ones.`},
       {ic:'💬', html:`<strong>Give constructive feedback.</strong> Tell them what they're doing well, and what to work on in the next lessons.`},
       {ic:'⚖️', html:`<strong>Adjust the difficulty.</strong> If they finish fast, offer something extra; if they're slower, lower the difficulty or offer support.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Constructive, positive feedback', brief:'In this video, the tutor gives constructive and positive feedback on a student\'s work.'}},
     {ic:'🧩', title:'Fit and environment',
      intro:'A student who doesn\'t feel comfortable in the room won\'t stay engaged, however good the content is. <strong>The atmosphere of the class is something you build</strong>, lesson by lesson.',
      tips:[
       {ic:'🌱', html:`<strong>Normalise mistakes</strong>, and give feedback that helps rather than judges.`},
       {ic:'🤝', html:`<strong>Promote friendship</strong> among classmates — shared tasks, helping each other, celebrating each other's work.`},
       {ic:'📜', html:`<strong>Respect the class rules</strong> — and keep control of the turns to speak and to listen.`},
       {ic:'🔧', html:`<strong>Handle technical problems calmly.</strong> Offer help to the student who has one, without leaving the rest of the group behind — nobody should be bored in class.`},
       {ic:'⚖️', html:`<strong>Be firm and kind.</strong> Indiscipline also makes students feel uncomfortable. Find the balance: you can't be authoritarian, but you can't lose control of the class either.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Showing genuine interest', brief:'In this video, the tutor shows genuine interest in the students through small talk — noticing that one student has a cast, and asking how they\'re doing.'}}
   ])}
  `},
  {t:'🚦 Classify what you see, and act accordingly', html:`
   ${classifyCard('co-ok','🟢','No sustained signals over time. Attends most lessons, shares their screen, shows progress.','Keep the relationship going — send one piece of progress evidence to the guardian every 4 lessons, before they ask for it.')}
   ${classifyCard('co-cute','🟡','One signal shows up consistently through a lesson, or repeats across two lessons — or two signals in the same lesson.','Talk to the student in the lesson and gently probe the reason. It may just be shyness.')}
   ${classifyCard('co-danger','🔴','More than two signals in the same lesson, or two signals sustained across more than one lesson.','Notify your Team Leader the same day, with specifics. Keep teaching well and stay warm with the family — the offer of an extra lesson, a schedule change or anything else comes from your TL, never from you directly.')}
   ${classifyCard('co-danger','🚨','The student shows no interest in programming or Kodland courses — whatever else you\'re seeing.','Treat it as Red straight away. This reason is already flagged as high-priority, so it overrides any other reading.')}
  `}
 ],
 ix:{
  title:'Which area does this tip help?',
  instr:'Four tips from this module. Read each one and decide which of the four areas it helps you turn around. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'Which area does this tip help?', card:'💬 A student isn\'t comfortable turning on the camera, so you invite them to take part through the chat and reactions.', zones:[{label:'🧍 Presence', fb:'Not quite — this is about how the student takes part once they\'re in the lesson. That\'s Participation.'},{label:'🗣️ Participation', fb:'Correct — invite cameras and mics for everyone first, then offer other ways in: reactions, the public or private chat, sharing their screen.'},{label:'🛠️ Production', fb:'Not quite — this isn\'t about the work itself, but about how the student joins the conversation. That\'s Participation.'},{label:'🧩 Fit and environment', fb:'Close — it does help them feel comfortable, but the tip is about how they take part. That\'s Participation.'}], correctZone:1},
   {type:'sort', prompt:'Which area does this tip help?', card:'📜 A student laughs at a classmate\'s mistake. You calmly remind everyone of the class rules and treat the mistake as part of learning.', zones:[{label:'🧍 Presence', fb:'Not quite — this is about how safe the room feels. That\'s Fit and environment.'},{label:'🗣️ Participation', fb:'Close — a safe room helps participation, but this tip is about the atmosphere of the class: Fit and environment.'},{label:'🛠️ Production', fb:'Not quite — this is about the atmosphere, not the work. That\'s Fit and environment.'},{label:'🧩 Fit and environment', fb:'Correct — normalising mistakes, respecting the class rules and being firm but kind are what make the room feel safe.'}], correctZone:3},
   {type:'sort', prompt:'Which area does this tip help?', card:'📩 A student misses a lesson. The same day, you write to the parent to find out why — and to encourage them to come back.', zones:[{label:'🧍 Presence', fb:'Correct — a same-day message shows you noticed, finds the reason, and invites the student back. And when they return, let them know they were missed.'},{label:'🗣️ Participation', fb:'Not quite — the student wasn\'t in the lesson at all. That\'s Presence.'},{label:'🛠️ Production', fb:'Not quite — this is about showing up, not the work. That\'s Presence.'},{label:'🧩 Fit and environment', fb:'Not quite — this tip is about the absence itself. That\'s Presence.'}], correctZone:0},
   {type:'sort', prompt:'Which area does this tip help?', card:'⚖️ A student finishes the activity in half the time, so you offer an extra challenge — and you share your screen to model the next step first.', zones:[{label:'🧍 Presence', fb:'Not quite — the student is there and working. This is about the work itself: Production.'},{label:'🗣️ Participation', fb:'Not quite — this is about the level and clarity of the task. That\'s Production.'},{label:'🛠️ Production', fb:'Correct — adjusting the difficulty, modelling first and giving clear instructions keep real work happening.'},{label:'🧩 Fit and environment', fb:'Not quite — this is about the task, not the atmosphere. That\'s Production.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Module 2', emoji:'🧭', color:'var(--coral)',
 title:'Attracting Their Attention',
 desc:'For disengagement that isn\'t extreme yet: what usually causes it, and what you can actually adapt in the lesson.',
 obj:'Recognise the most common non-extreme causes of disengagement — course fit, schedule, and difficulty level — and know what to adapt yourself versus what to route through your Team Leader.',
 sections:[
  {t:'🔎 Three common cases', html:`
   ${stepIconBlock('🔄','The course wasn\'t what they expected, or they realized design/programming isn\'t for them', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="A child frowning at a laptop screen" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Strategy</div><p>Talk to your Team Leader about the possibility of a motivational lesson. Be flexible in class — let the student adapt their work (for example, skip the storytelling wrapper but still learn the lesson's core topic). A leveling lesson can also help: the student might find a different Kodland course that actually fits what they want, which can save the refund by redirecting them to something they'll enjoy.</p>`)}
   ${stepIconBlock('⏰','The schedule leaves them without energy for the lesson (tired after school, class too early)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="A tired student falling asleep at their desk" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Strategy</div><p>Talk with the parent and leave a comment in BO about this. A schedule change may be exactly what preserves the student's motivation before it turns into a refund.</p>`)}
   ${stepIconBlock('⚖️','They\'ve realized the course is too easy or too hard for them', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="A child shrugging, unsure" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Strategy</div><p>This is one of the easiest situations to save, and you do it by adapting the lesson itself.</p>
   <p><strong>If it's too easy:</strong> don't let your faster students get bored while others are still working. Offer challenges and extra activities (some lessons already include these — you can also let them get a head start on homework). Raise the difficulty and let them feel challenged in something they enjoy, so they feel they're learning something new. A student who doesn't feel challenged sees no point in the course, and leaves.</p>
   <p><strong>If it's too hard:</strong> give them support. You can lower the activity's difficulty slightly, share code while explaining how it works so they understand the process behind it, give extra tips to make the activity simpler, and always demonstrate on camera how it's done first, checking that they're following along. Outside the lesson, follow up and highlight something they did well, to keep them motivated to keep learning.</p>`)}
  `},
  {t:'🤝 Getting to Know Our Students', html:`
   <div class="card"><p>Part of bringing a disengaged student's attention back comes from building a real bond with them — a connection between the student, their classmates, and you — and creating a safe space they want to come back to every class, not only to learn a topic they like, but to see their tutor and classmates again.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Encourage friendship</strong> through group work and shared tasks.`},
     {ic:'🎮', html:`<strong>Ask about shared interests</strong> — favourite shows or video games, small curiosities about where they live.`},
     {ic:'🌟', html:`<strong>Acknowledge something good or clever</strong> a student did or said in class.`}
   ])}
  `}
 ],
 ix:{
  title:'Attracting their attention — module check',
  instr:'Pick the best move for each situation. 70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:'A student finishes every activity far faster than the group, then starts distracting the others. What\'s the most useful first move?', opts:['Tell the parents the course seems too easy and ask what they\'d like to do','Wait a few lessons to see whether the rest of the group catches up','Raise the difficulty for them — an extra challenge or a head start on homework'], correct:2, fb:'Boredom needs a real challenge, adapted in the lesson. A student who doesn\'t feel challenged sees no point in the course.'},
   {type:'choice', prompt:'A student is consistently tired and unfocused in a class scheduled right after school. What\'s the best first step?', opts:['Talk with the parent about how the schedule is working and leave a comment in BO','Keep the current schedule — it was agreed at sign-up','Ask the student to rest more before class'], correct:0, fb:'A schedule that drains the student is often fixable — talk to the parent and leave the comment in BO, so a change can be considered before motivation is lost.'},
   {type:'choice', prompt:'A student says the topics don\'t interest them and they wish they\'d picked a different Kodland course. What can you do yourself?', opts:['Tell them you\'ll arrange a switch to the course they prefer','Stay flexible with how they approach tasks, and raise a motivational or leveling lesson with your Team Leader','Explain that course changes are handled by another department and continue the lesson'], correct:1, fb:'You can adapt how they work in the lesson and raise the leveling-lesson option with your Team Leader — you can\'t promise a course switch yourself.'},
   {type:'choice', prompt:'A student is struggling with the level and getting frustrated. Which of these helps most?', opts:['Moving on quickly so they don\'t feel singled out','Showing on camera how it\'s done first, sharing code while explaining how it works, and checking they follow','Letting them copy a classmate\'s solution so they can keep up'], correct:1, fb:'Demonstrate first, explain the process behind the code, and check understanding — then follow up outside the lesson with something they did well.'},
   {type:'choice', prompt:'Which of these best builds the kind of bond that brings a disengaged student back?', opts:['Keeping small talk out of the lesson so there\'s more time for content','Mostly calling on the students who always answer, to keep the pace up','Group tasks, questions about their favourite games or shows, and noticing something clever they said'], correct:2, fb:'A connection with classmates and with you is what makes a student want to come back every lesson — not only the topic.'}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},  {t:'🌱 In every lesson', html:`
   ${numlist([
     'When a student misses a lesson, I message the parent the same day to find out why and invite them back — and when they return, I let them know they were missed',
     'I contact parents for good news too, not only about absences or problems',
     'I use the opening small talk to get to know my students and build a community in the group',
     'I invite cameras and mics on for everyone first — then offer other ways in (reactions, public or private chat, screen sharing) to students who aren\'t comfortable',
     'I keep the learning objective fixed, but let students explore the topics they enjoy — not only the storytelling',
     'I model first, give clear instructions and check that everyone understood before they start',
     'I ask everyone to share their screen, in turns, and give constructive feedback: what\'s going well and what to work on next',
     'I adjust the difficulty — an extra challenge for fast finishers, support or a lower level for those who struggle',
     'I normalise mistakes, keep the class rules and the turns to speak and listen, and stay firm but kind',
     'If a student arrives tired because of the schedule, I talk with the parent and leave a comment in BO',
     'If the course isn\'t what they expected, I stay flexible in class and raise a motivational or leveling lesson with my Team Leader'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
