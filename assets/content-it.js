/* Mini_Training_1_No_Interest - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    heroCard1:"<b>Al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.",
    heroCard2:"<b>Pratica inclusa.</b> Ogni modulo si chiude con una breve verifica.",
    pbLabel:'moduli completati',
    tapOpen:'Tocca per aprire',
    tapFlip:'Tocca per girare',
    lblSee:'Cosa vedi',
    lblDo:'Cosa fai',
    lblSay:'Cosa puoi dire',
    lblReport:'Dove segnalarlo',
    lblAvoid:'Da evitare',
    lblTip:'Consiglio',
    stepOf:'Passo {i} di {n}',
    next:'Avanti',
    pageTitle:"Mini-training · Disinteresse — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Riconoscere presto il <span class=\"h-pill\">disinteresse</span>",
    heroIntro:"Hai ricevuto questa formazione perché alcuni tuoi studenti hanno chiesto un rimborso perché non sono interessati alla programmazione o al design. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 4 brevi moduli. Per sbloccare il modulo successivo, devi ottenere almeno il 70% nella verifica di ciascun modulo. Durata totale: circa 25–30 minuti.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — serve il 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è «{label}».',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua al percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Complimenti!',
    doneP1:"🎉 <strong>Complimenti! Hai completato questo mini-training.</strong>",
    doneP2:"Qui hai finito! Torna alla pagina della formazione nell’LMS da cui hai aperto questo mini-training per chiudere l’attività.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, è presente una verifica o un test, completalo e raggiungi il punteggio minimo</strong> — altrimenti l’attività potrebbe risultare incompleta.",
    doneP4:'Buon lavoro! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: tutti i moduli sono ora sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi azzerati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Hai visto tutte e quattro le aree. Ora classifica ciò che osservi.",
    tlVideoTitle:'{label} — esempio da una lezione reale',
    tlVideoMeta:'Guarda come appare questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché esiste questa segnalazione, perché sei proprio tu la persona che può accorgersene — e le regole da seguire quando una richiesta di rimborso è già arrivata.',
 obj:'Capire perché il disinteresse è facile da non notare, perché sei la persona nella posizione migliore per accorgertene e cosa fare (e non fare) esattamente quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'💤 Il disinteresse non fa quasi mai rumore', html:`
   <div class="card"><p>Spesso i tutor descrivono uno studente come coinvolto — <em>«ha partecipato, ha fatto domande»</em> — e poi, qualche settimana dopo, quello stesso studente chiede un rimborso. Il disinteresse c’era fin dall’inizio. Solo che non faceva rumore.</p></div>
   ${co('co-idea','💡',`<p><strong>Perché proprio tu.</strong> Nessun altro in azienda vede questo studente ogni settimana. Una dashboard mostra le presenze a cose fatte. Tu invece vedi la videocamera che si spegne, la mano che non si alza più, lo schermo che non viene più condiviso — in tempo reale, quando c’è ancora qualcosa che puoi fare.</p>`)}
  `},
  {t:'🔎 Cosa c’è di solito dietro', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>Il corso non l’ha scelto lo studente</strong> — l’ha iscritto un genitore, non è stata una scelta del bambino.`},
     {ic:'📅', html:`<strong>Un orario che non si adatta</strong> alla sua attenzione o alla sua energia.`},
     {ic:'📈', html:`<strong>Frustrazione per il livello</strong> — troppo difficile, o troppo facile per sentire di imparare qualcosa.`},
     {ic:'👀', html:`<strong>Il genitore non ha più una visione reale</strong> dei progressi effettivi dello studente.`}
   ])}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto ciò che hai letto sopra serve ad accorgersene presto. Ma forse stai aprendo questa formazione perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato a questa situazione e cosa puoi ancora fare a lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene registrata dal Client Service, non da te</strong> — quella parte non dipende da te. Ma tutto ciò che succede a lezione da qui in avanti dipende ancora da te, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong> — né al bambino, né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di comunicare qualcosa di preciso. Ora il tuo compito è la lezione, non quella conversazione.</p>`)}
  `},
  {t:'🎯 La prossima lezione è il tuo tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo bambino come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero turno.</strong> Non una domanda di circostanza — un momento autentico in cui si sente visto e ci riesce.`},
     {ic:'🏆', html:`<strong>Prevedi un successo rapido e visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non con lodi generiche.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è il bambino a parlarne, cambia argomento con gentilezza e continua la lezione.`}
   ])}
  `},
  {t:'📮 Avvisa subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service sul profilo del bambino nel BO — non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai visto nelle tue lezioni è un’informazione che il Client Service non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento nel BO il giorno stesso riportando esattamente ciò che hai visto',
     'Includi le parole testuali della famiglia, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di importi'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi dire sempre senza rischi:</strong> <em>«Il Client Service vi aiuterà con questo.»</em> Lì finisce la tua parte della conversazione — da quel momento se ne occupa il Client Service.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo o passi a un altro tutor o a un altro formato, continua a dargli un’attenzione in più nelle lezioni successive. Un recupero che regge per una lezione e poi torna in silenzio alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Modulo 1', emoji:'👁️', color:'var(--coral)',
 title:'Le quattro cose da osservare — e cosa fare',
 desc:'Le quattro dimensioni concrete del disinteresse, cosa puoi fare per ciascuna e come classificare ciò che vedi in un colore e in una prossima mossa.',
 obj:'Sapere con precisione cosa significa in pratica «osservare il disinteresse», cosa puoi fare a lezione per migliorare ciascuna delle quattro aree e come classificare ciò che vedi in Verde, Giallo o Rosso.',
 sections:[
  {t:'👁️ Le quattro cose da osservare, a ogni lezione', html:`
   ${patternCards([
     {ic:'🧍', title:'Presenza', desc:'Si presenta davvero?', note:'Assenze non avvisate o scuse ripetute · due o più cancellazioni in tre settimane · ritardi che diventano un’abitudine · entra e se ne va prima della fine della lezione'},
     {ic:'🗣️', title:'Partecipazione', desc:'Partecipa o è solo presente?', note:'Videocamera sempre spenta · risposte secche che non aprono la conversazione · risposte in ritardo o nessuna risposta · ha smesso di fare domande, risponde solo a ciò che gli viene chiesto'},
     {ic:'🛠️', title:'Produzione', desc:'Sta lavorando davvero?', note:'Non condivide lo schermo o lo evita · condivide, ma non mostra progressi · ha un’altra finestra aperta (gioco, video, chat) · due lezioni di fila senza consegnare i compiti'},
     {ic:'🧩', title:'Adattamento e ambiente', desc:'Il contesto intorno a lui funziona?', note:'Problemi tecnici ricorrenti · un orario che si sovrappone alla scuola o ad altri impegni · il corso l’hanno scelto i genitori, non lo studente · frustrazione espressa a parole: «è difficile / è noioso»'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Un solo segnale può voler dire semplicemente una brutta giornata. Due segnali — nella stessa lezione o in due lezioni — iniziano a mostrare una tendenza.</strong> Non aspettare il terzo: quando compare un terzo segnale, spesso è il tuo Team Leader a scoprirlo durante un’indagine su un rimborso, non tu.</p>`)}
  `},
  {t:'🛠️ Cosa puoi fare per ciascuna', html:`
   <div class="card"><p>Notare il segnale è solo metà del lavoro. Scegli una delle quattro aree qui sotto per vedere cosa puoi fare concretamente nelle tue lezioni per invertire la tendenza.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Presenza',
      intro:'Le assenze possono dipendere da tante cose — un cambio di orario, problemi di salute, problemi tecnici, un malinteso sull’orario, le vacanze. Questi sono fattori esterni e si gestiscono in altri modi. Ecco cosa puoi fare quando un’assenza è legata a una <strong>mancanza di coinvolgimento</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Scrivi al genitore il giorno stesso.</strong> Se uno studente salta una lezione, scrivi al genitore quel giorno per capire il motivo — e per incoraggiarlo a tornare.`},
       {ic:'💬', html:`<strong>Chiedi come vivono le lezioni.</strong> Chiedi a genitori e studenti come si trovano: c’è qualcosa da migliorare, gli argomenti piacciono, cosa vorrebbero vedere? Dimostra che sei davvero disposto ad adattare la lezione al gruppo.`},
       {ic:'🤗', html:`<strong>Accoglilo al rientro.</strong> Quando torna, fagli sapere che ti è mancato — e osserva con attenzione il suo lavoro in quella lezione: condivide lo schermo, resta fino alla fine, fa domande, interagisce con gli altri?`},
       {ic:'🗨️', html:`<strong>Sfrutta la chiacchierata iniziale.</strong> Crea una comunità: usa i primi minuti di ogni lezione per conoscere i tuoi studenti e creare un legame con loro.`},
       {ic:'🌟', html:`<strong>Contatta i genitori anche per le buone notizie.</strong> Non scrivere solo per le assenze — segnala qualcosa di bello che lo studente ha fatto a lezione. Motiva lo studente e incoraggia il genitore a sostenerlo.`}
      ]},
     {ic:'🗣️', title:'Partecipazione',
      intro:'La partecipazione cresce quando gli studenti si sentono al sicuro. <strong>Flessibilità e conoscenza dei tuoi studenti</strong> contano più di qualsiasi tecnica — parti da dove ogni studente si sente a suo agio, poi aiutalo a fare il passo successivo.',
      tips:[
       {ic:'📷', html:`<strong>Inizia invitando tutti ad accendere videocamera e microfono.</strong> È sempre la prima raccomandazione, ed è uguale per tutto il gruppo.`},
       {ic:'💬', html:`<strong>Poi offri altri modi per partecipare.</strong> Se uno studente non si sente a suo agio con videocamera o microfono, lascia che partecipi con gli strumenti con cui <em>si sente</em> a suo agio: reazioni, chat pubblica o privata, condivisione dello schermo.`},
       {ic:'🙋', html:`<strong>Fai domande vere.</strong> Chiedi delle loro idee e del loro lavoro — e conoscili, così le tue domande si collegano a ciò che a loro interessa davvero.`},
       {ic:'🔄', html:`<strong>Sii flessibile.</strong> Adatta il modo in cui inviti ogni studente a partecipare, invece di una regola unica che non va bene per nessuno.`},
       {ic:'🎲', html:`<strong>Per i più piccoli, trasformalo in un gioco.</strong> Offri piccole ricompense e usa giochi a tempo — <em>«chi lo trova in 30 secondi?»</em> — così partecipare diventa divertente, non rischioso.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Uno spazio sicuro per fare domande', brief:'In questo video gli studenti si sentono al sicuro nel fare domande, nel contribuire ai problemi dei compagni e nel chiedere aiuto al tutor. Nota con quanta gentilezza e comprensione il tutor parla con loro.'}},
     {ic:'🛠️', title:'Produzione',
      intro:'Mantieni fisso l’<strong>obiettivo di apprendimento</strong> — e sii flessibile su quasi tutto il resto. Il lavoro vero nasce quando gli studenti sanno esattamente cosa fare e lo sentono come qualcosa di loro.',
      tips:[
       {ic:'🎯', html:`<strong>Obiettivo fisso, tema libero.</strong> Lascia che gli studenti esplorino i temi che preferiscono. Non vincolarli alla storia della lezione (storytelling) se non si trovano a loro agio — purché stiano esercitando la competenza.`},
       {ic:'🎬', html:`<strong>Mostra prima tu e dai istruzioni chiare.</strong> Fai vedere come si fa, spiega esattamente cosa farete e verifica che tutti abbiano capito — così la lezione non diventa mai confusa.`},
       {ic:'🖥️', html:`<strong>Chiedi a tutti di condividere lo schermo</strong> — a turno, in diversi momenti della lezione — così il lavoro di ogni studente viene visto, non solo quello dei più veloci.`},
       {ic:'💬', html:`<strong>Dai un feedback costruttivo.</strong> Digli cosa stanno facendo bene e su cosa lavorare nelle prossime lezioni.`},
       {ic:'⚖️', html:`<strong>Regola la difficoltà.</strong> Se finiscono in fretta, offri qualcosa in più; se sono più lenti, abbassa la difficoltà o offri supporto.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Un feedback costruttivo e positivo', brief:'In questo video il tutor dà un feedback costruttivo e positivo sul lavoro di uno studente.'}},
     {ic:'🧩', title:'Adattamento e ambiente',
      intro:'Uno studente che non si sente a suo agio in classe non resterà coinvolto, per quanto buoni siano i contenuti. <strong>Il clima della classe è qualcosa che costruisci tu</strong>, lezione dopo lezione.',
      tips:[
       {ic:'🌱', html:`<strong>Rendi normali gli errori</strong> e dai feedback che aiutano, invece di giudicare.`},
       {ic:'🤝', html:`<strong>Favorisci l’amicizia</strong> tra compagni — compiti condivisi, aiuto reciproco, apprezzamento per il lavoro degli altri.`},
       {ic:'📜', html:`<strong>Fai rispettare le regole della classe</strong> — e gestisci i turni per parlare e per ascoltare.`},
       {ic:'🔧', html:`<strong>Gestisci i problemi tecnici con calma.</strong> Aiuta lo studente che ne ha uno, senza lasciare indietro il resto del gruppo — nessuno dovrebbe annoiarsi a lezione.`},
       {ic:'⚖️', html:`<strong>Sii fermo e gentile.</strong> Anche l’indisciplinatezza mette a disagio gli studenti. Trova l’equilibrio: non puoi essere autoritario, ma non puoi nemmeno perdere il controllo della classe.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Mostrare un interesse sincero', brief:'In questo video il tutor mostra un interesse sincero per gli studenti durante la chiacchierata iniziale — nota che uno studente ha un gesso e gli chiede come sta.'}}
   ])}
  `},
  {t:'🚦 Classifica ciò che vedi e agisci di conseguenza', html:`
   ${classifyCard('co-ok','🟢','Nessun segnale persistente nel tempo. Partecipa alla maggior parte delle lezioni, condivide lo schermo, mostra progressi.','Mantieni viva la relazione — ogni 4 lezioni invia al genitore una prova concreta dei progressi, prima che sia lui a chiederla.')}
   ${classifyCard('co-cute','🟡','Un segnale si presenta in modo costante per tutta una lezione o si ripete in due lezioni — oppure due segnali nella stessa lezione.','Parla con lo studente durante la lezione e cerca con delicatezza di capire il motivo. Potrebbe trattarsi solo di timidezza.')}
   ${classifyCard('co-danger','🔴','Più di due segnali nella stessa lezione oppure due segnali che persistono in più lezioni (o in lezioni consecutive)','Avvisa il tuo Team Leader il giorno stesso, con dettagli concreti. Continua a svolgere le lezioni e resta cordiale con la famiglia — la proposta di una lezione extra, di un cambio di orario o di qualsiasi altra cosa arriva dal tuo TL, mai direttamente da te.')}
   ${classifyCard('co-danger','🚨','Lo studente non mostra alcun interesse per la programmazione o per i corsi Kodland — qualunque altra cosa tu stia osservando.','Trattalo subito come Rosso. Questo motivo è già segnalato come ad alta priorità, quindi prevale su qualsiasi altra valutazione.')}
  `}
 ],
 ix:{
  title:'Quale area aiuta questo consiglio?',
  instr:'Quattro consigli di questo modulo. Leggi ciascuno e decidi in quale delle quattro aree ti aiuta a invertire la tendenza. Serve il 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Quale area aiuta questo consiglio?', card:'💬 Uno studente non si sente a suo agio ad accendere la videocamera, quindi lo inviti a partecipare tramite la chat e le reazioni.', zones:[{label:'🧍 Presenza', fb:'Non proprio — qui si parla di come lo studente partecipa una volta entrato in lezione. Questa è la Partecipazione.'},{label:'🗣️ Partecipazione', fb:'Esatto — prima inviti tutti ad accendere videocamera e microfono, poi offri altri modi per partecipare: reazioni, chat pubblica o privata, condivisione dello schermo.'},{label:'🛠️ Produzione', fb:'Non proprio — qui non si parla del lavoro in sé, ma di come lo studente entra nella conversazione. Questa è la Partecipazione.'},{label:'🧩 Adattamento e ambiente', fb:'Ci sei quasi — lo aiuta a sentirsi a suo agio, ma il consiglio riguarda il modo in cui partecipa. Questa è la Partecipazione.'}], correctZone:1},
   {type:'sort', prompt:'Quale area aiuta questo consiglio?', card:'📜 Uno studente ride dell’errore di un compagno. Con calma ricordi a tutti le regole della classe e tratti l’errore come parte dell’apprendimento.', zones:[{label:'🧍 Presenza', fb:'Non proprio — qui si parla di quanto la classe sia un luogo sicuro. Questo è Adattamento e ambiente.'},{label:'🗣️ Partecipazione', fb:'Ci sei quasi — una classe sicura favorisce la partecipazione, ma questo consiglio riguarda il clima della classe: Adattamento e ambiente.'},{label:'🛠️ Produzione', fb:'Non proprio — qui si parla del clima, non del lavoro. Questo è Adattamento e ambiente.'},{label:'🧩 Adattamento e ambiente', fb:'Esatto — rendere normali gli errori, far rispettare le regole della classe ed essere fermi ma gentili è ciò che fa sentire la classe un luogo sicuro.'}], correctZone:3},
   {type:'sort', prompt:'Quale area aiuta questo consiglio?', card:'📩 Uno studente salta una lezione. Il giorno stesso scrivi al genitore per capire il motivo — e per incoraggiarlo a tornare.', zones:[{label:'🧍 Presenza', fb:'Esatto — un messaggio nello stesso giorno dimostra che te ne sei accorto, permette di capire il motivo e invita lo studente a tornare. E quando torna, fagli sapere che ti è mancato.'},{label:'🗣️ Partecipazione', fb:'Non proprio — lo studente non era proprio a lezione. Questa è la Presenza.'},{label:'🛠️ Produzione', fb:'Non proprio — qui si parla di presentarsi a lezione, non del lavoro. Questa è la Presenza.'},{label:'🧩 Adattamento e ambiente', fb:'Non proprio — questo consiglio riguarda l’assenza in sé. Questa è la Presenza.'}], correctZone:0},
   {type:'sort', prompt:'Quale area aiuta questo consiglio?', card:'⚖️ Uno studente finisce l’attività in metà del tempo, quindi gli proponi una sfida extra — e prima condividi lo schermo per mostrargli il passo successivo.', zones:[{label:'🧍 Presenza', fb:'Non proprio — lo studente è presente e sta lavorando. Qui si parla del lavoro in sé: la Produzione.'},{label:'🗣️ Partecipazione', fb:'Non proprio — qui si parla del livello e della chiarezza del compito. Questa è la Produzione.'},{label:'🛠️ Produzione', fb:'Esatto — regolare la difficoltà, mostrare prima tu e dare istruzioni chiare fanno sì che il lavoro vero continui.'},{label:'🧩 Adattamento e ambiente', fb:'Non proprio — qui si parla del compito, non del clima. Questa è la Produzione.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Modulo 2', emoji:'🧭', color:'var(--coral)',
 title:'Catturare la loro attenzione',
 desc:'Per i casi in cui il disinteresse non è ancora estremo: quali sono le cause più comuni, cosa puoi adattare durante la lezione, come mostrare ai genitori i progressi del primo mese e come supportare gli studenti con bisogni speciali o ansia.',
 obj:'Riconoscere le cause più comuni del disinteresse non estremo — adeguatezza del corso, orari e livello di difficoltà —, sapere cosa puoi adattare autonomamente e cosa devi segnalare al tuo Team Leader, definire le aspettative della famiglia sui progressi del primo mese e adattare ritmo, routine e dimensione di ogni attività per gli studenti con bisogni speciali o ansia.',
 sections:[
  {t:'🔎 Tre casi comuni', html:`
   ${stepIconBlock('🔄','Il corso non era quello che si aspettava, oppure ha capito che il design o la programmazione non fanno per lui', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Un bambino accigliato davanti allo schermo di un portatile" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Strategia</div><p>Parla con il tuo Team Leader della possibilità di una lezione motivazionale. Sii flessibile a lezione — lascia che lo studente adatti il proprio lavoro (per esempio, può saltare la storia che fa da cornice ma imparare comunque l’argomento centrale della lezione). Anche una lezione di verifica del livello può aiutare: lo studente potrebbe trovare un altro corso Kodland più adatto a ciò che desidera, e indirizzarlo verso qualcosa che gli piacerà può evitare il rimborso.</p>`)}
   ${stepIconBlock('⏰','L’orario lo lascia senza energie per la lezione (stanco dopo la scuola, lezione troppo presto)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Uno studente stanco che si addormenta alla scrivania" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Strategia</div><p>Parlane con il genitore e lascia un commento nel BO. Un cambio di orario può essere proprio ciò che preserva la motivazione dello studente, prima che si trasformi in un rimborso.</p>`)}
   ${stepIconBlock('⚖️','Si è reso conto che il corso è troppo facile o troppo difficile per lui', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Un bambino che alza le spalle, incerto" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Strategia</div><p>È una delle situazioni più facili da recuperare, e lo fai adattando la lezione stessa.</p>
   <p><strong>Se è troppo facile:</strong> non lasciare che gli studenti più veloci si annoino mentre gli altri stanno ancora lavorando. Proponi sfide e attività extra (alcune lezioni le prevedono già — puoi anche farli iniziare i compiti in anticipo). Alza la difficoltà e fagli sentire una sfida in qualcosa che gli piace, così hanno la sensazione di imparare qualcosa di nuovo. Uno studente che non si sente stimolato non vede il senso del corso, e se ne va.</p>
   <p><strong>Se è troppo difficile:</strong> dagli supporto. Puoi abbassare leggermente la difficoltà dell’attività, condividere il codice spiegando come funziona così che capisca il processo che c’è dietro, dare suggerimenti in più per semplificare l’attività e mostrare sempre prima in video come si fa, verificando che ti stia seguendo. Fuori dalla lezione, scrivigli per sottolineare qualcosa che ha fatto bene, così resta motivato a continuare a imparare.</p>`)}
  `},
  {t:'🤝 Conoscere i nostri studenti', html:`
   <div class="card"><p>Riportare l’attenzione di uno studente disinteressato dipende anche dal costruire con lui un legame vero — una connessione tra lo studente, i suoi compagni e te — e dal creare uno spazio sicuro in cui abbia voglia di tornare a ogni lezione, non solo per imparare un argomento che gli piace, ma anche per rivedere il suo tutor e i suoi compagni.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Favorisci l’amicizia</strong> con lavori di gruppo e compiti condivisi.`},
     {ic:'🎮', html:`<strong>Chiedi degli interessi in comune</strong> — serie o videogiochi preferiti, piccole curiosità sul posto in cui vivono.`},
     {ic:'🌟', html:`<strong>Riconosci qualcosa di bello o di intelligente</strong> che uno studente ha fatto o detto a lezione.`}
   ])}
  `},
  {t:'📅 Il primo mese: mostrare ai genitori come si manifesta il progresso', html:`
   <div class="card"><p>Quando i genitori non riescono a vedere i progressi, spesso pensano che non ce ne siano. Le prime lezioni di un corso servono a costruire le basi: accedere alla piattaforma, familiarizzare con gli strumenti e compiere i primi piccoli passi. Dall’esterno, tutto questo può sembrare che «non stia succedendo nulla». Se nessuno spiega alla famiglia cosa aspettarsi, «mio figlio non sta imparando niente» può rapidamente trasformarsi in «mio figlio non è interessato».</p></div>
   ${patternCards([
     {ic:'🧭', title:'Impara a orientarsi autonomamente', desc:'Accede alla piattaforma e naviga tra la piattaforma e gli strumenti del corso senza aiuto.', note:'Avere bisogno di meno aiuto ogni settimana è un progresso reale.'},
     {ic:'🪜', title:'Completa piccoli compiti', desc:'Completa le brevi attività di ogni lezione, con sempre meno supporto.', note:'Ciò che conta è l’impegno e l’indipendenza, non la perfezione.'},
     {ic:'🗣️', title:'Sa spiegare ciò che ha fatto', desc:'Riesce a spiegare con parole proprie cosa ha fatto e perché.', note:'Chiedigli di mostrare ai genitori ciò che ha realizzato a casa.'},
     {ic:'🏁', title:'Ha qualcosa da mostrare', desc:'Un primo piccolo risultato: qualcosa che si muove, un primo disegno o un primo programma funzionante.', note:'Consulta il manuale: qual è il primo risultato che il corso permette di realizzare?'}
   ],2)}
   ${rclock([
     {ic:'👋', when:'Dopo le lezioni 1–2', t:'Definire le aspettative', d:'Cosa abbiamo fatto, come saranno le prime settimane e come la famiglia può aiutare a casa.'},
     {ic:'🏁', when:'Intorno alla lezione 4', t:'Primi risultati evidenti', d:'Qualcosa di concreto che il bambino ha realizzato o che ora sa fare: basta uno screenshot o una frase.'},
     {ic:'🔭', when:'Ogni 4 lezioni', t:'Continuare il percorso', d:'Cosa ha imparato, cosa farà successivamente e un risultato da celebrare.'}
   ])}
   ${doavoid(
     ['Descrivere i progressi attraverso piccoli passi concreti che i genitori possano osservare.','Invitare i genitori a chiedere al bambino di mostrare ciò che ha realizzato.','Condividere le prime evidenze prima che i genitori debbano richiederle.'],
     ['Promettere risultati: <em>«Entro il prossimo mese creerà i suoi videogiochi»</em>.','Utilizzare termini tecnici che i genitori non riescono a immaginare o comprendere.','Scrivere ai genitori solo quando qualcosa va storto.']
   )}
   ${co('co-cute','😟',`<p><strong>Se un genitore è contrariato perché l’attività di un modulo o di una lezione non corrisponde alle sue aspettative.</strong> Ascolta prima di tutto. Poi spiega quali argomenti verranno affrontati nei moduli successivi (consulta il programma del corso) e chiarisci che la storia o il tema delle attività possono essere adattati agli interessi del bambino, mentre gli strumenti e le conoscenze rimangono gli stessi. Nei corsi che utilizzano diversi strumenti, proponi la possibilità di utilizzare un programma alternativo per svolgere la stessa attività; la wiki e le note per i tutor indicano le alternative disponibili per molti di essi. Se la famiglia desidera qualcosa che non è incluso nel corso, segnalalo in BO e informa il tuo Team Leader. Non promettere mai modifiche al corso.</p>`)}
  `},
  {t:'🧠 Studenti con bisogni speciali o ansia: ritmo, routine e piccoli passi', html:`
   <div class="card"><p>Alcuni studenti che sembrano aver «perso interesse» in realtà potrebbero sentirsi <strong>sopraffatti</strong>. L’autismo (ASD), l’ADHD e l’ansia possono far sembrare una lezione di gruppo online imprevedibile, troppo veloce o troppo lunga. Quando un bambino si sente così, può smettere di partecipare. La famiglia potrebbe non averti informato, lo studente potrebbe essere ancora in fase di diagnosi oppure potrebbe non essere mai stato sottoposto a una valutazione. <strong>Non hai bisogno di una diagnosi per adattare la lezione</strong> e non devi mai formularne una: non attribuire etichette al bambino, né alla famiglia né a nessun altro membro del gruppo.</p></div>
   ${co('co-idea','🌈',`<p><strong>Ogni caso è diverso.</strong> Due studenti con la stessa diagnosi possono comportarsi in modo completamente differente: uno parla continuamente del proprio argomento preferito, un altro evita il microfono, un altro ancora termina le attività in pochi minuti e si annoia, mentre un altro ha bisogno di una routine precisa per sentirsi al sicuro. Conosci il bambino che hai davanti: questo è molto più importante di qualsiasi etichetta.</p>`)}
   ${dimTabs([
     {ic:'🔁', title:'Routine',
      intro:'La prevedibilità riduce l’ansia e permette di concentrarsi meglio sui contenuti.',
      tips:[
       {ic:'🧱', html:`<strong>Mantieni la stessa struttura per ogni lezione:</strong> apertura, pratica e conclusione, sempre nello stesso ordine.`},
       {ic:'⏭️', html:`<strong>Annuncia i cambiamenti prima che avvengano:</strong> <em>«Tra 5 minuti cambieremo attività e poi...»</em>. Un cambiamento improvviso può bloccare lo studente o portarlo a rifiutarsi di partecipare.`},
       {ic:'📋', html:`<strong>Mostra sullo schermo o nella chat un elenco numerato</strong> con le varie fasi della lezione, in modo che lo studente sappia sempre a che punto si trova.`},
       {ic:'⏲️', html:`<strong>Usa i timer con attenzione.</strong> Possono aiutare gli studenti che amano le sfide; per chi invece si frustra quando sente la pressione del tempo, mostra il timer solo come riferimento visivo, senza fare il conto alla rovescia ad alta voce.`}
      ]},
     {ic:'🐢', title:'Ritmo',
      intro:'Rallenta il modo in cui spieghi, non le ambizioni dello studente.',
      tips:[
       {ic:'⏳', html:`<strong>Dagli il tempo di rispondere.</strong> Aspetta qualche secondo in più rispetto a quanto ti sembrerebbe naturale prima di ripetere la domanda o passare oltre.`},
       {ic:'🗣️', html:`<strong>Una voce calma e un ritmo più lento</strong> trasmettono sicurezza ancora prima di iniziare a spiegare i contenuti.`},
       {ic:'🤸', html:`<strong>Brevi pause per muoversi</strong> tra un’attività e l’altra aiutano a mantenere l’attenzione più che chiedere allo studente di stare fermo: <em>«Vuoi alzarti per 10 secondi e poi continuiamo?»</em>.`},
       {ic:'🚀', html:`<strong>Finisce velocemente e si annoia facilmente?</strong> Utilizza le attività aggiuntive della lezione oppure aggiungi una variante, una sfida visiva o un tocco personale al progetto.`}
      ]},
     {ic:'🪜', title:'Piccoli passi',
      intro:'Trasforma «completare il progetto» in piccoli compiti, ognuno con un obiettivo chiaro e raggiungibile.',
      tips:[
       {ic:'🎯', html:`<strong>Micro-attività:</strong> <em>«Facciamo solo lo sfondo del personaggio: dimmi quando è pronto»</em>. Ogni piccolo risultato raggiunto genera una reale sensazione di soddisfazione.`},
       {ic:'1️⃣', html:`<strong>Dai un’istruzione alla volta</strong> e ripeti l’obiettivo prima di ogni attività.`},
       {ic:'✅', html:`<strong>Utilizza una lista visibile</strong> di ciò che è stato completato e di ciò che resta da fare, in modo che lo studente non debba affidarsi alla memoria. È particolarmente utile quando uno studente dice «Ho finito!» e poi si rende conto di aver perso il filo di ciò che stava facendo.`},
       {ic:'🧗', html:`<strong>Mostra il primo passaggio,</strong> poi lascia che lo studente faccia il resto e riduci gradualmente il supporto durante la lezione.`}
      ]},
     {ic:'💬', title:'Altri modi per partecipare',
      intro:'Non tutti gli studenti rispondono a voce, e va benissimo così.',
      tips:[
       {ic:'😀', html:`<strong>Accetta risposte tramite chat,</strong> emoji, reazioni oppure indicando gli elementi sullo schermo.`},
       {ic:'✌️', html:`<strong>Offri due opzioni visibili invece di porre una domanda aperta:</strong> <em>«L’auto rossa o quella blu?»</em> invece di <em>«Cosa vorresti fare?»</em>.`},
       {ic:'🎉', html:`<strong>Valorizza qualsiasi tentativo intenzionale di comunicazione,</strong> non solo le risposte verbali.`},
       {ic:'⭐', html:`<strong>Utilizza gli argomenti preferiti dello studente come punto di partenza.</strong> Un interesse forte può essere un ottimo modo per coinvolgerlo: costruisci l’attività del giorno attorno a quell’interesse.`}
      ]}
   ],'✅ Questo significa applicare routine, adattare il ritmo, suddividere le attività in piccoli passi e offrire altri modi per partecipare.')}
   ${co('co-cute','🫂',`<p><strong>Quando emergono frustrazione, pianto o blocco.</strong> Prima di tutto, gestisci il tuo comportamento: abbassa la voce e rallenta il ritmo. Riconosci l’emozione senza giudicarla: <em>«Vedo che questa situazione ti sta frustrando»</em>, e proponi qualcosa di concreto invece di dire <em>«calmati»</em>: <em>«Vediamolo insieme»</em>. Torna a un passaggio che lo studente è riuscito a completare e riprendi i contenuti solo quando si è calmato. Non forzarlo mai a mantenere il contatto visivo, ad accendere la videocamera o a continuare a lavorare in quel momento. Concludi riconoscendo il suo impegno, non soltanto il risultato.</p>`)}
   ${co('co-idea','👪',`<p><strong>Con la famiglia, condividi osservazioni, non giudizi.</strong> Invece di dire <em>«Si è comportata male durante la lezione»</em>, prova con: <em>«Oggi ho notato che Maria si è frustrata quando abbiamo cambiato attività senza preavviso. Avete notato qualcosa di simile a casa? Cosa la aiuta?»</em>. Le famiglie sanno cosa funziona meglio. Se la famiglia non risponde, mantieni una struttura coerente durante le lezioni, registra i tuoi tentativi di comunicazione e lascia che il Servizio Clienti gestisca la comunicazione se la situazione diventa difficile.</p>`)}
   ${co('co-danger','📝',`<p><strong>Quando gli adattamenti all’interno del gruppo non sono sufficienti</strong> — lo studente continua a disconnettersi oppure sembra aver bisogno di un ritmo diverso da quello che il gruppo può offrire — lascia un commento in BO indicando ciò che hai osservato e ciò che hai provato a fare, quindi informa il tuo Team Leader. Tu puoi proporre una soluzione, ma la decisione spetta a lui/lei. Non promettere mai lezioni individuali o cambiamenti di modalità autonomamente.</p>`)}
  `}
 ],
 ix:{
  title:'Catturare la loro attenzione — verifica del modulo',
  instr:'Seleziona l’azione migliore oppure associa ogni situazione alla categoria corretta. È necessario ottenere il 70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:'Uno studente finisce ogni attività molto più in fretta del gruppo e poi inizia a distrarre gli altri. Qual è la prima mossa più utile?', opts:['Dire ai genitori che il corso sembra troppo facile e chiedere cosa vorrebbero fare','Aspettare qualche lezione per vedere se il resto del gruppo lo raggiunge','Alzare la difficoltà per lui — una sfida extra o i compiti da iniziare in anticipo'], correct:2, fb:'La noia richiede una sfida vera, adattata a lezione. Uno studente che non si sente stimolato non vede il senso del corso.'},
   {type:'choice', prompt:'Uno studente è sempre stanco e poco concentrato in una lezione fissata subito dopo la scuola. Qual è il primo passo migliore?', opts:['Parlare con il genitore di come sta andando con l’orario e lasciare un commento nel BO','Mantenere l’orario attuale — è stato concordato al momento dell’iscrizione','Chiedere allo studente di riposarsi di più prima della lezione'], correct:0, fb:'Un orario che sfinisce lo studente spesso si può sistemare — parla con il genitore e lascia il commento nel BO, così si può valutare un cambio prima che la motivazione si perda.'},
   {type:'choice', prompt:'Uno studente dice che gli argomenti non gli interessano e che avrebbe voluto scegliere un altro corso Kodland. Cosa puoi fare tu?', opts:['Dirgli che organizzerai il passaggio al corso che preferisce','Restare flessibile sul modo in cui affronta le attività e proporre al tuo Team Leader una lezione motivazionale o di verifica del livello','Spiegare che dei cambi di corso si occupa un altro reparto e continuare la lezione'], correct:1, fb:'Puoi adattare il suo modo di lavorare a lezione e proporre al tuo Team Leader l’opzione della lezione di verifica del livello — non puoi promettere tu un cambio di corso.'},
   {type:'choice', prompt:'Uno studente fa fatica con il livello e si sta frustrando. Quale di queste cose aiuta di più?', opts:['Andare avanti in fretta così non si sente preso di mira','Mostrare prima in video come si fa, condividere il codice spiegando come funziona e verificare che segua','Lasciargli copiare la soluzione di un compagno così riesce a stare al passo'], correct:1, fb:'Mostra prima tu, spiega il processo dietro al codice e verifica che abbia capito — poi, fuori dalla lezione, scrivigli per sottolineare qualcosa che ha fatto bene.'},
   {type:'choice', prompt:'Quale di queste cose costruisce meglio il tipo di legame che riporta indietro uno studente disinteressato?', opts:['Lasciare fuori dalla lezione le chiacchiere, così resta più tempo per i contenuti','Chiamare soprattutto gli studenti che rispondono sempre, per mantenere il ritmo','Compiti di gruppo, domande sui loro giochi o serie preferite e notare qualcosa di intelligente che hanno detto'], correct:2, fb:'È il legame con i compagni e con te che fa venire voglia a uno studente di tornare a ogni lezione — non solo l’argomento.'},
   {type:'choice', prompt:'È la quarta lezione di un nuovo corso e i genitori non hanno ancora ricevuto tue notizie. Cosa invii?', opts:['Un breve messaggio con qualcosa di concreto che il bambino ha realizzato, ciò che sta imparando attualmente e cosa farà successivamente.','«Sta andando tutto benissimo, non preoccupatevi!»','Niente: se ci fosse un problema, i genitori ti scriverebbero.'], correct:0, fb:'Mostrare prove concrete dei piccoli progressi aiuta la famiglia a capire come si manifesta il progresso durante il primo mese, prima che «non sta imparando niente» si trasformi in «non è interessato».'},
   {type:'sort', prompt:'A quale tipo di adattamento corrisponde questa situazione?', card:'Prima di cambiare attività dici: «Tra 5 minuti smetteremo di disegnare e inizieremo ad animare». Uno studente che prima si bloccava a ogni cambiamento ora riesce a seguire la lezione.', zones:[{label:'🔁 Routine', fb:'Esatto! Annunciare i cambiamenti prima che avvengano rende la lezione prevedibile e la prevedibilità riduce l’ansia.'},{label:'🐢 Ritmo', fb:'Non proprio. Il ritmo non è stato rallentato. Il cambiamento è stato annunciato in anticipo: questo riguarda la Routine.'},{label:'🪜 Piccoli passi', fb:'Non proprio. L’attività non è stata suddivisa in compiti più piccoli. Annunciare il cambiamento in anticipo riguarda la Routine.'}], correctZone:0},
   {type:'choice', prompt:'Uno studente con ADHD continua a dire «Ho finito!» e poi ammette di aver perso il filo di ciò che stava facendo. Cosa può aiutarlo maggiormente?', opts:['Chiedergli di stare fermo e concentrarsi di più.','Suddividere il lavoro in micro-attività con obiettivi visibili e utilizzare una checklist che mostri cosa è stato completato e cosa resta da fare.','Assegnargli l’intero progetto in una volta sola, così potrà lavorare al proprio ritmo.'], correct:1, fb:'Le attività brevi con obiettivi chiari, insieme a una checklist visibile, riducono il carico sulla memoria e ogni piccolo risultato raggiunto rappresenta una vera conquista.'},
   {type:'choice', prompt:'Uno studente inizia a piangere perché la sua attività non funziona. Cosa fai per prima cosa?', opts:['«Calmati, non è un problema così grande. Continuiamo».','Abbassi la voce, riconosci l’emozione — «Vedo che questa situazione ti sta frustrando» — e proponi qualcosa di concreto: «Vediamolo insieme».','Continui con il gruppo e torni da lui alla fine della lezione.'], correct:1, fb:'Dire «calmati» non offre al bambino un’azione concreta da compiere. Riconosci l’emozione, proponi un’azione concreta e torna a un passaggio che è riuscito a completare. Riprendi i contenuti solo quando si è calmato.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Qui niente quiz — solo l’essenziale di questo mini-training, prima di concluderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non ha punteggio — leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento nel BO il giorno stesso in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La mia lezione successiva con questo studente è stata un vero tentativo di recupero — un vero turno, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato un’approvazione né parlato di importi — ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},  {t:'🌱 A ogni lezione', html:`
   ${numlist([
     'Quando uno studente salta una lezione, scrivo al genitore il giorno stesso per capire il motivo e invitarlo a tornare — e quando torna, gli faccio sapere che mi è mancato',
     'Contatto i genitori anche per le buone notizie, non solo per assenze o problemi',
     'Uso la chiacchierata iniziale per conoscere i miei studenti e creare una comunità nel gruppo',
     'Prima invito tutti ad accendere videocamera e microfono — poi offro altri modi per partecipare (reazioni, chat pubblica o privata, condivisione dello schermo) agli studenti che non si sentono a loro agio',
     'Mantengo fisso l’obiettivo di apprendimento, ma lascio che gli studenti esplorino gli argomenti che preferiscono — non solo la storia della lezione',
     'Mostro io per primo l’esercizio, do istruzioni chiare e verifico che tutti abbiano capito prima di iniziare',
     'Chiedo a tutti di condividere lo schermo, a turno, e do un feedback costruttivo: cosa sta andando bene e su cosa lavorare dopo',
     'Regolo la difficoltà — una sfida extra per chi finisce prima, supporto o un livello più basso per chi fa fatica',
     'Faccio capire che sbagliare è normale, faccio rispettare le regole della classe e i turni per parlare e ascoltare, e resto fermo ma gentile',
     'Se uno studente arriva stanco a causa dell’orario, ne parlo con il genitore e lascio un commento nel BO',
     'Se il corso non è quello che si aspettava, resto flessibile a lezione e propongo al mio Team Leader una lezione motivazionale o di verifica del livello',
     'Durante il primo mese mostro ai genitori come si manifesta il progresso: invio un messaggio dopo le prime lezioni e condivido prove concrete intorno alla lezione 4.',
     'Mantengo la stessa struttura per ogni lezione, annuncio i cambiamenti prima che avvengano e mostro i passaggi della lezione sullo schermo o nella chat.',
     'Con gli studenti con bisogni speciali o ansia, rallento il ritmo delle mie spiegazioni, suddivido le attività in piccoli passaggi con obiettivi visibili e accetto risposte tramite chat o reazioni.',
     'Non attribuisco mai etichette né formulo diagnosi: condivido osservazioni concrete con la famiglia e chiedo quali strategie funzionano a casa.',
     'Quando gli adattamenti all’interno del gruppo non sono sufficienti, lascio un commento in BO e informo il mio Team Leader. Non prometto mai lezioni individuali o cambiamenti di modalità.'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Il mini-training è tutto qui.</strong> Quando sei pronto, continua — poi completa il DST nell’LMS per chiudere l’attività.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
