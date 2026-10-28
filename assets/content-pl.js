/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Brak zaangażowania — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Wczesne wychwytywanie <span class=\"h-pill\">braku zaangażowania</span>",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy, bo nie interesuje ich programowanie lub projektowanie. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Przejdź przez 4 krótkie moduły. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 15–20 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, z której trafiasz do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób tak',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego zwracamy uwagę na ten sygnał, dlaczego to właśnie ty możesz go wychwycić — i jakie zasady obowiązują, gdy wniosek o zwrot już wpłynął.',
 obj:'Zrozum, dlaczego brak zaangażowania łatwo przeoczyć, dlaczego to ty masz najlepszą pozycję, by go wychwycić, i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'💤 Brak zaangażowania prawie nigdy nie jest głośny', html:`
   <div class="card"><p>Nauczyciele często opisują ucznia jako zaangażowanego — <em>„brał udział, zadawał pytania”</em> — a kilka tygodni później ten sam uczeń prosi o zwrot pieniędzy. Brak zaangażowania był obecny przez cały czas. Po prostu nie był głośny.</p></div>
   ${co('co-idea','💡',`<p><strong>Dlaczego właśnie ty.</strong> Nikt inny w firmie nie widzi tego ucznia co tydzień. Dashboard pokazuje frekwencję po fakcie. Ty widzisz kamerę, która się wyłącza, rękę, która przestała się podnosić, ekran, którego uczeń przestał udostępniać — na bieżąco, kiedy wciąż można coś z tym zrobić.</p>`)}
  `},
  {t:'🔎 Co zwykle za tym stoi', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>Kurs nie był wyborem ucznia</strong> — zapisał go rodzic, a nie samo dziecko.`},
     {ic:'📅', html:`<strong>Harmonogram, który nie pasuje</strong> do jego uwagi lub poziomu energii.`},
     {ic:'📈', html:`<strong>Frustracja poziomem</strong> — za trudno albo za łatwo, by czuć, że się czegoś uczy.`},
     {ic:'👀', html:`<strong>Rodzic stracił realny wgląd</strong> w faktyczne postępy ucznia.`}
   ])}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Poniższe zasady obowiązują bez względu na powód — przeczytaj je najpierw, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na lekcji.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie ta rozmowa.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na ratunek', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — tylko autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że zauważasz coś konkretnego, a nie chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy już wiesz, to, co widzisz na swoich lekcjach, jest informacją, której Dział Obsługi Klienta nie zdobędzie w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz — daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże w tej sprawie.”</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Ratunek, który trzyma się przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle się nie udaje.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Moduł 1', emoji:'👁️', color:'var(--coral)',
 title:'Cztery rzeczy, na które warto patrzeć — i co z nimi zrobić',
 desc:'Cztery konkretne wymiary braku zaangażowania, co możesz zrobić z każdym z nich i jak przypisać to, co widzisz, do koloru i kolejnego kroku.',
 obj:'Wiedz dokładnie, co w praktyce oznacza „obserwowanie braku zaangażowania”, co możesz zrobić na lekcjach, by poprawić każdy z czterech obszarów, i jak sklasyfikować to, co widzisz, jako zielone, żółte lub czerwone.',
 sections:[
  {t:'👁️ Cztery rzeczy, na które patrzysz na każdej lekcji', html:`
   ${patternCards([
     {ic:'🧍', title:'Obecność', desc:'Czy uczeń faktycznie się pojawia?', note:'Nieobecności bez uprzedzenia lub powtarzające się wymówki · dwa lub więcej odwołań w ciągu trzech tygodni · spóźnienia wchodzące w nawyk · loguje się i wychodzi przed końcem zajęć'},
     {ic:'🗣️', title:'Uczestnictwo', desc:'Czy się angażuje, czy tylko jest obecny?', note:'Kamera stale wyłączona · zamknięte odpowiedzi, które nie zachęcają do rozmowy · opóźnione odpowiedzi albo żadne · przestał zadawać pytania, odpowiada tylko na to, o co jest pytany'},
     {ic:'🛠️', title:'Praca', desc:'Czy faktycznie powstaje jakaś praca?', note:'Nie udostępnia ekranu albo tego unika · udostępnia, ale nie widać postępów · otwarte inne okno (gra, film, czat) · dwie lekcje z rzędu bez oddanej pracy domowej'},
     {ic:'🧩', title:'Dopasowanie i otoczenie', desc:'Czy warunki wokół ucznia się sprawdzają?', note:'Powtarzające się problemy techniczne · harmonogram kolidujący ze szkołą lub innymi obowiązkami · kurs wybrali rodzice, a nie uczeń · wyrażana frustracja: „to jest trudne / nudne”'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Jeden sygnał może oznaczać po prostu gorszy dzień. Dwa sygnały — na tej samej lekcji lub na dwóch lekcjach — zaczynają pokazywać trend.</strong> Nie czekaj na trzeci: zanim się pojawi, często to twój lider zespołu odkrywa go podczas wyjaśniania sprawy zwrotu, a nie ty.</p>`)}
  `},
  {t:'🛠️ Co możesz zrobić z każdym z nich', html:`
   <div class="card"><p>Zauważenie sygnału to tylko połowa pracy. Wybierz każdy z czterech obszarów poniżej, aby zobaczyć, co realnie możesz zrobić na swoich lekcjach, żeby odwrócić sytuację.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Obecność',
      intro:'Nieobecności mogą mieć wiele przyczyn — zmianę planu, problemy zdrowotne, kłopoty techniczne, pomyłkę co do godziny, wakacje. To czynniki zewnętrzne i rozwiązuje się je w inny sposób. Oto, co możesz zrobić, gdy nieobecność wiąże się z <strong>brakiem zaangażowania</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Napisz do rodzica tego samego dnia.</strong> Jeśli uczeń opuści lekcję, napisz do rodzica jeszcze tego dnia, aby poznać przyczynę — i zachęcić do powrotu.`},
       {ic:'💬', html:`<strong>Zapytaj, jak odbierane są zajęcia.</strong> Zapytaj rodziców i uczniów, jak czują się na lekcjach: czy coś można poprawić, czy lubią tematy, co chcieliby zobaczyć? To pokazuje, że naprawdę chcesz dopasować zajęcia do grupy.`},
       {ic:'🤗', html:`<strong>Powitaj ucznia po powrocie.</strong> Gdy wróci, daj mu znać, że go brakowało — i zwróć szczególną uwagę na jego pracę na tej lekcji: czy udostępnia ekran, zostaje do końca zajęć, zadaje pytania, nawiązuje kontakt z innymi?`},
       {ic:'🗨️', html:`<strong>Wykorzystaj luźną rozmowę na początku.</strong> Buduj społeczność: wykorzystaj pierwsze minuty każdej lekcji, aby poznawać swoich uczniów i nawiązywać z nimi kontakt.`},
       {ic:'🌟', html:`<strong>Kontaktuj się z rodzicami także z dobrymi wiadomościami.</strong> Nie odzywaj się tylko w sprawie nieobecności — wskaż coś świetnego, co uczeń zrobił na zajęciach. To motywuje ucznia i zachęca rodzica do wspierania go.`}
      ]},
     {ic:'🗣️', title:'Uczestnictwo',
      intro:'Uczestnictwo rośnie, gdy uczniowie czują się bezpiecznie. <strong>Elastyczność i znajomość uczniów</strong> są ważniejsze niż jakakolwiek pojedyncza technika — zacznij od tego, co dla danego ucznia komfortowe, a potem pomóż mu zrobić kolejny krok.',
      tips:[
       {ic:'📷', html:`<strong>Zacznij od zaproszenia wszystkich do włączenia kamer i mikrofonów.</strong> To zawsze pierwsza rekomendacja i jest taka sama dla całej grupy.`},
       {ic:'💬', html:`<strong>Potem zaproponuj inne sposoby udziału.</strong> Jeśli uczeń nie czuje się komfortowo z kamerą lub mikrofonem, pozwól mu uczestniczyć za pomocą narzędzi, z którymi <em>czuje się</em> swobodnie: reakcji, czatu publicznego lub prywatnego, udostępniania ekranu.`},
       {ic:'🙋', html:`<strong>Zadawaj prawdziwe pytania.</strong> Pytaj o pomysły i pracę uczniów — i poznawaj ich, aby twoje pytania wiązały się z tym, co naprawdę ich interesuje.`},
       {ic:'🔄', html:`<strong>Działaj elastycznie.</strong> Dopasuj sposób zachęcania do udziału do każdego ucznia, zamiast stosować jedną zasadę, która nie pasuje nikomu.`},
       {ic:'🎲', html:`<strong>Z najmłodszymi zrób z tego grę.</strong> Oferuj drobne nagrody i stosuj gry na czas — <em>„kto znajdzie to w 30 sekund?”</em> — aby udział był zabawą, a nie ryzykiem.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Bezpieczna przestrzeń do zadawania pytań', brief:'W tym filmie uczniowie czują się bezpiecznie: zadają pytania, pomagają kolegom w ich problemach i proszą nauczyciela o pomoc. Zwróć uwagę, jak życzliwie i ze zrozumieniem nauczyciel do nich mówi.'}},
     {ic:'🛠️', title:'Praca',
      intro:'Trzymaj się <strong>celu nauki</strong> — a we wszystkim innym zachowaj elastyczność. Prawdziwa praca dzieje się wtedy, gdy uczniowie wiedzą dokładnie, co mają robić, i czują, że to ich praca.',
      tips:[
       {ic:'🎯', html:`<strong>Cel stały, temat dowolny.</strong> Pozwól uczniom eksplorować tematy, które lubią najbardziej. Nie zamykaj ich w fabule lekcji, jeśli nie czują się z nią dobrze — o ile ćwiczą daną umiejętność.`},
       {ic:'🎬', html:`<strong>Najpierw pokaż, potem daj jasne instrukcje.</strong> Pokaż, jak to się robi, wyjaśnij dokładnie, co będziecie robić, i sprawdź, czy wszyscy zrozumieli — żeby lekcja nigdy nie stała się chaotyczna.`},
       {ic:'🖥️', html:`<strong>Poproś wszystkich o udostępnienie ekranu</strong> — po kolei, na różnych etapach lekcji — aby praca każdego ucznia była widoczna, a nie tylko praca najszybszych.`},
       {ic:'💬', html:`<strong>Dawaj konstruktywną informację zwrotną.</strong> Powiedz uczniom, co robią dobrze i nad czym popracować na kolejnych lekcjach.`},
       {ic:'⚖️', html:`<strong>Dostosuj poziom trudności.</strong> Jeśli kończą szybko, zaproponuj coś dodatkowego; jeśli pracują wolniej, obniż poziom trudności lub zaoferuj wsparcie.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Konstruktywna, pozytywna informacja zwrotna', brief:'W tym filmie nauczyciel daje konstruktywną i pozytywną informację zwrotną na temat pracy ucznia.'}},
     {ic:'🧩', title:'Dopasowanie i otoczenie',
      intro:'Uczeń, który nie czuje się dobrze na zajęciach, nie pozostanie zaangażowany, choćby treść była najlepsza. <strong>Atmosferę zajęć budujesz ty</strong>, lekcja po lekcji.',
      tips:[
       {ic:'🌱', html:`<strong>Normalizuj błędy</strong> i dawaj informację zwrotną, która pomaga, a nie ocenia.`},
       {ic:'🤝', html:`<strong>Wspieraj przyjaźnie</strong> między uczniami — wspólne zadania, wzajemna pomoc, docenianie nawzajem swoich prac.`},
       {ic:'📜', html:`<strong>Pilnuj zasad klasy</strong> — i kontroluj, kto i kiedy mówi, a kto słucha.`},
       {ic:'🔧', html:`<strong>Spokojnie rozwiązuj problemy techniczne.</strong> Pomóż uczniowi, który ma problem, nie zostawiając reszty grupy samej sobie — nikt nie powinien się nudzić na zajęciach.`},
       {ic:'⚖️', html:`<strong>Łącz stanowczość z życzliwością.</strong> Brak dyscypliny również sprawia, że uczniowie czują się niekomfortowo. Znajdź równowagę: nie możesz rządzić autorytarnie, ale nie możesz też stracić kontroli nad klasą.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Szczere zainteresowanie', brief:'W tym filmie nauczyciel okazuje uczniom szczere zainteresowanie podczas luźnej rozmowy — zauważa, że jeden z uczniów ma gips, i pyta, jak się czuje.'}}
   ])}
  `},
  {t:'🚦 Sklasyfikuj to, co widzisz, i działaj odpowiednio', html:`
   ${classifyCard('co-ok','🟢','Brak utrzymujących się sygnałów. Uczestniczy w większości lekcji, udostępnia ekran, robi postępy.','Podtrzymuj relację — co 4 lekcje wysyłaj opiekunowi jeden dowód postępów, zanim sam o to poprosi.')}
   ${classifyCard('co-cute','🟡','Jeden sygnał pojawia się konsekwentnie przez całą lekcję lub powtarza się na dwóch lekcjach — albo dwa sygnały na tej samej lekcji.','Porozmawiaj z uczniem na lekcji i delikatnie zbadaj przyczynę. Może to być zwykła nieśmiałość.')}
   ${classifyCard('co-danger','🔴','Więcej niż dwa sygnały na tej samej lekcji lub dwa sygnały utrzymujące się przez więcej niż jedną lekcję.','Tego samego dnia powiadom lidera zespołu, podając konkrety. Nadal dobrze ucz i utrzymuj ciepły kontakt z rodziną — propozycja dodatkowej lekcji, zmiany harmonogramu czy czegokolwiek innego wychodzi od twojego lidera zespołu (TL), nigdy bezpośrednio od ciebie.')}
   ${classifyCard('co-danger','🚨','Uczeń nie wykazuje zainteresowania programowaniem ani kursami Kodland — niezależnie od tego, co jeszcze widzisz.','Od razu traktuj to jako czerwony sygnał. Ten powód jest już oznaczony jako priorytetowy, więc ma pierwszeństwo przed każdą inną oceną.')}
  `}
 ],
 ix:{
  title:'Któremu obszarowi pomaga ta wskazówka?',
  instr:'Cztery wskazówki z tego modułu. Przeczytaj każdą i zdecyduj, w którym z czterech obszarów pomaga odwrócić sytuację. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Któremu obszarowi pomaga ta wskazówka?', card:'💬 Uczeń nie czuje się komfortowo z włączoną kamerą, więc zapraszasz go do udziału przez czat i reakcje.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — chodzi o to, jak uczeń bierze udział, gdy już jest na lekcji. To Uczestnictwo.'},{label:'🗣️ Uczestnictwo', fb:'Zgadza się — najpierw zaproś wszystkich do włączenia kamer i mikrofonów, a potem zaproponuj inne sposoby udziału: reakcje, czat publiczny lub prywatny, udostępnianie ekranu.'},{label:'🛠️ Praca', fb:'Nie do końca — nie chodzi o samą pracę, ale o to, jak uczeń włącza się do rozmowy. To Uczestnictwo.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Blisko — to pomaga mu poczuć się komfortowo, ale wskazówka dotyczy sposobu udziału. To Uczestnictwo.'}], correctZone:1},
   {type:'sort', prompt:'Któremu obszarowi pomaga ta wskazówka?', card:'📜 Uczeń śmieje się z błędu kolegi. Spokojnie przypominasz wszystkim zasady klasy i traktujesz błąd jako część nauki.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — chodzi o to, jak bezpiecznie czują się uczniowie na zajęciach. To Dopasowanie i otoczenie.'},{label:'🗣️ Uczestnictwo', fb:'Blisko — bezpieczna atmosfera sprzyja uczestnictwu, ale ta wskazówka dotyczy atmosfery zajęć: Dopasowanie i otoczenie.'},{label:'🛠️ Praca', fb:'Nie do końca — chodzi o atmosferę, a nie o pracę. To Dopasowanie i otoczenie.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Zgadza się — normalizowanie błędów, pilnowanie zasad klasy i łączenie stanowczości z życzliwością sprawiają, że na zajęciach jest bezpiecznie.'}], correctZone:3},
   {type:'sort', prompt:'Któremu obszarowi pomaga ta wskazówka?', card:'📩 Uczeń opuszcza lekcję. Tego samego dnia piszesz do rodzica, aby poznać przyczynę — i zachęcić do powrotu.', zones:[{label:'🧍 Obecność', fb:'Zgadza się — wiadomość wysłana tego samego dnia pokazuje, że to zauważasz, pozwala poznać przyczynę i zaprasza ucznia z powrotem. A gdy wróci, daj mu znać, że go brakowało.'},{label:'🗣️ Uczestnictwo', fb:'Nie do końca — uczeń w ogóle nie był na lekcji. To Obecność.'},{label:'🛠️ Praca', fb:'Nie do końca — chodzi o pojawianie się na zajęciach, a nie o pracę. To Obecność.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Nie do końca — ta wskazówka dotyczy samej nieobecności. To Obecność.'}], correctZone:0},
   {type:'sort', prompt:'Któremu obszarowi pomaga ta wskazówka?', card:'⚖️ Uczeń kończy ćwiczenie w połowie przewidzianego czasu, więc proponujesz mu dodatkowe wyzwanie — a najpierw udostępniasz swój ekran, aby pokazać kolejny krok.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — uczeń jest na lekcji i pracuje. Chodzi o samą pracę: Praca.'},{label:'🗣️ Uczestnictwo', fb:'Nie do końca — chodzi o poziom i jasność zadania. To Praca.'},{label:'🛠️ Praca', fb:'Zgadza się — dostosowanie poziomu trudności, pokazanie najpierw i jasne instrukcje sprawiają, że praca rzeczywiście się dzieje.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Nie do końca — chodzi o zadanie, a nie o atmosferę. To Praca.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Moduł 2', emoji:'🧭', color:'var(--coral)',
 title:'Jak przyciągnąć uwagę ucznia',
 desc:'Gdy brak zaangażowania nie jest jeszcze skrajny: co zwykle go powoduje i co realnie możesz dostosować na lekcji.',
 obj:'Rozpoznaj najczęstsze, jeszcze nieskrajne przyczyny braku zaangażowania — dopasowanie kursu, harmonogram i poziom trudności — i wiedz, co możesz dostosować samodzielnie, a co przekazać przez lidera zespołu.',
 sections:[
  {t:'🔎 Trzy częste przypadki', html:`
   ${stepIconBlock('🔄','Kurs nie spełnił oczekiwań albo uczeń uznał, że projektowanie/programowanie nie jest dla niego', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Dziecko marszczące brwi przed ekranem laptopa" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Strategia</div><p>Porozmawiaj z liderem zespołu o możliwości lekcji motywacyjnej. Zachowaj elastyczność na zajęciach — pozwól uczniowi dostosować swoją pracę (np. pominąć fabularną otoczkę, ale nadal opanować główny temat lekcji). Pomóc może też lekcja poziomująca: uczeń może znaleźć inny kurs Kodland, który naprawdę odpowiada temu, czego chce — a skierowanie go do czegoś, co mu się spodoba, może uchronić przed zwrotem.</p>`)}
   ${stepIconBlock('⏰','Harmonogram sprawia, że brakuje mu energii na lekcję (zmęczenie po szkole, zajęcia za wcześnie)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Zmęczony uczeń zasypiający przy biurku" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Strategia</div><p>Porozmawiaj z rodzicem i zostaw na ten temat komentarz w BO. Zmiana harmonogramu może być dokładnie tym, co utrzyma motywację ucznia, zanim skończy się to wnioskiem o zwrot.</p>`)}
   ${stepIconBlock('⚖️','Uczeń uznał, że kurs jest dla niego za łatwy lub za trudny', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Dziecko niepewnie wzruszające ramionami" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Strategia</div><p>To jedna z sytuacji, które najłatwiej uratować — robisz to, dostosowując samą lekcję.</p>
   <p><strong>Jeśli jest za łatwo:</strong> nie pozwól, by szybsi uczniowie się nudzili, gdy inni jeszcze pracują. Proponuj wyzwania i dodatkowe zadania (niektóre lekcje już je zawierają — możesz też pozwolić im wcześniej zacząć pracę domową). Podnieś poziom trudności i pozwól im zmierzyć się z wyzwaniem w czymś, co lubią, żeby czuli, że uczą się czegoś nowego. Uczeń, który nie czuje wyzwania, nie widzi sensu w kursie i odchodzi.</p>
   <p><strong>Jeśli jest za trudno:</strong> zapewnij wsparcie. Możesz nieco obniżyć poziom trudności zadania, udostępnić kod i wyjaśnić, jak działa, aby uczeń zrozumiał stojący za nim proces, dać dodatkowe wskazówki upraszczające zadanie, a także zawsze najpierw pokazać na kamerze, jak to się robi, sprawdzając, czy uczeń nadąża. Poza lekcją wróć do tematu i podkreśl coś, co mu się udało, aby podtrzymać jego motywację do dalszej nauki.</p>`)}
  `},
  {t:'🤝 Poznajmy naszych uczniów', html:`
   <div class="card"><p>Przywrócenie uwagi niezaangażowanego ucznia w dużej mierze wynika z budowania z nim prawdziwej więzi — relacji między uczniem, jego kolegami z grupy i tobą — oraz tworzenia bezpiecznej przestrzeni, do której chce wracać na każde zajęcia: nie tylko po to, by uczyć się tematu, który lubi, ale też by znów zobaczyć swojego nauczyciela i kolegów.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Wspieraj przyjaźnie</strong> poprzez pracę w grupach i wspólne zadania.`},
     {ic:'🎮', html:`<strong>Pytaj o wspólne zainteresowania</strong> — ulubione seriale lub gry wideo, drobne ciekawostki o miejscu, w którym mieszkają.`},
     {ic:'🌟', html:`<strong>Doceniaj coś dobrego lub pomysłowego</strong>, co uczeń zrobił lub powiedział na zajęciach.`}
   ])}
  `}
 ],
 ix:{
  title:'Jak przyciągnąć uwagę — sprawdzian modułu',
  instr:'Wybierz najlepszy ruch w każdej sytuacji. 70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:'Uczeń kończy każde zadanie znacznie szybciej niż grupa, a potem zaczyna rozpraszać innych. Jaki pierwszy krok będzie najbardziej przydatny?', opts:['Powiedzieć rodzicom, że kurs wydaje się za łatwy, i zapytać, co chcieliby zrobić','Poczekać kilka lekcji, czy reszta grupy nadrobi','Podnieść mu poziom trudności — dodatkowe wyzwanie lub wcześniejsze rozpoczęcie pracy domowej'], correct:2, fb:'Nuda wymaga prawdziwego wyzwania, dostosowanego na lekcji. Uczeń, który nie czuje wyzwania, nie widzi sensu w kursie.'},
   {type:'choice', prompt:'Uczeń jest stale zmęczony i nieskupiony na zajęciach zaplanowanych zaraz po szkole. Jaki jest najlepszy pierwszy krok?', opts:['Porozmawiać z rodzicem o tym, jak sprawdza się harmonogram, i zostawić komentarz w BO','Zachować obecny harmonogram — został ustalony przy zapisie','Poprosić ucznia, by bardziej odpoczywał przed zajęciami'], correct:0, fb:'Harmonogram, który wyczerpuje ucznia, często da się poprawić — porozmawiaj z rodzicem i zostaw komentarz w BO, aby można było rozważyć zmianę, zanim motywacja zniknie.'},
   {type:'choice', prompt:'Uczeń mówi, że tematy go nie interesują i żałuje, że nie wybrał innego kursu Kodland. Co możesz zrobić samodzielnie?', opts:['Powiedzieć mu, że zorganizujesz przejście na kurs, który woli','Zachować elastyczność w tym, jak podchodzi do zadań, i porozmawiać z liderem zespołu o lekcji motywacyjnej lub poziomującej','Wyjaśnić, że zmianami kursu zajmuje się inny dział, i kontynuować lekcję'], correct:1, fb:'Możesz dostosować sposób jego pracy na lekcji i zaproponować liderowi zespołu lekcję poziomującą — ale nie możesz samodzielnie obiecać zmiany kursu.'},
   {type:'choice', prompt:'Uczeń ma problem z poziomem i zaczyna się frustrować. Co pomoże najbardziej?', opts:['Szybko przejść dalej, żeby nie czuł się wyróżniony','Najpierw pokazać na kamerze, jak to się robi, udostępnić kod, wyjaśniając, jak działa, i sprawdzić, czy uczeń nadąża','Pozwolić mu skopiować rozwiązanie kolegi, żeby nadążył'], correct:1, fb:'Najpierw pokaż, wyjaśnij proces stojący za kodem i sprawdź zrozumienie — a potem poza lekcją wróć do czegoś, co mu się udało.'},
   {type:'choice', prompt:'Co najlepiej buduje więź, która przywraca niezaangażowanego ucznia?', opts:['Rezygnacja z luźnych rozmów na lekcji, żeby było więcej czasu na treść','Pytanie głównie tych uczniów, którzy zawsze odpowiadają, żeby utrzymać tempo','Zadania grupowe, pytania o ulubione gry lub seriale i zauważanie czegoś pomysłowego, co uczeń powiedział'], correct:2, fb:'To relacja z kolegami i z tobą sprawia, że uczeń chce wracać na każdą lekcję — a nie tylko sam temat.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zamkniesz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba ratunku — prawdziwa okazja do działania, widoczny sukces, konkretna uwaga, ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Gdy uczeń opuści lekcję, tego samego dnia piszę do rodzica, aby poznać przyczynę i zaprosić ucznia z powrotem — a gdy wraca, daję mu znać, że go brakowało',
     'Kontaktuję się z rodzicami także z dobrymi wiadomościami, nie tylko w sprawie nieobecności czy problemów',
     'Wykorzystuję luźną rozmowę na początku lekcji, aby poznawać uczniów i budować w grupie społeczność',
     'Najpierw zapraszam wszystkich do włączenia kamer i mikrofonów — a uczniom, którzy nie czują się z tym komfortowo, proponuję inne sposoby udziału (reakcje, czat publiczny lub prywatny, udostępnianie ekranu)',
     'Trzymam się celu nauki, ale pozwalam uczniom eksplorować tematy, które lubią — nie tylko fabułę lekcji',
     'Najpierw pokazuję, daję jasne instrukcje i sprawdzam, czy wszyscy zrozumieli, zanim zaczną',
     'Proszę wszystkich o udostępnianie ekranu po kolei i daję konstruktywną informację zwrotną: co idzie dobrze i nad czym popracować dalej',
     'Dostosowuję poziom trudności — dodatkowe wyzwanie dla tych, którzy kończą szybko, wsparcie lub niższy poziom dla tych, którzy mają trudności',
     'Normalizuję błędy, pilnuję zasad klasy oraz kolejności mówienia i słuchania, łącząc stanowczość z życzliwością',
     'Jeśli uczeń przychodzi zmęczony z powodu harmonogramu, rozmawiam z rodzicem i zostawiam komentarz w BO',
     'Jeśli kurs nie spełnia oczekiwań ucznia, zachowuję elastyczność na zajęciach i proponuję liderowi zespołu lekcję motywacyjną lub poziomującą'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
