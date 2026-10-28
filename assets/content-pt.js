/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Minitreinamento · Desengajamento — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Identificando o <span class=\"h-pill\">Desengajamento</span> desde cedo",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por não terem interesse em programação ou design. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Complete 4 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Cerca de 15 a 20 minutos no total.",
    startBtn:"🚀 Iniciar o treinamento",
    pathLabel:'Seu caminho de aprendizagem',
    devTitle:'Dev: liberar todos os módulos para revisão',
    backToPath:'Voltar ao caminho',
    modulesPassed:'{done} / {total} módulos aprovados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Iniciar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o minitreinamento',
    doneBack:'✓ Pronto — voltar ao caminho',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não é bem isso — a resposta certa é “{label}”.',
    resPassed:'Módulo aprovado!',
    resFailed:'Ainda não foi desta vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este minitreinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e faça a verificação novamente.',
    resContinue:'Continuar para o caminho de aprendizagem',
    resFinish:'Continuar',
    resBack:'Voltar ao caminho',
    resReview:'Revisar este módulo',
    doneEyebrow:'Minitreinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este minitreinamento.</strong>",
    doneP2:"Tudo pronto por aqui! Volte à página de treinamento do LMS pela qual você acessou este minitreinamento para encerrar a atividade.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de realizá-la e de obter a nota para aprovação</strong> — caso contrário, a atividade pode ficar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos os módulos estão liberados para revisão.',
    devOn:'🔓 Modo Dev ATIVADO — todos os módulos liberados',
    devOff:'🔒 Modo Dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'Próximo:',
    dtDone:"✅ São essas as quatro áreas. Agora, classifique o que você vê.",
    tlVideoTitle:'{label} — um exemplo de aula real',
    tlVideoMeta:'Veja como esta fase aparece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por que você está aqui',
 desc:'Por que esse alerta existe, por que você é a pessoa que pode identificá-lo — e as regras que valem quando um pedido de reembolso já foi feito.',
 obj:'Entender por que o desengajamento passa despercebido com facilidade, por que você é a pessoa mais bem posicionada para identificá-lo e exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'💤 O desengajamento quase nunca é barulhento', html:`
   <div class="card"><p>Os tutores costumam descrever um aluno como engajado — <em>“ele participou, fez perguntas”</em> — e esse mesmo aluno acaba pedindo reembolso semanas depois. O desengajamento estava ali o tempo todo. Só não era barulhento.</p></div>
   ${co('co-idea','💡',`<p><strong>Por que você, especificamente.</strong> Ninguém mais na empresa vê esse aluno toda semana. Um painel mostra a presença só depois que ela acontece. Você vê a câmera sendo desligada, a mão que parou de se levantar, a tela que deixou de ser compartilhada — em tempo real, quando ainda dá para fazer alguma coisa.</p>`)}
  `},
  {t:'🔎 O que costuma estar por trás', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>O curso não foi escolha do aluno</strong> — quem o matriculou foi um dos pais, não a criança.`},
     {ic:'📅', html:`<strong>Um horário que não combina</strong> com a atenção ou a energia dele.`},
     {ic:'📈', html:`<strong>Frustração com o nível</strong> — difícil demais, ou fácil demais para parecer aprendizado.`},
     {ic:'👀', html:`<strong>Os pais perderam a visibilidade real</strong> do progresso do aluno.`}
   ])}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos até aqui é sobre identificar esse problema cedo. Mas você pode estar abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem independentemente do motivo — leia-as primeiro e depois use o restante deste treinamento para entender o que levou a essa situação e o que você ainda pode fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Client Service, não por você</strong> — essa parte não está sob o seu controle. O que continua com você é tudo o que acontece na aula daqui para frente, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. O seu trabalho agora é a aula, não a conversa sobre o reembolso.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar alguma coisa. Trate a próxima aula com essa criança como o momento que vai decidir tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê a ela a vez de falar, de verdade.</strong> Não uma pergunta sem sentido — um momento genuíno em que ela é vista e tem sucesso.`},
     {ic:'🏆', html:`<strong>Crie uma conquista visível logo no início.</strong> Ela deve sair da aula sentindo-se capaz, não atrasada.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça com que ela se sinta notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Client Service no perfil da criança no BO — não há nenhum sistema automático que avise você. Quando souber, o que você viu nas suas aulas é uma informação que o Client Service não tem de nenhuma outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia, com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem discuta qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre seguro dizer:</strong> <em>“O Client Service vai ajudar você com isso.”</em> É aí que termina a sua parte da conversa — a partir dali, o Client Service assume.</p>`)}
  `},
  {t:'🌱 Continue depois', html:`
   <div class="card"><p>Quer o pedido seja retirado, quer a criança continue no seu grupo, quer passe para outro tutor ou formato, continue dando atenção extra nas próximas aulas. Uma reversão que se sustenta por uma aula e depois volta discretamente ao normal muitas vezes não se sustenta de jeito nenhum.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Módulo 1', emoji:'👁️', color:'var(--coral)',
 title:'As quatro coisas para observar — e o que fazer a respeito',
 desc:'As quatro dimensões concretas do desengajamento, o que você pode fazer em cada uma e como classificar o que você vê em uma cor e um próximo passo.',
 obj:'Saber com precisão o que significa “ficar atento ao desengajamento” na prática, o que você pode fazer nas suas aulas para melhorar cada uma das quatro áreas e como classificar o que você vê em Verde, Amarelo ou Vermelho.',
 sections:[
  {t:'👁️ As quatro coisas para observar, em toda aula', html:`
   ${patternCards([
     {ic:'🧍', title:'Presença', desc:'Eles realmente estão comparecendo?', note:'Faltas sem aviso ou desculpas repetidas · dois ou mais cancelamentos em três semanas · atrasos se tornando hábito · entra e sai antes do fim da aula'},
     {ic:'🗣️', title:'Participação', desc:'Eles estão se envolvendo ou apenas presentes?', note:'Câmera sempre desligada · respostas fechadas que não puxam conversa · respostas demoradas ou ausentes · parou de fazer perguntas, só responde ao que lhe é perguntado'},
     {ic:'🛠️', title:'Produção', desc:'Há trabalho de verdade acontecendo?', note:'Não compartilha a tela ou evita fazê-lo · compartilha, mas não mostra progresso · outra janela aberta (jogo, vídeo, chat) · duas aulas seguidas com o dever de casa não entregue'},
     {ic:'🧩', title:'Adequação e ambiente', desc:'A estrutura ao redor dele funciona?', note:'Falhas técnicas recorrentes · um horário que conflita com a escola ou outros compromissos · o curso foi escolhido pelos pais, não pelo aluno · frustração verbalizada: “isso é difícil / chato”'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Um sinal pode ser só um dia ruim. Dois sinais — na mesma aula ou em duas aulas — começam a mostrar uma tendência.</strong> Não espere por um terceiro: quando o terceiro sinal aparece, muitas vezes é o seu Team Leader quem o encontra durante uma investigação de reembolso, e não você.</p>`)}
  `},
  {t:'🛠️ O que você pode fazer em cada uma', html:`
   <div class="card"><p>Identificar o sinal é só metade do trabalho. Escolha cada uma das quatro áreas abaixo para ver o que você realmente pode fazer nas suas aulas para reverter a situação.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Presença',
      intro:'As faltas podem ter muitas causas — mudança de horário, problemas de saúde, problemas técnicos, confusão com o horário, feriados. Esses são fatores externos e são tratados de outras formas. Veja o que você pode fazer quando uma falta está relacionada à <strong>falta de engajamento</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Escreva para os pais no mesmo dia.</strong> Se um aluno faltar a uma aula, mande uma mensagem aos pais naquele dia para saber o motivo — e para incentivá-los a voltar.`},
       {ic:'💬', html:`<strong>Pergunte como está sendo a aula.</strong> Pergunte aos pais e aos alunos o que acham das aulas: há algo a melhorar, eles gostam dos temas, o que gostariam de ver? Isso mostra que você tem real disposição de adaptar a aula ao grupo.`},
       {ic:'🤗', html:`<strong>Receba-os de volta com carinho.</strong> Quando voltarem, deixe claro que sentiram falta deles — e observe com atenção o trabalho deles naquela aula: estão compartilhando a tela, ficando até o fim da aula, fazendo perguntas, se conectando com os outros?`},
       {ic:'🗨️', html:`<strong>Aproveite a conversa inicial.</strong> Construa uma comunidade: use os primeiros minutos de cada aula para conhecer seus alunos e criar conexão com eles.`},
       {ic:'🌟', html:`<strong>Entre em contato com os pais também para dar boas notícias.</strong> Não procure os pais só por causa de faltas — destaque algo ótimo que o aluno fez na aula. Isso motiva o aluno e incentiva os pais a apoiá-lo.`}
      ]},
     {ic:'🗣️', title:'Participação',
      intro:'A participação cresce quando os alunos se sentem seguros. <strong>Flexibilidade e conhecer seus alunos</strong> importam mais do que qualquer técnica isolada — encontre cada aluno onde ele se sente confortável e depois ajude-o a dar o próximo passo.',
      tips:[
       {ic:'📷', html:`<strong>Comece convidando todos a ligar câmeras e microfones.</strong> Essa é sempre a primeira recomendação, e vale igualmente para o grupo todo.`},
       {ic:'💬', html:`<strong>Depois ofereça outras formas de participar.</strong> Se um aluno não se sente à vontade com a câmera ou o microfone, deixe que ele participe com as ferramentas com as quais <em>se sente</em> confortável: reações, o chat público ou privado, compartilhar a tela.`},
       {ic:'🙋', html:`<strong>Faça perguntas de verdade.</strong> Pergunte sobre as ideias e o trabalho deles — e conheça-os, para que suas perguntas se conectem com o que realmente importa para eles.`},
       {ic:'🔄', html:`<strong>Seja flexível.</strong> Adapte a forma de convidar à participação a cada aluno, em vez de uma única regra que não serve para ninguém.`},
       {ic:'🎲', html:`<strong>Com os menores, transforme em jogo.</strong> Ofereça pequenas recompensas e use jogos com tempo — <em>“quem consegue encontrar em 30 segundos?”</em> — para que participar seja divertido, e não arriscado.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Um espaço seguro para perguntar', brief:'Neste vídeo, os alunos se sentem seguros para fazer perguntas, contribuir com os problemas dos colegas e pedir ajuda ao tutor. Repare com que gentileza e compreensão o tutor fala com eles.'}},
     {ic:'🛠️', title:'Produção',
      intro:'Mantenha o <strong>objetivo de aprendizagem</strong> fixo — e seja flexível com quase todo o resto. O trabalho real acontece quando os alunos sabem exatamente o que fazer e sentem que o trabalho é deles.',
      tips:[
       {ic:'🎯', html:`<strong>Mantenha o objetivo, libere o tema.</strong> Deixe os alunos explorarem os temas de que mais gostam. Não os prenda à narrativa da história se eles não se sentem à vontade com ela — desde que estejam praticando a habilidade.`},
       {ic:'🎬', html:`<strong>Demonstre primeiro e dê instruções claras.</strong> Mostre como se faz, explique exatamente o que você vai fazer e confirme que todos entenderam — para que a aula nunca fique confusa.`},
       {ic:'🖥️', html:`<strong>Peça a todos que compartilhem a tela</strong> — por turnos, em diferentes momentos da aula — para que o trabalho de cada aluno seja visto, e não só o dos mais rápidos.`},
       {ic:'💬', html:`<strong>Dê feedback construtivo.</strong> Diga o que eles estão fazendo bem e no que devem trabalhar nas próximas aulas.`},
       {ic:'⚖️', html:`<strong>Ajuste a dificuldade.</strong> Se terminarem rápido, ofereça algo extra; se forem mais lentos, reduza a dificuldade ou ofereça apoio.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Feedback construtivo e positivo', brief:'Neste vídeo, o tutor dá feedback construtivo e positivo sobre o trabalho de um aluno.'}},
     {ic:'🧩', title:'Adequação e ambiente',
      intro:'Um aluno que não se sente confortável na sala não se mantém engajado, por melhor que seja o conteúdo. <strong>O clima da aula é algo que você constrói</strong>, aula após aula.',
      tips:[
       {ic:'🌱', html:`<strong>Normalize os erros</strong> e dê feedback que ajude, em vez de julgar.`},
       {ic:'🤝', html:`<strong>Promova a amizade</strong> entre os colegas — tarefas em conjunto, ajuda mútua, comemorar o trabalho uns dos outros.`},
       {ic:'📜', html:`<strong>Respeite as regras da aula</strong> — e mantenha o controle dos turnos de fala e de escuta.`},
       {ic:'🔧', html:`<strong>Lide com os problemas técnicos com calma.</strong> Ofereça ajuda ao aluno que tem um problema, sem deixar o resto do grupo para trás — ninguém deve ficar entediado na aula.`},
       {ic:'⚖️', html:`<strong>Seja firme e gentil.</strong> A indisciplina também deixa os alunos desconfortáveis. Encontre o equilíbrio: você não pode ser autoritário, mas também não pode perder o controle da aula.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Demonstrando interesse genuíno', brief:'Neste vídeo, o tutor demonstra interesse genuíno pelos alunos por meio de uma conversa descontraída — percebendo que um aluno está com o braço engessado e perguntando como ele está.'}}
   ])}
  `},
  {t:'🚦 Classifique o que você vê e aja de acordo', html:`
   ${classifyCard('co-ok','🟢','Nenhum sinal sustentado ao longo do tempo. Comparece à maioria das aulas, compartilha a tela, mostra progresso.','Mantenha o relacionamento — envie uma evidência de progresso ao responsável a cada 4 aulas, antes que ele peça.')}
   ${classifyCard('co-cute','🟡','Um sinal aparece de forma constante durante uma aula ou se repete em duas aulas — ou dois sinais na mesma aula.','Converse com o aluno durante a aula e sonde com delicadeza o motivo. Pode ser apenas timidez.')}
   ${classifyCard('co-danger','🔴','Mais de dois sinais na mesma aula, ou dois sinais sustentados por mais de uma aula.','Avise seu Team Leader no mesmo dia, com detalhes. Continue ensinando bem e seja acolhedor com a família — a oferta de uma aula extra, de uma mudança de horário ou de qualquer outra coisa vem do seu TL, nunca diretamente de você.')}
   ${classifyCard('co-danger','🚨','O aluno não demonstra interesse em programação nem nos cursos da Kodland — independentemente do que mais você esteja vendo.','Trate como Vermelho imediatamente. Esse motivo já está sinalizado como de alta prioridade, então ele se sobrepõe a qualquer outra leitura.')}
  `}
 ],
 ix:{
  title:'Qual área esta dica ajuda?',
  instr:'Quatro dicas deste módulo. Leia cada uma e decida qual das quatro áreas ela ajuda você a reverter. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'Qual área esta dica ajuda?', card:'💬 Um aluno não se sente à vontade para ligar a câmera, então você o convida a participar pelo chat e pelas reações.', zones:[{label:'🧍 Presença', fb:'Não é bem isso — trata-se de como o aluno participa depois que já está na aula. Isso é Participação.'},{label:'🗣️ Participação', fb:'Correto — convide todos a ligar câmeras e microfones primeiro e depois ofereça outras formas de participar: reações, o chat público ou privado, compartilhar a tela.'},{label:'🛠️ Produção', fb:'Não é bem isso — não se trata do trabalho em si, mas de como o aluno entra na conversa. Isso é Participação.'},{label:'🧩 Adequação e ambiente', fb:'Quase — ajuda mesmo a deixá-lo confortável, mas a dica é sobre como ele participa. Isso é Participação.'}], correctZone:1},
   {type:'sort', prompt:'Qual área esta dica ajuda?', card:'📜 Um aluno ri do erro de um colega. Com calma, você lembra a todos as regras da aula e trata o erro como parte do aprendizado.', zones:[{label:'🧍 Presença', fb:'Não é bem isso — trata-se de quão seguro o ambiente parece. Isso é Adequação e ambiente.'},{label:'🗣️ Participação', fb:'Quase — um ambiente seguro ajuda a participação, mas esta dica é sobre o clima da aula: Adequação e ambiente.'},{label:'🛠️ Produção', fb:'Não é bem isso — trata-se do clima, não do trabalho. Isso é Adequação e ambiente.'},{label:'🧩 Adequação e ambiente', fb:'Correto — normalizar os erros, respeitar as regras da aula e ser firme e gentil é o que faz o ambiente parecer seguro.'}], correctZone:3},
   {type:'sort', prompt:'Qual área esta dica ajuda?', card:'📩 Um aluno falta a uma aula. No mesmo dia, você escreve para os pais para saber o motivo — e para incentivá-los a voltar.', zones:[{label:'🧍 Presença', fb:'Correto — uma mensagem no mesmo dia mostra que você percebeu, descobre o motivo e convida o aluno a voltar. E, quando ele voltar, deixe claro que sentiram falta dele.'},{label:'🗣️ Participação', fb:'Não é bem isso — o aluno nem estava na aula. Isso é Presença.'},{label:'🛠️ Produção', fb:'Não é bem isso — trata-se de comparecer, não do trabalho. Isso é Presença.'},{label:'🧩 Adequação e ambiente', fb:'Não é bem isso — esta dica é sobre a falta em si. Isso é Presença.'}], correctZone:0},
   {type:'sort', prompt:'Qual área esta dica ajuda?', card:'⚖️ Um aluno termina a atividade na metade do tempo, então você oferece um desafio extra — e compartilha a tela para demonstrar antes o próximo passo.', zones:[{label:'🧍 Presença', fb:'Não é bem isso — o aluno está presente e trabalhando. Trata-se do trabalho em si: Produção.'},{label:'🗣️ Participação', fb:'Não é bem isso — trata-se do nível e da clareza da tarefa. Isso é Produção.'},{label:'🛠️ Produção', fb:'Correto — ajustar a dificuldade, demonstrar primeiro e dar instruções claras mantêm o trabalho real acontecendo.'},{label:'🧩 Adequação e ambiente', fb:'Não é bem isso — trata-se da tarefa, não do clima. Isso é Produção.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Módulo 2', emoji:'🧭', color:'var(--coral)',
 title:'Despertando a atenção deles',
 desc:'Para o desengajamento que ainda não é extremo: o que costuma causá-lo e o que você realmente pode adaptar na aula.',
 obj:'Reconhecer as causas mais comuns de desengajamento não extremo — adequação ao curso, horário e nível de dificuldade — e saber o que adaptar por conta própria e o que encaminhar pelo seu Team Leader.',
 sections:[
  {t:'🔎 Três casos comuns', html:`
   ${stepIconBlock('🔄','O curso não era o que eles esperavam, ou perceberam que design/programação não é para eles', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Uma criança de testa franzida olhando para a tela de um notebook" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Estratégia</div><p>Converse com seu Team Leader sobre a possibilidade de uma aula motivacional. Seja flexível na aula — deixe o aluno adaptar o trabalho dele (por exemplo, dispensar a narrativa da história, mas ainda aprender o tema central da aula). Uma aula de nivelamento também pode ajudar: o aluno pode encontrar outro curso da Kodland que realmente combine com o que ele quer, o que pode evitar o reembolso ao redirecioná-lo para algo de que ele vai gostar.</p>`)}
   ${stepIconBlock('⏰','O horário os deixa sem energia para a aula (cansados depois da escola, aula muito cedo)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Um aluno cansado adormecendo na carteira" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Estratégia</div><p>Converse com os pais e deixe um comentário no BO sobre isso. Uma mudança de horário pode ser exatamente o que preserva a motivação do aluno antes que ela se transforme em um pedido de reembolso.</p>`)}
   ${stepIconBlock('⚖️','Eles perceberam que o curso é fácil demais ou difícil demais para eles', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Uma criança dando de ombros, sem saber o que fazer" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Estratégia</div><p>Esta é uma das situações mais fáceis de reverter, e você faz isso adaptando a própria aula.</p>
   <p><strong>Se está fácil demais:</strong> não deixe seus alunos mais rápidos ficarem entediados enquanto os outros ainda estão trabalhando. Ofereça desafios e atividades extras (algumas aulas já trazem isso — você também pode deixá-los adiantar o dever de casa). Aumente a dificuldade e deixe-os se sentirem desafiados em algo de que gostam, para sentirem que estão aprendendo algo novo. Um aluno que não se sente desafiado não vê sentido no curso e vai embora.</p>
   <p><strong>Se está difícil demais:</strong> ofereça apoio. Você pode reduzir um pouco a dificuldade da atividade, compartilhar o código enquanto explica como ele funciona para que entendam o processo por trás dele, dar dicas extras para simplificar a atividade e sempre demonstrar na câmera como se faz primeiro, conferindo se eles estão acompanhando. Fora da aula, faça o acompanhamento e destaque algo que eles fizeram bem, para mantê-los motivados a continuar aprendendo.</p>`)}
  `},
  {t:'🤝 Conhecendo nossos alunos', html:`
   <div class="card"><p>Parte de recuperar a atenção de um aluno desengajado vem de construir um vínculo real com ele — uma conexão entre o aluno, os colegas e você — e de criar um espaço seguro ao qual ele queira voltar a cada aula, não só para aprender um tema de que gosta, mas para rever o tutor e os colegas.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Incentive a amizade</strong> por meio de trabalhos em grupo e tarefas compartilhadas.`},
     {ic:'🎮', html:`<strong>Pergunte sobre interesses em comum</strong> — séries ou videogames favoritos, pequenas curiosidades sobre o lugar onde moram.`},
     {ic:'🌟', html:`<strong>Reconheça algo bom ou inteligente</strong> que um aluno fez ou disse na aula.`}
   ])}
  `}
 ],
 ix:{
  title:'Despertando a atenção deles — verificação do módulo',
  instr:'Escolha a melhor atitude para cada situação. 70% para liberar a checklist final.',
  items:[
   {type:'choice', prompt:'Um aluno termina todas as atividades bem mais rápido que o grupo e depois começa a distrair os outros. Qual é a primeira atitude mais útil?', opts:['Dizer aos pais que o curso parece fácil demais e perguntar o que eles gostariam de fazer','Esperar algumas aulas para ver se o resto do grupo o alcança','Aumentar a dificuldade para ele — um desafio extra ou adiantar o dever de casa'], correct:2, fb:'O tédio pede um desafio de verdade, adaptado na aula. Um aluno que não se sente desafiado não vê sentido no curso.'},
   {type:'choice', prompt:'Um aluno está constantemente cansado e sem foco em uma aula marcada logo depois da escola. Qual é o melhor primeiro passo?', opts:['Conversar com os pais sobre como o horário está funcionando e deixar um comentário no BO','Manter o horário atual — ele foi combinado na matrícula','Pedir ao aluno que descanse mais antes da aula'], correct:0, fb:'Um horário que esgota o aluno muitas vezes tem solução — converse com os pais e deixe o comentário no BO, para que uma mudança possa ser considerada antes que a motivação se perca.'},
   {type:'choice', prompt:'Um aluno diz que os temas não o interessam e que gostaria de ter escolhido outro curso da Kodland. O que você mesmo pode fazer?', opts:['Dizer que você vai providenciar a troca para o curso que ele prefere','Ser flexível quanto à forma como ele faz as tarefas e propor ao seu Team Leader uma aula motivacional ou de nivelamento','Explicar que as trocas de curso são tratadas por outro departamento e continuar a aula'], correct:1, fb:'Você pode adaptar a forma como ele trabalha na aula e propor a opção de aula de nivelamento ao seu Team Leader — você não pode prometer uma troca de curso por conta própria.'},
   {type:'choice', prompt:'Um aluno está com dificuldade no nível e ficando frustrado. Qual destas atitudes mais ajuda?', opts:['Avançar rápido para que ele não se sinta exposto','Mostrar na câmera como se faz primeiro, compartilhar o código enquanto explica como ele funciona e conferir se ele acompanha','Deixá-lo copiar a solução de um colega para conseguir acompanhar'], correct:1, fb:'Demonstre primeiro, explique o processo por trás do código e confira a compreensão — depois, fora da aula, faça o acompanhamento destacando algo que ele fez bem.'},
   {type:'choice', prompt:'Qual destas atitudes melhor constrói o tipo de vínculo que faz um aluno desengajado voltar?', opts:['Deixar a conversa descontraída fora da aula para sobrar mais tempo para o conteúdo','Chamar principalmente os alunos que sempre respondem, para manter o ritmo','Trabalhos em grupo, perguntas sobre seus jogos ou séries favoritos e notar algo inteligente que ele disse'], correct:2, fb:'Uma conexão com os colegas e com você é o que faz o aluno querer voltar a cada aula — não só o tema.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrá-lo.',
 obj:'Revise a checklist abaixo. Este módulo não tem nota — leia e depois conclua o minitreinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei meu Team Leader',
     'Minha próxima aula com esse aluno foi uma tentativa real de reverter a situação — uma chance real de participar, uma conquista visível, atenção específica, sem mencionar o pedido',
     'Nunca confirmei aprovação nem discuti valores — usei a única frase segura e deixei o resto com o Client Service'
   ])}
  `},  {t:'🌱 Em toda aula', html:`
   ${numlist([
     'Quando um aluno falta a uma aula, mando mensagem aos pais no mesmo dia para saber o motivo e convidá-los a voltar — e, quando ele volta, deixo claro que sentimos falta dele',
     'Entro em contato com os pais também para dar boas notícias, não só sobre faltas ou problemas',
     'Uso a conversa inicial para conhecer meus alunos e construir uma comunidade no grupo',
     'Convido todos a ligar câmeras e microfones primeiro — depois ofereço outras formas de participar (reações, chat público ou privado, compartilhar a tela) aos alunos que não se sentem à vontade',
     'Mantenho o objetivo de aprendizagem fixo, mas deixo os alunos explorarem os temas de que gostam — não só a narrativa da história',
     'Demonstro primeiro, dou instruções claras e confiro se todos entenderam antes de começarem',
     'Peço a todos que compartilhem a tela, por turnos, e dou feedback construtivo: o que está indo bem e no que trabalhar a seguir',
     'Ajusto a dificuldade — um desafio extra para quem termina rápido, apoio ou um nível mais simples para quem tem dificuldade',
     'Normalizo os erros, mantenho as regras da aula e os turnos de fala e de escuta e sou firme e gentil',
     'Se um aluno chega cansado por causa do horário, converso com os pais e deixo um comentário no BO',
     'Se o curso não era o que esperavam, fico flexível na aula e proponho ao meu Team Leader uma aula motivacional ou de nivelamento'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Este é o minitreinamento completo.</strong> Quando estiver pronto, continue — depois faça o DST no LMS para encerrar a atividade.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
