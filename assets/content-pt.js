/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.",
    heroCard2:"<b>Com prática.</b> Cada módulo termina com uma verificação rápida.",
    pbLabel:'módulos concluídos',
    tapOpen:'Toque para abrir',
    tapFlip:'Toque para virar',
    lblSee:'O que você vê',
    lblDo:'O que você faz',
    lblSay:'O que você pode dizer',
    lblReport:'Onde relatar',
    lblAvoid:'Evite',
    lblTip:'Dica',
    stepOf:'Passo {i} de {n}',
    next:'Próximo',
    pageTitle:"Minitreinamento · Desengajamento — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Identificando o <span class=\"h-pill\">Desengajamento</span> desde cedo",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por não terem interesse em programação ou design. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Conclua 4 módulos curtos. Para desbloquear o próximo módulo, você precisa obter pelo menos 70% de acerto na avaliação de cada etapa. Duração total aproximada: 25–30 minutos.",
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
 desc:'Por que esse alerta existe, por que você é a pessoa responsável por identificá-lo e quais regras se aplicam quando um pedido de reembolso já foi feito.',
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
     {ic:'🙋', html:`<strong>Dê espaço para ela falar de verdade.</strong> Não faça uma pergunta só por fazer. Crie um momento genuíno em que ela se sinta valorizada e tenha a oportunidade de acertar.`},
     {ic:'🏆', html:`<strong>Crie uma conquista visível logo no início.</strong> Ela deve sair da aula sentindo-se capaz, não atrasada.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça com que ela se sinta notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir se há um pedido de reembolso por meio dos comentários do Client Service no perfil do aluno, no BO. Não há nenhum sistema automático que envie esse aviso. Quando ficar sabendo, lembre-se de que as informações que você obteve durante as aulas são algo que o Client Service não tem como conseguir de outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia, com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem discuta qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que você sempre pode usar:</strong> <em>“O departamento de Atendimento ao Cliente vai ajudar você com isso.”</em> É nesse ponto que termina a sua participação na conversa e o Client Service assume o atendimento.</p>`)}
  `},
  {t:'🌱 Continue depois', html:`
   <div class="card"><p>Independentemente de o pedido de reembolso ser retirado, de a criança continuar no seu grupo ou de passar para outro tutor ou formato, mantenha a atenção extra nas aulas seguintes. Uma mudança positiva que dura apenas uma aula, antes de tudo voltar discretamente ao normal, dificilmente será duradoura.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Módulo 1', emoji:'👁️', color:'var(--coral)',
 title:'Quatro coisas para observar e como agir',
 desc:'Conheça os quatro aspectos do desengajamento, o que você pode fazer em cada situação e como classificar o que observa por cores e definir os próximos passos.',
 obj:'Saber com precisão o que significa “ficar atento ao desengajamento” na prática, o que você pode fazer nas suas aulas para melhorar cada uma das quatro áreas e como classificar o que você vê em Verde, Amarelo ou Vermelho.',
 sections:[
  {t:'👁️ As quatro coisas para observar, em toda aula', html:`
   ${patternCards([
     {ic:'🧍', title:'Presença', desc:'Eles realmente estão comparecendo?', note:'Faltas sem aviso ou desculpas repetidas · dois ou mais cancelamentos em três semanas · atrasos se tornando hábito · entra e sai antes do fim da aula'},
     {ic:'🗣️', title:'Participação', desc:'Eles estão se envolvendo ou apenas presentes?', note:'Câmera sempre desligada · respostas fechadas que não puxam conversa · respostas demoradas ou ausentes · parou de fazer perguntas, só responde ao que lhe é perguntado'},
     {ic:'🛠️', title:'Produção', desc:'Há trabalho de verdade acontecendo?', note:'Não compartilha a tela ou evita fazê-lo · compartilha, mas não mostra progresso · mantém outra janela aberta (jogo, vídeo ou chat) · deixa de entregar a lição de casa por duas aulas consecutivas.'},
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
       {ic:'📩', html:`<strong>Envie uma mensagem aos pais no mesmo dia.</strong> Se o aluno faltar à aula, entre em contato com os pais naquele mesmo dia para saber o motivo e incentivá-los a retornar.`},
       {ic:'💬', html:`<strong>Pergunte como está sendo a aula.</strong> Pergunte aos pais e aos alunos o que acham das aulas: há algo a melhorar, eles gostam dos temas, o que gostariam de ver? Isso mostra que você tem real disposição de adaptar a aula ao grupo.`},
       {ic:'🤗', html:`<strong>Receba-os de volta com carinho.</strong> Quando retornarem, mostre que sentiu falta deles e observe atentamente como participam da aula: compartilham a tela, ficam até o final, fazem perguntas e interagem com os colegas?`},
       {ic:'🗨️', html:`<strong>Aproveite a conversa inicial.</strong> Construa uma comunidade: use os primeiros minutos de cada aula para conhecer seus alunos e criar conexão com eles.`},
       {ic:'🌟', html:`<strong>Entre em contato com os pais também para compartilhar boas notícias.</strong> Não os procure apenas quando o aluno faltar. Conte também algo positivo que ele fez durante a aula. Isso motiva o aluno e incentiva os pais a apoiá-lo.`}
      ]},
     {ic:'🗣️', title:'Participação',
      intro:'A participação aumenta quando os alunos se sentem seguros. <strong>Flexibilidade e conhecimento dos seus alunos</strong> são mais importantes do que qualquer técnica isolada. Respeite o ritmo e o nível de conforto de cada aluno e, aos poucos, incentive-o a dar o próximo passo.',
      tips:[
       {ic:'📷', html:`<strong>Comece convidando todos a ligar câmeras e microfones.</strong> Essa é sempre a primeira recomendação, e vale igualmente para o grupo todo.`},
       {ic:'💬', html:`<strong>Depois ofereça outras formas de participar.</strong> Se um aluno não se sente à vontade com a câmera ou o microfone, deixe que ele participe com as ferramentas com as quais <em>se sente</em> confortável: reações, o chat público ou privado, compartilhar a tela.`},
       {ic:'🙋', html:`<strong>Faça perguntas genuínas.</strong> Pergunte sobre as ideias e os trabalhos dos alunos. Conheça-os melhor para que suas perguntas tenham relação com o que realmente importa para eles.`},
       {ic:'🔄', html:`<strong>Seja flexível.</strong> Adapte a forma de incentivar a participação a cada aluno, em vez de adotar uma única abordagem para todos.`},
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
  instr:'Quatro dicas deste módulo. Leia cada uma e identifique qual das quatro áreas ela ajuda a melhorar. Acerte pelo menos 70% para liberar o próximo módulo.',
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
 desc:'Para situações em que a falta de interesse ainda não é extrema: quais são as causas mais comuns, o que você pode adaptar durante a aula, como evidenciar o progresso do aluno para os responsáveis no primeiro mês e como apoiar estudantes com necessidades especiais ou ansiedade.',
 obj:'Reconhecer as causas mais comuns da falta de interesse leve ou moderada — adequação do curso, horário e nível de dificuldade —, saber o que você pode adaptar por conta própria e o que deve encaminhar ao seu Team Leader, alinhar as expectativas da família sobre o progresso durante o primeiro mês e adaptar o ritmo, a rotina e o tamanho das etapas para alunos com necessidades especiais ou ansiedade.',
 sections:[
  {t:'🔎 Três casos comuns', html:`
   ${stepIconBlock('🔄','O curso não era o que eles esperavam, ou perceberam que design/programação não é para eles', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Uma criança de testa franzida olhando para a tela de um notebook" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Estratégia</div><p>Converse com seu Team Leader sobre a possibilidade de uma aula motivacional. Seja flexível na aula — deixe o aluno adaptar o trabalho dele (por exemplo, dispensar a narrativa da história, mas ainda aprender o tema central da aula). Uma aula de nivelamento também pode ajudar: o aluno pode encontrar outro curso da Kodland que realmente combine com o que ele quer, o que pode evitar o reembolso ao redirecioná-lo para algo de que ele vai gostar.</p>`)}
   ${stepIconBlock('⏰','O horário os deixa sem energia para a aula (cansados depois da escola, aula muito cedo)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Um aluno cansado adormecendo na carteira" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Estratégia</div><p>Converse com os pais e deixe um comentário no BO sobre isso. Uma mudança de horário pode ser exatamente o que preserva a motivação do aluno antes que ela se transforme em um pedido de reembolso.</p>`)}
   ${stepIconBlock('⚖️','Eles perceberam que o curso é fácil demais ou difícil demais para eles', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Uma criança dando de ombros, sem saber o que fazer" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Estratégia</div><p>Esta é uma das situações mais fáceis de reverter, e você faz isso adaptando a própria aula.</p>
   <p><strong>Se estiver fácil demais:</strong> não deixe que os alunos mais rápidos fiquem entediados enquanto os outros ainda estão trabalhando. Ofereça desafios e atividades extras (algumas aulas já incluem essas opções) ou permita que adiantem a lição de casa. Aumente o nível de dificuldade e proponha desafios relacionados a algo de que gostem, para que sintam que estão aprendendo coisas novas. Um aluno que não se sente desafiado não vê sentido em continuar no curso e acaba desistindo.</p>
   <p><strong>Se está difícil demais:</strong> ofereça apoio. Você pode reduzir um pouco a dificuldade da atividade, compartilhar o código enquanto explica como ele funciona para que entendam o processo por trás dele, dar dicas extras para simplificar a atividade e sempre demonstrar na câmera como se faz primeiro, conferindo se eles estão acompanhando. Fora da aula, faça o acompanhamento e destaque algo que eles fizeram bem, para mantê-los motivados a continuar aprendendo.</p>`)}
  `},
  {t:'🤝 Conhecendo nossos alunos', html:`
   <div class="card"><p>Parte de recuperar a atenção de um aluno desengajado vem de construir um vínculo real com ele — uma conexão entre o aluno, os colegas e você — e de criar um espaço seguro ao qual ele queira voltar a cada aula, não só para aprender um tema de que gosta, mas para rever o tutor e os colegas.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Incentive a amizade</strong> por meio de trabalhos em grupo e tarefas compartilhadas.`},
     {ic:'🎮', html:`<strong>Pergunte sobre interesses em comum</strong> — séries ou videogames favoritos, pequenas curiosidades sobre o lugar onde moram.`},
     {ic:'🌟', html:`<strong>Reconheça algo bom ou inteligente</strong> que um aluno fez ou disse na aula.`}
   ])}
  `},
  {t:'📅 O primeiro mês: como mostrar o progresso aos responsáveis', html:`
   <div class="card"><p>Quando os responsáveis não conseguem enxergar o progresso, muitas vezes presumem que ele não está acontecendo. As primeiras aulas de um curso servem para construir as bases: fazer login, explorar as ferramentas e dar os primeiros passos. Para quem vê de fora, pode parecer que "nada está acontecendo". Se ninguém explicar à família o que esperar nesse início, a impressão de "meu filho não está aprendendo nada" pode rapidamente se transformar em "meu filho perdeu o interesse".</p></div>
   ${patternCards([
     {ic:'🧭', title:'Consegue se orientar sozinho', desc:'Faz login e navega pela plataforma e pela ferramenta do curso sem ajuda.', note:'Precisar de menos auxílio a cada semana já é um avanço real.'},
     {ic:'🪜', title:'Conclui pequenas tarefas', desc:'Realiza as atividades curtas de cada aula precisando de cada vez menos apoio.', note:'O mais importante nesse momento é o esforço e a autonomia, não a perfeição.'},
     {ic:'🗣️', title:'Consegue explicar o que fez', desc:'Explica com as próprias palavras o que construiu e por quê.', note:'Incentive o aluno a mostrar aos responsáveis, em casa, o que criou.'},
     {ic:'🏁', title:'Tem algo para mostrar', desc:'Um primeiro resultado concreto: algo que se movimenta, um desenho inicial ou um primeiro programa funcionando.', note:'Consulte o guia da aula: qual é a primeira criação que o curso propõe?'}
   ],2)}
   ${rclock([
     {ic:'👋', when:'Depois das aulas 1–2', t:'Alinhar expectativas', d:'O que fizemos, como serão as primeiras semanas e como a família pode ajudar em casa.'},
     {ic:'🏁', when:'Por volta da aula 4', t:'Primeira evidência', d:'Algo concreto que a criança criou ou já consegue fazer. Uma captura de tela ou um breve relato já é suficiente.'},
     {ic:'🔭', when:'A cada 4 aulas', t:'Acompanhar o progresso', d:'O que o aluno aprendeu, quais são os próximos passos e uma conquista para celebrar.'}
   ])}
   ${doavoid(
     ['Descrever o progresso por meio de pequenas etapas concretas que os responsáveis possam observar.','Incentivar os responsáveis a pedir que a criança mostre o que criou.','Compartilhar as primeiras evidências de progresso antes que os responsáveis precisem solicitar.'],
     ['Prometer resultados acelerados: <em>"Até o próximo mês, ele já estará criando os próprios jogos"</em>.','Usar termos técnicos que os responsáveis não consigam visualizar ou compreender.','Entrar em contato com os responsáveis apenas quando surge algum problema.']
   )}
   ${co('co-cute','😟',`<p><strong>Se um responsável estiver insatisfeito porque a atividade de um módulo ou aula não corresponde ao que esperava:</strong> Primeiro, escute com atenção. Depois, explique o que será abordado nos próximos módulos (consulte a ementa do curso) e esclareça que a história ou a temática das atividades pode ser adaptada aos interesses da criança, mantendo as mesmas ferramentas e habilidades trabalhadas. Nos cursos que utilizam múltiplas ferramentas, ofereça a possibilidade de usar outro programa para realizar a mesma tarefa — a wiki e as anotações para tutores trazem alternativas para várias dessas atividades. Se a família solicitar algo fora do escopo do curso, registre a ocorrência no BO e informe seu Team Leader. Nunca prometa alterações curriculares por conta própria.</p>`)}
  `},
  {t:'🧠 Alunos com necessidades especiais ou ansiedade: ritmo, rotina e etapas menores', html:`
   <div class="card"><p>Alguns alunos que parecem ter "perdido o interesse" podem, na verdade, estar se sentindo <strong>sobrecarregados</strong>. O autismo (TEA), o TDAH e a ansiedade podem fazer com que uma aula em grupo online pareça imprevisível, rápida demais ou longa demais. Quando uma criança se sente assim, pode se retrair e deixar de participar. Talvez a família não tenha informado você, o aluno ainda esteja em processo de investigação ou nunca tenha passado por uma avaliação. <strong>Você não precisa de um laudo para adaptar sua aula</strong> e nunca deve fazer suposições clínicas: não rotule a criança, nem diante da família nem diante do grupo.</p></div>
   ${co('co-idea','🌈',`<p><strong>Cada caso é único.</strong> Dois alunos com o mesmo diagnóstico podem se comportar de maneiras completamente distintas: um pode falar sem parar sobre seu assunto favorito, outro pode evitar abrir o microfone, outro pode terminar as tarefas em poucos minutos e ficar entediado, enquanto outro precisa de uma rotina bem definida para se sentir seguro. Observe e conheça cada aluno individualmente — isso é muito mais importante do que qualquer rótulo.</p>`)}
   ${dimTabs([
     {ic:'🔁', title:'Rotina',
      intro:'A previsibilidade reduz a ansiedade e libera a atenção para o aprendizado.',
      tips:[
       {ic:'🧱', html:`<strong>Mantenha a mesma estrutura em todas as aulas:</strong> abertura, prática e encerramento, sempre na mesma ordem.`},
       {ic:'⏭️', html:`<strong>Avise sobre as transições antes que aconteçam:</strong> <em>"Daqui a 5 minutos vamos trocar de atividade e depois..."</em>. Uma mudança repentina pode fazer o aluno travar ou se recusar a participar.`},
       {ic:'📋', html:`<strong>Exiba na tela ou no chat uma lista numerada</strong> com as etapas da aula, para que o aluno saiba sempre em que momento está.`},
       {ic:'⏲️', html:`<strong>Use cronômetros com cautela.</strong> Eles motivam alunos que gostam de desafios, mas, para quem se frustra com a pressão do tempo, deixe o cronômetro apenas como referência visual, sem contagem regressiva em voz alta.`}
      ]},
     {ic:'🐢', title:'Ritmo',
      intro:'Reduza a velocidade da sua explicação, não o potencial do aluno.',
      tips:[
       {ic:'⏳', html:`<strong>Dê tempo para o aluno responder.</strong> Aguarde alguns segundos a mais do que pareceria habitual antes de repetir a pergunta ou passar para a próxima etapa.`},
       {ic:'🗣️', html:`<strong>Uma voz tranquila e um ritmo pausado</strong> transmitem segurança antes mesmo de você iniciar o conteúdo.`},
       {ic:'🤸', html:`<strong>Pequenas pausas para movimentação</strong> entre as atividades ajudam a manter o foco muito mais do que pedir que o aluno fique imóvel: <em>"Que tal ficar de pé e se espreguiçar por 10 segundos antes de continuarmos?"</em>.`},
       {ic:'🚀', html:`<strong>O aluno termina as tarefas rápido e fica entediado com facilidade?</strong> Utilize as atividades extras da aula ou proponha uma variação, um desafio visual ou um toque pessoal ao projeto.`}
      ]},
     {ic:'🪜', title:'Etapas menores',
      intro:'Transforme a instrução "terminar o projeto" em microtarefas, cada uma com um objetivo claro e alcançável.',
      tips:[
       {ic:'🎯', html:`<strong>Exemplo prático:</strong> <em>"Vamos fazer apenas o cenário do personagem agora. Me avise quando terminar"</em>. Cada pequena entrega concluída gera uma sensação genuína de conquista.`},
       {ic:'1️⃣', html:`<strong>Dê uma instrução por vez</strong> e reforce o objetivo antes de iniciar cada atividade.`},
       {ic:'✅', html:`<strong>Utilize um checklist visível</strong> do que já foi feito e do que ainda falta, para que o aluno não dependa apenas da memória. Isso ajuda especialmente quando o aluno diz "Terminei!" e logo percebe que perdeu o fio da meada.`},
       {ic:'🧗', html:`<strong>Demonstre a primeira etapa e deixe o aluno executar o restante</strong>, reduzindo gradualmente o suporte ao longo da aula.`}
      ]},
     {ic:'💬', title:'Outras formas de participação',
      intro:'Nem todos os alunos vão responder em voz alta, e está tudo bem.',
      tips:[
       {ic:'😀', html:`<strong>Aceite respostas pelo chat,</strong> com emojis, reações ou apontando elementos na tela.`},
       {ic:'✌️', html:`<strong>Ofereça duas opções visíveis em vez de fazer uma pergunta aberta:</strong> <em>"Você prefere o carro vermelho ou o azul?"</em> em vez de <em>"O que você gostaria de fazer?"</em>.`},
       {ic:'🎉', html:`<strong>Valorize qualquer tentativa intencional de comunicação,</strong> não apenas as respostas faladas.`},
       {ic:'⭐', html:`<strong>Use os assuntos favoritos do aluno como ponte para o engajamento.</strong> Um tema de grande interesse é um excelente ponto de partida: adapte a atividade do dia em torno desse universo.`}
      ]}
   ],'✅ Isso significa estabelecer rotinas, adaptar o ritmo, dividir tarefas em etapas menores e oferecer múltiplas formas de participação.')}
   ${co('co-cute','🫂',`<p><strong>Quando surgirem frustração, choro ou bloqueio:</strong> Primeiro, controle sua própria reação: abaixe o tom de voz e diminua o ritmo. Valide a emoção sem julgar: <em>"Percebo que isso está te deixando frustrado(a)"</em> e ofereça uma ação concreta em vez de dizer apenas <em>"calma"</em>: <em>"Vamos olhar isso juntos passo a passo"</em>. Volte a uma etapa que o aluno já conseguiu realizar e retome o conteúdo novo somente quando ele estiver mais tranquilo. Nunca force o contato visual, a abertura da câmera ou a continuação imediata da tarefa naquele momento. Encerre reconhecendo o esforço dedicado, não apenas o resultado final.</p>`)}
   ${co('co-idea','👪',`<p><strong>Ao conversar com a família, compartilhe observações, não julgamentos:</strong> Em vez de dizer <em>"Ele se comportou mal na aula"</em>, experimente: <em>"Hoje percebi que a Maria ficou frustrada quando mudamos de atividade sem aviso prévio. Vocês já notaram algo parecido em casa? O que costuma ajudá-la nesses momentos?"</em>. As famílias conhecem melhor do que ninguém o que funciona para seus filhos. Se a família não responder, mantenha a estrutura consistente nas aulas, registre suas tentativas de contato e deixe que o Client Service conduza a comunicação caso a situação se torne delicada.</p>`)}
   ${co('co-danger','📝',`<p><strong>Quando as adaptações em grupo não forem suficientes:</strong> Se a criança continuar se desligando ou demonstrar precisar de um ritmo incompatível com a dinâmica da turma, registre um comentário detalhado no BO explicando o que você observou e quais estratégias já aplicou, e acione seu Team Leader. Você pode sugerir uma alternativa, mas a decisão cabe à liderança. Nunca prometa aulas individuais ou mudanças de formato por conta própria.</p>`)}
  `}
 ],
 ix:{
  title:'Despertando a atenção deles — verificação do módulo',
  instr:'Escolha a melhor ação ou classifique cada situação na categoria correspondente. É necessário obter 70% de acerto para desbloquear a lista de verificação final.',
  items:[
   {type:'choice', prompt:'Um aluno termina todas as atividades bem mais rápido que o grupo e depois começa a distrair os outros. Qual é a primeira atitude mais útil?', opts:['Dizer aos pais que o curso parece fácil demais e perguntar o que eles gostariam de fazer','Esperar algumas aulas para ver se o resto do grupo o alcança','Aumentar a dificuldade para ele — um desafio extra ou adiantar o dever de casa'], correct:2, fb:'O tédio pede um desafio de verdade, adaptado na aula. Um aluno que não se sente desafiado não vê sentido no curso.'},
   {type:'choice', prompt:'Um aluno está constantemente cansado e sem foco em uma aula marcada logo depois da escola. Qual é o melhor primeiro passo?', opts:['Conversar com os pais sobre como o horário está funcionando e deixar um comentário no BO','Manter o horário atual — ele foi combinado na matrícula','Pedir ao aluno que descanse mais antes da aula'], correct:0, fb:'Um horário que esgota o aluno muitas vezes tem solução — converse com os pais e deixe o comentário no BO, para que uma mudança possa ser considerada antes que a motivação se perca.'},
   {type:'choice', prompt:'Um aluno diz que os temas não o interessam e que gostaria de ter escolhido outro curso da Kodland. O que você mesmo pode fazer?', opts:['Dizer que você vai providenciar a troca para o curso que ele prefere','Ser flexível quanto à forma como ele faz as tarefas e propor ao seu Team Leader uma aula motivacional ou de nivelamento','Explicar que as trocas de curso são tratadas por outro departamento e continuar a aula'], correct:1, fb:'Você pode adaptar a forma como ele trabalha na aula e propor a opção de aula de nivelamento ao seu Team Leader — você não pode prometer uma troca de curso por conta própria.'},
   {type:'choice', prompt:'Um aluno está com dificuldade no nível e ficando frustrado. Qual destas atitudes mais ajuda?', opts:['Avançar rápido para que ele não se sinta exposto','Mostrar na câmera como se faz primeiro, compartilhar o código enquanto explica como ele funciona e conferir se ele acompanha','Deixá-lo copiar a solução de um colega para conseguir acompanhar'], correct:1, fb:'Demonstre primeiro, explique o processo por trás do código e confira a compreensão — depois, fora da aula, faça o acompanhamento destacando algo que ele fez bem.'},
   {type:'choice', prompt:'Qual destas atitudes melhor constrói o tipo de vínculo que faz um aluno desengajado voltar?', opts:['Deixar a conversa descontraída fora da aula para sobrar mais tempo para o conteúdo','Chamar principalmente os alunos que sempre respondem, para manter o ritmo','Trabalhos em grupo, perguntas sobre seus jogos ou séries favoritos e notar algo inteligente que ele disse'], correct:2, fb:'Uma conexão com os colegas e com você é o que faz o aluno querer voltar a cada aula — não só o tema.'},
   {type:'choice', prompt:'Esta é a quarta aula de um curso novo e os responsáveis ainda não receberam nenhuma mensagem sua. O que você envia?', opts:['Uma mensagem curta com um exemplo concreto do que a criança criou, o que está aprendendo atualmente e quais são os próximos passos.','"Está tudo indo muito bem, não se preocupem!"','Nada — se houvesse algum problema, os responsáveis entrariam em contato.'], correct:0, fb:'Mostrar evidências concretas de pequenos avanços ajuda a família a visualizar o progresso durante o primeiro mês, evitando que "meu filho não está aprendendo nada" se transforme em "meu filho não está interessado".'},
   {type:'sort', prompt:'A que tipo de adaptação esta situação corresponde?', card:'Antes de mudar de atividade, você diz: "Daqui a 5 minutos vamos parar de desenhar e começar a animar". Um aluno que antes travava a cada transição agora consegue acompanhar a aula normalmente.', zones:[{label:'🔁 Rotina', fb:'Correto! Avisar sobre as mudanças antes que aconteçam torna a aula previsível, e a previsibilidade reduz a ansiedade.'},{label:'🐢 Ritmo', fb:'Não exatamente. A velocidade da explicação não foi reduzida. A transição foi anunciada com antecedência: isso corresponde à Rotina.'},{label:'🪜 Etapas menores', fb:'Não exatamente. A tarefa não foi dividida em partes menores. Anunciar a mudança com antecedência está ligado à Rotina.'}], correctZone:0},
   {type:'choice', prompt:'Um aluno com TDAH continua dizendo "Terminei!" e depois admite que perdeu o fio do que estava fazendo. Qual é a melhor forma de ajudá-lo?', opts:['Pedir que fique sentado e se concentre mais.','Dividir o trabalho em microtarefas com objetivos visíveis e utilizar uma lista do que já foi concluído e do que ainda falta.','Entregar o projeto inteiro de uma vez para que ele trabalhe no próprio ritmo.'], correct:1, fb:'Pequenas tarefas com objetivos claros, acompanhadas de um checklist visível, reduzem a sobrecarga da memória de trabalho. Além disso, cada microtarefa concluída gera uma sensação real de conquista.'},
   {type:'choice', prompt:'Um aluno começa a chorar porque a atividade que está fazendo não funciona. O que você faz primeiro?', opts:['"Calma, não é nada demais. Vamos continuar".','Abaixa o tom de voz, valida o sentimento — "Percebo que isso está te deixando frustrado(a)" — e oferece uma ação concreta: "Vamos olhar isso juntos".','Continua com o grupo e volta a ajudar o aluno apenas no final da aula.'], correct:1, fb:'Dizer apenas "calma" não oferece à criança um caminho prático para sair do bloqueio. Valide a emoção, proponha uma ação imediata e retome uma etapa que ela já dominou antes de avançar.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrá-lo.',
 obj:'Revise o checklist abaixo. Este módulo não tem avaliação. Leia os itens e, em seguida, conclua o minitreinamento.',
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
     'Se o curso não era o que esperavam, fico flexível na aula e proponho ao meu Team Leader uma aula motivacional ou de nivelamento',
     'Durante o primeiro mês, evidencio o progresso aos responsáveis: envio uma mensagem após as primeiras aulas e compartilho exemplos concretos por volta da quarta aula.',
     'Mantenho a mesma estrutura em todas as aulas, aviso sobre as transições com antecedência e exibo as etapas da aula na tela ou no chat.',
     'Para alunos com necessidades especiais ou ansiedade, desacelero minhas explicações, divido as tarefas em microetapas com objetivos visíveis e aceito respostas pelo chat ou por reações.',
     'Nunca rotule nem diagnostique uma criança. Compartilho observações concretas com a família e pergunto quais estratégias funcionam em casa.',
     'Quando as adaptações dentro do grupo não são suficientes, registro um comentário no BO e informo meu Team Leader. Nunca prometo aulas individuais ou mudanças de formato.'
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
