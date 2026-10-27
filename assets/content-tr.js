/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · İlgi Kaybı — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">İlgi Kaybını</span> Erken Fark Etmek",
    heroIntro:"Bu eğitimi, programlamaya veya tasarıma ilgi duymadıkları için iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"4 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 15–20 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'Bu uyarının neden var olduğu, bunu neden tam da sizin fark edebileceğiniz ve bir iade talebi zaten oluşturulduysa hangi kuralların geçerli olduğu.',
 obj:'İlgi kaybının neden kolayca gözden kaçtığını, bunu fark etmek için en uygun kişinin neden siz olduğunuzu ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini anlamak.',
 sections:[
  {t:'💤 İlgi kaybı neredeyse hiçbir zaman göze batmaz', html:`
   <div class="card"><p>Eğitmenler çoğu zaman bir öğrenciyi derse ilgili olarak tanımlar — <em>“derse katıldı, sorular sordu”</em> — ve aynı öğrenci haftalar sonra iade talep eder. İlgi kaybı baştan beri oradaydı; yalnızca göze batmıyordu.</p></div>
   ${co('co-idea','💡',`<p><strong>Neden özellikle siz?</strong> Şirkette bu öğrenciyi her hafta gören başka kimse yok. Bir gösterge paneli, katılımı ancak iş işten geçtikten sonra gösterir. Siz ise kameranın kapandığını, artık kalkmayan eli, paylaşılmayı bırakan ekranı gerçek zamanlı olarak görürsünüz — hâlâ bir şeyler yapabilecekken.</p>`)}
  `},
  {t:'🔎 Genellikle arkasında ne var', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>Kursu öğrenci seçmedi</strong> — çocuğu kursa kaydeden veliydi, çocuğun kendisi değil.`},
     {ic:'📅', html:`<strong>Uygun olmayan bir ders saati</strong> — öğrencinin dikkatine veya enerjisine uymuyor.`},
     {ic:'📈', html:`<strong>Seviyeden kaynaklanan hayal kırıklığı</strong> — ya çok zor ya da öğrendiğini hissettirmeyecek kadar kolay.`},
     {ic:'👀', html:`<strong>Veli, öğrencinin gerçek ilerlemesini</strong> artık net olarak göremiyor.`}
   ])}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Modül 1', emoji:'👁️', color:'var(--coral)',
 title:'Takip Edilecek Dört Alan — ve Bunlar İçin Neler Yapabilirsiniz',
 desc:'İlgi kaybının dört somut boyutu, her biri için neler yapabileceğiniz ve gördüklerinizi bir renge ve bir sonraki adıma nasıl dönüştüreceğiniz.',
 obj:'“İlgi kaybını takip etmenin” pratikte tam olarak ne anlama geldiğini, dört alanın her birini iyileştirmek için derslerinizde neler yapabileceğinizi ve gördüklerinizi Yeşil, Sarı veya Kırmızı olarak nasıl sınıflandıracağınızı bilmek.',
 sections:[
  {t:'👁️ Her derste takip edilecek dört alan', html:`
   ${patternCards([
     {ic:'🧍', title:'Devamlılık', desc:'Gerçekten derse geliyor mu?', note:'Habersiz devamsızlıklar veya tekrar eden bahaneler · üç hafta içinde iki ya da daha fazla iptal · geç kalmanın alışkanlık hâline gelmesi · derse girip ders bitmeden ayrılması'},
     {ic:'🗣️', title:'Katılım', desc:'Derse dahil oluyor mu, yoksa sadece orada mı?', note:'Kamera sürekli kapalı · sohbete kapı açmayan kısa, kapalı cevaplar · geç gelen cevaplar ya da hiç cevap vermemesi · soru sormayı bırakmış, yalnızca kendisine sorulana cevap veriyor'},
     {ic:'🛠️', title:'Üretim', desc:'Gerçekten bir çalışma ortaya çıkıyor mu?', note:'Ekranını paylaşmıyor veya paylaşmaktan kaçınıyor · paylaşıyor ama hiç ilerleme göstermiyor · başka bir pencere açık (oyun, video, sohbet) · üst üste iki derste ev ödevini teslim etmemiş'},
     {ic:'🧩', title:'Uyum ve ortam', desc:'Çevresindeki koşullar ona uygun mu?', note:'Tekrar eden teknik sorunlar · okul veya başka sorumluluklarla çakışan bir ders saati · kursu öğrenci değil, veliler seçmiş · dile getirilen hayal kırıklığı: “bu çok zor / sıkıcı”'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Tek bir işaret sadece kötü bir gün anlamına gelebilir. İki işaret — aynı derste ya da iki ders boyunca — bir eğilim olduğunu göstermeye başlar.</strong> Üçüncüsünü beklemeyin: üçüncü işaret ortaya çıktığında, onu çoğu zaman siz değil, bir iade incelemesi sırasında Takım Lideriniz fark eder.</p>`)}
  `},
  {t:'🛠️ Her biri için neler yapabilirsiniz', html:`
   <div class="card"><p>İşareti fark etmek işin yalnızca yarısıdır. Durumu tersine çevirmek için derslerinizde gerçekte neler yapabileceğinizi görmek üzere aşağıdaki dört alandan birini seçin.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Devamlılık',
      intro:'Devamsızlığın birçok nedeni olabilir — ders saatindeki bir değişiklik, sağlık sorunları, teknik problemler, saatle ilgili bir karışıklık, tatiller. Bunlar dış etkenlerdir ve başka yollarla ele alınır. Devamsızlık <strong>derse ilginin azalmasıyla</strong> ilgiliyse yapabilecekleriniz şunlardır:',
      tips:[
       {ic:'📩', html:`<strong>Aynı gün veliye yazın.</strong> Bir öğrenci dersi kaçırırsa, nedenini öğrenmek ve derse geri dönmesi için cesaretlendirmek amacıyla aynı gün veliye mesaj gönderin.`},
       {ic:'💬', html:`<strong>Dersler hakkında ne hissettiklerini sorun.</strong> Velilere ve öğrencilere derslerle ilgili ne düşündüklerini sorun: geliştirilebilecek bir şey var mı, konulardan keyif alıyorlar mı, neler görmek isterler? Bu, dersi gruba göre uyarlamaya gerçekten istekli olduğunuzu gösterir.`},
       {ic:'🤗', html:`<strong>Onları sıcak bir şekilde karşılayın.</strong> Geri döndüklerinde onları özlediğinizi belli edin — ve o dersteki çalışmalarına yakından dikkat edin: ekranlarını paylaşıyorlar mı, dersin sonuna kadar kalıyorlar mı, soru soruyorlar mı, diğerleriyle bağ kuruyorlar mı?`},
       {ic:'🗨️', html:`<strong>Dersin başındaki sohbeti iyi kullanın.</strong> Bir topluluk oluşturun: her dersin ilk dakikalarını öğrencilerinizi tanımak ve onlarla bağ kurmak için kullanın.`},
       {ic:'🌟', html:`<strong>Velilerle iyi haberler için de iletişime geçin.</strong> Yalnızca devamsızlıklar hakkında yazmayın — öğrencinin derste yaptığı harika bir şeyi de paylaşın. Bu hem öğrenciyi motive eder hem de veliyi onu desteklemeye teşvik eder.`}
      ]},
     {ic:'🗣️', title:'Katılım',
      intro:'Katılım, öğrenciler kendilerini güvende hissettiklerinde artar. <strong>Esneklik ve öğrencilerinizi tanımak</strong> tek bir teknikten çok daha önemlidir — her öğrenciyle önce kendini rahat hissettiği noktada buluşun, sonra bir sonraki adımı atmasına yardım edin.',
      tips:[
       {ic:'📷', html:`<strong>Önce herkesi kamerasını ve mikrofonunu açmaya davet edin.</strong> Bu her zaman ilk öneridir ve tüm grup için aynıdır.`},
       {ic:'💬', html:`<strong>Ardından başka katılım yolları sunun.</strong> Bir öğrenci kamera veya mikrofon konusunda rahat değilse, kendini <em>rahat</em> hissettiği araçlarla katılmasına izin verin: tepkiler, genel veya özel sohbet, ekran paylaşımı.`},
       {ic:'🙋', html:`<strong>Gerçek sorular sorun.</strong> Fikirlerini ve çalışmalarını sorun — ve onları tanıyın ki sorularınız gerçekten önem verdikleri şeylerle bağlantılı olsun.`},
       {ic:'🔄', html:`<strong>Esnek olun.</strong> Kimseye uymayan tek bir kural yerine, katılıma davet etme biçiminizi her öğrenciye göre ayarlayın.`},
       {ic:'🎲', html:`<strong>En küçükler için oyunlaştırın.</strong> Küçük ödüller verin ve süreli oyunlar kullanın — <em>“30 saniyede kim bulacak?”</em> — böylece katılmak riskli değil, eğlenceli gelsin.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Soru sormak için güvenli bir alan', brief:'Bu videoda öğrenciler soru sorarken, arkadaşlarının problemlerine katkıda bulunurken ve eğitmenlerinden yardım isterken kendilerini güvende hissediyor. Eğitmenin onlarla ne kadar nazik ve anlayışlı konuştuğuna dikkat edin.'}},
     {ic:'🛠️', title:'Üretim',
      intro:'<strong>Öğrenme hedefini</strong> sabit tutun — ve neredeyse diğer her konuda esnek olun. Öğrenciler tam olarak ne yapacaklarını bildiklerinde ve çalışmayı sahiplendiklerinde gerçek bir üretim ortaya çıkar.',
      tips:[
       {ic:'🎯', html:`<strong>Hedefi koruyun, konuyu serbest bırakın.</strong> Öğrencilerin en çok sevdikleri temaları keşfetmelerine izin verin. Beceriyi uyguladıkları sürece, kendilerini rahat hissetmiyorlarsa onları hikâye kurgusuna bağlı kalmaya zorlamayın.`},
       {ic:'🎬', html:`<strong>Önce gösterin ve net talimatlar verin.</strong> Nasıl yapıldığını gösterin, tam olarak ne yapacağınızı açıklayın ve herkesin anladığından emin olun — böylece ders asla kafa karıştırıcı hâle gelmez.`},
       {ic:'🖥️', html:`<strong>Herkesten ekranını paylaşmasını isteyin</strong> — sırayla ve dersin farklı aşamalarında — böylece yalnızca en hızlıların değil, her öğrencinin çalışması görülür.`},
       {ic:'💬', html:`<strong>Yapıcı geri bildirim verin.</strong> Neyi iyi yaptıklarını ve sonraki derslerde neye çalışmaları gerektiğini söyleyin.`},
       {ic:'⚖️', html:`<strong>Zorluk seviyesini ayarlayın.</strong> Hızlı bitirenlere ekstra bir şey sunun; daha yavaş ilerleyenler için zorluğu azaltın veya destek verin.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Yapıcı ve olumlu geri bildirim', brief:'Bu videoda eğitmen, bir öğrencinin çalışmasına yapıcı ve olumlu geri bildirim veriyor.'}},
     {ic:'🧩', title:'Uyum ve ortam',
      intro:'Sınıfta kendini rahat hissetmeyen bir öğrenci, içerik ne kadar iyi olursa olsun derse ilgisini koruyamaz. <strong>Sınıfın atmosferi sizin kurduğunuz bir şeydir</strong>, ders ders.',
      tips:[
       {ic:'🌱', html:`<strong>Hataları olağan karşılayın</strong> ve yargılamak yerine yardımcı olan geri bildirimler verin.`},
       {ic:'🤝', html:`<strong>Sınıf arkadaşları arasındaki arkadaşlığı destekleyin</strong> — ortak görevler, birbirine yardım etmek, birbirinin çalışmalarını kutlamak.`},
       {ic:'📜', html:`<strong>Sınıf kurallarına uyulmasını sağlayın</strong> — ve konuşma ile dinleme sırasının kontrolünü elinizde tutun.`},
       {ic:'🔧', html:`<strong>Teknik sorunları sakin bir şekilde ele alın.</strong> Sorun yaşayan öğrenciye yardım edin, ancak grubun geri kalanını geride bırakmadan — derste kimse sıkılmamalı.`},
       {ic:'⚖️', html:`<strong>Kararlı ve nazik olun.</strong> Disiplinsizlik de öğrencilerin kendilerini rahatsız hissetmesine neden olur. Dengeyi bulun: otoriter olmamalısınız, ama sınıfın kontrolünü de kaybetmemelisiniz.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Gerçek ilgi göstermek', brief:'Bu videoda eğitmen, kısa bir sohbetle öğrencilere gerçek ilgi gösteriyor — öğrencilerden birinin kolunun alçıda olduğunu fark edip nasıl olduğunu soruyor.'}}
   ])}
  `},
  {t:'🚦 Gördüklerinizi sınıflandırın ve buna göre hareket edin', html:`
   ${classifyCard('co-ok','🟢','Zaman içinde süregelen bir işaret yok. Derslerin çoğuna katılıyor, ekranını paylaşıyor, ilerleme gösteriyor.','İlişkiyi sürdürün — her 4 derste bir, veli istemeden önce ona öğrencinin ilerlemesini gösteren bir örnek gönderin.')}
   ${classifyCard('co-cute','🟡','Bir işaret ders boyunca sürekli görülüyor veya iki derste tekrarlanıyor — ya da aynı derste iki işaret var.','Ders sırasında öğrenciyle konuşun ve nedenini nazikçe anlamaya çalışın. Bu sadece utangaçlık olabilir.')}
   ${classifyCard('co-danger','🔴','Aynı derste ikiden fazla işaret ya da birden fazla ders boyunca süren iki işaret.','Aynı gün, somut ayrıntılarla Takım Liderinizi bilgilendirin. İyi ders anlatmaya devam edin ve aileye karşı sıcak davranın — ek ders, ders saati değişikliği veya başka herhangi bir teklif asla doğrudan sizden değil, her zaman Takım Lideriniz (TL) tarafından gelir.')}
   ${classifyCard('co-danger','🚨','Öğrenci programlamaya veya Kodland kurslarına hiç ilgi göstermiyor — başka ne görürseniz görün.','Bunu hemen Kırmızı olarak değerlendirin. Bu neden zaten yüksek öncelikli olarak işaretlenmiştir, bu yüzden diğer tüm değerlendirmelerin önüne geçer.')}
  `}
 ],
 ix:{
  title:'Bu ipucu hangi alana yardımcı oluyor?',
  instr:'Bu modülden dört ipucu. Her birini okuyun ve dört alandan hangisini toparlamanıza yardımcı olduğuna karar verin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu ipucu hangi alana yardımcı oluyor?', card:'💬 Bir öğrenci kamerasını açmakta rahat değil; siz de onu sohbet ve tepkiler aracılığıyla katılmaya davet ediyorsunuz.', zones:[{label:'🧍 Devamlılık', fb:'Tam değil — bu, öğrencinin derse girdikten sonra nasıl katıldığıyla ilgili. Bu Katılım alanıdır.'},{label:'🗣️ Katılım', fb:'Doğru — önce herkesi kamerasını ve mikrofonunu açmaya davet edin, ardından başka yollar sunun: tepkiler, genel veya özel sohbet, ekran paylaşımı.'},{label:'🛠️ Üretim', fb:'Tam değil — bu, çalışmanın kendisiyle değil, öğrencinin sohbete nasıl katıldığıyla ilgili. Bu Katılım alanıdır.'},{label:'🧩 Uyum ve ortam', fb:'Yaklaştınız — kendini rahat hissetmesine yardımcı oluyor, ancak bu ipucu nasıl katıldığıyla ilgili. Bu Katılım alanıdır.'}], correctZone:1},
   {type:'sort', prompt:'Bu ipucu hangi alana yardımcı oluyor?', card:'📜 Bir öğrenci, sınıf arkadaşının hatasına gülüyor. Siz de sakin bir şekilde herkese sınıf kurallarını hatırlatıyor ve hatayı öğrenmenin bir parçası olarak ele alıyorsunuz.', zones:[{label:'🧍 Devamlılık', fb:'Tam değil — bu, sınıfın ne kadar güvenli hissettirdiğiyle ilgili. Bu Uyum ve ortam alanıdır.'},{label:'🗣️ Katılım', fb:'Yaklaştınız — güvenli bir sınıf katılımı artırır, ancak bu ipucu sınıfın atmosferiyle ilgili: Uyum ve ortam.'},{label:'🛠️ Üretim', fb:'Tam değil — bu, çalışmayla değil atmosferle ilgili. Bu Uyum ve ortam alanıdır.'},{label:'🧩 Uyum ve ortam', fb:'Doğru — hataları olağan karşılamak, sınıf kurallarına uyulmasını sağlamak ve kararlı ama nazik olmak sınıfı güvenli hissettiren şeylerdir.'}], correctZone:3},
   {type:'sort', prompt:'Bu ipucu hangi alana yardımcı oluyor?', card:'📩 Bir öğrenci dersi kaçırıyor. Aynı gün veliye yazarak nedenini öğrenmeye çalışıyor ve öğrencinin geri dönmesi için cesaretlendiriyorsunuz.', zones:[{label:'🧍 Devamlılık', fb:'Doğru — aynı gün gönderilen bir mesaj, fark ettiğinizi gösterir, nedeni ortaya çıkarır ve öğrenciyi geri davet eder. Döndüğünde de onu özlediğinizi belli edin.'},{label:'🗣️ Katılım', fb:'Tam değil — öğrenci derste hiç yoktu. Bu Devamlılık alanıdır.'},{label:'🛠️ Üretim', fb:'Tam değil — bu, çalışmayla değil derse gelmekle ilgili. Bu Devamlılık alanıdır.'},{label:'🧩 Uyum ve ortam', fb:'Tam değil — bu ipucu devamsızlığın kendisiyle ilgili. Bu Devamlılık alanıdır.'}], correctZone:0},
   {type:'sort', prompt:'Bu ipucu hangi alana yardımcı oluyor?', card:'⚖️ Bir öğrenci etkinliği sürenin yarısında bitiriyor; siz de ona ekstra bir görev sunuyor ve bir sonraki adımı önce kendi ekranınızı paylaşarak gösteriyorsunuz.', zones:[{label:'🧍 Devamlılık', fb:'Tam değil — öğrenci derste ve çalışıyor. Bu, çalışmanın kendisiyle ilgili: Üretim.'},{label:'🗣️ Katılım', fb:'Tam değil — bu, görevin seviyesi ve netliğiyle ilgili. Bu Üretim alanıdır.'},{label:'🛠️ Üretim', fb:'Doğru — zorluğu ayarlamak, önce göstermek ve net talimatlar vermek gerçek bir üretimin sürmesini sağlar.'},{label:'🧩 Uyum ve ortam', fb:'Tam değil — bu, atmosferle değil görevle ilgili. Bu Üretim alanıdır.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Modül 2', emoji:'🧭', color:'var(--coral)',
 title:'Dikkatlerini Yeniden Kazanmak',
 desc:'Henüz aşırı boyuta ulaşmamış ilgi kaybı için: genellikle neden kaynaklandığı ve derste gerçekte neleri uyarlayabileceğiniz.',
 obj:'Aşırı olmayan ilgi kaybının en yaygın nedenlerini — kursun öğrenciye uygunluğu, ders saati ve zorluk seviyesi — tanımak ve neleri kendinizin uyarlayabileceğinizi, neleri Takım Lideriniz aracılığıyla ilerletmeniz gerektiğini bilmek.',
 sections:[
  {t:'🔎 Üç yaygın durum', html:`
   ${stepIconBlock('🔄','Kurs beklediği gibi çıkmadı ya da tasarımın/programlamanın kendisine göre olmadığını fark etti', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Dizüstü bilgisayar ekranına kaşlarını çatarak bakan bir çocuk" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Strateji</div><p>Takım Liderinizle bir motivasyon dersi olasılığını konuşun. Derste esnek olun — öğrencinin çalışmasını kendine göre uyarlamasına izin verin (örneğin hikâye kurgusunu atlayıp yine de dersin temel konusunu öğrenmesi). Bir seviye dersi de yardımcı olabilir: öğrenci, gerçekten istediği şeye uyan farklı bir Kodland kursu bulabilir; onu keyif alacağı bir şeye yönlendirmek iadeyi önleyebilir.</p>`)}
   ${stepIconBlock('⏰','Ders saati, derse enerjisi kalmamasına neden oluyor (okuldan sonra yorgun, ders çok erken)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Masasında uyuyakalan yorgun bir öğrenci" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Strateji</div><p>Veliyle konuşun ve bu konuda BO’da bir yorum bırakın. Ders saatinde yapılacak bir değişiklik, iş iadeye varmadan öğrencinin motivasyonunu korumak için tam da gereken şey olabilir.</p>`)}
   ${stepIconBlock('⚖️','Kursun kendisi için çok kolay veya çok zor olduğunu fark etti', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Kararsız bir şekilde omuz silken bir çocuk" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Strateji</div><p>Bu, kurtarması en kolay durumlardan biridir ve bunu dersin kendisini uyarlayarak yaparsınız.</p>
   <p><strong>Çok kolaysa:</strong> diğerleri hâlâ çalışırken hızlı öğrencilerinizin sıkılmasına izin vermeyin. Ek görevler ve ekstra etkinlikler sunun (bazı derslerde bunlar zaten vardır — ev ödevine erkenden başlamalarına da izin verebilirsiniz). Zorluğu artırın ve keyif aldıkları bir konuda kendilerini zorlanmış hissetmelerini sağlayın; böylece yeni bir şey öğrendiklerini hissederler. Kendini zorlanmış hissetmeyen bir öğrenci kursun bir anlamı olmadığını düşünür ve bırakır.</p>
   <p><strong>Çok zorsa:</strong> ona destek olun. Etkinliğin zorluğunu biraz azaltabilir, kodun nasıl çalıştığını açıklarken onu paylaşarak arkasındaki süreci anlamasını sağlayabilir ve etkinliği kolaylaştırmak için ek ipuçları verebilirsiniz; her zaman önce kamerada nasıl yapıldığını gösterin ve sizi takip ettiğinden emin olun. Ders dışında da onunla ilgilenin ve öğrenmeye devam etme motivasyonunu korumak için iyi yaptığı bir şeyi vurgulayın.</p>`)}
  `},
  {t:'🤝 Öğrencilerimizi Tanımak', html:`
   <div class="card"><p>İlgisi azalmış bir öğrencinin dikkatini geri kazanmanın bir kısmı, onunla gerçek bir bağ kurmaktan geçer — öğrenci, sınıf arkadaşları ve sizin aranızda bir bağ — ve yalnızca sevdiği bir konuyu öğrenmek için değil, eğitmenini ve sınıf arkadaşlarını yeniden görmek için de her derse dönmek isteyeceği güvenli bir alan yaratmaktan.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Arkadaşlığı teşvik edin</strong> — grup çalışmaları ve ortak görevlerle.`},
     {ic:'🎮', html:`<strong>Ortak ilgi alanlarını sorun</strong> — en sevdikleri diziler veya video oyunları, yaşadıkları yerle ilgili küçük merak konuları.`},
     {ic:'🌟', html:`<strong>Bir öğrencinin derste yaptığı ya da söylediği iyi veya zekice bir şeyi</strong> takdir edin.`}
   ])}
  `}
 ],
 ix:{
  title:'Dikkatlerini yeniden kazanmak — modül kontrolü',
  instr:'Her durum için en iyi hamleyi seçin. Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Bir öğrenci her etkinliği gruptan çok daha hızlı bitiriyor, sonra diğerlerinin dikkatini dağıtmaya başlıyor. En faydalı ilk adım nedir?', opts:['Velilere kursun çok kolay göründüğünü söyleyip ne yapmak istediklerini sormak','Grubun geri kalanının yetişip yetişmeyeceğini görmek için birkaç ders beklemek','Onun için zorluğu artırmak — ekstra bir görev vermek veya ev ödevine erkenden başlamasını sağlamak'], correct:2, fb:'Sıkılmanın çaresi, derste uyarlanmış gerçek bir zorluktur. Kendini zorlanmış hissetmeyen bir öğrenci kursun bir anlamı olmadığını düşünür.'},
   {type:'choice', prompt:'Okuldan hemen sonraya planlanmış bir derste öğrenci sürekli yorgun ve dikkati dağınık. En iyi ilk adım nedir?', opts:['Ders saatinin öğrenciye nasıl geldiğini veliyle konuşmak ve BO’da bir yorum bırakmak','Mevcut ders saatini korumak — kayıt sırasında bu şekilde kararlaştırıldı','Öğrenciden dersten önce daha fazla dinlenmesini istemek'], correct:0, fb:'Öğrenciyi yoran bir ders saati çoğu zaman düzeltilebilir — veliyle konuşun ve BO’da yorum bırakın; böylece motivasyon kaybolmadan bir değişiklik değerlendirilebilir.'},
   {type:'choice', prompt:'Bir öğrenci, konuların ilgisini çekmediğini ve keşke farklı bir Kodland kursu seçmiş olsaydı diye düşündüğünü söylüyor. Siz kendiniz ne yapabilirsiniz?', opts:['Ona tercih ettiği kursa geçişini ayarlayacağınızı söylemek','Görevlere yaklaşımı konusunda esnek davranmak ve Takım Liderinizle bir motivasyon veya seviye dersi olasılığını konuşmak','Kurs değişikliklerinin başka bir departman tarafından yürütüldüğünü açıklayıp derse devam etmek'], correct:1, fb:'Derste nasıl çalıştığını uyarlayabilir ve seviye dersi seçeneğini Takım Liderinizle konuşabilirsiniz — kurs değişikliğini kendiniz vaat edemezsiniz.'},
   {type:'choice', prompt:'Bir öğrenci seviyede zorlanıyor ve hayal kırıklığına uğruyor. Bunlardan hangisi en çok yardımcı olur?', opts:['Tek başına dikkat çekmesin diye konuya hızla devam etmek','Önce kamerada nasıl yapıldığını göstermek, kodun nasıl çalıştığını açıklarken onu paylaşmak ve sizi takip ettiğinden emin olmak','Yetişebilmesi için bir sınıf arkadaşının çözümünü kopyalamasına izin vermek'], correct:1, fb:'Önce gösterin, kodun arkasındaki süreci açıklayın ve anladığından emin olun — ardından ders dışında iyi yaptığı bir şeyi vurgulayarak onunla ilgilenmeye devam edin.'},
   {type:'choice', prompt:'Bunlardan hangisi, ilgisi azalmış bir öğrenciyi geri kazandıran türden bir bağı en iyi şekilde kurar?', opts:['İçeriğe daha çok zaman kalsın diye sohbeti dersten tamamen çıkarmak','Tempoyu korumak için çoğunlukla her zaman cevap veren öğrencilere söz vermek','Grup görevleri, en sevdikleri oyunlar veya diziler hakkında sorular ve söyledikleri zekice bir şeyi fark etmek'], correct:2, fb:'Bir öğrenciyi her derse geri gelmek istemeye iten şey yalnızca konu değil, sınıf arkadaşlarıyla ve sizinle kurduğu bağdır.'}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},  {t:'🌱 Her derste', html:`
   ${numlist([
     'Bir öğrenci dersi kaçırdığında, nedenini öğrenmek ve onu geri davet etmek için aynı gün veliye mesaj gönderiyorum — döndüğünde de özlendiğini belli ediyorum',
     'Velilerle yalnızca devamsızlıklar veya sorunlar için değil, iyi haberler için de iletişime geçiyorum',
     'Dersin başındaki sohbeti öğrencilerimi tanımak ve grupta bir topluluk oluşturmak için kullanıyorum',
     'Önce herkesi kamerasını ve mikrofonunu açmaya davet ediyorum — ardından rahat olmayan öğrencilere başka katılım yolları sunuyorum (tepkiler, genel veya özel sohbet, ekran paylaşımı)',
     'Öğrenme hedefini sabit tutuyorum, ancak öğrencilerin yalnızca hikâye kurgusunu değil, sevdikleri konuları da keşfetmelerine izin veriyorum',
     'Önce gösteriyor, net talimatlar veriyor ve öğrenciler başlamadan önce herkesin anladığından emin oluyorum',
     'Herkesten sırayla ekranını paylaşmasını istiyor ve yapıcı geri bildirim veriyorum: neyin iyi gittiğini ve sırada neye çalışılması gerektiğini',
     'Zorluk seviyesini ayarlıyorum — hızlı bitirenlere ekstra bir görev, zorlananlara destek veya daha düşük bir seviye',
     'Hataları olağan karşılıyor, sınıf kurallarını ve konuşma-dinleme sırasını koruyor, kararlı ama nazik davranıyorum',
     'Bir öğrenci ders saati nedeniyle yorgun geliyorsa veliyle konuşuyor ve BO’da bir yorum bırakıyorum',
     'Kurs beklediği gibi değilse derste esnek davranıyor ve Takım Liderimle bir motivasyon veya seviye dersi olasılığını konuşuyorum'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
