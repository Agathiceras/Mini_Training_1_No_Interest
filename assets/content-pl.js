/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    heroCard1:"<b>W swoim tempie.</b> Twój postęp zapisuje się w tej przeglądarce.",
    heroCard2:"<b>Z ćwiczeniem praktycznym.</b> Każdy moduł kończy się krótkim sprawdzianem.",
    pbLabel:'ukończonych modułów',
    tapOpen:'Kliknij, aby otworzyć',
    tapFlip:'Kliknij, aby odwrócić',
    lblSee:'Co widzisz',
    lblDo:'Co robisz',
    lblSay:'Co możesz powiedzieć',
    lblReport:'Gdzie zgłosić',
    lblAvoid:'Unikaj',
    lblTip:'Wskazówka',
    stepOf:'Krok {i} z {n}',
    next:'Dalej',
    pageTitle:"Miniszkolenie · Brak zaangażowania — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Wczesne wychwytywanie <span class=\"h-pill\">braku zaangażowania</span>",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy, a jako powód podali brak zainteresowania programowaniem lub projektowaniem. Pokażemy ci, co możesz z tym zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Ukończ 4 krótkie moduły. Aby odblokować kolejny moduł, musisz uzyskać co najmniej 70% w teście każdego modułu. Całkowity czas trwania: około 25–30 minut.",
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
    scoreSoFar:'Obecny wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Powrót do modułu jeszcze raz i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Powrót do modułu',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, która przekierowała cię do tego miniszkolenia, aby zamknąć zadanie.",
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
    dtDone:"✅ To już wszystkie cztery obszary. Teraz oceń to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dowiedz się, dlaczego zwracamy uwagę na ten sygnał, dlaczego to właśnie ty możesz go wychwycić — i jakich zasad przestrzegać, gdy wniosek o zwrot już się pojawił.',
 obj:'Zrozumieć, dlaczego brak zaangażowania łatwo przeoczyć, dlaczego jesteś w najlepszej pozycji, by go wychwycić, i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już się pojawi.',
 sections:[
  {t:'💤 Brak zaangażowania prawie nigdy nie jest głośny', html:`
   <div class="card"><p>Nauczyciele często opisują ucznia jako zaangażowanego — <em>„brał udział, zadawał pytania”</em> — a kilka tygodni później ten sam uczeń prosi o zwrot pieniędzy. Brak zaangażowania był obecny przez cały czas. Po prostu nie był głośny.</p></div>
   ${co('co-idea','💡',`<p><strong>Dlaczego właśnie ty.</strong> Nikt inny w firmie nie widzi tego ucznia co tydzień. Dashboard pokazuje frekwencję po fakcie. Ty widzisz kamerę, która się wyłącza, rękę, która przestała się podnosić, ekran, którego uczeń przestał udostępniać — na bieżąco, kiedy wciąż można coś z tym zrobić.</p>`)}
  `},
  {t:'🔎 Co zwykle za tym stoi', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>Kurs nie był wyborem ucznia</strong> — rodzic postanowił o rozpoczęciu kursu, a nie samo dziecko.`},
     {ic:'📅', html:`<strong>Harmonogram, który nie pasuje</strong> do jego uwagi lub poziomu energii.`},
     {ic:'📈', html:`<strong>Frustracja poziomem</strong> — za trudno albo za łatwo, by czuć, że się czegoś uczy.`},
     {ic:'👀', html:`<strong>Rodzic stracił realny wgląd</strong> w faktyczne postępy ucznia.`}
   ])}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już się pojawił', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Zasady, które znajdziesz poniżej, obowiązują bez względu na okoliczności — zacznij od ich przeczytania, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na swoich lekcjach.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz dostosowanie lekcji, a nie rozmowa z klientami.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na pomoc dziecku', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — stwórz autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że widzisz, w jego pracy, coś konkretnego, a nie tylko chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy dowiesz się o sytuacji, pamiętaj, że to, co widzisz na swoich lekcjach, jest dla Działu Obsługi Klienta bardzo ważną informacją, której nie mogą zdobyć w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem swoich obserwacji. Umieść tam daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze możesz powiedzieć:</strong> <em>„Dział Obsługi Klienta zajmuje się tą sprawą”.</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Pomoc, która jest oferowana przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle nie daje skutku.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Moduł 1', emoji:'👁️', color:'var(--coral)',
 title:'Cztery rzeczy, na które warto zwracać uwagę — i co z nimi zrobić',
 desc:'Cztery konkretne wymiary braku zaangażowania, co możesz zrobić z każdym z nich i jak przypisać to, co widzisz, do poziomu zagrożenia i kolejnego kroku.',
 obj:'Wiedz dokładnie, co w praktyce oznacza „obserwowanie braku zaangażowania”, co możesz zrobić na lekcjach, by poprawić każdy z czterech obszarów, i jak sklasyfikować to, co widzisz, jako zielone, żółte lub czerwone.',
 sections:[
  {t:'👁️ Cztery rzeczy, na które patrzysz na każdej lekcji', html:`
   ${patternCards([
     {ic:'🧍', title:'Obecność', desc:'Czy uczeń faktycznie pojawia się na lekcji?', note:'Nieobecności bez uprzedzenia lub powtarzające się wymówki · co najmniej dwa odwołania w ciągu trzech tygodni · spóźnienia wchodzące w nawyk · logowanie się i opuszczanie lekcji przez jej końcem'},
     {ic:'🗣️', title:'Uczestnictwo', desc:'Czy się angażuje, czy tylko jest obecny?', note:'Kamera stale wyłączona · zamknięte odpowiedzi, które nie zachęcają do rozmowy · opóźnione odpowiedzi albo ich brak · brak zadawania pytań, uczeń odpowiada tylko na to, o co jest pytany'},
     {ic:'🛠️', title:'Praca', desc:'Czy uczeń faktycznie pracuje na lekcji?', note:'Nie udostępnia ekranu albo tego unika · udostępnia, ale nie widać postępów · otwarte inne okno (gra, film, czat) · dwie lekcje z rzędu bez oddanej pracy domowej'},
     {ic:'🧩', title:'Dopasowanie i otoczenie', desc:'Czy uczeń ma odpowiednie warunki do nauki?', note:'Powtarzające się problemy techniczne · harmonogram kolidujący ze szkołą lub innymi obowiązkami · kurs wybrali rodzice, a nie uczeń · wyrażana frustracja: „to jest trudne / nudne”'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Jeden sygnał może oznaczać po prostu gorszy dzień. Dwa sygnały — na tej samej lekcji lub na dwóch lekcjach — zaczynają pokazywać trend.</strong> Nie czekaj na trzeci: często, zanim będziesz go mógł wychwycić, twój lider zespołu będzie już się zajmował wyjaśnianiem sprawy zwrotu, a nie ty.</p>`)}
  `},
  {t:'🛠️ Co możesz zrobić, z każdym z tych problemów', html:`
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
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Bezpieczna przestrzeń do zadawania pytań', brief:'W tym filmie uczniowie czują się bezpiecznie: zadają pytania, pomagają kolegom w ich problemach i proszą nauczyciela o pomoc. Zwróć uwagę, jak życzliwie i ze zrozumieniem nauczyciel im odpowiada.'}},
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
  {t:'🚦 Oceń to, co widzisz, i zastosuj odpowiednie działania', html:`
   ${classifyCard('co-ok','🟢','Brak utrzymujących się sygnałów. Uczestniczy w większości lekcji, udostępnia ekran, robi postępy.','Podtrzymuj relację — co 4 lekcje wysyłaj opiekunowi jeden dowód postępów, zanim sam o to poprosi.')}
   ${classifyCard('co-cute','🟡','Jeden sygnał pojawia się konsekwentnie przez całą lekcję lub powtarza się na dwóch lekcjach — albo dwa sygnały na tej samej lekcji.','Porozmawiaj z uczniem na lekcji i delikatnie zbadaj przyczynę. Może to być zwykła nieśmiałość.')}
   ${classifyCard('co-danger','🔴','Więcej niż dwa sygnały na tej samej lekcji lub dwa sygnały utrzymujące się przez więcej niż jedną lekcję.','Tego samego dnia powiadom lidera zespołu, podając konkrety. Nadal dobrze ucz i utrzymuj ciepły kontakt z rodziną — propozycja dodatkowej lekcji, zmiany harmonogramu czy czegokolwiek innego wychodzi od twojego lidera zespołu (TL), nigdy bezpośrednio od ciebie.')}
   ${classifyCard('co-danger','🚨','Uczeń nie wykazuje zainteresowania programowaniem ani kursami Kodland — niezależnie od tego, co jeszcze widzisz.','Od razu traktuj to jako czerwony sygnał. Ten powód jest już oznaczony jako priorytetowy, więc ma pierwszeństwo przed każdą inną oceną.')}
  `}
 ],
 ix:{
  title:'Którego obszaru dotyczą podane wskazówki?',
  instr:'Zobaczysz cztery wskazówki z tego modułu. Przeczytaj każdą i zdecyduj, w którym z czterech obszarów pomaga odwrócić sytuację. Musisz zdobyć 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Którego obszaru dotyczą podane wskazówki?', card:'💬 Uczeń nie czuje się komfortowo z włączoną kamerą, więc zapraszasz go do udziału przez czat i reakcje.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — chodzi o to, jak uczeń bierze udział, gdy już jest na lekcji. To Uczestnictwo.'},{label:'🗣️ Uczestnictwo', fb:'Zgadza się — najpierw zaproś wszystkich do włączenia kamer i mikrofonów, a potem zaproponuj inne sposoby udziału: reakcje, czat publiczny lub prywatny, udostępnianie ekranu.'},{label:'🛠️ Praca', fb:'Nie do końca — nie chodzi o samą pracę, ale o to, jak uczeń włącza się do rozmowy. To Uczestnictwo.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Blisko — to pomaga mu poczuć się komfortowo, ale wskazówka dotyczy sposobu udziału. To Uczestnictwo.'}], correctZone:1},
   {type:'sort', prompt:'Którego obszaru dotyczą podane wskazówki?', card:'📜 Uczeń śmieje się z błędu kolegi. Spokojnie przypominasz wszystkim zasady klasy i traktujesz błąd jako część nauki.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — chodzi o to, jak bezpiecznie czują się uczniowie na zajęciach. To Dopasowanie i otoczenie.'},{label:'🗣️ Uczestnictwo', fb:'Blisko — bezpieczna atmosfera sprzyja uczestnictwu, ale ta wskazówka dotyczy atmosfery zajęć: Dopasowanie i otoczenie.'},{label:'🛠️ Praca', fb:'Nie do końca — chodzi o atmosferę, a nie o pracę. To Dopasowanie i otoczenie.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Zgadza się — normalizowanie błędów, pilnowanie zasad klasy i łączenie stanowczości z życzliwością sprawiają, że uczniowie czują się na zajęciach bezpiecznie.'}], correctZone:3},
   {type:'sort', prompt:'Którego obszaru dotyczą podane wskazówki?', card:'📩 Uczeń opuszcza lekcję. Tego samego dnia piszesz do rodzica, aby poznać przyczynę — i zachęcić do powrotu.', zones:[{label:'🧍 Obecność', fb:'Zgadza się — wiadomość wysłana tego samego dnia pokazuje, że to zauważasz, pozwala poznać przyczynę i zaprasza ucznia z powrotem. Pamiętaj, by po powrocie ucznia dać mu znać, że go brakowało.'},{label:'🗣️ Uczestnictwo', fb:'Nie do końca — uczeń w ogóle nie był na lekcji. To Obecność.'},{label:'🛠️ Praca', fb:'Nie do końca — chodzi o pojawianie się na zajęciach, a nie o pracę. To Obecność.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Nie do końca — ta wskazówka dotyczy samej nieobecności. To Obecność.'}], correctZone:0},
   {type:'sort', prompt:'Którego obszaru dotyczą podane wskazówki?', card:'⚖️ Uczeń kończy ćwiczenie w połowie przewidzianego czasu, więc proponujesz mu dodatkowe wyzwanie — a najpierw udostępniasz swój ekran, aby pokazać kolejny krok.', zones:[{label:'🧍 Obecność', fb:'Nie do końca — uczeń jest na lekcji i pracuje. Chodzi o samą pracę: Praca.'},{label:'🗣️ Uczestnictwo', fb:'Nie do końca — chodzi o poziom i jasność zadania. To Praca.'},{label:'🛠️ Praca', fb:'Zgadza się — dostosowanie poziomu trudności, rozpoczęcie od pokazu i jasne instrukcje sprawiają, że uczniowie faktycznie pracują.'},{label:'🧩 Dopasowanie i otoczenie', fb:'Nie do końca — chodzi o zadanie, a nie o atmosferę. To Praca.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Moduł 2', emoji:'🧭', color:'var(--coral)',
 title:'Jak przyciągnąć uwagę ucznia',
 desc:'Dla sytuacji, w których utrata zainteresowania nie jest jeszcze poważna: jakie są jej najczęstsze przyczyny, co możesz dostosować podczas lekcji, jak pokazać rodzicom postępy dziecka w pierwszym miesiącu oraz jak wspierać uczniów ze specjalnymi potrzebami lub lękiem.',
 obj:'Rozpoznawanie najczęstszych przyczyn umiarkowanego spadku zainteresowania — dopasowania kursu do ucznia, harmonogramu i poziomu trudności — wiedza o tym, co można dostosować samodzielnie, a co należy przekazać Team Leaderowi, określanie oczekiwań rodziny dotyczących postępów w pierwszym miesiącu oraz dostosowywanie tempa, rutyny i wielkości poszczególnych zadań do potrzeb uczniów ze specjalnymi potrzebami lub lękiem.',
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
  `},
  {t:'📅 Pierwszy miesiąc: pokazywanie rodzicom, jak wyglądają postępy', html:`
   <div class="card"><p>Kiedy rodzice nie widzą postępów, często zakładają, że ich nie ma. Pierwsze lekcje kursu służą budowaniu podstaw: logowaniu się, poznawaniu narzędzi i wykonywaniu pierwszych małych kroków. Z zewnątrz może to wyglądać tak, jakby «nic się nie działo». Jeśli nikt nie wyjaśni rodzinie, czego może się spodziewać, myśl «moje dziecko niczego się nie uczy» może szybko zmienić się w «moje dziecko nie jest zainteresowane».</p></div>
   ${patternCards([
     {ic:'🧭', title:'Samodzielnie porusza się po platformie', desc:'Loguje się i samodzielnie porusza się po platformie oraz narzędziu wykorzystywanym na kursie.', note:'Potrzebowanie na coraz mniejszą pomoc z każdym tygodniem to prawdziwy postęp.'},
     {ic:'🪜', title:'Wykonuje małe zadania', desc:'Wykonuje krótkie zadania podczas każdej lekcji, za każdym razem potrzebując coraz mniej wsparcia.', note:'Najważniejsze są wysiłek i samodzielność, a nie perfekcja.'},
     {ic:'🗣️', title:'Potrafi wyjaśnić, co zrobiło', desc:'Potrafi własnymi słowami opowiedzieć, co zrobiło i dlaczego.', note:'Poproś ucznia, aby pokazał rodzicom w domu, co stworzył.'},
     {ic:'🏁', title:'Ma coś do pokazania', desc:'Pierwszy niewielki rezultat: coś, co się porusza, pierwszy rysunek lub pierwszy działający program.', note:'Sprawdź instrukcję: co jest pierwszym projektem tworzonym podczas kursu?'}
   ],2)}
   ${rclock([
     {ic:'👋', when:'Po 1–2 lekcjach', t:'Ustalenie oczekiwań', d:'Co zrobiliśmy, jak będą wyglądać pierwsze tygodnie i jak rodzina może pomóc w domu.'},
     {ic:'🏁', when:'Około 4. lekcji', t:'Pierwsze dowody postępów', d:'Coś konkretnego, co dziecko stworzyło lub co potrafi już zrobić. Wystarczy zrzut ekranu lub jedno zdanie.'},
     {ic:'🔭', when:'Co 4 lekcje', t:'Dalsze monitorowanie postępów', d:'Czego dziecko się nauczyło, co będzie dalej i co warto wspólnie świętować.'}
   ])}
   ${doavoid(
     ['Opisuj postępy za pomocą małych, konkretnych kroków, które rodzice mogą zaobserwować.','Zachęcaj rodziców, aby poprosili dziecko o pokazanie swoich prac.','Przekazuj pierwsze dowody postępów, zanim rodzice sami o nie poproszą.'],
     ['Obiecywania konkretnych rezultatów: <em>«Do przyszłego miesiąca będzie już tworzyć własne gry»</em>.','Używania technicznego słownictwa, którego rodzice nie potrafią sobie wyobrazić ani zrozumieć.','Kontaktowania się z rodzicami wyłącznie wtedy, gdy pojawia się problem.']
   )}
   ${co('co-cute','😟',`<p><strong>Jeśli rodzic jest niezadowolony, ponieważ aktywność w danym module lub lekcji nie odpowiada jego oczekiwaniom.</strong> Najpierw wysłuchaj rodzica. Następnie wyjaśnij, jakie zagadnienia będą omawiane w kolejnych modułach (sprawdź program kursu) i poinformuj, że fabułę lub tematykę aktywności można dostosować do zainteresowań dziecka, ale narzędzia i zdobywana wiedza pozostaną takie same. W kursach wykorzystujących kilka narzędzi zaproponuj możliwość użycia innego programu do wykonania tego samego zadania. Wiki i notatki dla nauczycieli zawierają alternatywy dla wielu z nich. Jeśli rodzina chce czegoś, czego nie obejmuje kurs, zgłoś to w BO i poinformuj swojego Team Leadera. Nigdy nie obiecuj zmiany programu kursu.</p>`)}
  `},
  {t:'🧠 Uczniowie ze specjalnymi potrzebami lub lękiem: tempo, rutyna i mniejsze kroki', html:`
   <div class="card"><p>Niektórzy uczniowie, którzy wydają się «tracić zainteresowanie», w rzeczywistości mogą czuć się <strong>przytłoczeni</strong>. Autyzm (ASD), ADHD i lęk mogą sprawiać, że lekcja grupowa online wydaje się nieprzewidywalna, zbyt szybka lub zbyt długa. Kiedy dziecko tak się czuje, może przestać uczestniczyć w zajęciach. Rodzina mogła Ci o tym nie powiedzieć, uczeń może być jeszcze w trakcie diagnozy lub nigdy nie przechodził takiej oceny. <strong>Nie potrzebujesz diagnozy, aby dostosować lekcję</strong>, i nigdy nie powinieneś jej stawiać: nie przypisuj dziecku żadnych etykiet, ani w obecności rodziny, ani innych osób z grupy.</p></div>
   ${co('co-idea','🌈',`<p><strong>Każdy przypadek jest inny.</strong> Dwoje uczniów z tą samą diagnozą może zachowywać się zupełnie inaczej: jeden może bez przerwy opowiadać o swoim ulubionym temacie, drugi unikać mikrofonu, kolejny kończyć zadania w kilka minut i się nudzić, a jeszcze inny potrzebować dokładnie określonej rutyny, aby czuć się bezpiecznie. Poznaj dziecko, które masz przed sobą — to znacznie ważniejsze niż jakakolwiek etykieta.</p>`)}
   ${dimTabs([
     {ic:'🔁', title:'Rutyna',
      intro:'Przewidywalność zmniejsza lęk i pozwala lepiej skupić się na treści zajęć.',
      tips:[
       {ic:'🧱', html:`<strong>Zachowuj tę samą strukturę każdej lekcji:</strong> rozpoczęcie, ćwiczenia i zakończenie, zawsze w tej samej kolejności.`},
       {ic:'⏭️', html:`<strong>Informuj o zmianach, zanim nastąpią:</strong> <em>«Za 5 minut zmienimy aktywność, a potem...»</em>. Nagła zmiana może sprawić, że uczeń zablokuje się lub odmówi udziału.`},
       {ic:'📋', html:`<strong>Wyświetl na ekranie lub w czacie ponumerowaną listę</strong> kolejnych etapów lekcji, aby uczeń zawsze wiedział, na jakim etapie się znajduje.`},
       {ic:'⏲️', html:`<strong>Korzystaj ze stoperów i timerów ostrożnie.</strong> Pomagają uczniom, którzy lubią wyzwania, ale w przypadku tych, którzy frustrują się pod presją czasu, pokazuj timer wyłącznie jako pomoc wizualną — bez głośnego odliczania.`}
      ]},
     {ic:'🐢', title:'Tempo',
      intro:'Zwolnij tempo swojego tłumaczenia, a nie ambicje ucznia.',
      tips:[
       {ic:'⏳', html:`<strong>Daj uczniowi czas na odpowiedź.</strong> Poczekaj kilka sekund dłużej, niż wydaje Ci się naturalne, zanim powtórzysz pytanie lub przejdziesz dalej.`},
       {ic:'🗣️', html:`<strong>Spokojny głos i wolniejsze tempo</strong> przekazują poczucie bezpieczeństwa, jeszcze zanim zaczniesz omawiać materiał.`},
       {ic:'🤸', html:`<strong>Krótkie przerwy na ruch</strong> pomiędzy blokami zajęć pomagają utrzymać uwagę bardziej niż proszenie ucznia, aby siedział nieruchomo: <em>«Chcesz wstać na 10 sekund, a potem będziemy kontynuować?»</em>.`},
       {ic:'🚀', html:`<strong>Szybko kończy zadania i łatwo się nudzi?</strong> Wykorzystaj dodatkowe aktywności z lekcji albo dodaj wariant zadania, wyzwanie wizualne lub osobisty element do projektu.`}
      ]},
     {ic:'🪜', title:'Mniejsze kroki',
      intro:'Podziel polecenie «ukończ projekt» na małe zadania, z których każde ma jasny i możliwy do osiągnięcia cel.',
      tips:[
       {ic:'🎯', html:`<strong>Mikrozadania:</strong> <em>«Zajmijmy się tylko tłem postaci — daj mi znać, kiedy będzie gotowe»</em>. Każde ukończone małe zadanie daje prawdziwe poczucie osiągnięcia.`},
       {ic:'1️⃣', html:`<strong>Przekazuj jedną instrukcję na raz</strong> i przypominaj o celu przed każdą aktywnością.`},
       {ic:'✅', html:`<strong>Korzystaj z widocznej listy zadań</strong> ukończonych i pozostałych do wykonania, aby uczeń nie musiał polegać wyłącznie na pamięci. Jest to szczególnie przydatne, gdy uczeń mówi «Skończyłem!», a następnie uświadamia sobie, że zapomniał, co robił.`},
       {ic:'🧗', html:`<strong>Pokaż pierwszy krok, a następnie pozwól uczniowi wykonać resztę samodzielnie.</strong> Stopniowo ograniczaj pomoc w trakcie lekcji.`}
      ]},
     {ic:'💬', title:'Inne sposoby uczestnictwa',
      intro:'Nie każdy uczeń będzie odpowiadał na głos — i to jest w porządku.',
      tips:[
       {ic:'😀', html:`<strong>Akceptuj odpowiedzi na czacie,</strong> za pomocą emoji, reakcji lub wskazywania elementów na ekranie.`},
       {ic:'✌️', html:`<strong>Zamiast zadawać otwarte pytanie, przedstaw dwie widoczne opcje:</strong> <em>«Czerwony samochód czy niebieski?»</em> zamiast <em>«Co chciałbyś zrobić?»</em>.`},
       {ic:'🎉', html:`<strong>Doceniaj każdą świadomą próbę komunikacji,</strong> a nie tylko odpowiedzi ustne.`},
       {ic:'⭐', html:`<strong>Wykorzystuj ulubione tematy ucznia jako sposób na zaangażowanie go.</strong> Silne zainteresowanie może być świetnym punktem wyjścia: oprzyj dzisiejsze zadanie na tym zainteresowaniu.`}
      ]}
   ],'✅ Na tym polega stosowanie rutyny, dostosowywanie tempa, dzielenie zadań na mniejsze kroki i oferowanie innych sposobów uczestnictwa.')}
   ${co('co-cute','🫂',`<p><strong>Kiedy pojawia się frustracja, płacz lub całkowite wycofanie się z zajęć.</strong> Najpierw kontroluj własne zachowanie: ścisz głos i zwolnij tempo. Nazwij emocje bez oceniania: <em>«Widzę, że to Cię frustruje»</em>, i zaproponuj konkretne działanie zamiast mówić <em>«Uspokój się»</em>: <em>«Sprawdźmy to razem»</em>. Wróć do etapu, który uczeń wcześniej z powodzeniem wykonał, i kontynuuj omawianie materiału dopiero wtedy, gdy się uspokoi. Nigdy nie zmuszaj go w takiej chwili do utrzymywania kontaktu wzrokowego, włączania kamery ani dalszej pracy. Na koniec doceń jego wysiłek, a nie tylko rezultat.</p>`)}
   ${co('co-idea','👪',`<p><strong>W kontakcie z rodziną dziel się obserwacjami, a nie ocenami.</strong> Zamiast mówić <em>«Źle zachowywał się na lekcji»</em>, spróbuj powiedzieć: <em>«Dzisiaj zauważyłem/am, że Maria poczuła frustrację, kiedy zmieniliśmy aktywność bez wcześniejszego uprzedzenia. Czy zauważyli Państwo coś podobnego w domu? Co jej pomaga?»</em>. Rodziny wiedzą, co najlepiej działa w przypadku ich dzieci. Jeśli rodzina nie odpowiada, zachowuj spójną strukturę lekcji, zapisuj swoje próby kontaktu i pozwól Client Service zająć się komunikacją, jeśli sytuacja stanie się trudna.</p>`)}
   ${co('co-danger','📝',`<p><strong>Jeśli dostosowania w ramach grupy nie wystarczają</strong> — dziecko nadal wycofuje się z zajęć lub wydaje się potrzebować innego tempa, niż może zapewnić grupa — zostaw komentarz w BO, opisując swoje obserwacje i podjęte próby, a następnie poinformuj swojego Team Leadera. Możesz zaproponować rozwiązanie, ale decyzja należy do niego. Nigdy samodzielnie nie obiecuj lekcji indywidualnych ani zmiany formatu zajęć.</p>`)}
  `}
 ],
 ix:{
  title:'Jak przyciągnąć uwagę — sprawdzian modułu',
  instr:'Wybierz najlepsze działanie lub przyporządkuj każdą sytuację do odpowiedniej kategorii. Aby odblokować końcową listę kontrolną, musisz uzyskać 70%.',
  items:[
   {type:'choice', prompt:'Uczeń kończy każde zadanie znacznie szybciej niż reszta grupy, a potem zaczyna rozpraszać innych. Jaki pierwszy krok będzie najbardziej przydatny?', opts:['Powiedzieć rodzicom, że kurs wydaje się za łatwy, i zapytać, co chcieliby zrobić','Poczekać kilka lekcji, czy reszta grupy nadrobi','Podnieść mu poziom trudności — dodatkowe wyzwanie lub wcześniejsze rozpoczęcie pracy domowej'], correct:2, fb:'Nuda wymaga prawdziwego wyzwania, dostosowanego na lekcji. Uczeń, który nie czuje wyzwania, nie widzi sensu w kursie.'},
   {type:'choice', prompt:'Uczeń jest stale zmęczony i rozproszony na zajęciach zaplanowanych zaraz po szkole. Jaki jest najlepszy pierwszy krok?', opts:['Porozmawiać z rodzicem o tym, jak sprawdza się harmonogram, i zostawić komentarz w BO','Zachować obecny harmonogram — został ustalony przy zapisie','Poprosić ucznia, by bardziej odpoczywał przed zajęciami'], correct:0, fb:'Harmonogram, który wyczerpuje ucznia, często da się poprawić — porozmawiaj z rodzicem i zostaw komentarz w BO, aby można było rozważyć zmianę, zanim motywacja zniknie.'},
   {type:'choice', prompt:'Uczeń mówi, że tematy go nie interesują i żałuje, że nie wybrał innego kursu Kodland. Co możesz zrobić samodzielnie?', opts:['Powiedzieć mu, że zorganizujesz przejście na kurs, który woli','Zachować elastyczność w tym, jak podchodzi do zadań, i porozmawiać z liderem zespołu o lekcji motywacyjnej lub poziomującej','Wyjaśnić, że zmianami kursu zajmuje się inny dział, i kontynuować lekcję'], correct:1, fb:'Możesz dostosować sposób jego pracy na lekcji i zaproponować liderowi zespołu zorganizowanie lekcji poziomującej — ale nie możesz samodzielnie obiecać zmiany kursu.'},
   {type:'choice', prompt:'Uczeń ma problem z poziomem i zaczyna się frustrować. Co pomoże najbardziej?', opts:['Szybko przejść dalej, żeby nie czuł się wyróżniony','Najpierw pokazać na kamerce lub udostępnionym ekranie, jak to się robi, udostępnić kod, wyjaśniając, jak działa, i sprawdzić, czy uczeń nadąża','Pozwolić mu skopiować rozwiązanie kolegi, żeby nadążył'], correct:1, fb:'Najpierw pokaż rozwiązanie, wyjaśnij proces stojący za kodem i sprawdź, czy uczeń to rozumie — a potem poza lekcją wróć do czegoś, co mu się udało.'},
   {type:'choice', prompt:'Co najlepiej buduje więź, która przywraca niezaangażowanego ucznia?', opts:['Rezygnacja z luźnych rozmów na lekcji, żeby było więcej czasu na treść','Pytanie głównie tych uczniów, którzy zawsze odpowiadają, żeby utrzymać tempo','Zadania grupowe, pytania o ulubione gry lub seriale i zauważanie czegoś pomysłowego, co uczeń powiedział'], correct:2, fb:'To relacja z kolegami i z tobą sprawia, że uczeń chce wracać na każdą lekcję — a nie tylko sam temat.'},
   {type:'choice', prompt:'To już czwarta lekcja nowego kursu, a rodzice nie otrzymali od Ciebie jeszcze żadnej wiadomości. Co wysyłasz?', opts:['Krótką wiadomość z konkretnym przykładem tego, co dziecko stworzyło, informacją o tym, czego obecnie się uczy, oraz o tym, co będzie dalej.','«Wszystko idzie świetnie, proszę się nie martwić!»','Nic — gdyby pojawił się problem, rodzice sami by napisali.'], correct:0, fb:'Konkretne dowody małych postępów pomagają rodzinie zrozumieć, jak wygląda rozwój dziecka w pierwszym miesiącu, zanim myśl «ono niczego się nie uczy» zmieni się w «ono nie jest zainteresowane».'},
   {type:'sort', prompt:'Jakiego rodzaju dostosowanie przedstawiono w tej sytuacji?', card:'Przed zmianą aktywności mówisz: «Za 5 minut przestaniemy rysować i zaczniemy tworzyć animację». Uczeń, który wcześniej blokował się przy każdej zmianie, teraz bez problemu kontynuuje zajęcia.', zones:[{label:'🔁 Rutyna', fb:'Zgadza się! Informowanie o zmianach, zanim nastąpią, sprawia, że lekcja staje się przewidywalna, a przewidywalność zmniejsza lęk.'},{label:'🐢 Tempo', fb:'Niezupełnie — tempo nie zostało spowolnione. Zmiana została zapowiedziana wcześniej: to dotyczy rutyny.'},{label:'🪜 Mniejsze kroki', fb:'Niezupełnie — zadanie nie zostało podzielone na mniejsze części. Wcześniejsze zapowiedzenie zmiany dotyczy rutyny.'}], correctZone:0},
   {type:'choice', prompt:'Uczeń z ADHD ciągle mówi «Skończyłem!», a następnie przyznaje, że zapomniał, co robił. Co pomoże mu najbardziej?', opts:['Poproszenie go, aby siedział nieruchomo i bardziej się koncentrował.','Podzielenie pracy na mikrozadania z widocznymi celami oraz wykorzystanie listy pokazującej, co zostało już wykonane, a co jeszcze pozostało.','Przekazanie całego projektu od razu, aby mógł pracować we własnym tempie.'], correct:1, fb:'Małe zadania z jasno określonym celem oraz widoczna lista kontrolna zmniejszają obciążenie pamięci, a ukończenie każdego małego zadania jest prawdziwym sukcesem.'},
   {type:'choice', prompt:'Uczeń zaczyna płakać, ponieważ jego zadanie nie działa. Co robisz najpierw?', opts:['«Uspokój się, to nic wielkiego — kontynuujmy».','Ściszasz głos, nazywasz emocje — «Widzę, że to Cię frustruje» — i proponujesz konkretne działanie: «Sprawdźmy to razem».','Kontynuujesz zajęcia z grupą i wracasz do ucznia pod koniec lekcji.'], correct:1, fb:'Powiedzenie «Uspokój się» nie daje dziecku żadnego konkretnego działania. Nazwij emocje, zaproponuj konkretną pomoc i wróć do etapu, który uczeń wcześniej z powodzeniem wykonał. Kontynuuj omawianie materiału dopiero wtedy, gdy się uspokoi.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zakończysz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już się pojawił', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba pomocy — mogę dać uczniowi prawdziwą okazję do działania, pokazać mu jego sukcesy, przekazać konkretną uwagę, jednak ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Gdy uczeń opuści lekcję, tego samego dnia piszę do rodzica, aby poznać przyczynę i zaprosić ucznia z powrotem — a gdy wraca, daję mu znać, że go brakowało',
     'Kontaktuję się z rodzicami także z dobrymi wiadomościami, nie tylko w sprawie nieobecności czy problemów',
     'Wykorzystuję luźną rozmowę na początku lekcji, aby poznawać uczniów i budować w grupie społeczność',
     'Najpierw zapraszam wszystkich do włączenia kamer i mikrofonów — a uczniom, którzy nie czują się z tym komfortowo, proponuję inne sposoby udziału (reakcje, czat publiczny lub prywatny, udostępnianie ekranu)',
     'Trzymam się celu nauki, ale pozwalam uczniom eksplorować tematy, które lubią — nie tylko fabułę lekcji',
     'Najpierw pokazuję, daję jasne instrukcje i sprawdzam, czy wszyscy zrozumieli ćwiczenie, zanim zaczną nad nim pracować',
     'Proszę wszystkich po kolei o udostępnianie ekranu i daję konstruktywną informację zwrotną: co idzie dobrze i nad czym popracować dalej',
     'Dostosowuję poziom trudności — dodatkowe wyzwanie dla tych, którzy kończą szybko, wsparcie lub niższy poziom dla tych, którzy mają trudności',
     'Normalizuję błędy, pilnuję zasad klasy oraz kolejności mówienia i słuchania, łącząc stanowczość z życzliwością',
     'Jeśli uczeń przychodzi zmęczony z powodu harmonogramu, rozmawiam z rodzicem i zostawiam komentarz w BO',
     'Jeśli kurs nie spełnia oczekiwań ucznia, zachowuję elastyczność na zajęciach i proponuję liderowi zespołu zorganizowanie lekcji motywacyjnej lub poziomującej',
     'W pierwszym miesiącu pokazuję rodzicom, jak wyglądają postępy dziecka: wysyłam wiadomość po pierwszych lekcjach i przedstawiam konkretne dowody postępów około 4. lekcji.',
     'Zachowuję tę samą strukturę każdej lekcji, zapowiadam zmiany, zanim nastąpią, i pokazuję kolejne etapy zajęć na ekranie lub na czacie.',
     'W przypadku uczniów ze specjalnymi potrzebami lub lękiem zwalniam tempo wyjaśnień, dzielę zadania na małe kroki z widocznymi celami i akceptuję odpowiedzi na czacie lub za pomocą reakcji.',
     'Nigdy nie przypisuję dziecku etykiet ani nie stawiam diagnoz. Przekazuję rodzinie konkretne obserwacje i pytam, jakie rozwiązania sprawdzają się w domu.',
     'Kiedy dostosowania w ramach grupy nie wystarczają, zostawiam komentarz w BO i informuję swojego Team Leadera. Nigdy nie obiecuję lekcji indywidualnych ani zmiany formatu zajęć.'
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
