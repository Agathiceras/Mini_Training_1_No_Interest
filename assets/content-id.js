/* Mini_Training_1_No_Interest - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Hilangnya Minat Belajar — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Mengenali <span class=\"h-pill\">Hilangnya Minat</span> Sejak Dini",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena tidak tertarik pada pemrograman atau desain. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 4 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 15–20 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa tanda ini penting, mengapa kamulah yang bisa menangkapnya — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami mengapa hilangnya minat mudah terlewat, mengapa kamu adalah orang yang paling tepat untuk menangkapnya, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'💤 Hilangnya minat hampir tidak pernah terlihat jelas', html:`
   <div class="card"><p>Tutor sering menggambarkan seorang siswa sebagai aktif — <em>“dia ikut berpartisipasi, dia bertanya”</em> — lalu siswa yang sama mengajukan refund beberapa minggu kemudian. Hilangnya minat itu sebenarnya sudah ada sejak awal. Hanya saja tidak terlihat jelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Mengapa harus kamu.</strong> Tidak ada orang lain di perusahaan yang bertemu siswa ini setiap minggu. Dashboard hanya menunjukkan kehadiran setelah semuanya terjadi. Kamu melihat kamera yang dimatikan, tangan yang tidak lagi terangkat, layar yang tidak lagi dibagikan — secara langsung, saat masih ada yang bisa kamu lakukan.</p>`)}
  `},
  {t:'🔎 Apa yang biasanya ada di baliknya', html:`
   ${iconGrid([
     {ic:'👪', html:`<strong>Kursus ini bukan pilihan siswa</strong> — orang tuanya yang mendaftarkan, bukan si anak.`},
     {ic:'📅', html:`<strong>Jadwal yang tidak cocok</strong> dengan fokus atau energinya.`},
     {ic:'📈', html:`<strong>Frustrasi dengan levelnya</strong> — terlalu sulit, atau terlalu mudah sehingga tidak terasa seperti belajar.`},
     {ic:'👀', html:`<strong>Orang tua tidak lagi benar-benar tahu</strong> perkembangan nyata anaknya.`}
   ])}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'watch', numLabel:'Modul 1', emoji:'👁️', color:'var(--coral)',
 title:'Empat Hal yang Perlu Diperhatikan — dan Apa yang Bisa Dilakukan',
 desc:'Empat dimensi konkret dari hilangnya minat, apa yang bisa kamu lakukan untuk masing-masing, dan cara mengklasifikasikan apa yang kamu lihat ke dalam sebuah warna dan langkah berikutnya.',
 obj:'Mengetahui dengan tepat apa arti “memperhatikan tanda hilangnya minat” dalam praktik, apa yang bisa kamu lakukan di pelajaranmu untuk memperbaiki keempat area, dan cara mengklasifikasikan apa yang kamu lihat menjadi Hijau, Kuning, atau Merah.',
 sections:[
  {t:'👁️ Empat hal yang perlu diperhatikan, di setiap pelajaran', html:`
   ${patternCards([
     {ic:'🧍', title:'Kehadiran', desc:'Apakah dia benar-benar hadir?', note:'Tidak hadir tanpa kabar atau alasan yang berulang · dua kali atau lebih pembatalan dalam tiga minggu · terlambat menjadi kebiasaan · masuk lalu keluar sebelum kelas selesai'},
     {ic:'🗣️', title:'Partisipasi', desc:'Apakah dia terlibat, atau hanya sekadar hadir?', note:'Kamera selalu mati · jawaban singkat yang tidak membuka percakapan · lambat merespons atau tidak merespons sama sekali · berhenti bertanya, hanya menjawab yang ditanyakan'},
     {ic:'🛠️', title:'Produksi', desc:'Apakah benar-benar ada pekerjaan yang dilakukan?', note:'Tidak membagikan layar, atau menghindarinya · membagikan layar, tapi tidak ada kemajuan · ada jendela lain yang terbuka (game, video, chat) · dua pelajaran berturut-turut tidak mengumpulkan PR'},
     {ic:'🧩', title:'Kecocokan dan lingkungan', desc:'Apakah kondisi di sekitarnya mendukung?', note:'Masalah teknis yang terus berulang · jadwal yang bentrok dengan sekolah atau kegiatan lain · kursus dipilih oleh orang tua, bukan oleh siswa · mengungkapkan frustrasi: “ini susah / membosankan”'}
   ],2)}
   ${co('co-danger','🚨',`<p><strong>Satu tanda bisa saja berarti sedang tidak mood. Dua tanda — dalam pelajaran yang sama, atau di dua pelajaran — mulai menunjukkan pola.</strong> Jangan menunggu tanda ketiga: saat tanda ketiga muncul, sering kali Team Leader-mu yang menemukannya saat menyelidiki refund, bukan kamu.</p>`)}
  `},
  {t:'🛠️ Apa yang bisa kamu lakukan untuk masing-masing', html:`
   <div class="card"><p>Mengenali tandanya baru separuh pekerjaan. Pilih setiap area di bawah ini untuk melihat apa yang benar-benar bisa kamu lakukan di pelajaranmu untuk memperbaikinya.</p></div>
   ${dimTabs([
     {ic:'🧍', title:'Kehadiran',
      intro:'Ketidakhadiran bisa disebabkan banyak hal — perubahan jadwal, masalah kesehatan, masalah teknis, salah paham soal jam, liburan. Itu semua faktor eksternal, dan ditangani dengan cara lain. Berikut yang bisa kamu lakukan jika ketidakhadiran berkaitan dengan <strong>kurangnya keterlibatan</strong>:',
      tips:[
       {ic:'📩', html:`<strong>Kirim pesan ke orang tua di hari yang sama.</strong> Jika siswa melewatkan pelajaran, kirim pesan ke orang tuanya hari itu juga untuk mencari tahu alasannya — dan untuk mendorongnya kembali hadir.`},
       {ic:'💬', html:`<strong>Tanyakan bagaimana perasaan mereka tentang kelas.</strong> Tanyakan kepada orang tua dan siswa bagaimana perasaan mereka tentang pelajarannya: apakah ada yang bisa diperbaiki, apakah mereka menyukai topiknya, apa yang ingin mereka lihat? Ini menunjukkan bahwa kamu benar-benar mau menyesuaikan kelas dengan grupnya.`},
       {ic:'🤗', html:`<strong>Sambut mereka kembali.</strong> Saat siswa kembali, beri tahu bahwa dia dirindukan — dan perhatikan baik-baik pekerjaannya di pelajaran itu: apakah dia membagikan layar, tetap ikut sampai kelas selesai, bertanya, dan terhubung dengan teman-temannya?`},
       {ic:'🗨️', html:`<strong>Manfaatkan obrolan ringan di awal.</strong> Bangun komunitas: gunakan beberapa menit pertama di setiap pelajaran untuk mengenal siswamu dan menjalin kedekatan dengan mereka.`},
       {ic:'🌟', html:`<strong>Hubungi orang tua untuk kabar baik juga.</strong> Jangan hanya menghubungi soal ketidakhadiran — sampaikan juga hal hebat yang dilakukan siswa di kelas. Ini memotivasi siswa, dan mendorong orang tua untuk mendukungnya.`}
      ]},
     {ic:'🗣️', title:'Partisipasi',
      intro:'Partisipasi tumbuh saat siswa merasa aman. <strong>Fleksibilitas dan mengenal siswamu</strong> lebih penting daripada teknik apa pun — mulailah dari titik di mana setiap siswa merasa nyaman, lalu bantu dia melangkah ke tahap berikutnya.',
      tips:[
       {ic:'📷', html:`<strong>Mulailah dengan mengajak semua siswa menyalakan kamera dan mikrofon.</strong> Itu selalu menjadi rekomendasi pertama, dan sama untuk seluruh grup.`},
       {ic:'💬', html:`<strong>Lalu tawarkan cara lain untuk ikut serta.</strong> Jika seorang siswa tidak nyaman dengan kamera atau mikrofon, biarkan dia berpartisipasi dengan alat yang <em>membuatnya</em> nyaman: reaksi, chat publik atau pribadi, berbagi layar.`},
       {ic:'🙋', html:`<strong>Ajukan pertanyaan yang bermakna.</strong> Tanyakan tentang ide dan hasil kerja mereka — dan kenali mereka, supaya pertanyaanmu terhubung dengan hal yang benar-benar mereka pedulikan.`},
       {ic:'🔄', html:`<strong>Bersikaplah fleksibel.</strong> Sesuaikan cara kamu mengajak berpartisipasi dengan setiap siswa, alih-alih satu aturan yang tidak cocok untuk siapa pun.`},
       {ic:'🎲', html:`<strong>Untuk siswa yang paling kecil, jadikan permainan.</strong> Tawarkan hadiah kecil dan gunakan permainan berbatas waktu — <em>“siapa yang bisa menemukannya dalam 30 detik?”</em> — supaya ikut serta terasa menyenangkan, bukan menakutkan.`}
      ],
      video:{src:'https://drive.google.com/file/d/16PcuvAmbjneDFu-3325ReQdB8Wf4YcYs/preview', title:'Ruang aman untuk bertanya', brief:'Dalam video ini, para siswa merasa aman untuk bertanya, ikut membantu masalah teman sekelasnya, dan meminta bantuan tutor. Perhatikan betapa ramah dan penuh pengertian tutor berbicara kepada mereka.'}},
     {ic:'🛠️', title:'Produksi',
      intro:'Pertahankan <strong>tujuan pembelajaran</strong> — dan bersikaplah fleksibel untuk hampir semua hal lainnya. Pekerjaan nyata terjadi saat siswa tahu persis apa yang harus dilakukan dan merasa pekerjaan itu miliknya.',
      tips:[
       {ic:'🎯', html:`<strong>Pertahankan tujuannya, bebaskan temanya.</strong> Biarkan siswa menjelajahi tema yang paling mereka sukai. Jangan paksa mereka mengikuti alur cerita jika mereka tidak nyaman — selama mereka tetap melatih keterampilannya.`},
       {ic:'🎬', html:`<strong>Contohkan dulu, dan beri instruksi yang jelas.</strong> Tunjukkan caranya, jelaskan persis apa yang akan kamu lakukan, dan pastikan semua orang paham — supaya pelajaran tidak pernah membingungkan.`},
       {ic:'🖥️', html:`<strong>Minta semua siswa membagikan layar</strong> — secara bergiliran, di berbagai tahap pelajaran — supaya pekerjaan setiap siswa terlihat, bukan hanya yang paling cepat.`},
       {ic:'💬', html:`<strong>Berikan umpan balik yang membangun.</strong> Sampaikan apa yang sudah mereka lakukan dengan baik, dan apa yang perlu dilatih di pelajaran berikutnya.`},
       {ic:'⚖️', html:`<strong>Sesuaikan tingkat kesulitannya.</strong> Jika mereka selesai cepat, tawarkan tantangan tambahan; jika lebih lambat, turunkan tingkat kesulitannya atau berikan bantuan.`}
      ],
      video:{src:'https://drive.google.com/file/d/1dju7fHKNzTYMTnAesr1I_KKvl1jL8BNL/preview', title:'Umpan balik yang membangun dan positif', brief:'Dalam video ini, tutor memberikan umpan balik yang membangun dan positif atas hasil kerja seorang siswa.'}},
     {ic:'🧩', title:'Kecocokan dan lingkungan',
      intro:'Siswa yang tidak merasa nyaman di kelas tidak akan tetap terlibat, sebagus apa pun materinya. <strong>Suasana kelas adalah sesuatu yang kamu bangun</strong>, pelajaran demi pelajaran.',
      tips:[
       {ic:'🌱', html:`<strong>Anggap kesalahan sebagai hal yang wajar</strong>, dan berikan umpan balik yang membantu, bukan menghakimi.`},
       {ic:'🤝', html:`<strong>Dorong pertemanan</strong> di antara teman sekelas — tugas bersama, saling membantu, merayakan hasil kerja satu sama lain.`},
       {ic:'📜', html:`<strong>Tegakkan aturan kelas</strong> — dan tetap atur giliran berbicara dan mendengarkan.`},
       {ic:'🔧', html:`<strong>Tangani masalah teknis dengan tenang.</strong> Bantu siswa yang mengalaminya, tanpa meninggalkan anggota grup lainnya — tidak boleh ada yang bosan di kelas.`},
       {ic:'⚖️', html:`<strong>Tegas tapi ramah.</strong> Ketidakdisiplinan juga membuat siswa merasa tidak nyaman. Temukan keseimbangannya: kamu tidak boleh otoriter, tapi juga tidak boleh kehilangan kendali atas kelas.`}
      ],
      video:{src:'https://drive.google.com/file/d/1NtrwskCgGVzSy97z-VaDwtMNEfchUiTk/preview', title:'Menunjukkan kepedulian yang tulus', brief:'Dalam video ini, tutor menunjukkan kepedulian yang tulus kepada siswa melalui obrolan ringan — menyadari bahwa salah satu siswa memakai gips, dan menanyakan kabarnya.'}}
   ])}
  `},
  {t:'🚦 Klasifikasikan apa yang kamu lihat, lalu bertindak sesuai', html:`
   ${classifyCard('co-ok','🟢','Tidak ada tanda yang berlangsung terus-menerus. Menghadiri sebagian besar pelajaran, membagikan layar, menunjukkan kemajuan.','Jaga terus hubungannya — kirimkan satu bukti kemajuan kepada wali siswa setiap 4 pelajaran, sebelum mereka memintanya.')}
   ${classifyCard('co-cute','🟡','Satu tanda muncul terus-menerus sepanjang pelajaran, atau berulang di dua pelajaran — atau dua tanda dalam pelajaran yang sama.','Ajak siswa bicara di kelas dan cari tahu alasannya dengan lembut. Bisa jadi dia hanya pemalu.')}
   ${classifyCard('co-danger','🔴','Lebih dari dua tanda dalam pelajaran yang sama, atau dua tanda yang berlangsung di lebih dari satu pelajaran.','Beri tahu Team Leader-mu di hari yang sama, dengan detail. Tetap mengajar dengan baik dan bersikap hangat kepada keluarga — tawaran pelajaran tambahan, perubahan jadwal, atau hal lainnya datang dari TL-mu, tidak pernah langsung dari kamu.')}
   ${classifyCard('co-danger','🚨','Siswa sama sekali tidak tertarik pada pemrograman atau kursus Kodland — apa pun yang kamu lihat selain itu.','Langsung anggap sebagai Merah. Alasan ini sudah ditandai sebagai prioritas tinggi, jadi mengesampingkan penilaian lainnya.')}
  `}
 ],
 ix:{
  title:'Area mana yang dibantu oleh tips ini?',
  instr:'Empat tips dari modul ini. Baca masing-masing dan tentukan area mana dari keempat area yang terbantu oleh tips tersebut. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Area mana yang dibantu oleh tips ini?', card:'💬 Seorang siswa tidak nyaman menyalakan kamera, jadi kamu mengajaknya ikut serta melalui chat dan reaksi.', zones:[{label:'🧍 Kehadiran', fb:'Belum tepat — ini tentang cara siswa ikut serta setelah dia berada di kelas. Itu termasuk Partisipasi.'},{label:'🗣️ Partisipasi', fb:'Benar — ajak semua siswa menyalakan kamera dan mikrofon dulu, lalu tawarkan cara lain untuk ikut serta: reaksi, chat publik atau pribadi, berbagi layar.'},{label:'🛠️ Produksi', fb:'Belum tepat — ini bukan tentang pekerjaannya, tapi tentang cara siswa ikut dalam percakapan. Itu termasuk Partisipasi.'},{label:'🧩 Kecocokan dan lingkungan', fb:'Hampir — ini memang membantunya merasa nyaman, tapi tipsnya tentang cara dia ikut serta. Itu termasuk Partisipasi.'}], correctZone:1},
   {type:'sort', prompt:'Area mana yang dibantu oleh tips ini?', card:'📜 Seorang siswa menertawakan kesalahan temannya. Kamu dengan tenang mengingatkan semua orang tentang aturan kelas dan memperlakukan kesalahan itu sebagai bagian dari belajar.', zones:[{label:'🧍 Kehadiran', fb:'Belum tepat — ini tentang seberapa aman suasana kelas terasa. Itu termasuk Kecocokan dan lingkungan.'},{label:'🗣️ Partisipasi', fb:'Hampir — kelas yang aman memang membantu partisipasi, tapi tips ini tentang suasana kelas: Kecocokan dan lingkungan.'},{label:'🛠️ Produksi', fb:'Belum tepat — ini tentang suasana, bukan pekerjaannya. Itu termasuk Kecocokan dan lingkungan.'},{label:'🧩 Kecocokan dan lingkungan', fb:'Benar — menganggap kesalahan sebagai hal wajar, menegakkan aturan kelas, dan bersikap tegas tapi ramah adalah hal yang membuat kelas terasa aman.'}], correctZone:3},
   {type:'sort', prompt:'Area mana yang dibantu oleh tips ini?', card:'📩 Seorang siswa melewatkan pelajaran. Di hari yang sama, kamu mengirim pesan ke orang tuanya untuk mencari tahu alasannya — dan untuk mendorongnya kembali hadir.', zones:[{label:'🧍 Kehadiran', fb:'Benar — pesan di hari yang sama menunjukkan bahwa kamu memperhatikan, membantu menemukan alasannya, dan mengajak siswa kembali. Dan saat dia kembali, beri tahu bahwa dia dirindukan.'},{label:'🗣️ Partisipasi', fb:'Belum tepat — siswa itu sama sekali tidak ada di kelas. Itu termasuk Kehadiran.'},{label:'🛠️ Produksi', fb:'Belum tepat — ini tentang hadir di kelas, bukan pekerjaannya. Itu termasuk Kehadiran.'},{label:'🧩 Kecocokan dan lingkungan', fb:'Belum tepat — tips ini tentang ketidakhadirannya itu sendiri. Itu termasuk Kehadiran.'}], correctZone:0},
   {type:'sort', prompt:'Area mana yang dibantu oleh tips ini?', card:'⚖️ Seorang siswa menyelesaikan aktivitas dalam separuh waktu, jadi kamu menawarkan tantangan tambahan — dan kamu membagikan layarmu untuk mencontohkan langkah berikutnya terlebih dahulu.', zones:[{label:'🧍 Kehadiran', fb:'Belum tepat — siswa itu hadir dan sedang bekerja. Ini tentang pekerjaannya: Produksi.'},{label:'🗣️ Partisipasi', fb:'Belum tepat — ini tentang tingkat kesulitan dan kejelasan tugasnya. Itu termasuk Produksi.'},{label:'🛠️ Produksi', fb:'Benar — menyesuaikan tingkat kesulitan, mencontohkan dulu, dan memberi instruksi yang jelas membuat pekerjaan nyata tetap berjalan.'},{label:'🧩 Kecocokan dan lingkungan', fb:'Belum tepat — ini tentang tugasnya, bukan suasananya. Itu termasuk Produksi.'}], correctZone:2}
  ]
 }
},
{id:'attract', numLabel:'Modul 2', emoji:'🧭', color:'var(--coral)',
 title:'Menarik Perhatian Mereka',
 desc:'Untuk hilangnya minat yang belum parah: apa yang biasanya menjadi penyebabnya, dan apa yang benar-benar bisa kamu sesuaikan di kelas.',
 obj:'Mengenali penyebab umum hilangnya minat yang belum parah — kecocokan kursus, jadwal, dan tingkat kesulitan — dan mengetahui mana yang bisa kamu sesuaikan sendiri dan mana yang perlu disampaikan melalui Team Leader-mu.',
 sections:[
  {t:'🔎 Tiga kasus yang umum', html:`
   ${stepIconBlock('🔄','Kursusnya tidak sesuai harapan, atau dia menyadari bahwa desain/pemrograman bukan untuknya', `<div class="mt-pic-crop" style="aspect-ratio:1792/852"><img src="Pictures_T1/image%201.png" alt="Seorang anak cemberut menatap layar laptop" style="width:107.14%;left:-3.571%;top:-13.146%"></div><div class="sib-strat">🎯 Strategi</div><p>Bicarakan dengan Team Leader-mu tentang kemungkinan pelajaran motivasi. Bersikaplah fleksibel di kelas — biarkan siswa menyesuaikan pekerjaannya (misalnya, melewatkan alur ceritanya tetapi tetap mempelajari topik inti pelajaran). Pelajaran penyetaraan juga bisa membantu: siswa mungkin menemukan kursus Kodland lain yang benar-benar sesuai dengan keinginannya, dan ini bisa mencegah refund dengan mengarahkannya ke sesuatu yang akan dia nikmati.</p>`)}
   ${stepIconBlock('⏰','Jadwalnya membuat dia kehabisan energi untuk belajar (lelah sepulang sekolah, kelas terlalu pagi)', `<div class="mt-pic-crop" style="aspect-ratio:1676/852"><img src="Pictures_T1/image%202.png" alt="Seorang siswa yang lelah tertidur di mejanya" style="width:114.56%;left:-6.683%;top:-13.146%"></div><div class="sib-strat">🎯 Strategi</div><p>Bicarakan dengan orang tua dan tinggalkan komentar tentang hal ini di BO. Perubahan jadwal bisa jadi justru yang menjaga motivasi siswa sebelum berujung pada refund.</p>`)}
   ${stepIconBlock('⚖️','Dia menyadari bahwa kursusnya terlalu mudah atau terlalu sulit baginya', `<div class="mt-pic-crop" style="aspect-ratio:1736/852"><img src="Pictures_T1/image%203.png" alt="Seorang anak mengangkat bahu, ragu-ragu" style="width:110.60%;left:-5.300%;top:-17.371%"></div><div class="sib-strat">🎯 Strategi</div><p>Ini salah satu situasi yang paling mudah diselamatkan, dan kamu melakukannya dengan menyesuaikan pelajarannya sendiri.</p>
   <p><strong>Jika terlalu mudah:</strong> jangan biarkan siswamu yang lebih cepat merasa bosan sementara yang lain masih mengerjakan. Tawarkan tantangan dan aktivitas tambahan (beberapa pelajaran sudah menyertakannya — kamu juga bisa membiarkan mereka mulai mengerjakan PR lebih awal). Naikkan tingkat kesulitannya dan biarkan mereka merasa tertantang dalam hal yang mereka sukai, supaya mereka merasa mempelajari sesuatu yang baru. Siswa yang tidak merasa tertantang tidak melihat gunanya kursus ini, lalu berhenti.</p>
   <p><strong>Jika terlalu sulit:</strong> berikan dukungan. Kamu bisa sedikit menurunkan tingkat kesulitan aktivitasnya, membagikan kode sambil menjelaskan cara kerjanya supaya mereka memahami proses di baliknya, memberikan tips tambahan agar aktivitasnya lebih sederhana, dan selalu menunjukkan caranya di kamera terlebih dahulu sambil memastikan mereka bisa mengikuti. Di luar pelajaran, lakukan tindak lanjut dan soroti sesuatu yang sudah mereka lakukan dengan baik, supaya mereka tetap termotivasi untuk terus belajar.</p>`)}
  `},
  {t:'🤝 Mengenal Siswa Kita', html:`
   <div class="card"><p>Sebagian dari upaya mengembalikan perhatian siswa yang kehilangan minat berasal dari membangun ikatan yang nyata dengannya — hubungan antara siswa, teman-teman sekelasnya, dan kamu — serta menciptakan ruang aman yang ingin dia datangi di setiap kelas, bukan hanya untuk mempelajari topik yang dia sukai, tetapi juga untuk bertemu lagi dengan tutor dan teman-temannya.</p></div>
   ${iconGrid([
     {ic:'👫', html:`<strong>Dorong pertemanan</strong> melalui kerja kelompok dan tugas bersama.`},
     {ic:'🎮', html:`<strong>Tanyakan minat yang sama</strong> — acara atau video game favorit, hal-hal kecil yang menarik tentang tempat tinggal mereka.`},
     {ic:'🌟', html:`<strong>Akui hal baik atau cerdas</strong> yang dilakukan atau dikatakan siswa di kelas.`}
   ])}
  `}
 ],
 ix:{
  title:'Menarik perhatian mereka — cek modul',
  instr:'Pilih langkah terbaik untuk setiap situasi. 70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:'Seorang siswa selalu menyelesaikan setiap aktivitas jauh lebih cepat daripada grupnya, lalu mulai mengganggu yang lain. Apa langkah pertama yang paling berguna?', opts:['Memberi tahu orang tua bahwa kursusnya tampak terlalu mudah dan menanyakan apa yang mereka inginkan','Menunggu beberapa pelajaran untuk melihat apakah anggota grup lainnya bisa menyusul','Menaikkan tingkat kesulitan untuknya — tantangan tambahan atau mulai mengerjakan PR lebih awal'], correct:2, fb:'Kebosanan butuh tantangan nyata, yang disesuaikan di kelas. Siswa yang tidak merasa tertantang tidak melihat gunanya kursus ini.'},
   {type:'choice', prompt:'Seorang siswa selalu tampak lelah dan tidak fokus di kelas yang dijadwalkan tepat sepulang sekolah. Apa langkah pertama yang terbaik?', opts:['Berbicara dengan orang tua tentang bagaimana jadwalnya berjalan dan meninggalkan komentar di BO','Mempertahankan jadwal saat ini — itu sudah disepakati saat pendaftaran','Meminta siswa untuk lebih banyak beristirahat sebelum kelas'], correct:0, fb:'Jadwal yang menguras tenaga siswa sering kali bisa diperbaiki — bicarakan dengan orang tua dan tinggalkan komentar di BO, supaya perubahan bisa dipertimbangkan sebelum motivasinya hilang.'},
   {type:'choice', prompt:'Seorang siswa bilang topiknya tidak menarik baginya dan dia berharap memilih kursus Kodland yang lain. Apa yang bisa kamu lakukan sendiri?', opts:['Bilang bahwa kamu akan mengatur perpindahan ke kursus yang dia inginkan','Tetap fleksibel dalam cara dia mengerjakan tugas, dan usulkan pelajaran motivasi atau pelajaran penyetaraan kepada Team Leader-mu','Menjelaskan bahwa perpindahan kursus ditangani oleh departemen lain lalu melanjutkan pelajaran'], correct:1, fb:'Kamu bisa menyesuaikan cara dia bekerja di kelas dan mengusulkan opsi pelajaran penyetaraan kepada Team Leader-mu — kamu tidak bisa menjanjikan perpindahan kursus sendiri.'},
   {type:'choice', prompt:'Seorang siswa kesulitan dengan levelnya dan mulai frustrasi. Mana yang paling membantu?', opts:['Cepat-cepat lanjut supaya dia tidak merasa disorot','Menunjukkan caranya di kamera terlebih dahulu, membagikan kode sambil menjelaskan cara kerjanya, dan memastikan dia bisa mengikuti','Membiarkannya menyalin jawaban teman supaya bisa mengejar'], correct:1, fb:'Contohkan dulu, jelaskan proses di balik kodenya, dan cek pemahamannya — lalu lakukan tindak lanjut di luar pelajaran dengan menyoroti sesuatu yang sudah dia lakukan dengan baik.'},
   {type:'choice', prompt:'Mana yang paling bisa membangun ikatan yang membuat siswa yang kehilangan minat kembali bersemangat?', opts:['Tidak ada obrolan ringan di kelas supaya ada lebih banyak waktu untuk materi','Lebih sering memanggil siswa yang selalu menjawab, supaya tempo tetap terjaga','Tugas kelompok, pertanyaan tentang game atau acara favorit mereka, dan memperhatikan hal cerdas yang mereka katakan'], correct:2, fb:'Kedekatan dengan teman sekelas dan denganmu adalah hal yang membuat siswa ingin kembali di setiap pelajaran — bukan hanya topiknya.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},  {t:'🌱 Di setiap pelajaran', html:`
   ${numlist([
     'Saat siswa melewatkan pelajaran, saya mengirim pesan ke orang tuanya di hari yang sama untuk mencari tahu alasannya dan mengajaknya kembali — dan saat dia kembali, saya memberi tahu bahwa dia dirindukan',
     'Saya juga menghubungi orang tua untuk kabar baik, bukan hanya soal ketidakhadiran atau masalah',
     'Saya memanfaatkan obrolan ringan di awal untuk mengenal siswa saya dan membangun komunitas di grup',
     'Saya mengajak semua siswa menyalakan kamera dan mikrofon terlebih dahulu — lalu menawarkan cara lain untuk ikut serta (reaksi, chat publik atau pribadi, berbagi layar) kepada siswa yang tidak nyaman',
     'Saya mempertahankan tujuan pembelajaran, tetapi membiarkan siswa menjelajahi topik yang mereka sukai — bukan hanya alur ceritanya',
     'Saya mencontohkan dulu, memberi instruksi yang jelas, dan memastikan semua orang paham sebelum mereka mulai',
     'Saya meminta semua siswa membagikan layar secara bergiliran, dan memberikan umpan balik yang membangun: apa yang sudah berjalan baik dan apa yang perlu dilatih selanjutnya',
     'Saya menyesuaikan tingkat kesulitan — tantangan tambahan bagi yang selesai cepat, dukungan atau level yang lebih rendah bagi yang kesulitan',
     'Saya menganggap kesalahan sebagai hal yang wajar, menegakkan aturan kelas serta giliran berbicara dan mendengarkan, dan tetap tegas tapi ramah',
     'Jika seorang siswa datang dalam keadaan lelah karena jadwalnya, saya berbicara dengan orang tuanya dan meninggalkan komentar di BO',
     'Jika kursusnya tidak sesuai harapan, saya tetap fleksibel di kelas dan mengusulkan pelajaran motivasi atau pelajaran penyetaraan kepada Team Leader saya'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
