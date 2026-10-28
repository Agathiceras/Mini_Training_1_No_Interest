/* Mini_Training_1_No_Interest - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Desconexión — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Detectar a tiempo la <span class=\"h-pill\">desconexión</span>",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso porque no les interesa la programación o el diseño. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa 4 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 15–20 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué existe esta alerta, por qué eres tú quien puede detectarla — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender por qué la desconexión es fácil de pasar por alto, por qué eres la persona mejor situada para detectarla y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'💤 La desconexión casi nunca hace ruido', html:`
   <div class="card"><p>Los tutores suelen describir a un estudiante como involucrado — <em>«participó, hizo preguntas»</em> — y ese mismo estudiante termina pidiendo un reembolso semanas después. La desconexión estuvo ahí todo el tiempo. Solo que no hacía ruido.</p></div>
   ${co('co-idea','💡',`<p><strong>Por qué tú, en concreto.</strong> Nadie más en la empresa ve a este estudiante cada semana. Un panel de control muestra la asistencia cuando ya pasó. Tú ves cómo se apaga la cámara, cómo la mano deja de levantarse, cómo la pantalla deja de compartirse — en tiempo real, cuando todavía puedes hacer algo al respecto.</p>`)}
  `},
  {t:'🔎 Qué suele haber detrás', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>El curso no fue elección del estudiante</strong> — lo inscribió un padre o una madre, no el niño.`},
     {ic:'📅', html:`<strong>Un horario que no encaja</strong> con su atención o su energía.`},
     {ic:'📈', html:`<strong>Frustración con el nivel</strong> — demasiado difícil, o demasiado fácil para sentir que aprende.`},
     {ic:'👀', html:`<strong>Los padres han perdido visibilidad real</strong> del progreso verdadero del estudiante.`}
   ])}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Módulo 1', emoji:'👁️', color:'var(--coral)',
 title:'Las cuatro cosas que observar — y qué hacer al respecto',
 desc:'Las cuatro dimensiones concretas de la desconexión, qué puedes hacer en cada una y cómo clasificar lo que ves en un color y un siguiente paso.',
 obj:'Saber con precisión qué significa en la práctica «estar atento a la desconexión», qué puedes hacer en tus clases para mejorar cada una de las cuatro áreas y cómo clasificar lo que ves en Verde, Amarillo o Rojo.',
 sections:[
  {t:'👁️ Las cuatro cosas que observar, en cada clase', html:`
   ${patternCards([
     {ic:'🧍', title:'Presencia', desc:'¿Realmente se presenta a las clases?', note:'Ausencias sin avisar o excusas repetidas · dos o más cancelaciones en tres semanas · los retrasos se vuelven costumbre · entra y se va antes de que termine la clase'},
     {ic:'🗣️', title:'Participación', desc:'¿Participa o solo está presente?', note:'Cámara apagada de forma constante · respuestas cerradas que no invitan a conversar · respuestas tardías o ninguna · dejó de hacer preguntas, solo responde lo que se le pregunta'},
     {ic:'🛠️', title:'Producción', desc:'¿Se está haciendo trabajo real?', note:'No comparte su pantalla o lo evita · comparte, pero no muestra avance · otra ventana abierta (juego, vídeo, chat) · dos clases seguidas sin entregar la tarea'},
     {ic:'🧩', title:'Ajuste y entorno', desc:'¿Funciona lo que lo rodea?', note:'Fallos técnicos recurrentes · un horario que choca con la escuela u otros compromisos · el curso lo eligieron los padres, no el estudiante · frustración expresada en voz alta: «es difícil / es aburrido»'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Una señal puede significar simplemente un mal día. Dos señales — en la misma clase o a lo largo de dos clases — empiezan a mostrar una tendencia.</strong> No esperes a la tercera: cuando aparece una tercera señal, muchas veces es tu Team Leader quien la encuentra durante una investigación de reembolso, no tú.</p>`)}
  `},
  {t:'🛠️ Qué puedes hacer en cada una', html:`
   <div class="card"><p>Detectar la señal es solo la mitad del trabajo. Elige cada una de las cuatro áreas de abajo para ver qué puedes hacer realmente en tus clases para darle la vuelta.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Presencia',
      intro:'Las ausencias pueden deberse a muchas cosas — un cambio de horario, problemas de salud, problemas técnicos, una confusión con la hora, vacaciones. Son factores externos y se gestionan de otras maneras. Esto es lo que puedes hacer cuando una ausencia está relacionada con una <strong>falta de interés</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Escribe a los padres ese mismo día.</strong> Si un estudiante falta a una clase, escribe a sus padres ese día para saber por qué — y para animarlo a volver.`},
       {ic:'💬', html:`<strong>Pregunta cómo se sienten en la clase.</strong> Pregunta a padres y estudiantes cómo se sienten con las clases: ¿hay algo que mejorar?, ¿disfrutan los temas?, ¿qué les gustaría ver? Demuestra que estás dispuesto de verdad a adaptar la clase al grupo.`},
       {ic:'🤗', html:`<strong>Dale la bienvenida.</strong> Cuando regrese, hazle saber que se le echó de menos — y presta mucha atención a su trabajo en esa clase: ¿comparte su pantalla?, ¿se queda toda la clase?, ¿hace preguntas?, ¿conecta con los demás?`},
       {ic:'🗨️', html:`<strong>Aprovecha la charla inicial.</strong> Construye comunidad: usa los primeros minutos de cada clase para conocer a tus estudiantes y conectar con ellos.`},
       {ic:'🌟', html:`<strong>Contacta a los padres también para dar buenas noticias.</strong> No te pongas en contacto solo por las ausencias — destaca algo estupendo que el estudiante hizo en clase. Motiva al estudiante y anima a los padres a apoyarlo.`}
      ]},
     {ic:'🗣️', title:'Participación',
      intro:'La participación crece cuando los estudiantes se sienten seguros. <strong>La flexibilidad y conocer a tus estudiantes</strong> importan más que cualquier técnica aislada — encuentra a cada estudiante donde se siente cómodo y luego ayúdalo a dar el siguiente paso.',
      tips:[
       {ic:'📷', html:`<strong>Empieza invitando a encender cámaras y micrófonos — a todos.</strong> Esa es siempre la primera recomendación, y es la misma para todo el grupo.`},
       {ic:'💬', html:`<strong>Después, ofrece otras vías.</strong> Si un estudiante no se siente cómodo con la cámara o el micrófono, deja que participe con las herramientas con las que <em>sí</em> se siente cómodo: reacciones, el chat público o privado, compartir su pantalla.`},
       {ic:'🙋', html:`<strong>Haz preguntas de verdad.</strong> Pregunta por sus ideas y su trabajo — y llega a conocerlos, para que tus preguntas conecten con lo que realmente les importa.`},
       {ic:'🔄', html:`<strong>Sé flexible.</strong> Ajusta la forma de invitar a participar a cada estudiante, en lugar de usar una sola regla que no le sirve a nadie.`},
       {ic:'🎲', html:`<strong>Con los más pequeños, conviértelo en un juego.</strong> Ofrece pequeñas recompensas y usa juegos con tiempo — <em>«¿quién lo encuentra en 30 segundos?»</em> — para que participar resulte divertido, no arriesgado.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Un espacio seguro para preguntar', brief:'En este vídeo, los estudiantes se sienten seguros para hacer preguntas, aportar a los problemas de sus compañeros y pedir ayuda a su tutor. Fíjate en lo amable y comprensivo que es el tutor al hablarles.'}},
     {ic:'🛠️', title:'Producción',
      intro:'Mantén fijo el <strong>objetivo de aprendizaje</strong> — y sé flexible con casi todo lo demás. El trabajo real ocurre cuando los estudiantes saben exactamente qué hacer y lo sienten suyo.',
      tips:[
       {ic:'🎯', html:`<strong>Mantén el objetivo, libera el tema.</strong> Deja que los estudiantes exploren los temas que más disfrutan. No los encierres en la narrativa si no se sienten cómodos con ella — siempre que estén practicando la habilidad.`},
       {ic:'🎬', html:`<strong>Muestra primero y da instrucciones claras.</strong> Enseña cómo se hace, explica exactamente qué vas a hacer y comprueba que todos hayan entendido — así la clase nunca se vuelve confusa.`},
       {ic:'🖥️', html:`<strong>Pide a todos que compartan su pantalla</strong> — por turnos, en distintos momentos de la clase — para que se vea el trabajo de cada estudiante, no solo el de los más rápidos.`},
       {ic:'💬', html:`<strong>Da retroalimentación constructiva.</strong> Dile lo que está haciendo bien y en qué trabajar en las próximas clases.`},
       {ic:'⚖️', html:`<strong>Ajusta la dificultad.</strong> Si terminan rápido, ofrece algo extra; si van más lentos, baja la dificultad u ofrece apoyo.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Retroalimentación constructiva y positiva', brief:'En este vídeo, el tutor da retroalimentación constructiva y positiva sobre el trabajo de un estudiante.'}},
     {ic:'🧩', title:'Ajuste y entorno',
      intro:'Un estudiante que no se siente cómodo en el aula no se mantendrá involucrado, por muy bueno que sea el contenido. <strong>El ambiente de la clase es algo que construyes</strong>, clase tras clase.',
      tips:[
       {ic:'🌱', html:`<strong>Normaliza los errores</strong> y da retroalimentación que ayude en lugar de juzgar.`},
       {ic:'🤝', html:`<strong>Fomenta la amistad</strong> entre compañeros — tareas compartidas, ayudarse unos a otros, celebrar el trabajo de los demás.`},
       {ic:'📜', html:`<strong>Respeta las normas de la clase</strong> — y mantén el control de los turnos para hablar y para escuchar.`},
       {ic:'🔧', html:`<strong>Maneja los problemas técnicos con calma.</strong> Ofrece ayuda al estudiante que tenga uno, sin dejar atrás al resto del grupo — nadie debería aburrirse en clase.`},
       {ic:'⚖️', html:`<strong>Sé firme y amable.</strong> La indisciplina también hace que los estudiantes se sientan incómodos. Encuentra el equilibrio: no puedes ser autoritario, pero tampoco puedes perder el control de la clase.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Mostrar un interés genuino', brief:'En este vídeo, el tutor muestra un interés genuino por los estudiantes a través de la charla informal — se da cuenta de que un estudiante lleva un yeso y le pregunta cómo está.'}}
   ])}
  `},
  {t:'🚦 Clasifica lo que ves y actúa en consecuencia', html:`
   ${classifyCard('co-ok','🟢','Sin señales sostenidas en el tiempo. Asiste a la mayoría de las clases, comparte su pantalla, muestra progreso.','Mantén la relación: envía una evidencia de progreso al tutor legal cada 4 clases, antes de que la pida.')}
   ${classifyCard('co-cute','🟡','Una señal aparece de forma constante durante una clase, o se repite a lo largo de dos clases — o dos señales en la misma clase.','Habla con el estudiante en la clase e indaga con suavidad el motivo. Puede ser simple timidez.')}
   ${classifyCard('co-danger','🔴','Más de dos señales en la misma clase, o dos señales sostenidas durante más de una clase.','Avisa a tu Team Leader ese mismo día, con datos concretos. Sigue enseñando bien y mantente cercano con la familia — la oferta de una clase extra, un cambio de horario o cualquier otra cosa viene de tu TL, nunca directamente de ti.')}
   ${classifyCard('co-danger','🚨','El estudiante no muestra ningún interés por la programación ni por los cursos de Kodland — veas lo que veas además.','Trátalo como Rojo de inmediato. Este motivo ya está marcado como de alta prioridad, así que prevalece sobre cualquier otra lectura.')}
  `}
 ],
 ix:{
  title:'¿A qué área ayuda este consejo?',
  instr:'Cuatro consejos de este módulo. Lee cada uno y decide a cuál de las cuatro áreas te ayuda a darle la vuelta. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿A qué área ayuda este consejo?', card:'💬 Un estudiante no se siente cómodo encendiendo la cámara, así que lo invitas a participar mediante el chat y las reacciones.', zones:[{label:'🧍 Presencia', fb:'No exactamente — esto trata de cómo participa el estudiante una vez que está en la clase. Eso es Participación.'},{label:'🗣️ Participación', fb:'Correcto — invita primero a todos a encender cámaras y micrófonos y luego ofrece otras vías: reacciones, el chat público o privado, compartir su pantalla.'},{label:'🛠️ Producción', fb:'No exactamente — no se trata del trabajo en sí, sino de cómo se une el estudiante a la conversación. Eso es Participación.'},{label:'🧩 Ajuste y entorno', fb:'Cerca — sí ayuda a que se sienta cómodo, pero el consejo trata de cómo participa. Eso es Participación.'}], correctZone:1},
   {type:'sort', prompt:'¿A qué área ayuda este consejo?', card:'📜 Un estudiante se ríe del error de un compañero. Con calma recuerdas a todos las normas de la clase y tratas el error como parte del aprendizaje.', zones:[{label:'🧍 Presencia', fb:'No exactamente — esto trata de lo seguro que se siente el aula. Eso es Ajuste y entorno.'},{label:'🗣️ Participación', fb:'Cerca — un aula segura ayuda a la participación, pero este consejo trata del ambiente de la clase: Ajuste y entorno.'},{label:'🛠️ Producción', fb:'No exactamente — esto trata del ambiente, no del trabajo. Eso es Ajuste y entorno.'},{label:'🧩 Ajuste y entorno', fb:'Correcto — normalizar los errores, respetar las normas de la clase y ser firme pero amable es lo que hace que el aula se sienta segura.'}], correctZone:3},
   {type:'sort', prompt:'¿A qué área ayuda este consejo?', card:'📩 Un estudiante falta a una clase. Ese mismo día, escribes a sus padres para saber por qué — y para animarlo a volver.', zones:[{label:'🧍 Presencia', fb:'Correcto — un mensaje el mismo día demuestra que te diste cuenta, averigua el motivo e invita al estudiante a volver. Y cuando regrese, hazle saber que se le echó de menos.'},{label:'🗣️ Participación', fb:'No exactamente — el estudiante ni siquiera estuvo en la clase. Eso es Presencia.'},{label:'🛠️ Producción', fb:'No exactamente — esto trata de presentarse, no del trabajo. Eso es Presencia.'},{label:'🧩 Ajuste y entorno', fb:'No exactamente — este consejo trata de la ausencia en sí. Eso es Presencia.'}], correctZone:0},
   {type:'sort', prompt:'¿A qué área ayuda este consejo?', card:'⚖️ Un estudiante termina la actividad en la mitad del tiempo, así que le ofreces un reto extra — y compartes tu pantalla para mostrar antes el siguiente paso.', zones:[{label:'🧍 Presencia', fb:'No exactamente — el estudiante está presente y trabajando. Esto trata del trabajo en sí: Producción.'},{label:'🗣️ Participación', fb:'No exactamente — esto trata del nivel y la claridad de la tarea. Eso es Producción.'},{label:'🛠️ Producción', fb:'Correcto — ajustar la dificultad, mostrar primero y dar instrucciones claras mantiene el trabajo real en marcha.'},{label:'🧩 Ajuste y entorno', fb:'No exactamente — esto trata de la tarea, no del ambiente. Eso es Producción.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Módulo 2', emoji:'🧭', color:'var(--coral)',
 title:'Atraer su atención',
 desc:'Para una desconexión que todavía no es extrema: qué suele causarla y qué puedes adaptar realmente en la clase.',
 obj:'Reconocer las causas más comunes de desconexión que aún no es extrema — el ajuste al curso, el horario y el nivel de dificultad — y saber qué adaptar tú mismo y qué canalizar a través de tu Team Leader.',
 sections:[
  {t:'🔎 Tres casos frecuentes', html:`
   ${stepIconBlock('🔄','El curso no era lo que esperaba, o se ha dado cuenta de que el diseño o la programación no es lo suyo', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Un niño frunciendo el ceño ante la pantalla de un portátil" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Estrategia</div><p>Habla con tu Team Leader sobre la posibilidad de una clase motivacional. Sé flexible en la clase — deja que el estudiante adapte su trabajo (por ejemplo, que se salte la parte narrativa pero aprenda igualmente el tema central de la lección). Una clase de nivelación también puede ayudar: el estudiante podría encontrar otro curso de Kodland que sí encaje con lo que quiere, lo cual puede evitar el reembolso al redirigirlo hacia algo que va a disfrutar.</p>`)}
   ${stepIconBlock('⏰','El horario lo deja sin energía para la clase (cansado después del colegio, clase demasiado temprano)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Un estudiante cansado quedándose dormido en su escritorio" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Estrategia</div><p>Habla con los padres y deja un comentario en BO sobre esto. Un cambio de horario puede ser justo lo que preserve la motivación del estudiante antes de que se convierta en un reembolso.</p>`)}
   ${stepIconBlock('⚖️','Se ha dado cuenta de que el curso le resulta demasiado fácil o demasiado difícil', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Un niño encogiéndose de hombros, sin saber qué hacer" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Estrategia</div><p>Esta es una de las situaciones más fáciles de recuperar, y lo consigues adaptando la propia clase.</p>
   <p><strong>Si es demasiado fácil:</strong> no dejes que tus estudiantes más rápidos se aburran mientras otros siguen trabajando. Ofrece retos y actividades extra (algunas lecciones ya los incluyen — también puedes dejar que adelanten la tarea). Sube la dificultad y deja que se sientan desafiados en algo que disfrutan, para que sientan que están aprendiendo algo nuevo. Un estudiante que no se siente desafiado no le ve sentido al curso, y se va.</p>
   <p><strong>Si es demasiado difícil:</strong> bríndale apoyo. Puedes bajar un poco la dificultad de la actividad, compartir código mientras explicas cómo funciona para que entienda el proceso que hay detrás, dar consejos extra para simplificar la actividad y demostrar siempre en cámara cómo se hace, comprobando que te sigue. Fuera de la clase, haz seguimiento y destaca algo que hizo bien, para mantenerlo motivado a seguir aprendiendo.</p>`)}
  `},
  {t:'🤝 Conocer a nuestros estudiantes', html:`
   <div class="card"><p>Parte de recuperar la atención de un estudiante desconectado viene de construir un vínculo real con él — una conexión entre el estudiante, sus compañeros y tú — y de crear un espacio seguro al que quiera volver en cada clase, no solo para aprender un tema que le gusta, sino para volver a ver a su tutor y a sus compañeros.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Fomenta la amistad</strong> mediante el trabajo en grupo y las tareas compartidas.`},
     {ic:'🎮', html:`<strong>Pregunta por intereses en común</strong> — series o videojuegos favoritos, pequeñas curiosidades sobre el lugar donde viven.`},
     {ic:'🌟', html:`<strong>Reconoce algo bueno o ingenioso</strong> que un estudiante hizo o dijo en clase.`}
   ])}
  `}
 ],
 ix:{
  title:'Atraer su atención — comprobación del módulo',
  instr:'Elige la mejor acción para cada situación. 70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:'Un estudiante termina todas las actividades mucho más rápido que el grupo y luego empieza a distraer a los demás. ¿Cuál es la primera acción más útil?', opts:['Decir a los padres que el curso parece demasiado fácil y preguntarles qué les gustaría hacer','Esperar unas cuantas clases a ver si el resto del grupo lo alcanza','Subirle la dificultad — un reto extra o adelantar la tarea'], correct:2, fb:'El aburrimiento necesita un reto real, adaptado en la clase. Un estudiante que no se siente desafiado no le ve sentido al curso.'},
   {type:'choice', prompt:'Un estudiante está constantemente cansado y desconcentrado en una clase programada justo después del colegio. ¿Cuál es el mejor primer paso?', opts:['Hablar con los padres sobre cómo está funcionando el horario y dejar un comentario en BO','Mantener el horario actual — se acordó al inscribirse','Pedirle al estudiante que descanse más antes de la clase'], correct:0, fb:'Un horario que agota al estudiante a menudo tiene arreglo — habla con los padres y deja el comentario en BO, para que se pueda considerar un cambio antes de que se pierda la motivación.'},
   {type:'choice', prompt:'Un estudiante dice que los temas no le interesan y que ojalá hubiera elegido otro curso de Kodland. ¿Qué puedes hacer tú mismo?', opts:['Decirle que vas a gestionar el cambio al curso que prefiera','Ser flexible con la forma en que aborda las tareas y plantear una clase motivacional o de nivelación a tu Team Leader','Explicarle que los cambios de curso los gestiona otro departamento y continuar con la clase'], correct:1, fb:'Puedes adaptar cómo trabaja en la clase y plantear la opción de la clase de nivelación a tu Team Leader — no puedes prometer tú mismo un cambio de curso.'},
   {type:'choice', prompt:'Un estudiante tiene dificultades con el nivel y se está frustrando. ¿Cuál de estas opciones ayuda más?', opts:['Avanzar rápido para que no se sienta señalado','Mostrar en cámara cómo se hace primero, compartir código mientras explicas cómo funciona y comprobar que te sigue','Dejar que copie la solución de un compañero para que pueda seguir el ritmo'], correct:1, fb:'Demuestra primero, explica el proceso que hay detrás del código y comprueba que lo entiende — luego haz seguimiento fuera de la clase con algo que hizo bien.'},
   {type:'choice', prompt:'¿Cuál de estas opciones construye mejor el tipo de vínculo que hace volver a un estudiante desconectado?', opts:['Dejar la charla informal fuera de la clase para tener más tiempo para el contenido','Llamar sobre todo a los estudiantes que siempre responden, para mantener el ritmo','Tareas en grupo, preguntas sobre sus juegos o series favoritos y reconocer algo ingenioso que dijeron'], correct:2, fb:'Una conexión con los compañeros y contigo es lo que hace que un estudiante quiera volver a cada clase — no solo el tema.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `},  {t:'🌱 En cada clase', html:`
   ${numlist([
     'Cuando un estudiante falta a una clase, escribo a sus padres el mismo día para saber por qué e invitarlo a volver — y cuando regresa, le hago saber que se le echó de menos',
     'Contacto a los padres también para dar buenas noticias, no solo por ausencias o problemas',
     'Aprovecho la charla inicial para conocer a mis estudiantes y construir comunidad en el grupo',
     'Invito primero a todos a encender cámaras y micrófonos — y luego ofrezco otras vías (reacciones, chat público o privado, compartir pantalla) a los estudiantes que no se sienten cómodos',
     'Mantengo fijo el objetivo de aprendizaje, pero dejo que los estudiantes exploren los temas que disfrutan — no solo la narrativa',
     'Muestro primero, doy instrucciones claras y compruebo que todos hayan entendido antes de empezar',
     'Pido a todos que compartan su pantalla, por turnos, y doy retroalimentación constructiva: lo que va bien y en qué trabajar a continuación',
     'Ajusto la dificultad — un reto extra para quienes terminan rápido, apoyo o un nivel más bajo para quienes tienen dificultades',
     'Normalizo los errores, mantengo las normas de la clase y los turnos para hablar y escuchar, y soy firme pero amable',
     'Si un estudiante llega cansado por el horario, hablo con los padres y dejo un comentario en BO',
     'Si el curso no es lo que esperaba, soy flexible en la clase y planteo una clase motivacional o de nivelación a mi Team Leader'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};