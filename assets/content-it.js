/* Mini_Training_1_No_Interest - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Disinteresse — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Riconoscere presto il <span class=\"h-pill\">disinteresse</span>",
    heroIntro:"Hai ricevuto questa formazione perché alcuni tuoi studenti hanno chiesto un rimborso perché non sono interessati alla programmazione o al design. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 4 brevi moduli. Per sbloccare il modulo successivo serve almeno il 70% nella verifica di ogni modulo. In tutto ci vogliono circa 15–20 minuti.",
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
     'Lascia un commento nel BO il giorno stesso con esattamente ciò che hai visto — date e fatti concreti, non impressioni',
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
       {ic:'🔄', html:`<strong>Sii flessibile.</strong> Adatta il modo in cui inviti a partecipare a ogni studente, invece di una regola unica che non va bene per nessuno.`},
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
       {ic:'⚖️', html:`<strong>Sii fermo e gentile.</strong> Anche l’indisciplina mette a disagio gli studenti. Trova l’equilibrio: non puoi essere autoritario, ma non puoi nemmeno perdere il controllo della classe.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Mostrare un interesse sincero', brief:'In questo video il tutor mostra un interesse sincero per gli studenti durante la chiacchierata iniziale — nota che uno studente ha un gesso e gli chiede come sta.'}}
   ])}
  `},
  {t:'🚦 Classifica ciò che vedi e agisci di conseguenza', html:`
   ${classifyCard('co-ok','🟢','Nessun segnale persistente nel tempo. Partecipa alla maggior parte delle lezioni, condivide lo schermo, mostra progressi.','Mantieni viva la relazione — ogni 4 lezioni invia al genitore una prova concreta dei progressi, prima che sia lui a chiederla.')}
   ${classifyCard('co-cute','🟡','Un segnale si presenta in modo costante per tutta una lezione o si ripete in due lezioni — oppure due segnali nella stessa lezione.','Parla con lo studente durante la lezione e cerca con delicatezza di capire il motivo. Potrebbe trattarsi solo di timidezza.')}
   ${classifyCard('co-danger','🔴','Più di due segnali nella stessa lezione, oppure due segnali persistenti in più di una lezione.','Avvisa il tuo Team Leader il giorno stesso, con dettagli concreti. Continua a fare bene le lezioni e resta cordiale con la famiglia — la proposta di una lezione extra, di un cambio di orario o di qualsiasi altra cosa arriva dal tuo TL, mai direttamente da te.')}
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
 desc:'Per il disinteresse che non è ancora grave: cosa lo causa di solito e cosa puoi davvero adattare a lezione.',
 obj:'Riconoscere le cause più comuni di disinteresse non ancora grave — corso poco adatto, orario e livello di difficoltà — e sapere cosa puoi adattare tu e cosa invece passa dal tuo Team Leader.',
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
  `}
 ],
 ix:{
  title:'Catturare la loro attenzione — verifica del modulo',
  instr:'Scegli la mossa migliore per ogni situazione. Serve il 70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:'Uno studente finisce ogni attività molto più in fretta del gruppo e poi inizia a distrarre gli altri. Qual è la prima mossa più utile?', opts:['Dire ai genitori che il corso sembra troppo facile e chiedere cosa vorrebbero fare','Aspettare qualche lezione per vedere se il resto del gruppo lo raggiunge','Alzare la difficoltà per lui — una sfida extra o i compiti da iniziare in anticipo'], correct:2, fb:'La noia richiede una sfida vera, adattata a lezione. Uno studente che non si sente stimolato non vede il senso del corso.'},
   {type:'choice', prompt:'Uno studente è sempre stanco e poco concentrato in una lezione fissata subito dopo la scuola. Qual è il primo passo migliore?', opts:['Parlare con il genitore di come sta andando con l’orario e lasciare un commento nel BO','Mantenere l’orario attuale — è stato concordato al momento dell’iscrizione','Chiedere allo studente di riposarsi di più prima della lezione'], correct:0, fb:'Un orario che sfinisce lo studente spesso si può sistemare — parla con il genitore e lascia il commento nel BO, così si può valutare un cambio prima che la motivazione si perda.'},
   {type:'choice', prompt:'Uno studente dice che gli argomenti non gli interessano e che avrebbe voluto scegliere un altro corso Kodland. Cosa puoi fare tu?', opts:['Dirgli che organizzerai il passaggio al corso che preferisce','Restare flessibile sul modo in cui affronta le attività e proporre al tuo Team Leader una lezione motivazionale o di verifica del livello','Spiegare che dei cambi di corso si occupa un altro reparto e continuare la lezione'], correct:1, fb:'Puoi adattare il suo modo di lavorare a lezione e proporre al tuo Team Leader l’opzione della lezione di verifica del livello — non puoi promettere tu un cambio di corso.'},
   {type:'choice', prompt:'Uno studente fa fatica con il livello e si sta frustrando. Quale di queste cose aiuta di più?', opts:['Andare avanti in fretta così non si sente preso di mira','Mostrare prima in video come si fa, condividere il codice spiegando come funziona e verificare che segua','Lasciargli copiare la soluzione di un compagno così riesce a stare al passo'], correct:1, fb:'Mostra prima tu, spiega il processo dietro al codice e verifica che abbia capito — poi, fuori dalla lezione, scrivigli per sottolineare qualcosa che ha fatto bene.'},
   {type:'choice', prompt:'Quale di queste cose costruisce meglio il tipo di legame che riporta indietro uno studente disinteressato?', opts:['Lasciare fuori dalla lezione le chiacchiere, così resta più tempo per i contenuti','Chiamare soprattutto gli studenti che rispondono sempre, per mantenere il ritmo','Compiti di gruppo, domande sui loro giochi o serie preferite e notare qualcosa di intelligente che hanno detto'], correct:2, fb:'È il legame con i compagni e con te che fa venire voglia a uno studente di tornare a ogni lezione — non solo l’argomento.'}
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
     'Mostro prima io, do istruzioni chiare e verifico che tutti abbiano capito prima di iniziare',
     'Chiedo a tutti di condividere lo schermo, a turno, e do un feedback costruttivo: cosa sta andando bene e su cosa lavorare dopo',
     'Regolo la difficoltà — una sfida extra per chi finisce prima, supporto o un livello più basso per chi fa fatica',
     'Rendo normali gli errori, faccio rispettare le regole della classe e i turni per parlare e ascoltare, e resto fermo ma gentile',
     'Se uno studente arriva stanco a causa dell’orario, ne parlo con il genitore e lascio un commento nel BO',
     'Se il corso non è quello che si aspettava, resto flessibile a lezione e propongo al mio Team Leader una lezione motivazionale o di verifica del livello'
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
