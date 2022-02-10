import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Copy from '../../assets/img/copy.png';
import Clipboard from '@react-native-community/clipboard';

let DATA = [
  {
    kata: 'Abiotik',
    definisi:
      'Abiotik : Geo ~ segala sesuatu yang tidak bernyawa atau tidak hidup. Konsep ini juga digunakan dalam ilmu biologi yang diartikan sebagai komponen penyusun ekosistem yang terdiri dari benda-benda tidak hidup.',
  },
  {
    kata: 'Abris Sous Roche',
    definisi:
      'Abris Sous Roche : Sej ~ gua yang menyerupai ceruk peninggalan masyarakat pada masa praaksara.',
  },
  {
    kata: 'Afeksi',
    definisi:
      'Afeksi : Sos ~ sering digunakan untuk menjelaskan hubungan antara dua orang (atau lebih) yang lebih dari sekadar rasa simpati atau persahabatan.',
  },
  {
    kata: 'AFTA',
    definisi:
      'AFTA : Eko ~ singkatan dari Asean Free Trade Area ialah kesepakatan di antara negara-negara ASEAN untuk membentuk sebuah zona perdagangan bebas.',
  },
  {
    kata: 'Agent Of Change',
    definisi:
      'Agent Of Change : Eko ~ disebut juga sebagai agen perubahan yaitu orang yang bergerak sebagai pelopor atau penggerak perubahan. Sej ~ pihak yang menghendaki perubahan. Sos ~ seorang individu atau kelompok yang memiliki kemampuan untuk memengaruhi orang lain, kelompok atau suatu organisasi dalam mengambil keputusan yang berkaitan dengan inovasi agar sesuai yang diharapkan oleh agen perubahan itu sendiri.',
  },
  {
    kata: 'Agresi',
    definisi: 'Agresi : Sej ~ penyerangan suatu negara terhadap negara lain.',
  },
  {
    kata: 'Agrikultur',
    definisi:
      'Agrikultur : Geo ~ proses memproduksi makanan, pangan, serat, dan banyak hasil-hasil kebutuhan lain disektor pertanian tanaman-tanaman tertentu dan pertambahan hewan-hewan lokal (ternak).',
  },
  {
    kata: 'Ajudikasi',
    definisi:
      'Ajudikasi : Sos ~ penyelesaian konflik/perselisihan melalui pengadilan (meja hijau), Ing: adjudication. ',
  },
  {
    kata: 'Aklamasi',
    definisi:
      'Aklamasi : Sej ~ pernyataan setuju secara lisan dari seluruh peserta rapat terhadap suatu usulan tanpa melalui pemungutan suara. Biasanya disebut juga dengan “kesepakatan bulat”.',
  },
  {
    kata: 'Akomodasi',
    definisi:
      'Akomodasi : Eko ~ sesuatu yang disediakan untuk memenuhi kebutuhan, seperti tempat menginap atau tempat tinggal sementara bagi orang yang berpergian. Sos ~ merupakan proses sosial dalam masyarakat dengan tujuan menyelesaikan pertentangan atau konflik sosial antara dua pihak atau lebih yang sedang bersengketa.',
  },
  {
    kata: 'Akulturasi',
    definisi:
      'Akulturasi : Sej ~ proses pertemuan dua kebudayaan atau lebih yang lambat laun diterima dan tanpa menyebabkan hilangnya kepribadian budaya itu sendiri. Sej ~ perpaduan antara dua kebudayaan, kebudayaan masa praaksara dengan kebudayaan Hindu-Budha yang memiliki ciri khas masing-masing. Sos ~ proses penerimaan unsur budaya baru yang datang dari luar, tanpa menghilangkan sifat budaya asli atau budaya lama.',
  },
  {
    kata: 'Amalgamasi',
    definisi:
      'Amalgamasi : Eko ~ penggabungan dua atau lebih perusahaan menjadi satu perusahaan baru, untuk mencapai posisi dan skala ekonomi yang lebih baik. Geo ~ istilah dalam geopolitik yang mengacu pada bergabungnya dua atau lebih unit administratif. Sos ~ Berarti “penggabungan” atau “menyatukan” tindakan atau proses di mana dua atau lebih budaya, etnik, ras, adat-istiadat membentuk sebuah hal baru yang lebih kuat.',
  },
  {
    kata: 'Amplitudo',
    definisi: 'Amplitud : Geo ~ jarak naik dan turunnya suatu getaran.',
  },
  {
    kata: 'Analisis SWOT',
    definisi:
      'Analisis SWOT : Sej ~ alat analisis yang digunakan untuk mengukur strength (kekuatan), weaknsses (kelemahan), opportunities (peluang), dan threats (tantangan) pada suatu objek penelitian.',
  },
  {
    kata: 'Angin',
    definisi:
      'Angin : Geo ~ udara yang bergerak karena adanya perbedaan tekanan udara.',
  },
  {
    kata: 'Animisme',
    definisi:
      'Animisme : Sej ~ kepercayaan kepada makhluk halus dan roh yang merupakan asal kepercayaan agama dikalangan manusia purba. Sos ~ kepercayaan kepada roh dan mahkluk halus.',
  },
  {
    kata: 'Anti Sosial',
    definisi:
      'Anti Sosial : Sos ~ tindakan mementingkan diri sendiri dan tidak peduli dengan lingkungan sekitar.',
  },
  {
    kata: 'APRA',
    definisi:
      'APRA : Sej ~ singkatan dari Pemberontakan Angkatan Perang Ratu Adil, yang bertujuan mempertahankan bentuk negera federal di Indonesia dan memiliki tentara tersendiri pada negara bagian RIS.',
  },
  {
    kata: 'Arbitrasi',
    definisi:
      'Arbitrasi : Sos ~ penyelesaian konflik menggunakan pihak ketiga sebagai penentu dan pengambil keputusan. Ing: arbitration. ',
  },
  {
    kata: 'Arca',
    definisi:
      'Arca : Sej ~ patung yang dibuat dari batu dan dipahat menyerupai bentuk manusia atau binatang. ',
  },
  {
    kata: 'Artefak',
    definisi: 'Artefak : Sej ~ benda-benda peninggalan masa lalu.',
  },
  {
    kata: 'ASEAN',
    definisi:
      'ASEAN : IPS ~ singkatan dari Association of Southeast Asian Nations yang berarti perhimpunan Bangsa-Bangsa Asia Tenggara.',
  },
  {
    kata: 'Asimilasi',
    definisi:
      'Asimilasi : Sej ~ pembauran dua kebuadayaan atau lebih yang disertai hilangnya ciri khas kebudayaan asli. Sos ~ peleburan atau penggabungan dua budaya atau lebih menjadi satu dan membentuk budaya baru. Atau dikenal juga dengan istilah bercampurnya kelompok minoritas ke dalam masyarakat yang dominan.',
  },
  {
    kata: 'Asosiasi',
    definisi:
      'Asosiasi : Sos~ perkumpulan orang-orang yang mempunyai kepentingan bersama. Dikenal juga sebagai organisasi penggerak lembaga sosial.',
  },
  {
    kata: 'Asosiatif',
    definisi:
      'Asosiatif : Sos ~ proses sosial membawa kemajuan dan stabilitas di masyarakat. Disebut sebagai proses sosial integratif, yang mengarah pada penyatuan dan meningkatkan hubungan solidaritas, seperti kerjasama, akomodasi, asimilasi dan seterusnya.',
  },
  {
    kata: 'Astronomis',
    definisi:
      'Astronomis : Geo ~ cabang ilmu yang melibatkan pengamatan benda-benda langit, serta fenomena alam yang terjadi di luar atmosfer bumi.',
  },
  {
    kata: 'Aswamedha',
    definisi:
      'Aswamedha : Sej ~ upacara pelepasan kuda untuk menentukan batas wilayah kerajaan yang diterapkan di Kerajaan Kutai.',
  },
  {
    kata: 'Atlas',
    definisi:
      'Atlas : Geo ~ kumpulan peta-peta yang dirancang untuk disimpan dalam bentuk jilid (buku) atau dalam keadaan lepas-lepas, dan dikumpulkan menjadi satu.',
  },
  {
    kata: 'Atmosfer',
    definisi: 'Atmosfer : Geo ~ lapisan udara yang menyelubungi bumi.',
  },
  {
    kata: 'Awan',
    definisi:
      'Awan : Geo ~ titik-titik air yang melayang-layang di atmosfer dan terjadi sebagai akibat adanya kondensasi uap air.',
  },
  {
    kata: 'Babad',
    definisi:
      'Babad : Sej ~ dongeng yang sengaja diubah sebagai cerita sejarah.',
  },
  {
    kata: 'Badai',
    definisi:
      'Badai : Geo ~ fenomena siklon tropis berupa cuaca ekstrem diikuti hujan es, badai salju, serta badai pasir dan debu.',
  },
  {
    kata: 'Bandung Lautan Api',
    definisi:
      'Bandung Lautan Api : Sej ~ peristiwa kebakaran besar yang terjadi di Kota Bandung,  Jawa Barat pada tanggal 23 Maret 1946. Sengaja dibakar oleh tentara keamanan rakyat dan rakyat setempat dengan tujuan agar tentara sekutu tidak dapat menggunakan kota Bandung sebagai pos-pos militer. ',
  },
  {
    kata: 'Bargaining',
    definisi:
      'Bargaining : Sos ~ disebut juga dengan tawar-menawar. Perundingan atau negosiasi mengenai pertukaran barang dan jasa antara dua pihak atau lebih.',
  },
  {
    kata: 'Barometer',
    definisi: 'Barometer : Geo ~ alat untuk mengukur tekanan udara.',
  },
  {
    kata: 'Barter',
    definisi:
      'Barter : Sej ~ kegiatan perdagangan dengan cara menukar barang dengan barang tanpa perantara uang. Sos ~ kegiatan tukar-menukar barang tanpa melibatkkan uang sebagai alat transaksi, barter juga bisa menggunakan jasa selama bisa dianggap sebagai alat tukar.',
  },
  {
    kata: 'Batuan Beku',
    definisi:
      'Batuan Beku : Geo ~ jenis bantuan yang terbentuk dari magma yang mendingin dan mengeras. ',
  },
  {
    kata: 'Benua',
    definisi:
      'Benua : Geo ~ hamparan daratan yang sangat luas yang berada dipermukaan bumi. ',
  },
  {
    kata: 'Berburu',
    definisi:
      'Berburu : Sej ~ praktik mengejar, menangkap, atau membunuh hewan liar untuk dimakan, perdagangan, atau memanfaatkan hasil produknya.',
  },
  {
    kata: 'Bercocok Tanam',
    definisi:
      'Bercocok Tanam : Sej ~ kelanjutan dari masa berburu dan meramu ditandai dengan mulai menetapnya manusia praaksara disuatu tempat, ketika manusia mulai memenuhi kebutuhan hidup dengan cara membuka lahan di hutan untuk dijadikan ladang.',
  },
  {
    kata: 'BIG',
    definisi:
      'BIG : Geo ~ singkatan dari Badan Informasi Geospasial, yang merupakan lembaga pemerintah nonkementerian Indonesia yang bertugas melaksanakan tugas pemerintahan dibidang informasi geospasial. ',
  },
  {
    kata: 'Bilateral',
    definisi:
      'Bilateral : Eko ~ kerjasama antara dua pihak atau dua negara saja. Sos ~  sistem kekerabatan berdasarkan garis keturunan dari pihak ayah dan ibu.',
  },
  {
    kata: 'Biotik',
    definisi:
      'Biotik : Geo ~ segala sesuatu yang bernyawa atau makhluk hidup. Konsep ini juga digunakan dalam ilmu biologi, diartikan sebagai semua makhluk hidup yang ada di bumi yang dibagi ke dalam tiga kelompok yaitu produsen, konsumen, dan decomposer atau pengurai.',
  },
  {
    kata: 'Blokade',
    definisi:
      'Blokade : Eko~ menutup sektor perdagangan Indonesia ke beberapa kawasan, wilayah, daerah, maupun suatu negara. Sej ~  pengepungan atau penutupan suatu daerah atau negara sehingga orang, barang, kapal, dan sebagainya tidak dapat keluar masuk dengan bebas.',
  },
  {
    kata: 'BMKG',
    definisi:
      'BMKG : Geo ~ merupakan singkatan dari Badan Meteorologi, Klimatologi, dan Geofisika lembaga pemerintah nondepartemen Indonesia yang mempunyai tugas melaksanakan tugas pemerintahan dibidang meteorologi, klimatologi, dan geofisika. ',
  },
  {
    kata: 'Bonus Demografi ',
    definisi:
      'Bonus Demografi : Sos ~ bonus yang dinikmati suatu negara sebagai akibat dari besarnya proporsi penduduk produktif (rentang usia 15-64 tahun).',
  },
  {
    kata: 'BPUPKI',
    definisi:
      'BPUPKI : Sej ~ singkatan dari Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia. Dibentuk dalam usaha mempersiapakan kemerdekaan Inodnesia yang diketuai oleh Dr. K.R.T Radjiman Wedyodiningrat.',
  },
  {
    kata: 'Budaya',
    definisi:
      'Budaya : Eko ~ perilaku individu datau kelompok dalam melakukan optimisasi untuk mencapai keseimbangan ekonomi. Geo ~  berasal dari kata  “colore” yang berarti mengolah atau mengerjakan yang kemudian berubah menjadi kata “culture” diartikan sebagai segala daya dan kegiatan manusia untuk mengolah dan merubah alam. Sej ~ berasal dari bahasa Sanskerta yaitu buddhayah, yang merupakan bentuk jamak dari buddhi (budia atau akal), diartikan sebagai hal-hal yang berkaitan dengan budi dan akal manusia. Sos ~  hasil cipta, rasa, dan karsa manusia yang mencakup pengetahuan, ide/gagasan, kepercayaan, kesenian, moral, hukum adat-istiadat, dan kemampuan.',
  },
  {
    kata: 'BUMN',
    definisi:
      'BUMN : Eko ~ singkatan dari Badan UsahaMilik Negara, badan usaha yang modalnya dimiliki oleh negara (pemerintah) baik seluruhnya maupun sebagian.',
  },
  {
    kata: 'Buruh Migran',
    definisi:
      'Buruh Migran : Geo ~ orang yang bermigrasi atau berpindah dari wilayah kelahiran/lokasi tinggal yang bersifat tetap untuk keperluan bekerja. ',
  },
  {
    kata: 'Candi',
    definisi:
      'Candi : Sej ~ sebuah bangunan keagamaan tempat ibadah peningggalan purbakala yang berasal dari peradaban Hindu-Budha.  Umum ~ bangunan kuno yang terbuat dari batu (sebagai tempat pemujaan,  penyimpanan abu jenazah raja-raja, pendeta-pendeta Hindu atau Budha pada zaman dulu).',
  },
  {
    kata: 'Cara',
    definisi:
      'Cara : Sos ~ norma yang merujuk pada suatu perbuatan. Ing:  usage.',
  },
  {
    kata: 'Cateris Paribus',
    definisi:
      'Cateris Paribus : Eko ~ faktor lain yang mempengaruhi jumlah barang dan jasa yang diminta tidak berubah.',
  },
  {
    kata: 'Coalition',
    definisi:
      'Coalition : Sos ~ usaha dua organisasi atau lebih untuk mengejar tujuan yang sama dengan cara yang kooperatif. ',
  },
  {
    kata: 'Cooptation',
    definisi:
      'Cooptation : Sos ~ usaha ke arah kerjasama yang dilakukan dengan jalan menyepakati pemimpin yang akan ditunjuk untuk mengendalikan jalannya organisasi atau kelompok.',
  },
  {
    kata: 'Cuaca',
    definisi:
      'Cuaca : Geo ~  keadaan yang terjadi pada atmosfer, langit, atau udara di bumi dalam waktu yang singkat.',
  },
  {
    kata: 'Cultural Animosity',
    definisi:
      'Cultural Animosity : Sos ~  kedua kebudayaan seimbang tarafnya sehingga saling tolak-menolak. ',
  },
  {
    kata: 'Cultural Lag',
    definisi:
      'Cultural Lag : Sos ~   sering disebut sebagai ketertinggalan budaya, kondisi di mana kebudayaan material mengalami perubahan sementara kebudayaan nonmaterial lebih lambat dalam proses penyesuaian.',
  },
  {
    kata: 'Cultural Shock',
    definisi:
      'Cultural Shock : Sos ~   kondisi di mana seseorang mengalami keterkejutan terhadap perubahan nilai budaya baru. Sering disebut juga gegar budaya yang terjadi ketika seseorang berada di lingkungan baru, baik itu pindah negara, ke luar kota, pindah rumah, sekolah, kampus, bahkan organisasi perusahaan. ',
  },
  {
    kata: 'Dekadensi',
    definisi:
      'Dekadensi : Sos ~ memudarnya nilai dan norma sosial yang mengakibatkan menurun atau merosotnya akhlak atau moral seseorang.',
  },
  {
    kata: 'Deklarasi',
    definisi:
      'Deklarasi : Eko ~ suatu keterangan lengkap mengenai suatu biaya, uang barang yang masuk dan sebagainya. Sej ~ suatu pernyataan yang jelas dan ringkas mengenai suatu hal. Sos ~ perjanjian internasional yang berbentuk traktat dan dokumen tidak resmi.',
  },
  {
    kata: 'Dekrit',
    definisi:
      'Dekrit : Sej ~ perintah yang dikeluarkan oleh kepala negara maupun pemerintahan dan memiliki kekuatan hukum. ',
  },
  {
    kata: 'Delegasi',
    definisi:
      'Delegasi : Eko~ pelimpahan wewenang dan tanggung jawab, pelimpahan otoritas dari atasan kebawahan harus dilakukan agar organisasi dapat berfungsi efisien. Sej ~ orang yang dijuntuk untuk mewakili suatu perkumpulan dalam perundingan.',
  },
  {
    kata: 'Delta',
    definisi:
      'Delta : Eko ~ simbol atau suatu penyebutan yang mewakili selisih suatu keadaan atau selisih dua variabel  yaitu variabel awal dan variabel akhir. Geo ~ pengendapan yang terbentuk karena adanya aktivitas sungai maupun muara sungai.',
  },
  {
    kata: 'Demonstration Effect ',
    definisi:
      'Demonstration Effect : Eko ~ suatu pengaruh seseorang memiliki daya beli bukan karena faktor kebutuhan tetapi takut akan sebutan ketinggalan zaman dan hanya memenuhi gaya hidup. Sos ~   efek peniruan yang dilakukan oleh masyarakat dalam mengkonsumsi sebuah barang atau produk tertentu karena terpengaruh oleh pola konsumsi kelompok masyarakat lain disekitarnya yang memiliki kemampuan finansial/penghasilan yang lebih tinggi darinya. ',
  },
  {
    kata: 'Demoralisasi',
    definisi:
      'Demoralisasi : Sej ~ penurunan nilai moral. Sos ~ memudarnya nilai dan norma sosial yang mengakibatkan menurun atau merosotnya akhlak atau moral seseorang.',
  },
  {
    kata: 'Devaluasi',
    definisi:
      'Devaluasi : Eko ~ kebijakan moneter yang diambil oleh pemerintah untuk melakukan penurunan nilai mata uang dalam negeri terhadap mata uang luar negeri khususnya mata uang asing yang sangat berpengaruh dalam perdagangan internasional. Sej ~ menurunkan nilai mata uang Rp.1.000 dan Rp.500 menjadi Rp.100 dan Rp.50 pada masa demokrasi terpimpin 1959-1965. Dengan tujuan untuk mengurangi banyaknya uang yang beredar demi kepentingan perbaikan keuangan negara.',
  },
  {
    kata: 'Devide Et Impera',
    definisi:
      'Devide Et Impera : Sej ~  politik adu domba yang dilakukan oleh Belanda kepada rakyat Indonesia. ',
  },
  {
    kata: 'Devisa',
    definisi:
      'Devisa : Eko ~ alat pembayaran antarnegara, serta dapat diterima oleh dunia internasional.',
  },
  {
    kata: 'Difusi',
    definisi:
      'Difusi : Sos ~ proses penyebaran unsur baru atau budaya, baik berupa alat, ide atau gagasan, dari satu pihak ke pihak lain, dari satu tempat ke tempat lain, dari satu masyarakat ke masyarakat lain. ',
  },
  {
    kata: 'Dinamika',
    definisi:
      'Dinamika : Eko ~ perubahan atau pergerakan suatu suatu sistem ekonomi dari waktu ke watktu. Geo ~ perubahan atau pertumbuhan jumlah penduduk. Sej ~ suatu yang yang mempunyai tenaga serta selalu bergerak dan berubah-ubah menyesuaiakan keadaan. Sos ~ perubahan sosial dalam masyarakat yang mengalami berbagai bentuk permasalahan yang dilakukan oleh individu atau kelompok.  ',
  },
  {
    kata: 'Dinamis',
    definisi:
      'Dinamis : Eko ~ penuh semangat dan tenaga sehingga cepat bergerak dan mudah menyesuaiakan diri dengan keaadan. Geo ~ bergerak atau mengalir. Sej ~ selalu bergerak mengikuti perkembangan zaman. Sos ~ sesuatu yang memiliki sifat aktif dan berubah-ubah.',
  },
  {
    kata: 'Dinamisme',
    definisi:
      'Dinamisme : Sej ~ kepercayaan pada benda-benda yang mempunyai kekuatan gaib. Sos ~ kepercayaan kepada benda-benda yang ditempati makhluk halus. Kekuatan dari benda yang disembah pada masa itu, mampu memberikan rasa nyaman dan perlindungan bagi manusia ketika berdekatan atau bersentuhan dengan benda tersebut. ',
  },
  {
    kata: 'Dinasti',
    definisi:
      'Dinasti : Sej ~ keturunan raja-raja yang berasal dari satu keluarga.',
  },
  {
    kata: 'Diplomasi',
    definisi:
      'Diplomasi : Sej ~ urusan kepentingan sebuah negara dengan perantaraan wakil-wakilnya di negara lain. Sos ~   seni dan praktik bernegosiasi oleh seseorang (disebut diplomat)  yang biasanya mewakili sebuah negara atau organisasi, yang mengurus berbagai hal seperti budaya, ekonomi, dan perdagangan.',
  },
  {
    kata: 'Discovery',
    definisi:
      'Discovery : Sos ~  suatu penemuan baru, akan tetapi belum diketahui oleh orang banyak atau sesuatu yang belum diakui secara masal.',
  },
  {
    kata: 'Disosiatif',
    definisi:
      'Disosiatif : Sos ~ proses sosial yang selalu mengarah pada disintegrasi masyarakat serta menghambat kemajuan dan perkembangan masyarakat, yang mengarah pada perpecahan atau pertentangan antar anggota masyarakat.',
  },
  {
    kata: 'Distribusi',
    definisi:
      'Distribusi : tribusiEko ~ kegiatan penyaluran produk dari produsen ke konsumen.',
  },
  {
    kata: 'Distributor',
    definisi:
      'Distributor : Eko ~ orang yang berperan melakukan kegiatan distrubusi atau penyaluran barang dan jasa.',
  },
  {
    kata: 'Dolmen',
    definisi:
      'Dolmen : Sej ~ meja batu tempat meletakkan sesaji yang dipersembahkan kepada arwah nenek moyang.',
  },
  {
    kata: 'Domestik',
    definisi:
      'Domestik : Eko ~ segala sesuatu yang berkaitan dengan kegiatan kerumahtanggaan  atau hubungan keluarga. Sos ~ berhubungan dengan mengenai permasalahan dalam negeri.',
  },
  {
    kata: 'Efektif',
    definisi:
      'Efektif : Umum ~ sesuai target yang ditetapkan oleh seseorang atau organisasi.',
  },
  {
    kata: 'Efisien',
    definisi:
      'Efisien : Umum ~ pencapaian target oleh seseorang atau organisasi dengan biaya terkecil.',
  },
  {
    kata: 'Ekologi',
    definisi:
      'Ekologi : Geo ~ ilmu yang mempelajari baik interaksi antar makhluk hidup maupun interaksi antara makhluk hidup dan lingkungannya. Sos ~ hubungan timbal balik antar makhluk hidup dengan lingkungannya.',
  },
  {
    kata: 'Ekonomi',
    definisi:
      'Ekonomi : Umum ~ ilmu sosial yang mempelajari perilaku manusia dalam mengelola sumber daya yang terbatas serta menyalurkannya ke dalam berbagai individu atau kelompok yag ada dalam masyarkat, kegiatannya meliputi, produksi, distribusi, dan konsumsi. Atau disebut juga ilmu yang mempelajari tindakan manusia dalam memenuhi kebutuhan hidupnya.',
  },
  {
    kata: 'Ekosistem',
    definisi:
      'Ekosistem : Eko ~ keterhubungan sistem yang mendukung rantai nilai ekonomi kreatif, yaitu kreasi, produksi, distribusi, konsumsi, dan konservasi, yang dilakukan oleh pelaku ekonomi untuk memberikan nilai tambah pada produknya sehingga berdaya saing tinggi, mudah diakses, dan terlindungi secara hukum. Geo ~ suatu sistem ekologi yang terbentuk oleh hubungan timbal balik tidak terpisahkan antara makhluk hidup dengan lingkungannya. ',
  },
  {
    kata: 'Eksogen',
    definisi:
      'Eksogen : Geo ~  tenaga yang berasal dari luar bumi yang berpengaruh terhadap pembentukan relief muka bumi. ',
  },
  {
    kata: 'Eksosfer',
    definisi:
      'Eksosfer : Geo ~  lapisan atmosfer yang berada pada ketinggian di atas 500 km dari permukaan bumi.',
  },
  {
    kata: 'Ekspedisi',
    definisi:
      'Ekspedisi : Eko ~ pengiriman surat, pengankutan barang, atau perjalanan berkaitan dengan penyelidikan ilmiah ke suatu daerah yang kurang dikenal. Sej ~ perjalanan yang dilakukan untuk tujuan tertentu, biasanya penjelajahan dan/atau penelitian.',
  },
  {
    kata: 'Eksploitasi',
    definisi:
      'Eksploitasi : Eko ~ pemanfataan yang secara sewenang-wenang atau terlalu berlebihan terhadap suatu subyek hanya untuk kepentingan ekonomi tanpa mempertimbangkan rasa kepatutan, keadilan, serta kesejahteraan. Geo ~ kegiatan pengambilan barang tambang dan sumber daya alam secara berlebihan tanpa melakukan konservasi dan reboisasi. Sos ~ suatu tindakan yang bertujuan untuk mengambil keuntungan atau memanfaatkan sesuatu secara berlebihan dan sewenang-wenang, yang mengakibatkan kerugian pada manusia maupun lingkungan.',
  },
  {
    kata: 'Ekspor',
    definisi:
      'Ekspor : Eko ~ bentuk perdagangan internasional, ketika barang yang diproduksi disuatu negara dikirim ke negara lain untuk dijual dan diperdagangkan. Eko ~ perdagangan dengan cara mengeluarkan atau mengirim barang atau jasa ke luar negeri. Geo ~ suatu aktivitas yang menjual suatu barang atau jasa ke luar negeri. ',
  },
  {
    kata: 'Eksportir',
    definisi:
      'Eksportir : Eko ~  pedagang yang membeli barang di dalam negeri kemudian menjualnya ke luar negeri. Eko ~ pihak atau orang yang melakukan penjualan barang ke luar negeri.',
  },
  {
    kata: 'Ekstensifikasi',
    definisi:
      'Ekstensifikasi : Eko ~  usaha peningkatan hasil produksi dengan menambah faktor produksi.',
  },
  {
    kata: 'El nino',
    definisi:
      'El nin : Geo ~ gejala cuaca berupa penumpukan energi panas di Samudra Pasifik bagian selatan yang menyebabkan udara mengalir ke pusat panas sehingga berpengaruh pada iklim di wilayah sekitarnya.',
  },
  {
    kata: 'Elite',
    definisi:
      'Elite : Sos ~   kelompok kecil orang-orang terpandang atau berderajat tinggi (kaum bangsawan, cendikiawan, terpelajar, dan sebagainya).',
  },
  {
    kata: 'Emigrasi',
    definisi:
      'Emigrasi : Geo ~ meninggalkan daerah asal dan berpindah ke wilayah atau negara baru. Sos ~   ke luarnya penduduk dari negara sendiri ke negara lain untuk menetap atau tinggal lama. ',
  },
  {
    kata: 'Empati',
    definisi:
      'Empati : Sos ~ perasaan atau emosi yang seakan mengalami kondisi yang dirasakan oleh orang lain. Empati biasanya diikuti oleh tindakan. ',
  },
  {
    kata: 'Endogen',
    definisi:
      'Endogen : Geo ~  tenaga yang berasal dari dalam bumi yang berpengaruh terhadap pembentukan relief muka bumi.',
  },
  {
    kata: 'Enkulturasi',
    definisi:
      'Enkulturasi : Sos ~ proses mempelajari dan menyesuaikan pikiran serta sikap dengan nilai dan norma yang disosialisasikan.  ',
  },
  {
    kata: 'Epifit',
    definisi:
      'Epifit : Geo ~ tumbuhan yang berkembang dengan cara menumpang pada tumbuhan lain sebagai tempat hidupnya. ',
  },
  {
    kata: 'Erosi',
    definisi:
      'Erosi : Geo ~  peristiwa terangkutnya lapisan tanah atas dari suatu tempat ke tempat lain terangkut oleh air atau angin.',
  },
  {
    kata: 'Etnik',
    definisi:
      'Etnik : Geo ~ didasarkan kepada adanya persamaan kebudayaan dalam kelompok masyarakat tersebut. Sej ~ penggolongan manusia berdasarkan kepercayaan, nilai, kebiasaan, adat istiadat, norma, bahasa, sejarah, geografis, dan hubungan kekerabatan. Sos ~ atau suku bangsa adalah suatu golongan atau kelompok manusia yang angota-anggotanya mengidentifikasikan dirinya dengan sesamanya, biasanya berdasarkan garis keturunan yang dianggap sama.',
  },
  {
    kata: 'Etnosentris',
    definisi:
      'Etnosentris : Sos~ sikap atau perilaku yang memandang budaya atau suku bangsa sendiri lebih baik dibandingkan dengan budaya dan suku bangsa lain serta meremehkan budaya dan suku bangsa lain.',
  },
  {
    kata: 'Faktor Produksi Pengusaha',
    definisi:
      'Faktor Produksi Pengusaha : Eko ~ kemampuan manusia untuk mengelola atau mengendalikan usaha untuk memperoleh laba yang besar (wajar).',
  },
  {
    kata: 'Faktor Produksi',
    definisi:
      'Faktor Produksi : Eko ~ segala sesuatu yang digunakan untuk menghasilkan barang atau jasa dalam rangka menambah manfaat suatu barang atau jasa.',
  },
  {
    kata: 'Fasisme',
    definisi:
      'Fasisme : Sej ~ prinsip atau faham golongan nasionalisme ekstrim kanan yang menganjurkan pemerintahan otoriter.',
  },
  {
    kata: 'Fauna',
    definisi: 'Fauna : Geo ~ segala macam jenis hewan di muka bumi.',
  },
  {
    kata: 'Federasi',
    definisi:
      'Federasi : Sej ~ berasal dari bahasa Latin; foeduration yang artinya “perjanjian”. ',
  },
  {
    kata: 'Feodal',
    definisi:
      'Feodal : Sos ~  sistem sosial atau politik yang memberikan kekuasaan yang besar kepada golongan bangsawan. ',
  },
  {
    kata: 'Firma',
    definisi:
      'Firma : Eko ~ perusahaan yang dibentuk oleh dua orang atau lebih dengan memakai satu nama.',
  },
  {
    kata: 'Flora',
    definisi: 'Flora : Geo ~ segala macam jenis tanaman di muka bumi.',
  },
  {
    kata: 'Fyord  ',
    definisi:
      'Fyord : Geo ~ semacam teluk yang berasal dari lelehan gletser atau glacair yaitu tumpukan es yang sangat tebal dan berat.',
  },
  {
    kata: 'Gapura',
    definisi:
      'Gapura : Sej ~ bangunan berupa pintu gerbang yang meyerupai candi. ',
  },
  {
    kata: 'Garis Kontur',
    definisi:
      'Garis Kontur : Geo ~ garis-garis pada peta yang mempunyai nilai ketinggian untuk menggambarkan bentuk permukaan bumi.',
  },
  {
    kata: 'Garis Lintang',
    definisi:
      'Garis Lintang : Geo ~ garis khayal paralel yang melintang horizontal dan sejajar dengan equator.',
  },
  {
    kata: 'Garis Meridian',
    definisi:
      'Garis Meridian : Geo ~ garis khayal yang mengubungkan kutub utara dengan kutub selatan.',
  },
  {
    kata: 'Garis Pantai',
    definisi: 'Garis Pantai : Geo ~ batas air laut dengan darat.',
  },
  {
    kata: 'Garis Van Mook',
    definisi:
      'Garis Van Mook : Sej ~ garis khayal yang menghubungkan dua daerah terdepan yang dikuasai Belanda sebagai hasil dari agresi militernya.',
  },
  {
    kata: 'Garis Wallace',
    definisi:
      'Garis Wallace : Geo ~ garis yang memisahkan wilayah geografi hewan Asia dan Australia.',
  },
  {
    kata: 'Garis Weber',
    definisi:
      'Garis Weber : Geo ~ garis yang memisahkan fauna Indonesia Timur dan Indonesia Tengah.',
  },
  {
    kata: 'Gempa bumi',
    definisi:
      'Gempa bumi : Geo ~ getaran bumi akibat adanya pelepasan energi yang besar secara mendadak.',
  },
  {
    kata: 'Geografi',
    definisi:
      'Geografi : Umum ~ suatu telaah mengenai bumi sebagai tempat hidup manusia, hewan, dan tumbuhan.  Ilmu yang mempelajari hubungan-hubungan yang terbentuk antara kehidupan dengan lingkungan.',
  },
  {
    kata: 'Geohidrologi',
    definisi:
      'Geohidrologi : Geo ~ cabang hidrologi yang mempelajari tentang air yang terdapat di bawah permukaan tanah.',
  },
  {
    kata: 'Geologi',
    definisi:
      'Geologi : Geo ~ ilmu pengetahuan tentang bumi yang menyelidiki lapisan-lapisan batuan yang ada dalam kerak  bumi. ',
  },
  {
    kata: 'Globalisasi',
    definisi:
      'Globalisasi : Eko ~ suatu proses masuk ke lingkungan dunia dan peningkatan integrasi ekonomi dan masuknya ilmu ekonomi ke dalam suatu negara. Geo ~ suatu proses tatanan mendunia dan tidak mengenal batas wilayah. Sos ~  proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek-aspek kebudayaan lainnya. ',
  },
  {kata: 'Globe', definisi: 'Globe : Geo ~ model tiruan bola bumi.'},
  {
    kata: 'Glory',
    definisi:
      'Glory : Sej ~ kejayaan atau memperoleh wilayah jajahan untuk dikuasai melalui penjelajahan samudera. ',
  },
  {
    kata: 'Gold',
    definisi:
      'Gold : Sej ~ keinginan memperoleh kekayaan di wilayah-wilayah baru yang di temukan.',
  },
  {
    kata: 'Gospel',
    definisi:
      'Gospel : Sej ~ istilah yang menggambarkan semangat Negara-Negara Eropa untuk menyebar ajaran Agama risten dan Katolik ke seluruh dunia.',
  },
  {
    kata: 'Gregariousness',
    definisi:
      'Gregariousness : Sos ~ naluri manusia untuk selalu berinteraksi dan hidup dengan orang lain. ',
  },
  {
    kata: 'Gumuk pasir',
    definisi:
      'Gumuk pasir : Geo ~ gundukan bukit pasir yang terhembus oleh angin.',
  },
  {
    kata: 'Gurun',
    definisi:
      'Gurun : Geo ~ daerah yang menerima curah hujan yang sedikit (kurang dari 250mm/tahun).',
  },
  {
    kata: 'Gyugun',
    definisi: 'Gyugun : Sej ~ Pembela Tanah Air untuk Sumatera.',
  },
  {
    kata: 'Habitualisasi',
    definisi:
      'Habitualisasi : Sos ~ masyarakat dibiasakan mengenal norma baru untuk diterapkan dan dijalankan bersama.',
  },
  {
    kata: 'Hak Veto',
    definisi:
      'Hak Veto : Eko ~ hak yang dimiliki oleh seseorang atau badan tertentu untuk menolak suatu keputusan.',
  },
  {
    kata: 'Hak',
    definisi:
      'Hak : Eko ~ segala kebutuhan dan keperluan yang harus didapatkan oleh seseorang semenjak ia lahir bahkan sebelum lahir.',
  },
  {
    kata: 'Harga',
    definisi:
      'Harga : Eko ~ nilai suatu barang atau jasa yang diukur dengan jumlah uang.',
  },
  {
    kata: 'Hedonisme',
    definisi:
      'Hedonisme : Sos ~ suatu pandangan hidup yang menganggap bahwa kesenangan dan kenikmatan materi merupakan tujuan utama hidup. ',
  },
  {
    kata: 'Hibah',
    definisi:
      'Hibah : Eko ~ pemberian berupa bantuan dari negara lain misalnya pengurangan atau pemotongan utang luar negeri. Sos ~ dianggap sebagai hadiah atau pemberian kepada orang lain secara sukarela dan tidak dapat ditarik kembali.',
  },
  {
    kata: 'Hidrosfer',
    definisi: 'Hidrosfer : Geo ~ lapisan air yang menyelimuti permukaan bumi.',
  },
  {
    kata: 'Hikayat',
    definisi:
      'Hikayat : Sej ~  karya sastra Melayu berbentuk prosa berisi cerita atau dongeng yang penuh keajaiban dan keanehan. ',
  },
  {
    kata: 'Hinterland',
    definisi:
      'Hinterland : Geo ~ negera ASEAN yang terpisah dari Benua Asia, seperti Indonesia, Brunei Darussalam, Filipina, Timor Leste, dan Malaysia bagian Timur.',
  },
  {
    kata: 'Hipotesis',
    definisi:
      'Hipotesis : Umum ~ pendapat atau alasan yang dikemukakan seorang pakar yang dianggap benar meskipun masih harus dibuktikan. Hipotesis juga diartikan sebagai jawaban sementara terhadap masalah yang masih bersifat praduga karena masih harus dibuktikan kebenarannya, yang akan diuji dengan data yang dikumpulkan dalam penelitian.',
  },
  {
    kata: 'Holtikultura',
    definisi:
      'Holtikultura : Geo ~ budidaya  tanaman kebun seperti buah, tanaman bunga, tanaman sayuran, tanaman obat-obatan.',
  },
  {
    kata: 'Homo Economicus',
    definisi:
      'Homo Economicus : Eko ~ manusia sebagai makhluk ekonomi, yang bersikap rasional dan kegiatannya selalu memperhitungkan keuntungan yang diperoleh.',
  },
  {kata: 'Homo Sapiens', definisi: 'Homo Sapiens : Sej ~ manusia cerdas.'},
  {
    kata: 'Homo Socialis',
    definisi:
      'Homo Socialis : Sos ~ manusia sebagai makhluk sosial yang tidak dapat hidup tanpa berinteraksi dengan orang lain.',
  },
  {
    kata: 'Hukum Penawaran',
    definisi:
      'Hukum Penawaran : Eko ~ hukum yang menjelaskan hubungan antara harga dan jumlah barang atau jasa yang ditawarkan.',
  },
  {
    kata: 'Hukum Permintaan',
    definisi:
      'Hukum Permintaan : Eko ~ hukum yang menjelaskan adanya hubungan antara tingkat harga dengan jumlah barang yang diminta.',
  },
  {
    kata: 'Identifikasi',
    definisi:
      'Identifikasi : Sos ~ kecenderungan atau keinginan seseorang menjadi sama dengan pihak lain. Meniru secara identik.',
  },
  {
    kata: 'Ideologi',
    definisi:
      'Ideologi : Umum ~ kumpulan konsep bersistem yang dijadikan asas pendapat (kejadian) yang memberikan arah dan tujuan untuk kelangsungan hidup.',
  },
  {
    kata: 'Iklim Kontenental',
    definisi:
      'Iklim Kontenental : Geo ~ memiliki ciri suhu musim dingin yang cukup untuk mengalami periode bersalju setiap tahun.',
  },
  {
    kata: 'Iklim Lautan ',
    definisi:
      'Iklim Lautan : Geo ~ iklim yang biasa ditemukan sepanjang pantai barat di area garis lintang tengah dibeberapa benua di dunia dan di area tenggara Australia.',
  },
  {
    kata: 'Iklim Sub Tropis',
    definisi:
      'Iklim Sub Tropis : Geo ~ iklim yang memiliki empat musim yaitu, musim semi, panas, gugur, dan dingin.',
  },
  {
    kata: 'Iklim Tropis',
    definisi:
      'Iklim Tropis : Geo ~ secara geografis berada di sekitar ekuator, yaitu berada pada wilayah di antara garis lintang 23,5 LU dan 23,5 LS. ',
  },
  {
    kata: 'Iklim',
    definisi:
      'Iklim : Geo ~ kondisi cuaca di wilayah tertentu dan waktunya lama, daerahnya luas.',
  },
  {
    kata: 'Imigrasi',
    definisi:
      'Imigrasi : Geo ~ berpindah atau menetap di wilayah atau negara baru atau pendatang dari daerah/negara lain. Sos ~  masuknya penduduk ke dalam suatu negara untuk menetap atau tinggal lama.',
  },
  {
    kata: 'Imitasi',
    definisi:
      'Imitasi : Sos ~ kecenderung meniru sikap dan tindakan seseorang.',
  },
  {
    kata: 'Impor',
    definisi:
      'Impor : Eko ~ kegiatan membeli barang atau jasa dari negara lain yang tidak bisa diproduksi di dalam negeri. Eko ~ kegiatan memasukan atau membeli barang dari luar negeri ke dalam negeri. Geo ~ suatu aktivitas dalam membeli suatu barang atau jasa dari luar negeri. ',
  },
  {
    kata: 'Importer',
    definisi:
      'Importer : Eko ~ pihak atau orang yang melakukan pembelian barang dari luar negeri.',
  },
  {
    kata: 'Indische partij',
    definisi:
      'Indische partij : Sej ~ dalam bahasa Indonesia disebut Partai Hindia merupakan organisasi politik pertama yang memiliki tujuan untuk kemerdekaan Indonesia yang dibentuk oleh tiga serangkai (Douwes Dekker, Ki Hajar Dewantara, dan Tjipto Mangoenkoesoemo).',
  },
  {
    kata: 'Individualisme',
    definisi:
      'Individualisme : Sos ~  sikap mementingkan kebebabasan dan kebutuhan diri sendiri di atas kepentingan orang lain. Sos ~ paham yang menganggap diri sendiri lebih penting dari orang lain.',
  },
  {
    kata: 'Industri Manufaktur',
    definisi:
      'Industri Manufaktur : Eko ~ industri yang mengelolah barang mentah  atau setengah jadi menjadi barang jadi yang dapat digunakan langsung oleh konsumen.',
  },
  {
    kata: 'Inflasi',
    definisi:
      'Inflasi : Eko ~ kenaikan harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu. Sej ~  masalah pada masa awal kemerdekaan, di mana mata uang Jepang beredar secara tidak terkendali di Indonesia.',
  },
  {
    kata: 'Inset',
    definisi:
      'Inset : Geo ~ peta berukuran kecil yang disisipkan pada peta utama.',
  },
  {
    kata: 'Institusionalisasi ',
    definisi:
      'Institusionalisasi : Sos ~ sistem norma yang mengatur praktik-praktik kehidupan yang bersifat khusus.',
  },
  {
    kata: 'Integrasi Sosial',
    definisi:
      'Integrasi Sosial : Sos ~  penyatuan atau penyesuaian unsur-unsur yang berbeda dalam masyarakat sehingga dapat diterima dengan baik.',
  },
  {
    kata: 'Intensifikasi',
    definisi:
      'Intensifikasi : Eko ~ peningkatan hasil produksi tanpa menambah faktor-faktor produksi.',
  },
  {
    kata: 'Interaksi Antarruang',
    definisi:
      'Interaksi Antarruang : Eko ~ hubungan timbal balik berupa perpindahan barang dan jasa, manusia, dan informasi. Geo ~ hubungan timbal balik yang terjadi antara satu ruang dengan ruang lainnya dipermukaan bumi. Termasuk interaksi antar negara.',
  },
  {
    kata: 'Interaksi Sosial',
    definisi:
      'Interaksi Sosial : Sos ~ sebuah perilaku antara dua orang atau lebih yang saling memberi arti, di mana antar individu saling menembus pikiran satu sama lain.',
  },
  {
    kata: 'Interaksi',
    definisi:
      'Interaksi : Sos ~ suatu tindakan, reaksi, perilaku, terhadap suatu ransangan. Juga merupakan jenis tindakan yang terjadi apabila dua objek atau lebih saling mempengaruhi atau memiliki efek satu sama lain.',
  },
  {
    kata: 'Internalisasi',
    definisi:
      'Internalisasi : Sos ~  penyerapan nilai dan norma oleh masyarakat, menerima, dan menjalankan dengan penuh kesadaran.',
  },
  {
    kata: 'Invasi',
    definisi:
      'Invasi : Sej ~ aksi militer di mana angkatan bersenjata  suatu negara memasuki daerah yang dikuasai oleh negara lain, dengan tujuan menguasai daerah tersebut dan menggulingkan pemerintahan yang berkuasa di daerah tersebut. Sos ~ masuknya unsur-unsur kebudayaan asing ke dalam kebudayaan setempat dengan cara peperangan (penaklukan) terhadap bangsa lain.',
  },
  {
    kata: 'Invention',
    definisi:
      'Invention : Sos ~  penemuan baru hasil kreasi manusia dan sudah diakui serta digunakan dikalangan masyarakat. ',
  },
  {
    kata: 'Inversi',
    definisi:
      'Inversi : Geo ~ Lapisan udara pada stratosfer dengan ketinggian 20-50 km dan terjadi pembalikan suhu udara dengan semakin panas semakin ke atas.',
  },
  {
    kata: 'Islamisasi',
    definisi:
      'Islamisasi : Sej ~ proses mengubah/konversi masyarakat menjadi islam.',
  },
  {
    kata: 'Isobar',
    definisi:
      'Isobar : Geo ~ garis yang menghubungkan tempat-tempat yang memiliki tekanan udara yang sama.',
  },
  {
    kata: 'Isohyet',
    definisi:
      'Isohyet : Geo ~ garis yang menghubungkan tempat-tempat yang memiliki curah hujan sama.',
  },
  {
    kata: 'Isoterm',
    definisi:
      'Isoterm : Geo ~ garis yang menghubungkan tempat-tempat yang memiliki temperatur yang sama.',
  },
  {
    kata: 'Isotermal',
    definisi:
      'Isotermal : Geo ~ lapisan udara pada stratosfer dengan ketinggian 11-20 Km yang mempunyai temperatur seragam.',
  },
  {
    kata: 'Jalur Sutra',
    definisi:
      'Jalur Sutra : Geo ~ jalur perdagangan dunia. Sej ~ jalur perdagangan internasional kuno dari peradaban China yang menghubungkan wilayah barat dan timur.',
  },
  {
    kata: 'Jawa Hokokai',
    definisi:
      'Jawa Hokokai : Sej ~ Perhimpunan Kebaktikan Rakyat Jawa, yakni organisasi resmi zaman pendudukan yang dibentuk tanggal 11 Maret 1944 bertujuan untuk mengerahkan rakyat Jawa dalam membantu Jepang melawan Sekutu.',
  },
  {
    kata: 'Jirat',
    definisi:
      'Jirat : Sej ~ bangunan yang terbuat dari batu atau tembok berbentuk persegi panjang. ',
  },
  {
    kata: 'Joint Venture ',
    definisi:
      'Joint Venture : Eko ~  dua atau lebih mitra menciptakan dan bersama-sama memiliki organisasi baru. Sos ~ kerjasama dua badan usaha atau lebih untuk memperoleh keuntungan dalam bidang ekonomi, demi keuntungan bersama yang akan dibagi nanti secara proporsional dengan cara saling mengisi kekurangan masing-masing partner.',
  },
  {
    kata: 'Juvenile Delinquency',
    definisi:
      'Juvenile Delinquency : Sos ~ dikenal dengan istilah kenakalan remaja, di mana tindakan yang dilakukan berlawanan dengan ketertiban umum. ',
  },
  {
    kata: 'KAA',
    definisi:
      'KAA : Sej ~ singkatan dari Konferensi Asia Afrika, yang diselenggrakan di Bandung tanggal 18-24 April 1955 yang menghasilkan sepuluh prinsip yang disebut Dasasila Bandung. ',
  },
  {
    kata: 'Kaligrafi',
    definisi:
      'Kaligrafi : Sej ~  seni menulis aksara indah berupa kata atau kalimat dengan menggunakan huruf Arab.',
  },
  {
    kata: 'Kasta',
    definisi:
      'Kasta : Sej ~ penggolongan masyarakat berdasarkan tingkat derajatnya dalam agama Hindu.  Sos ~ stratifikasi tertutup, di mana seseorang tidak dapat mengubah status sosial mereka.',
  },
  {
    kata: 'KEA',
    definisi:
      'KEA : Eko ~ singkatan dari Komunitas Ekonomi ASEAN ialah komunitas yang dibentuk untuk bekerja sama dalam upaya memperdalam dan memperluas ekonomi terpadu di kawasan ASEAN dan di luar ASEAN. ',
  },
  {
    kata: 'Keberagaman',
    definisi:
      'Keberagaman : Eko ~ perbedaan taraf dan tingkat ekonomi dalam masyarakat.  Geo ~ berbagai jenis yang dilihat dari sisi wilayah, makhluk hidup, tumbuhan, hewan, dan lingkungan. Sej ~ dilihat dari sisi budaya, ras, suku bangsa, adat istiadat, dan bahasa. Sos ~ perbedaan yang ditinjau dari sisi kelompok etnik dan budaya yang dimiliki.',
  },
  {
    kata: 'Kebiasaan',
    definisi:
      'Kebiasaan : Sos ~ terbentuk dari perilaku yang berulang-ulang. Ing:  folkways.',
  },
  {
    kata: 'Kebudayaan',
    definisi:
      'Kebudayaan : Sej ~ cara hidup yang berkembang dan dimiliki bersama oleh sebuah kelompok orang dan diwariskan dari generasi ke generasi. Sos ~ seluruh sistem gagasan, tindakan, dan hasil karya manusia dalam rangka kehidupan masyrakat yang dimiliki manusia dengan belajar.',
  },
  {
    kata: 'Kebutuhan Manusia',
    definisi:
      'Kebutuhan Manusia : Eko ~ semua barang ataupun jasa yang dibutuhkan manusia demi menunjang segala aktivitas dalam kehidupan sehari-hari.',
  },
  {
    kata: 'Kegiatan Ekonomi',
    definisi:
      'Kegiatan Ekonomi : Eko ~ teridiri atas kegiatan produksi, distribusi, dan konsumsi.',
  },
  {
    kata: 'Kehutanan',
    definisi:
      'Kehutanan : Eko ~ usaha pengelolaan komoditas hasil hutan, seperti kayu-kayu besar, rotan, damar, dan kemenyan. ',
  },
  {
    kata: 'Kelangkaan',
    definisi:
      'Kelangkaan : Eko ~ keterbatasnya sumber daya untuk memenuhi dan mencukupi kebutuhan manusia yang tidak terbatas. Ing:  Scarcity.',
  },
  {
    kata: 'Kemerdekaan',
    definisi:
      'Kemerdekaan : Sej ~ keadaan berdiri sendiri, bebas, lepas, dan tidak terjajah lagi.',
  },
  {
    kata: 'Ken',
    definisi:
      'Ken : Sej ~ sistem pemerintahan daerah pada masa pendudukan Jepang setingkat kabupaten.',
  },
  {
    kata: 'Keraton',
    definisi: 'Keraton : Sej ~ tempat tinggal sultan beserta keluarganya.',
  },
  {
    kata: 'Kerja Rodi',
    definisi:
      'Kerja Rodi : Sej ~ sistem tanam paksa serta pemungutan pajak pada rakyat Indonesia dalam bentuk hasil produksi pertanian.',
  },
  {
    kata: 'Kerja Sama',
    definisi:
      'Kerja Sama : Eko ~ hubungan antar individu atau kelompok untuk mendapatkan hasil produksi, pemasaran, serta pembelian untuk mendapatkan keuntungan bersama. Sej ~ bentuk gotong-royong dalam melakukan sesuatu dan ingin mencapai sesuatu. Sos ~ usaha bersama antara perorangan atau kelompok untuk mencapai tujuan bersama, dengan menjalin kontak dan komunikasi antara individu dengan individu, individu dengan kelompok, dan antara kelompok untuk mencapai tujuan dan kepentingan tertentu.',
  },
  {
    kata: 'Kesenjangan Sosial',
    definisi:
      'Kesenjangan Sosial : Eko ~ perbedaan yang tajam antara satu kelompok dengan kelompok lain dalam bidang sosial dan ekonomi, terutama dalam hal pendapatan dan kesejahteraan hidup. Sos ~ suatu keadaan atau kondisi yang tidak seimbang dalam kehidupan sosial masyarakat baik individu maupun kelompok.',
  },
  {
    kata: 'Kewirausahaan',
    definisi:
      'Kewirausahaan : Eko ~ kemampuan menangkap peluang dengan mengombinasikan sumber daya yang dimiliki agar bermanfaat bagi diri sendiri dan orang lain. ',
  },
  {
    kata: 'Khatulistiwa',
    definisi:
      'Khatulistiwa : Geo ~ garis khayal keliling Bumi, terletak melintang pada nol derajat, yang membagi Bumi menjadi dua belahan yang sama yaitu belahan Bumi Utara dan belahan Bumi Selatan.',
  },
  {
    kata: 'KMB',
    definisi:
      'KMB : Sej ~  singkatan dari Konferensi Meja Bundar, merupakan pertemuan yang dilaksanakan di Den Haag, Belanda dari 23 Agustus- 2 November 1949. Konferensi ini merupakan titik terang bagi bangsa Indonesia dalam upaya mempertahankan kemerdekaannya. ',
  },
  {
    kata: 'KNIP',
    definisi:
      'KNIP : Sej ~ singkatan dari Pembentukan Komite Nasional Indonesia Pusat. Tugas dan wewenang KNIP adalah menjalankan fungsi pengawasan dan berhak ikut serta dalam Garis-Garis Besar Haluan Negara (GBHN).  ',
  },
  {
    kata: 'Koalisi',
    definisi:
      'Koalisi : Sos ~ kerja sama dua kelompok sosial atau lebih untuk mencapai   tujuan yang sama dengan cara bergabung menjadi satu dengan cara yang kooperatif. Ing:  coalition.',
  },
  {
    kata: 'Koersi',
    definisi:
      'Koersi : Sos ~ penyelesaian perselisihan dengan cara paksaan atau kekerasan untuk mencapai tujuan yang diinginkan. Ing:  coercion.',
  },
  {kata: 'Komoditas', definisi: 'Komoditas : Eko ~ barang ekspor atau impor.'},
  {
    kata: 'Kompetisi',
    definisi:
      'Kompetisi : Sos ~ persaingan yang dilakukan individu atau kelompok dalam berbagai bidang kehidupan masyarakat.',
  },
  {
    kata: 'Komposisi Penduduk',
    definisi:
      'Komposisi Penduduk : Geo ~ pengelompokkan penduduk berdasarkan kriteria tertentu, misalkan berdasarkan agama, jenis kelamin, ras, usia, status perkawinan, dan lain-lain. ',
  },
  {kata: 'Komprehensif', definisi: 'Komprehensif : Umum ~ secara menyeluruh.'},
  {
    kata: 'Kompromi',
    definisi:
      'Kompromi : Sos ~ penyelesaian konflik dengan jalan damai atau saling mengurangi tuntutan sehingga diperoleh kesepakatan dalam penyelesaian masalah. Ing:  compromise.',
  },
  {kata: 'Komunikan', definisi: 'Komunikan : Sos ~ orang yang menerima pesan.'},
  {
    kata: 'Komunikasi',
    definisi:
      'Komunikasi : Eko ~ proses transfer informasi dari satu orang ke orang lain di dalam dan diluar lingkungan bisnis. Geo ~ proses pengiriman dan penerimaan informasi atau pesan antara dua individu atau lebih dengan efektif sehingga dapat dipahami dengan mudah.  Sej ~ menyampaikan apa yang ada di dalam benak pikiran atau perasaan hati nurani kepada orang lain baik secara langsung maupun tidak langsung. Sos ~   proses penyampaian pesan, gagasan, pendapat, ide, dan harapan kepada penerima komunikasi.',
  },
  {
    kata: 'Komunikator ',
    definisi: 'Komunikator : Sos ~ orang yang menyampaikan pesan.',
  },
  {
    kata: 'Konferensi',
    definisi:
      'Konferensi : Eko ~ pertemuan yang diagendakan untuk menyamakan persepsi dan memperoleh kesepakatan dalam menanggulangi masalah perekonomian. Sej ~  rapat atau pertemuan untuk berunding atau bertukar pendapat mengenai suatu masalah yang dihadapi bersama.',
  },
  {
    kata: 'Konflik Destruktif',
    definisi:
      'Konflik Destruktif : Sos ~ konflik yang diakibatkan oleh perasaan tidak senang, benci atau dendam kepada seseorang atau sekelompok orang yang bersifat negatif dan merusak.',
  },
  {
    kata: 'Konflik Diagonal',
    definisi:
      'Konflik Diagonal : Sos ~ muncul karena ketidakmerataan pengelolaan sumber daya, keseluruh organisasi sehingga menimbulkan pertentangan.',
  },
  {
    kata: 'Konflik Horizontal',
    definisi:
      'Konflik Horizontal : Sos ~ konflik yang terjadi antarindividu atau kelompok yang mempunyai kelas sosial yang  sama atau sederajat. ',
  },
  {
    kata: 'Konflik Konstruktif',
    definisi:
      'Konflik Konstruktif : Sos ~ konflik yang diakibatkan oleh perbedaan pemahaman atau pendapat antar individu atau kelompok, bersifat membangun dan positif.',
  },
  {
    kata: 'Konflik Sosial',
    definisi:
      'Konflik Sosial : Sos ~ suatu keadaan pertentangan antara dua pihak atau lebih yang berusaha memenuhi tujuan dengan cara menentang pihak lawan. Seperti, percekcokkan, perselisihan, dan pertentangan.',
  },
  {
    kata: 'Konflik Vertikal',
    definisi:
      'Konflik Vertikal : Sos ~ konflik yang terjadi pada antargolongan atau tingkatan yang berbeda.',
  },
  {
    kata: 'Konflik',
    definisi:
      'Konflik : Eko ~  benturan kekuatan dan kepentingan antar satu kelompok dengan kelompok lain dalam proses perebutan sumber-sumber kemasyarakatan. Sos ~ suatu proses sosial antara dua orang atau lebih, di mana salah satu pihak berusaha menyingkirkan pihak lain dengan menghancurkan, merusak, dan menyakiti pihak lawan. Sos ~ suatu keadaan pertentangan antara dua pihak atau lebih yang berusaha memenuhi tujuan dengan cara menentang pihak lawan. Seperti percekcokkan, perselisihan, dan pertentangan.',
  },
  {
    kata: 'Konfrontasi',
    definisi:
      'Konfrontasi : Sej ~ ketegangan yang terjadi pada tahun 1963 yang berubah menjadi perang antara Indonesia  dan Malaysia mengenai kepemilikan Sabah, Sarawak, dan Brunei.',
  },
  {
    kata: 'Konservasi',
    definisi:
      'Konservasi : Geo ~ pelestarian atau perlindungan dengan tujuan untuk mencegah kerusakan dan kemusnahan.',
  },
  {
    kata: 'Konsoliasi',
    definisi:
      'Konsoliasi : Sos ~ penyelesaian konflik dengan mempertemukan keinginan kedua pihak yang berselisih. Ing: conciliation.',
  },
  {
    kata: 'Konstituante',
    definisi:
      'Konstituante : Sej ~ lembaga negara yang ditugaskan untuk membentuk Undang-Undang Dasar atau konstitusi baru untuk menggantikan UUDS 1950. ',
  },
  {
    kata: 'Konsultasi',
    definisi:
      'Konsultasi : Umum ~ berbicara atau berdiskusi mengenai suatu hal.',
  },
  {
    kata: 'Konsumen',
    definisi:
      'Konsumen : Eko ~ setiap orang yang memakai, menggunakan, dan menghabiskan nilai guna suatu barang atau jasa.',
  },
  {
    kata: 'Konsumerisme',
    definisi:
      'Konsumerisme : Eko ~ membeli atau menggunakan barang atau jasa secara berlebihan tanpa mempertimbangkan kebutuhan. Sos~  gaya hidup yang menganggap bahwa kepuasan diri dengan mengkonsumsi atau membeli barang-barang mewah tanpa melihat nilai gunanya. ',
  },
  {
    kata: 'Konsumsi',
    definisi:
      'Konsumsi : Eko ~ tindakan menghabiskan nilai guna suatu barang dan jasa.',
  },
  {
    kata: 'Konsumtif ',
    definisi:
      'Konsumtif : Geo ~ kegiatan individu mengkonsumsi suatu barang karena ransangan perasaan suka. Sos ~ merupakan gaya hidup di mana seseorang secara berlebihan membeli suatu barang atau jasa dengan mengutamakan keinginannya dari pada kebutuhannya dan secara ekonomi akan menyebabkan pemborosan.',
  },
  {
    kata: 'Kontak Primer',
    definisi:
      'Kontak Primer : Sos ~ kontak secara langsung antar pihak yang terlibat.',
  },
  {
    kata: 'Kontak Sekunder',
    definisi:
      'Kontak Sekunder : Sos ~ kontak dilakukan adanya perantara antara pihak yang terlibat.',
  },
  {
    kata: 'Kontak Sosial',
    definisi:
      'Kontak Sosial : Sos ~ tindakan yang diarahkan kepada orang lain dan mengharapkan respon serta ditandai dengan keunikan interaksi.',
  },
  {
    kata: 'Kontravensi',
    definisi:
      'Kontravensi : Sos ~ perasaan tidak senang  dan tidak suka terhadap orang lain yang disembunyikan dan dapat  memicu pertikaian. Ing: contravention. ',
  },
  {
    kata: 'Kooperasi',
    definisi:
      'Kooperasi : Sos ~ usaha bersama antara perorangan atau kelompok untuk mencapai tujuan bersama.',
  },
  {
    kata: 'Kooptasi',
    definisi:
      'Kooptasi : Sos ~ kerja sama yang dilakukan dengan menyepakati pemimpin yang ditunjuk untuk mengendalikan jalannya organisasi atau kelompok. Ing:  cooptation. ',
  },
  {
    kata: 'Korupsi',
    definisi:
      'Korupsi : Eko ~ penyelewengan atau penyalahgunaan uang negara untuk kepentingan pribadi atau orang lain. Sos ~   suatu tingkah laku yang menyimpang dari tugas-tugas resmi jabatannya dalam negara, di mana memperoleh keuntungan status atau uang yang menyangkut diri pribadi atau perorangan, keluarga dekat, kelompok sendiri. ',
  },
  {
    kata: 'Kreativitas',
    definisi:
      'Kreativitas : Eko ~ kemampuan menghasilkan ide atau barang yang baru bermanfaat bagi kehidupan manusia. Eko ~ kemampuan seseorang untuk melahirkan atau menciptakan sesuatu yang baru,baik berupa gagasan maupun karya nyata yang relatif berbeda dengan yang ada sebelumnya. Sos  ~ kemampuan memunculkan solusi atas berbagai macam permasalahan yang dialami individu ataupun kelompok. ',
  },
  {
    kata: 'Kriminalitas',
    definisi:
      'Kriminalitas : Sos ~ sebuah tindakan kejahatan dan melanggar hukum, perbuatan dan tindakan secara ekonomi, politik, sosial, dan psikologis sangat merugikan masyarakat dan melanggar norma yang berlaku.',
  },
  {
    kata: 'KTN',
    definisi:
      'KTN : Sej ~ singkatan dari Komisi Tiga Negara yaitu Australia (pilihan Indonesia), Belgia (pilihan Belanda), dan Amerika Serikat (pilihan Indonesia dan Belanda).',
  },
  {
    kata: 'La Nina',
    definisi:
      'La Nina : Geo ~ gejala cuaca yang mengakibatkan hujan lebat pada rentang waktu yang sangat lama sebagai akibat angin pusat berhembus dengan keras dan terus menerus melintasi Samudra Pasifik ke arah Australia.',
  },
  {
    kata: 'Landrent System',
    definisi:
      'Landrent System : Sej ~ sistem sewa tanah pada penjajahan Inggris di Indonesia.',
  },
  {
    kata: 'Leasing',
    definisi:
      'Leasing : Eko ~ lembaga yang kegiatannya melakukan pembiayaan dalam bentuk penyediaan dana atau barang modal dengan tidak menarik dana secara langsung dari masyarakat.',
  },
  {
    kata: 'Lebensraum',
    definisi:
      'Lebensraum : Sej ~ semboyan politik Jerman untuk melakukan ekspansi (perluasan wilayah) yang akhirnya menjadikan salah satu sebab terjadinya Perang Dunia II.',
  },
  {
    kata: 'Legenda',
    definisi:
      'Legenda : Eko ~ cerita rakyat zaman dahulu yang ada hubungannya dengan peristiwa sejarah. Geo ~ menunjukkan keterangan simbol dalam peta. Sej ~ cerita rakyat yang berisikan tentang, tokoh, peristiwa, atau tempat tertentu yang memcampurkan fakta historis dengan mitos. Sos ~ cerita yang mempunyai ciri-ciri mirip dengan mitos, dianggap benar-benar terjadi tetapi tidak dianggap suci.',
  },
  {
    kata: 'Lembaga Sosial',
    definisi:
      'Lembaga Sosial : Eko ~ bagian dari lembaga sosial yang mengatur hubungan antar manusia dalam pemenuhan kebutuhan pokok (pangan, papan, dan sandang). Sos ~ suatu sistem hubungan sosial terorganisir yang mencakup nilai-nilai dan aturan tertentu dalam usaha memenuhi kebutuhan-kebutuhan dasar masyarakat. ',
  },
  {
    kata: 'Liberalisasi',
    definisi:
      'Liberalisasi : Sej ~ proses dan usaha untuk menerapkan paham liberal (bebas) dalam kehidupan (tata negara dan ekonomi).',
  },
  {
    kata: 'Lingkungan Hidup',
    definisi:
      'Lingkungan Hidup : Geo ~ kesatuan ruang dengan semua benda, daya, keadaan dan makhluk hidup, termasuk manusia, dan perilakunya, yang mempengaruhi kelangsungan perikehidupan dan kesejahteraan manusia serta mahkluk hidup dengan manusia.',
  },
  {
    kata: 'Lingkungan',
    definisi:
      'Lingkungan : Geo ~ kesatuan ruang dengan semua benda, daya, keadaan dan makhluk hidup, termasuk manusia, dan perilakunya, yang mempengaruhi kelangsungan kehidupan dan kesejahteraan manusia serta mahkluk hidup dengan manusia.',
  },
  {
    kata: 'Litosfer',
    definisi:
      'Litosfer : Geo ~ lapisan terluar kulit bumi yang tersusun atas batuan dan mineral.',
  },
  {
    kata: 'Lubuk Laut',
    definisi:
      'Lubuk Laut : Geo ~ dasar laut dalam yang berbentuk cekungan dalam memanjang dan bertebing curam.',
  },
  {
    kata: 'Mainland',
    definisi:
      'Mainland : Geo ~ Negara Asia Tenggara yang letaknya menyatu dengan Benua Asia, seperti Thailand, Myanmar, Laos, Kamboja, Vietnam, dan Malaysia bagian Barat.',
  },
  {
    kata: 'Majemuk',
    definisi:
      'Majemuk : Geo ~ keberagaman suatu wilayah yang diakibatkan oleh faktor geografi dan sosial. Sos ~ sebuah ideologi yang yang menekankan pengakuan dan penghargaan pada kesederajatan perbedaan kebudayaan. ',
  },
  {
    kata: 'Makelar',
    definisi:
      'Makelar : Eko ~ orang atau badan yang melakukan kegiatan jual beli barang yang bertindak atas nama orang lain atau atas nama yang menyuruhnya (prinsipalnya), bukan atas namanya sendiri.',
  },
  {
    kata: 'Manufaktur',
    definisi:
      'Manufaktur : Eko ~ suatu cabang industri yang mengaplikasikan mesin, peralatan, dan tenaga kerja dan suatu medium proses untuk mengubah bahan mentah menjadi barang jadi untuk dijual.',
  },
  {
    kata: 'Manusia',
    definisi:
      'Manusia : Eko ~ disebut sebagai makhluk ekonomi , karena manusia selalu memikirkan upaya untuk memenuhi kebutuhannya sesuai dengan prinsip-prinsip ekonomi. Geo ~ makhluk yang berakal budi. Sej ~ makhluk pengendali alam dan lingkungan. Sos ~ makhluk yang berhubungan secara timbal-balik dengan manusia lain.',
  },
  {
    kata: 'Maritim',
    definisi:
      'Maritim : Eko ~ seluruh kegiatan ekonomi yang terjadi baik di pesisir laut, dan wilayah sekitar laut. Termasuk di dalamnya industri kapal, pelabuhan, pelelangan ikan, dan juga kegiatan pariwisata atau pantai. Geo ~ negara yang di kelilingi laut atau perairan yang luas, yang berhubungan dengan pelayaran dan perdagangan laut. Sej ~ pembelajaran aktivitas manusia di laut. Sos ~ hubungan masyarakat dan budaya manusia dengan lautan dan lingkungan laut serta proses sosial terkait.',
  },
  {
    kata: 'Masa Reformasi',
    definisi:
      'Masa Reformasi : Sej ~ masa setelah berakhirnya pemerintahan orde baru, Soeharto mengundurkan diri dari Presiden dan digantikan oleh Wakil Presiden B.J Habibie, masa reformasi di mulai sejak 12 Mei 1988 dan masih berlanjut hingga saat ini. ',
  },
  {
    kata: 'Masalah Sosial',
    definisi:
      'Masalah Sosial : Sos ~   kondisi di mana ketidaksesuaian antara harapan dan kenyataan dalam masyarakat, atau suatu kondisi yang tidak sesuai dengan aturan dan norma yang berlaku dalam masyarakat.',
  },
  {
    kata: 'Mata Pencaharian',
    definisi:
      'Mata Pencaharian : Geo ~ pekerjaan yang menjadi pokok penghidupan yang dikerjakan untuk memenuhi biaya sehari-hari. ',
  },
  {
    kata: 'MEA',
    definisi:
      'MEA : Eko ~ singkatan dari Masyarakat Ekonomi ASEAN yang merupakan salah satuwujud kerjasama ekonomi ASEAN dalam menghadapi perdagangan bebas antarnegara di ASEAN.',
  },
  {
    kata: 'Mediasi',
    definisi:
      'Mediasi : Sos ~ penyelesaian perselisihan dengan menggunakan pihak ketiga yang bersifat netral. Ing  mediation.',
  },
  {kata: 'Megalitikum', definisi: 'Megalitikum : Sej ~ zaman batu besar.'},
  {
    kata: 'Meghanthropus Palaeojavanicus',
    definisi:
      'Meghanthropus Palaeojavanicus : Sej ~ manusia yang paling primitif, makhluk tertua yang pernah hidup di Pulau Jawa. ',
  },
  {
    kata: 'Meramu',
    definisi:
      'Meramu : Sej ~ masa di mana manusia belum mengenal bercocok tanam, masa di mana manusia mengumpulkan bahan makanan dengan cara mengumpulkan buah-buahan liar, akar-akar tumbuhan, daun-daunan, dan sumber daya lainnya yang bisa dimakan.',
  },
  {kata: 'Mesolitikum', definisi: 'Mesolitikum : Sej ~ zaman batu tengah.'},
  {
    kata: 'Migran Internal',
    definisi:
      'Migran Internal : Geo ~ pekerja yang bermigrasi dalam kawasan satu negara.',
  },
  {
    kata: 'Migran Internasional',
    definisi:
      'Migran Internasional : Geo ~ perseorangan yang bermigrasi ke luar negeri untuk keperluan bekerja. ',
  },
  {
    kata: 'Migrasi',
    definisi:
      'Migrasi : Geo ~  perpindahan penduduk dari suatu wilayah ke wilayah lain, dengan tujuan menetap. ',
  },
  {
    kata: 'Milenarisme',
    definisi:
      'Milenarisme : Sej ~ suatu keyakinan oleh suatu kelompok atau gerakan keagamaan, sosial atau politik, tentang suatu transformasi besar dalam masyarakat dan setelah itu akan berubah ke arah yang positif. Sos ~ salah satu bentuk kebangkitan yang berusaha mengangkat golongan masyarakat bawah yang tertindas dan telah lama menderita dalam kedudukan sosial yang rendah.',
  },
  {
    kata: 'Minseifu',
    definisi:
      'Minseifu : Sej ~ daerah yang diperintah oleh Angkatan Laut pada masa pendudukan Jepang.',
  },
  {
    kata: 'Mobilitas Antargenerasi',
    definisi:
      'Mobilitas Antargenerasi : Sos ~  mobilitas yang terjadi pada dua generasi atau lebih yang ditandai dengan adanya perubahan dalam taraf hidup pada suatu generasi atau keturunan. ',
  },
  {
    kata: 'Mobilitas Geografis',
    definisi:
      'Mobilitas Geografis : Sos ~  perpindahan individu atau sekelompok orang dari suatu daerah ke daerah lainnya. ',
  },
  {
    kata: 'Mobilitas Horizontal',
    definisi:
      'Mobilitas Horizontal : Sos ~ perpindahan status sosial seseorang maupun sekelompok orang pada lapisan sosial yang sama.',
  },
  {
    kata: 'Mobilitas Intergenerasi',
    definisi:
      'Mobilitas Intergenerasi : Sos ~  mobilitas atau perpindahan status sosial yang melibatkan lebih dari satu generasi atau di antara beberapa generasi.',
  },
  {
    kata: 'Mobilitas Intragenerasi',
    definisi:
      'Mobilitas Intragenerasi : Sos ~  mobilitas atau perpindahan status sosial yang terjadi pada individu atau sekelompok orang dalam satu generasi yang sama dan dapat naik turun.  ',
  },
  {
    kata: 'Mobilitas Sosial',
    definisi:
      'Mobilitas Sosial : Sos ~ perpindahan atau perubahan status dan peran sosial individu atau kelompok sosial naik ataupun turun.',
  },
  {
    kata: 'Mobilitas Vertikal',
    definisi:
      'Mobilitas Vertikal : Sos ~  perpindahan status sosial seseorang maupun sekelompok orang pada lapisan sosial  yang berbeda atau tidak sederajat.',
  },
  {
    kata: 'Mobilitas',
    definisi:
      'Mobilitas : Geo ~ perpindahan penduduk dari suatu tempat ke tempat lainnya yang bersifat sementara maupun permanen. Sos ~   perpindahan status sosial sekelompok orang atau individu baik secara vertikal (naik) maupun horizontal (turun).',
  },
  {
    kata: 'Modernisasi',
    definisi:
      'Modernisasi : Eko ~ suatu proses trans-formasi dari suatu perubahan ke arah yang lebih maju atau meningkat di berbagai aspek dalam kehidupan masyarakat. Sos ~ usaha untuk hidup sesuai dengan zaman dan perkembangan dunia sekarang, meliputi sistem nilai, pola berpikir, bertindak, serta perkembangan teknologi.',
  },
  {
    kata: 'Monopoli',
    definisi:
      'Monopoli : Sej ~ penguasaan oleh satu pihak terhadap harga perdagangan lokal maupun internasional.',
  },
  {
    kata: 'Monoteisme',
    definisi:
      'Monoteisme : Sej ~ adanya kepercayaan kepada satu tuhan atau dewa yang berkuasa. Sos ~ paham yang mengungkapkan cuma ada satu Tuhan untuk seluruh alam. ',
  },
  {kata: 'Morfologi', definisi: 'Morfologi : Geo ~ bentuk permukaan bumi.'},
  {
    kata: 'Motif',
    definisi:
      'Motif : Eko ~ faktor pendorong seseorang untuk melakukan tindakan ekonomi. Sos ~ Gagasan atau tujuan seseorang untuk melakukan suatu tindakan.',
  },
  {
    kata: 'Motivasi',
    definisi:
      'Motivasi : Sos ~ dorongan dari dalam diri seseorang untuk melakukan  tindakan.',
  },
  {
    kata: 'Multilateral',
    definisi:
      'Multilateral : Eko ~ kerja sama yang mengikutsertakan lebih dari dua negara dan tidak terikat oleh wilayah atau kawasan tertentu.',
  },
  {
    kata: 'Musim',
    definisi:
      'Musim : Geo ~ pembagian waktu dalam setahun yang ditentukan oleh adanya perubahan cuaca, ekologi, dan durasi penyinaran matahari. ',
  },
  {
    kata: 'Nasakom',
    definisi:
      'Nasakom : Sej ~   nasionalis-agama-komunis, ajaran Presiden Soekarno yang mengharuskan adanya persatuan nasional progresif revolusioner dengan ketiga golongan politik sebagai porosnya.',
  },
  {
    kata: 'Nasionalisme',
    definisi:
      'Nasionalisme : Sej ~ paham (ajaran) untuk mencintai bangsa dan negara sendiri.',
  },
  {
    kata: 'Nefo',
    definisi:
      'Nefo : Sej ~ singkatan dari The New Emerging Forces adalah sebutan untuk negara-negara baru, khususnya negara-negara sosialis. ',
  },
  {kata: 'Neolitikum', definisi: 'Neolitikum : Sej ~ zaman batu muda. '},
  {
    kata: 'Nepotisme',
    definisi:
      'Nepotisme : Sej ~ tindakan mementingkan sanak saudara atau teman-teman sendiri, terutama dalam pemerintahan. Sos ~   perilaku atau tindakan yang memilih dan memihak kepada kerabat dekat atau keluarga sendiri untuk memegang jabatan atau pemerintahan.',
  },
  {
    kata: 'Neraca',
    definisi:
      'Neraca : Eko ~ timbangan/perimbangan. Berupa dokumen yang berisi laporan keuangan yang berisi data, jenis, aset, modal, dansaldo total suatu perusahaan.',
  },
  {
    kata: 'NICA',
    definisi:
      'NICA : Sej ~ singkatan dari Nederland Indies Civil Administration (Pemerintahan Sipil Hindia Belanda).',
  },
  {
    kata: 'Nilai ',
    definisi: 'Nilai : Sos ~ sesuatu yang dianggap penting dan berharga.',
  },
  {
    kata: 'Nirleka',
    definisi:
      'Nirleka : Sej ~ bahasa lain dari praaksara (sebelum manusia mengenal bentuk tulisan). Nir artinya tidak ada dan leka artinya tulisan.',
  },
  {
    kata: 'Nisan',
    definisi:
      'Nisan : Sej ~  tonggak pendek yang terbuat dari batu yang ditanam di atas gundukkan tanah sebagai tanda kuburan. ',
  },
  {
    kata: 'NKRI',
    definisi:
      'NKRI : Sej ~   singkatan dari Negara Kesatuan Republik Indonesia. Resmi menjadi Republik Indonesia pada tanggal 17 Agustus 1950. ',
  },
  {
    kata: 'Nomaden',
    definisi:
      'Nomaden : Geo ~ kehidupan yang berpindah-pindah berdasarkan lingkungan dan sumber daya alam yang ada. Sej ~ kehidupan yang selalu berpindah-pindah. Sos ~ pola kehidupan tidak menetap dan berpindah-pindah sesuai lingkungan dan kebutuhan sosial. ',
  },
  {
    kata: 'Norma Sosial',
    definisi:
      'Norma Sosial : Eko ~ perilaku yang pantas bagi suatu kelompok masyarakat. Sos ~ pedoman perilaku yang sudah ada dalam suatu kelompok masyarakat dan memiliki batasan wilayah tertentu, berisi perintah, larangan, dan anjuran untuk mengatur tindakan dan perilaku masyarakat dan memiliki sanksi apabila dilanggar.',
  },
  {
    kata: 'Oldefo',
    definisi:
      'Oldefo : Sej ~ singkatan dari The Old Established Forces yang merupakan sebutan untuk negara-negara barat yang sudah mapan ekonominya, khususnya negara kapitalis.',
  },
  {
    kata: 'Omzet',
    definisi:
      'Omzet : Eko ~ jumlah nilai total penjualan barang atau jasa dalam kurun waktu tertentu dan belum dikurangi dengan modal atau harga pokok.',
  },
  {
    kata: 'Orde Baru',
    definisi:
      'Orde Baru : Sej ~ sebutan bagi masa pemerintahan Presiden Soeharto di Indonesia tahun 1966-1998.',
  },
  {
    kata: 'Organisasi',
    definisi:
      'Organisasi : Eko ~ bentuk persekutuan antara dua orang atau lebih yang bekerja secara bersama serta terikat secara formal dalam rangka mencapai tujuan yang telah ditentukan. Geo ~ tempat atau wadah bagi orang-orang untuk berkumpul, bekerja sama secara rasional dan sistematis, terencana, terpimpin dan terkendali, dalam memanfaatkan sumber daya, sarana-prasarana, data dan sebagainya yang digunakan untuk mencapai tujuan bersama. Sej ~ suatu kelompok orang dalam suatu wadah untuk tujuan bersama. Sos ~ dilihat sebagai suatu tindakan, institusi, sistem, pola interaksi, dan aturan yang dilakukan individu maupun kelompok dalam masyarakat yang bekerja sesuai fungsinya masing-masing.',
  },
  {
    kata: 'Pajak',
    definisi:
      'Pajak : Eko ~ iuran wajib warga negara kepada negara yang diatur dalam undang-undang.',
  },
  {kata: 'Paleolitikum', definisi: 'Paleolitikum : Sej ~ zaman batu tua.'},
  {
    kata: 'Pangea',
    definisi:
      'Pangea : Geo ~ super benua yang menggabungkan  hampir semua dataran Bumi pada waktu geologis awal yang terbentuk sekitar 300 juta tahun, dan mulai retak 200 juta tahun yang lalu. Pangea disebut juga sebagai benua tunggal.',
  },
  {kata: 'Pantai', definisi: 'Pantai : Geo ~ batas antara daratan dan lautan.'},
  {
    kata: 'Pasar',
    definisi:
      'Pasar : Eko ~ tempat bertemunya pembeli dan penjual untuk melakukan transaksi ekonomi (jual-beli).',
  },
  {
    kata: 'Patung',
    definisi:
      'Patung : Sej ~ benda tiga dimensi karya manusia sebagai karya seni, umumnya berbentuk binatang atau manusia.',
  },
  {
    kata: 'Patungan',
    definisi:
      'Patungan : Eko ~ pengaturan bisnis bersama di mana dua pihak atau lebih sepakat untuk menyatukan sumber daya mereka untuk tujuan menyelesaikan sesuatu. Dapat berupa proyek atau aktivitas bisnis yang sering disebut perusahaan patungan. Geo ~ bersama-sama membeli, menyewa, mengumpulkan uang, untuk maksud tertentu dan sebaginya. Sos ~ kerjasama dua badan usaha atau lebih untuk memperoleh keuntungan dalam bidang ekonomi, demi keuntungan bersama yang akan dibagi nanti secara proporsional dengan cara saling mengisi kekurangan masing-masing partner.',
  },
  {
    kata: 'PDRI',
    definisi:
      'PDRI : Sej ~ singkatan dari Pemerintah Darurat Republik Indonesia, yang dibentuk di Sumatera Barat dengan tujuan pemerintahan Indonesia masih berlangsung saat Ir. Soekarno dan M. Hatta ditangkap oleh Belanda yang diasingkan ke Bangka. ',
  },
  {
    kata: 'Pedagang Besar (Grosir)',
    definisi:
      'Pedagang Besar (Grosir) : Eko ~  pedagang yang usahanya membeli barang dalam jumlah yang besar kemudian menjualnya lagi kepada pedagang kecil (pengecer).',
  },
  {
    kata: 'Pedagang Eceran',
    definisi:
      'Pedagang Eceran : Eko ~ pedagang yang membeli barang dari pedagang besar (grosir) kemudian menjualnya langsung ke konsumen akhir.',
  },
  {
    kata: 'Pelaku Ekonomi',
    definisi:
      'Pelaku Ekonomi : Eko ~ pihak yang menjalankan kegiatan ekonomi dalam suatu sistem ekonomi. ',
  },
  {
    kata: 'Pelapukan',
    definisi:
      'Pelapukan : Geo ~ peristiwa hancurnya batuan dari batuan yang berbentuk gumpalan menjadi butiran yang kecil bahkan larut dalam air.',
  },
  {
    kata: 'Pelita',
    definisi:
      'Pelita : Sej ~ singkatan dari Pembangunan Lima Tahun yang merupakan program jangka panjang yang dilakukan pemerintah pada masa orde baru. ',
  },
  {
    kata: 'Pembeli',
    definisi:
      'Pembeli : Eko ~ orang yang melakukan permintaan terhadap barang atau jasa yang ditawarkan pedagang.',
  },
  {
    kata: 'Pemberontakan',
    definisi:
      'Pemberontakan : Eko ~ penolakan terhadap otoritas, diawali dengan adanya ketidakpuasan sebagian masyarakat terhadap situasi dan kondisi. Sej ~  penolakkan terhadap otoritas, pembangkangan sipil, hingga kekerasan terorganisir yang berupaya meruntuhkan otoritas yang ada. Sos ~ menolak dan tidak menerima aturan dan norma baru yang ditetapkan, baik itu budaya, politik, hukum, dan sosial. ',
  },
  {
    kata: 'Pemilu',
    definisi:
      'Pemilu : Sej ~  singkatan dari Pemilihan Umum. Pemilu merupakan proses pemilihan seseorang untuk mengisi jabatan politik. Sos ~ proses formal pengambilan keputusan kelompok di mana anggota masyarakat yang memenuhi persyarakatan memilih seseorang untuk memegang jabatan administrasi publik. ',
  },
  {
    kata: 'Pemukiman',
    definisi:
      'Pemukiman : Eko ~ kondisi tempat tinggal penduduk disuatu tempat yang membentuk pola dan tertentu. Biasanya pola pemukiman mengelompok, memanjang, dan menyebar terhadap suatu fenomena alam.',
  },
  {
    kata: 'Penawaran',
    definisi:
      'Penawaran : Eko ~ banyaknya barang atau jasa yang tersedia dan dapat ditawarkan oleh produsen ke konsumen pada setiap tingkat harga selama periode waktu tertentu.',
  },
  {
    kata: 'Penduduk ',
    definisi:
      'Penduduk : Eko ~  mereka yang bertempat tinggal atau yang berdomisisli dalam suatu negara baik warga negara asli maupun warga negara asing yang disahkan undang-undang. Geo ~ kumpulan manusia yang menempati wilayah geografi dan ruang tertentu. Sej ~ orang-orang yang mendiami dan tinggal di daerah tersebut. Sos ~ jumlah manusia yang tinggal di suatu wilayah atau ruang.',
  },
  {
    kata: 'Penetrasi',
    definisi:
      'Penetrasi : Eko ~ usaha untuk menyelesaikan atau menghadapi masalah bidang ekonomi, berupa strategi atau cara pengembangan pangsa pasar. Sej ~ pemaksaan kebudayaan dari bangsa penjajah kepada bangsa yang dijajah. Sos ~ proses perembesan atau penerobosan unsur budaya kepada masyarakat baik secara damai ataupun paksaan.',
  },
  {
    kata: 'Penjual ',
    definisi:
      'Penjual : Eko ~ pihak yang melakukan penawaran atau menyediakan barang atau jasa. ',
  },
  {
    kata: 'Penyimpangan Sosial',
    definisi:
      'Penyimpangan Sosial : Sos ~ semua tindakan yang bertentangan dengan nilai dan norma sosial dalam masyarakat.',
  },
  {
    kata: 'Peperangan',
    definisi:
      'Peperangan : Sej ~ kondisi permusuhan dengan menggunakan kekerasan, baik aksi fisik maupun non fisik. Atau dikenal dengan pertikaian bersenjata. Sos ~ akibat konflik yang kompleks yang mengakibatkan pertempuran besar bersenjata antara dua pasukan atau lebih.',
  },
  {
    kata: 'Perairan',
    definisi:
      'Perairan : Geo ~ suatu kumpulan masa air pada suatu wilayah tertentu, baik yang bersifat dinamis (bergerak atau mengalir) maupun statis (tergenang).',
  },
  {
    kata: 'Perdagangan Internasional',
    definisi:
      'Perdagangan Internasional : Eko ~ kegiatan transaksi dagang antara satu negara dengan negara lain, baik berupa barang ataupun jasa guna memenuhi kebutuhan dalam negeri dan untuk mendapatkan keuntungan yang lebih. Eko ~ proses pertukaran barang dan jasa antara dua negara atau lebih dengan tujuan mendapatkan keuntungan atau laba.   Geo ~ perdagangan yang dilakukan oleh penduduk suatu negara dengan penduduk negara lain atas dasar kesepakatan bersama.',
  },
  {
    kata: 'Perdagangan',
    definisi:
      'Perdagangan : Eko ~ kegiatan tukar-menukar barang atau jasa berdasarkan kesepakatan bersama dan bukan paksaan dengan menggunakan alat tukar berupa uang.',
  },
  {
    kata: 'Perikanan',
    definisi:
      'Perikanan : Eko ~ semua kegiatan yang berhubungan dengan pengelolaan dan pemanfaatan sumber daya ikan dan lingkungannya mulai dari praproduksi, produksi, pengolahan, sampai dengan pemasaran yang dilaksanakan dalam satu sistem bisnis. Geo ~  semua aktivitas yang berkaitan dengan ikan, termasuk memproduksi ikan, melalui penangkapan maupun budidaya ikan dan atau mengolahnya untuk memenuhi kebutuhan manusia sebagai sumber protein.',
  },
  {
    kata: 'Perilaku Sosial',
    definisi:
      'Perilaku Sosial : Sos ~ perilaku manusia selain didorong oleh faktor internal dan eksternal, namun juga didorong oleh makna atau tujuan dan orang lain. Perilaku sosial belum dirancang untuk menimbulkan respon balik.',
  },
  {
    kata: 'Perilaku',
    definisi:
      'Perilaku : Eko ~ respon atau reaksi seseorang terhadap stimulus (ransangan dari luar). Geo ~  perilaku adalah cabang ilmu geografi manusia, yang mempelajari proses kognitif dengan responsnya terhadap lingkungannya, melalui behaviorisme. Sej ~ gerak-gerik yang dimiliki oleh manusia dan dipengaruhi oleh adat, sikap, emosi, nilai, etika, kekuasaan, persuasi, dan/atau genetika. Sos~ gerak reflek yang dilakukan oleh organisme makhluk hidup sebagai akibat dari dorongan fisik baik dari dalam organisme makhluk hidup itu sendiri atau ransangan lingkungan, secara sadar atau bawah sadar, terbuka atau terselubung.',
  },
  {
    kata: 'Perkebunan',
    definisi:
      'Perkebunan : Eko ~ usaha penanaman lahan dengan tanaman keras yang bersifat tahunan. Geo ~ aktivitas budi daya tanaman semusim atau tanaman tahunan.',
  },
  {
    kata: 'Permesta',
    definisi:
      'Permesta : Sej ~  singkatan dari Perjuangan Rakyat Semesta, merupakan gerakan militer yang dideklarasikan oleh pemimpin militer negara Indonesia Timur kepada militer pemerintah pusat.',
  },
  {
    kata: 'Permintaan',
    definisi:
      'Permintaan : Eko ~ sejumlah barang atau jasa yang diinginkan seseorang untuk dibeli pada berbagai tingkat harga, waktu, dan tempat tertentu.',
  },
  {
    kata: 'Pertanian',
    definisi:
      'Pertanian : Eko ~ usaha produksi bahan makanan utama atau pokok. Geo ~ aktivitas pemanfaatan sumber daya hayati yang dilakukan manusia untuk menghasilkan bahan pangan, bahan baku industri, sumber energi, serta untuk mengelola lingkungan hidupnya. ',
  },
  {
    kata: 'Perubahan Sosial Besar',
    definisi:
      'Perubahan Sosial Besar : Sos ~ perubahan yang perpengaruh pada sendi-sendi kehidupan masyarakat yang memberi perubahan besar dan signifikan. ',
  },
  {
    kata: 'Perubahan Sosial Evolusi',
    definisi:
      'Perubahan Sosial Evolusi : Sos ~ perubahan sosial yang terjadi secara lambat yang memerlukan waktu lama dan diikuti oleh perubahan kecil yang terjadi secara lambat. ',
  },
  {
    kata: 'Perubahan Sosial Kecil',
    definisi:
      'Perubahan Sosial Kecil : Sos ~ perubahan yang pengaruhnya kecil dan diikuti oleh sebagian kecil orang. ',
  },
  {
    kata: 'Perubahan Sosial Revolusi',
    definisi:
      'Perubahan Sosial Revolusi : Sos ~ perubahan sosial yang terjadi dalam waktu yang cepat dan dan hal-hal mendasar dalam masyarakat ikut mengalami perubahan.',
  },
  {
    kata: 'Perubahan Sosial',
    definisi:
      'Perubahan Sosial : Sej ~ perubahan fungsi kebudayaan dan perilaku manusia dalam masyarakat dari keadaan tertentu ke keadaan yang lain. Sos ~ perubahan-perubahan yang terjadi pada lembaga-lembaga kemasyarakatan dalam suatu warga yang memengaruhi sistem sosialnya, termasuk nilai, sikap-sikap sosial, dan pola perilaku kelompok dalam masyarakat. ',
  },
  {
    kata: 'Perubahan Tidak Direncanakan ',
    definisi:
      'Perubahan Tidak Direncanakan : Sos ~ perubahan yang terjadi di luar jangkauan dan kehendak masyarakat. ',
  },
  {
    kata: 'Perubahan yang Direncanakan',
    definisi:
      'Perubahan yang Direncanakan : Sos ~ perubahan yang memang diinginkan dan dikehendaki oleh masyarakat atau pihak yang menginginkan perubahan. ',
  },
  {
    kata: 'Peta',
    definisi:
      'Peta : Geo ~ gambaran permukaan bumi pada suatu bidang datar dan diperkecil menggunakan skala.',
  },
  {
    kata: 'Peternakan',
    definisi:
      'Peternakan : Eko ~ usaha memelihara binatang peliharaan yang dapat diambil manfaatnya sehingga mampu memberikan suatu keuntungan. Geo ~ kegiatan mengembangbiakan dan pemeliharaan hewan ternak untuk mendapatkan manfaat dan hasil dari kegiatan tersebut.',
  },
  {
    kata: 'Plato',
    definisi:
      'Plato : Geo ~ dataran tinggi yang luas dengan lembah dan bukit akibat pengikisan.',
  },
  {
    kata: 'Pluralitas',
    definisi:
      'Pluralitas : Eko ~ tindakan ekonomi berdasarkan prinsip ekonomi yaitu dengan modal seminimal mungkin akan mendapatkan hasil semaksimal mungkin. Sos ~ paham atas keberagaman untuk dapat hidup secara toleran ditengah-tengah banyaknya perbedaan dan keberagaman dalam masyarakat.',
  },
  {
    kata: 'Politeisme',
    definisi:
      'Politeisme : Sej ~ kepercayaan yang mengakui adanya lebih dari satu tuhan atau menyembah banyak dewa. Sos ~ merupakan kepercayaan kepada dewa-dewa.',
  },
  {
    kata: 'Politik dumping',
    definisi:
      'Politik dumping : Eko ~ kebijakan menjual barang lebih murah di luar negeri dari pada di dalam negeri. ',
  },
  {
    kata: 'Politik',
    definisi:
      'Politik : Umum ~ pengetahuan mengenai ketatanegaraan  atau kenegaraan seperti sistem pemerintahan atau dasar-dasar pemerintahan. ',
  },
  {
    kata: 'Populasi',
    definisi:
      'Populasi : Geo ~ kelompok organisme atau makhluk hidup yang sejenis yang hidup dan beranak pada suatu daerah tertentu. Sos ~ merupakan wilayah generalisasi yang terdiri dari obyek atau subyek yang memiliki kuantitas dan karakteristik tertentu yang ditetapkan oleh peneliti untuk dipelajari yang kemudian ditarik kesimpulannya.',
  },
  {
    kata: 'Potensi',
    definisi:
      'Potensi : Umum ~ kemampuan yang mempunyai kemungkinan untuk dikembangkan kekuatan, kesanggupan, dan dayanya. ',
  },
  {
    kata: 'PPKI',
    definisi:
      'PPKI : Sej ~ singkatan dari Pembentukan Panitia Persiapan Kemerdekaan Indonesia. Dibentuk dengan tujuan menyusun rancangan Undang-Undang Dasar bagi Negara Indonesia yang diketuai oleh Ir. Soekarno. ',
  },
  {
    kata: 'PPRI',
    definisi:
      'PPRI : Sej ~  singkatan dari Pemerintah Revolusioner Republik Indonesia, merupakan gerakan pertentangan antara pemerintah  daerah kepada pemerintah pusat. Dengan tujuan agar mendorong pembangunan secara menyeluruh ke seluruh daerah. ',
  },
  {
    kata: 'Praaksara',
    definisi: 'Praaksara : Sej ~ masa sebelum manusia mengenal bentuk tulisan.',
  },
  {
    kata: 'Pranata Sosial',
    definisi:
      'Pranata Sosial : Sos ~ sistem tata kelakuan dan berhubungan pada aktivitas-aktivitas untuk memenuhi berbagai kebutuhan khusus dalam kehidupan masyarakat.',
  },
  {
    kata: 'Prasasti',
    definisi:
      'Prasasti : Sej ~ piagam atau dokumen yang ditulis pada bahan yang keras dan tahan lama, atau dikenal juga berupa batu bertulis. ',
  },
  {
    kata: 'Primordial',
    definisi:
      'Primordial : Sos ~ ikatan yang muncul dari perasaan dari hubungan keluarga atau ikatan kelompok yang berlebihan. ',
  },
  {
    kata: 'Primus Interpares',
    definisi:
      'Primus Interpares : Sej ~ sistem yang digunakan manusia purba untuk memilih seorang pemimpin atau kepala suku. Sos ~ sistem pemilihan pemimpin melalui musyawarah di antara sesamanya berdasarkan kelebihan yang dimiliki baik secara fisik ataupun spriritual.',
  },
  {
    kata: 'Prinsip Ekonomi',
    definisi:
      'Prinsip Ekonomi : Eko ~ panduan dalam kegiatan ekonomi untuk mencapai perbandingan rasional  antara pengorbanan yang dikeluarkan dan hasil yang diperoleh. Prinsip ekonomi berlaku dalam tiga kegiatan yaitu, produksi, distribusi, dan konsumsi.',
  },
  {
    kata: 'Produksi',
    definisi: 'Produksi : Eko ~ kegiatan yang menghasilkan barang atau jasa.',
  },
  {
    kata: 'Produktivitas',
    definisi:
      'Produktivitas : Eko ~ perbandingan antara hasil yang dicapai (barang atau jasa) dengan segala sumber daya yang diperlukan (tenaga kerja, bahan, uang, dan waktu).',
  },
  {
    kata: 'Produsen',
    definisi:
      'Produsen : Eko ~ orang atau lembaga yang menghasilkan atau menambah nilai guna barang dan jasa.',
  },
  {
    kata: 'Proklamasi',
    definisi:
      'Proklamasi : Sej ~ pemberitahuan atau pengumuman resmi kepada seluruh rakyat.',
  },
  {
    kata: 'Propaganda',
    definisi:
      'Propaganda : Sej ~ membujuk sasaran agar menerima pandangan dari propandis (orang yang melakukan propaganda) sebagai media untuk menyebarluaskan keyakinan atau doktrin. Sos ~ usaha untuk melakukan suatu komunikasi yang bersifat persuasif, direncanakan untuk mempengaruhi  pandangan serta tingkah laku individu atau kelompok yang menjadi sasaran.  ',
  },
  {
    kata: 'Proses Sosial',
    definisi:
      'Proses Sosial : Sos ~ cara-cara individu, kelompok saling berinteraksi, bertemu dan membangun sistem hubungan sosial di tengah perubahan pola kehidupan.',
  },
  {
    kata: 'Proteksi',
    definisi:
      'Proteksi : Eko ~ kebijakan untuk melindungi produk dalam negeri. Sos ~ fungsi perlindungan yang diberikan oleh keluarga. ',
  },
  {
    kata: 'Pulau',
    definisi:
      'Pulau : Geo ~ daratan luas yang dikelilingi atau dipisahkan laut.',
  },
  {
    kata: 'Punden Berundak',
    definisi:
      'Punden Berundak : Sej ~ bangunan bertingkat atau besusun yang menyerupai candi yang dipergunakan untuk tempat pemujaan roh nenek moyang.',
  },
  {
    kata: 'Ras',
    definisi:
      'Ras : Geo ~ suatu sistem klasifikasi yang digunakan untuk mengkategorikan manusia dalam populasi atau kelompok  besar dan berbeda menurut ciri fenotip, asal-usul geografis, tampang jasmani, dan kesukuan yang terwarisi. Sej ~ pengelompokkan manusia berdasarkan bentuk tubuh dan warna kulit. Sos~ penggolongan manusia berdasrakan ciri-ciri fisik manusia.',
  },
  {
    kata: 'Rasional',
    definisi:
      'Rasional : Umum ~ cara berfikir logis yang sesuai dengan akal pikiran.',
  },
  {
    kata: 'Reboisasi',
    definisi:
      'Reboisasi : Geo ~ penghijauan atau penanaman hutan kembali pada hutan dan lahan gundul.',
  },
  {
    kata: 'Reformasi',
    definisi:
      'Reformasi : Sej ~ perubahan secara drastic untuk perbaikkan (dibidang sosial, politi,ekonomi, dan agama) dalam suatu masyarakat atau negara.',
  },
  {
    kata: 'Region',
    definisi:
      'Region : Geo ~ suatu wilayah yang memiliki ciri atau karakteristik tersendiri yang berbeda dengan wilayah lain. ',
  },
  {
    kata: 'Relief',
    definisi:
      'Relief : Geo ~ tinggi rendahnya permukaan bumi atau bentuk raut muka bumi. Sej ~ seni pahat pada dinding suatu bangunan atau candi.',
  },
  {
    kata: 'Remigrasi',
    definisi:
      'Remigrasi : Geo ~ bila orang yang sebelumnya melakukan perpindahan imigrasi atau emigrasi kembali ke negara aslinya. ',
  },
  {
    kata: 'Rempah-Rempah',
    definisi:
      'Rempah-Rempah : Geo ~ tumbuhan yang beraroma dan berasa kuat yang digunakan dalam jumlah kecil pada makanan sebagai pengawet atau penambah rasa dalam makanan. ',
  },
  {
    kata: 'Revolusi Industri',
    definisi:
      'Revolusi Industri : Sos ~ periode antara tahun 1750-1850 yang pada saat itu terjadi perubahan secara besar-besaran di bidang pertanian, manufaktur, pertambangan,  transportasi dan teknologi serta memiliki dampak yang mendalam terhadap sosial, ekonomi, dan budaya dunia.',
  },
  {
    kata: 'RIS',
    definisi:
      'RIS : Sej ~  singkatan dari Repuplik Indonesia Serikat, yang berdiri tanggal 27 Desember 1949 dengan Undang-Undang Dasar Sementara sebagai Konstitusinya. ',
  },
  {
    kata: 'RMS',
    definisi:
      'RMS : Sej ~ singkatan dari pemberontakan Republik Maluku Selatan, yang menolak terhadap pembentukan Negara Kesatuan Republik Indonesia. Mereka ingin merdeka dan melepaskan diri dari Republik Indonesia, karena mereka menganggap Maluku memiliki kekuatan secara ekonomi, politik, dan geografis untuk berdiri sendiri. ',
  },
  {
    kata: 'Ruang',
    definisi:
      'Ruang : Eko ~ tempat manusia dan makhluk hidup lainnya, melakukan kegiatan, dan memelihara kelangsungan hidup. Geo ~ kesatuan geografis beserta unsur terkait (ruang darat, ruang laut, ruang udara). Sej ~ latar tempat kejadian dari sebuah peristiwa. Sos ~ tempat berlangsungnya kegiatan individu dan/atau kelompok.',
  },
  {
    kata: 'Rumpun',
    definisi:
      'Rumpun : Geo ~ kelompok tumbuhan yang tumbuh anak-beranak seakan-akan mempunyai akar yang sama. Sej ~ sekelompok bangsa yang memiliki nenek moyang yang sama.',
  },
  {
    kata: 'Saham',
    definisi:
      'Saham : Eko ~ surat berharga tanda turut serta menjadi pemilik perusahaan.',
  },
  {
    kata: 'Salju',
    definisi:
      'Salju : Geo ~ air yang jatuh dari awan yang telah membeku padat dan jatuh seperti hujan.',
  },
  {
    kata: 'Samudra ',
    definisi:
      'Samudra : Geo ~ Laut yang luas dan merupakan massa air asin yang sambung -menyambung meliputi permukaan bumi yang dibatasi  oleh benua ataupun kepulauan yang besar. Geo ~ penampakan muka bumi yang berupa perairan yang sangat luas.',
  },
  {
    kata: 'Sarkofagus',
    definisi:
      'Sarkofagus : Sej ~ bangunan berupa kubur batu yang berbentuk seperti lesung dan diberi tutup.',
  },
  {
    kata: 'Sedimen',
    definisi:
      'Sedimen : Geo ~ material atau pecahan batuan, mineral, dan material organik yang melayang-layang di dalam air, udara, maupun yang dikumpulkan di dasar sungai atau laut oleh pembawa atau perantara alami lainnya. ',
  },
  {
    kata: 'Sejarah',
    definisi:
      'Sejarah : Umum ~ ilmu yang mempelajari segala peristiwa atau kejadian yang telah terjadi pada masa lampau dalam kehidupan umat manusia.',
  },
  {
    kata: 'Sekularisasi',
    definisi:
      'Sekularisasi : Sos ~ hal-hal yang mengutamakan kehidupan duniawi dan tidak didasarkan pada ajaran agama.',
  },
  {
    kata: 'Semenanjung',
    definisi:
      'Semenanjung : Geo ~ wilayah daratan yang sangat luas yang menjorok ke laut.',
  },
  {
    kata: 'Separatisme',
    definisi:
      'Separatisme : Sos ~ paham atau gerakan untuk memisahkan diri (mendirikan negara sendiri). ',
  },
  {
    kata: 'Sidang',
    definisi:
      'Sidang : Sej ~ forum formal suatu organisasi untuk membahas masalah tertentu dalam upaya menghasilkan keputusan yang akan menjadi sebuah ketetapan. ',
  },
  {
    kata: 'Simpati',
    definisi:
      'Simpati : Sos ~ perasaan atau emosi ketertarikan terhadap pihak lain.',
  },
  {
    kata: 'Sinkretisme',
    definisi:
      'Sinkretisme : Sej ~ bercampurnya praktik-praktik dan kepercayaan-kepercayaan  dari sebuah agama dengan agama lain sehingga menciptakan tradisi yang baru dan berbeda. Sos ~ proses perpaduan antara dua atau lebih suatu agama atau kepercayaan.',
  },
  {
    kata: 'Sirkum',
    definisi:
      'Sirkum : Geo ~ rangkaian pegunungan yang memanjang hingga ribuan kilometer.',
  },
  {
    kata: 'Skala Peta',
    definisi:
      'Skala Peta : Geo ~ perbandingan antara jarak di peta dengan jarak horizontal di lapangan.',
  },
  {
    kata: 'Social Climbing',
    definisi:
      'Social Climbing : Sos ~  ketika suatu individu atau kelompok yang berpindah dari status yang lebih rendah ke tingkatan yang lebih tinggi. Atau disebut juga mobilitas vertikal naik.',
  },
  {
    kata: 'Social Sinking',
    definisi:
      'Social Sinking : Sos ~  perpindahan status sosial individu atau kelompok dari tingkatan yang tinggi pindah ke derajat atau tingkatan yang lebih rendah. Disebut juga dengan mobilitas vertikal turun. ',
  },
  {
    kata: 'Solidaritas',
    definisi: 'Solidaritas : Sos ~ sifat atau rasa sekawan, senasib.',
  },
  {
    kata: 'Sosialisasi Primer',
    definisi:
      'Sosialisasi Primer : Sos ~ sosialisasi pertama pada tahap awal perkembangan individu, seperti keluarga, kerabat, lingkungan sekitar termasuk teman bermain.',
  },
  {
    kata: 'Sosialisasi Sekunder',
    definisi:
      'Sosialisasi Sekunder : Sos ~ sosialisasi tahap lanjut, terjadi ketika individu sudah melakukan kontak dan interaksi dengan budaya dan kebiasaan di luar komunitasnya, dan dilakukan pada lingkup masyarakat yang lebih luas.',
  },
  {
    kata: 'Sosialisasi',
    definisi:
      'Sosialisasi : Eko ~ suatu proses bagaimana memperkenalkan suatu sistem pada seseorang. Sos ~ proses penanaman nilai dan norma pada seseorang sedari individu lahir hingga meninggal dunia. ',
  },
  {
    kata: 'Sosiologi',
    definisi:
      'Sosiologi : Umum ~ berasal dari  bahasa latin yaitu “socius” yang berarti kawan/masyarakat dan “logos” yang berarti ilmu. Sehingga sosiologi merupakan ilmu yang membahas berbagai aspek dalam masyarakat serta pengaruhnya bagi kehidupan manusia. ',
  },
  {
    kata: 'Spesies',
    definisi:
      'Spesies : Geo ~ jenis atau kelompok makhluk hidup yang sejenis dan serupa dan dapat melakukan perkawinan. ',
  },
  {
    kata: 'Stabilisasi',
    definisi:
      'Stabilisasi : Eko ~ suatu kondisi di mana mekanisme ekonomi dalam penetapan harga, alokasi dana, dan pengelolaan risiko berfungsi secara baik. Geo ~  kemampuan yang dimiliki suatu organisme, populasi, komunitas, atau ekosistem untuk menghidupi dirinya sendiri atau meredam sejumlah gangguan maupun tekanan dari luar. Sos ~ usaha atau upaya membuat stabil, penstabilan.',
  },
  {
    kata: 'Stalemate',
    definisi:
      'Stalemate : Sos ~ adanya kekuatan seimbang dari kedua pihak yang sedang bertikai, dan berhenti pada titik tertentu.',
  },
  {
    kata: 'Statis',
    definisi:
      'Statis : Eko ~ tidak mengalami perubahan dan kaku. Geo ~ diam atau tergenang. Sej ~ tidak mau menyesuaiakan diri dengan keadaan zaman. Sos ~ tetap dan tidak berubah.',
  },
  {
    kata: 'Status Sosial',
    definisi:
      'Status :  SosialSos ~  kedudukan dan peran seseorang di dalam masyarakat.',
  },
  {
    kata: 'Stratifikasi',
    definisi:
      'Stratifikasi : Sos ~ penggolongan atau pengelompokkan masyarakat secara bertingkat (vertikal) pada kelas-kelas tertentu.',
  },
  {
    kata: 'Struktur Sosial',
    definisi:
      'Struktur Sosial : Sos ~ bagian-bagian  atau unsur-unsur dalam masyarakat yang tersusun secara teratur guna membentuk suatu kesatuan yang sistemik.',
  },
  {
    kata: 'Stupa',
    definisi:
      'Stupa : Sej ~ bangunan yang berkaiatan dengan agama Budha yang berbentuk mangkuk terbalik, terdapat bagian berbentuk persegi empat atau persegi delapan membentuk tongkat di atasnya.',
  },
  {
    kata: 'Subsidensi Massa Udara',
    definisi: 'Subsidensi : Massa UdaraGeo ~ turunnya massa udara.',
  },
  {
    kata: 'Sugesti',
    definisi:
      'Sugesti : Sos ~ sikap, pandangan, dan pendapat orang lain yang diterima tanpa dipikir ulang.',
  },
  {
    kata: 'Suku Bangsa',
    definisi:
      'Suku Bangsa : Geo ~ didasarkan kepada adanya persamaan kebudayaan dalam kelompok masyarakat tersebut. Sej ~ penggolongan manusia berdasarkan kepercayaan, nilai, kebiasaan, adat istiadat, norma, bahasa, sejarah, geografis, dan hubungan kekerabatan. Sos ~ atau suku bangsa adalah suatu golongan atau kelompok manusia yang angota-anggotanya mengidentifikasikan dirinya dengan sesamanya, biasanya berdasarkan garis keturunan yang dianggap sama. ',
  },
  {
    kata: 'Sultan',
    definisi:
      'Sultan : Sej ~ gelar yang digunakan dalam dunia muslim yang merujuk pada suatu kekuasaan. Penguasa dari sebuah negara muslim. Sering disebut raja atau baginda.',
  },
  {
    kata: 'Suluk',
    definisi: 'Suluk : Sej ~ kitab berisi ajaran-ajaran tasawuf.',
  },
  {
    kata: 'Sumber Daya Alam',
    definisi:
      'Sumber Daya Alam : Eko ~ semua benda hidup atau mati yang berguna dan bernilai dalam kondisi di mana manusia menemukannya. Geo ~ segala sesuatu yang berasal dari alam biotik maupun abiotic yang secara keseluruhan membentuk kesatuan ekosistem. Sej ~ semua benda hidup atau mati yang secara alami dikaitkan kegunaannya bagi manusia. Sos ~ segala sesuatu yang berasal dari alam yang dapat digunakan untuk memenuhi kebutuhan hidup manusia.',
  },
  {
    kata: 'Sumber Daya Geologi',
    definisi:
      'Sumber Daya Geologi : Geo ~ segala sumber daya alam non-hayati yang terbentuk melalui proses geologi meliputi sumber daya mineral, sumber daya energi, dan sumber daya air.',
  },
  {
    kata: 'Sumber Daya Hayati',
    definisi:
      'Sumber Daya Hayati : Geo ~ sumber daya berupa biotik atau makhluk hidup, hewan, dan tumbuhan.',
  },
  {
    kata: 'Sumber Daya Manusia',
    definisi:
      'Sumber Daya Manusia : Eko ~ individu yang bekerja dan menjadi anggota suatu perusahaan atau institusi yang biasa disebut pegawai, buruh, karyawan, pekerja, tenaga kerja, dan lain sebagainya. Geo ~ penduduk suatu negara yang sudah memasuki usia angkatan kerja, baik yang belum bekerja maupun yang sudah bekerja. Sej ~ perkembangan pola pikir dan potensi pada diri manusia dari pertengahan abad ke-18 sampai saat ini. Sos ~ individu yang bekerja sebagai penggerak organisasi, baik institusi mapun perusahaan dan berfungsi sebagai asset yang harus dilatih dan dikembangkan kemampuannya.',
  },
  {
    kata: 'Sumber Daya Mineral',
    definisi:
      'Sumber Daya Mineral : Geo ~ bahan alam berupa batuan/mineral yang mengandung cukup unsur yang memiliki nilai ekonomis sehingga memungkinkan adanya penambangan atau penggalian. ',
  },
  {
    kata: 'Sumber Daya Non-Hayati',
    definisi:
      'Sumber Daya Non-Hayati : Geo ~ sumber daya alam berupa abiotik atau benda-benda mati seperti, tanah, angin, dan air. ',
  },
  {
    kata: 'Sumber Daya',
    definisi:
      'Sumber Daya : Eko ~ faktor-faktor produksi yang dibutuhkan dalam setiap proses produksi. Geo ~ sesuatu yang memiliki nilai guna danpotensi bagi kehidupan.',
  },
  {
    kata: 'Supersemar',
    definisi:
      'Supersemar : Sej ~ singkatan dari Surat Perintah Sebelas Maret. Merupakan surat pemberian mandat dari Presiden Soekarno kepada Letjen Soeharto untuk memulihkan keadaan dan kewibawaan pemerintah. ',
  },
  {
    kata: 'Swasembada',
    definisi: 'Swasembada : Eko ~ usaha mencukupi kebutuhan diri.',
  },
  {
    kata: 'Syair',
    definisi:
      'Syair : Sej ~ puisi lama pada setiap baitnya terdiri atas empat baris yang berakhir dengan bunyi yang sama.',
  },
  {
    kata: 'Taktik Gerilya',
    definisi:
      'Taktik Gerilya : Sej ~ taktik peperangan yang dilakukan dengan cara menipu, mengelabui, dan menyerang secara tiba-tiba dan mengandalkan kecepatan untuk menghilang tanpa sempat dibalas oleh lawan.',
  },
  {
    kata: 'Tanah Aluvial',
    definisi:
      'Tanah Aluvial : Geo ~ tanah hasil endapan. Jenis tanah yang dibawa dan diendapkan oleh aliran sungai. Tanah ini juga subur.',
  },
  {
    kata: 'Tanah Vulkanik',
    definisi:
      'Tanah Vulkanik : Geo ~ jenis tanah hasil dari vulkanisme (gunung berapi) bersifat subur, dan baik untuk pertanian serta perkebunan. Geo ~ lapisan tanah yang berasal dari material letusan gunung api.',
  },
  {
    kata: 'Tarif',
    definisi: 'Tarif : Eko ~ kebijakan pajak atas barang impor dan ekspor. ',
  },
  {
    kata: 'Tata Kelakuan',
    definisi:
      'Tata Kelakuan : Sos ~ berasal dari kebiasaan yang diterima sebagai patokan untuk membatasi tindakan masyarakat. Ing: mores.',
  },
  {
    kata: 'Tawar -Menawar',
    definisi:
      'Tawar -Menawar : Sos ~ perundingan mengenai pertukaran barang dan jasa antara dua pihak atau lebih.',
  },
  {
    kata: 'Tektonik',
    definisi:
      'Tektonik : Geo ~ proses gerakan lempeng yang menimbulkan lipatan, retakan, dan patahan sehingga menyebabkan bentuk muka bumi beragam. ',
  },
  {kata: 'Teluk', definisi: 'Teluk : Geo ~ lautan yang menjorok ke daratan.'},
  {
    kata: 'Tempat',
    definisi:
      'Tempat : Eko ~ bagian tertentu dari suatu ruang (bidang, daerah, lokasi, ruang penyimpanan dan sebagainya). Geo ~  menunjukkan wilayah secara khusus. Sej ~ bangunan zaman dahulu yang memiliki suatu makna yang terkandung di dalamnya dan memiliki sejarah yang penting. Sos ~ ruang aktivitas manusia. ',
  },
  {
    kata: 'Tetomisme',
    definisi:
      'Tetomisme : Sej ~ kepercayaan yang menganggap bahwa hewan atau tumbuhan tertentu memiliki kekuatan supranatural untuk memberikan keselamatan atau malapetaka kepada penganutnya. Sos ~ sistem kepercayaan di mana manusia dikatakan memiliki kekerabatan atau hubungan mistis dengan roh halus seperti binatang atau tumbuhan yang dijadikan sebagai lambang atau simbol mereka.',
  },
  {
    kata: 'Tindakan Sosial',
    definisi:
      'Tindakan Sosial : Sos ~ tindakan yang penuh arti/makna subjektif yang diarahkan kepada orang lain. ',
  },
  {
    kata: 'Tindakan',
    definisi:
      'Tindakan : Eko ~ pertimbangan individu terhadap nilai pengorbanan yang harus dilakukan sebelum memperoleh yang diinginkan. Sos ~ perilaku yang mengarah pada pemenuhan niat atau memiliki tujuan, tindakan adalah kegiatan yang kompleks, terkoordinasi, dan ditentukan oleh tujuan. Atau sering juga disebut sebagai perilaku nonreflek. ',
  },
  {
    kata: 'Toleransi ',
    definisi:
      'Toleransi : Sos ~ sikap menghargai perbedaan yang ada di dalam masyarakat.',
  },
  {
    kata: 'Traktat ',
    definisi:
      'Traktat : Sej ~ perjanjian atau persetujuan di antara dua negara atau lebih untuk dapat mencapai hubungan hukum tentang objek-objek hukum dengan kepentingan yang sama.',
  },
  {
    kata: 'Transmigrasi',
    definisi:
      'Transmigrasi : Geo ~ perpindahan penduduk dari daerah padat, ke wilayah yang penduduknya masih jarang, dilakukan sebagai upaya pemerataan penduduk. Sej ~ suatu program yang dibuat oleh pemerintah Indonesia untuk memindahkan penduduk dari suatu daerah yang padat ke darah lain dalam wilayah NKRI. ',
  },
  {
    kata: 'Transportasi',
    definisi:
      'Transportasi : Eko ~ perpindahan manusia atau barang dari satu tempat ke tempat lainnya  dengan menggunakan sebuah kendaraan yang digerakan oleh manusia atau mesin. Geo ~ pergerakan  dari manusia/barang/jasa yang terjadi di dalam suatu ruang permukaan bumi. Sos ~ perpindahan barang atau manusia dari suatu tempat ke tempat lain menggunakan kendaraan. ',
  },
  {
    kata: 'Trikora',
    definisi:
      'Trikora : Sej ~ singkatan dari Tri Komando Rakyat, merupakan konflik dua tahun yang dilancarkan Indonesia untuk menggabungkan wilayah Irian Barat. Dengan tujuan merebut kembali Irian Barat dari Belanda yaitu menggagalkan pembentukan negara boneka Papua buatan Belanda. ',
  },
  {
    kata: 'Tritura',
    definisi:
      'Tritura : Sej ~ singkatan dari Tiga Tuntutan Rakyat. Tiga tuntutan kepada pemerintah yang diserukan para mahasiswa yang bergabung dalam Kesatuan Aksi Mahasiswa Indonesia (KAMI). Isi Tritura di antranya; bubarkan PKI dan oramas-ormasnya; Perombakan kabinet Dwikora; turunkan harga pangan. ',
  },
  {
    kata: 'Ultimatum',
    definisi:
      'Ultimatum : Sej ~ peringatan atau tuntutan yang terakhir dengan diberi batas waktu untuk menjawabnya. ',
  },
  {
    kata: 'UNCI',
    definisi:
      'UNCI : Sej ~  singkatan dari United Nations Commission for Indonesia yang mengusulkan perundingan Roem-Royen di Hotel Des Indes Jakarta. ',
  },
  {
    kata: 'Undagi',
    definisi:
      'Undagi : Sej ~ sebutan untuk sekelompok orang yang mahir dan terampil membuat kerajinan atau pekerjaan tangan, seperti teknik melebur besi, logam, dan perunggu.',
  },
  {
    kata: 'Urbanisasi',
    definisi: 'Urbanisasi : Geo ~ perpindahan penduduk dari desa ke kota.',
  },
  {
    kata: 'Vacuum of Power',
    definisi:
      'Vacuum of Power : Sej ~ kekosongan kekuasaan, saat Jepang yang berkuasa di Indonesia menyerah tanpa syarat kepada Sekutu, sementara Sekutu belum datang di Indonesia.',
  },
  {
    kata: 'Valuta Asing',
    definisi:
      'Valuta Asin : Eko ~ mata uang yang digunakan sebagai alat pembayaranpada transaksi perdagangan internasional.',
  },
  {
    kata: 'Vandalisme',
    definisi:
      'Vandalisme : Sos ~ disebut dengan aksi tawuran yang dilakukan remaja. Tindakan mencoret, merusak fasilitas umum.',
  },
  {
    kata: 'Vegetasi',
    definisi:
      'Vegetasi : Geo ~ berbagai jenis tanaman yang tumbuh di suatu wilayah.',
  },
  {
    kata: 'VOC',
    definisi:
      'VOC : Sej ~ singkatan dari Vereenigde Oostindische Compangie merupakan persekutuan dagang asal Belanda yag memiliki monopoli untuk aktivitas perdagangan di Asia. Kongsi dagang terbesar di Nusantara untuk menyatukan perdagangan rempah-rempah dari wilayah timur dalan memperkokoh kedudukan Belanda di Indonesia. ',
  },
  {
    kata: 'Volksraad',
    definisi:
      'Volksraad : Sej ~  lembaga perwakilan rakyat bagi pemerintahan Hindia Belanda.  ',
  },
  {
    kata: 'Vulkanisme',
    definisi:
      'Vulkanisme : Geo ~ peristiwa yang berhubungan dengan keluarnya magma dari dalam bumi ke permukaan bumi.',
  },
  {
    kata: 'Waruga',
    definisi:
      'Waruga : Sej ~ peti kubur batu berukuran kecil.berbentuk kubus dan bulat dengan posisi mayat jongkok terlipat.',
  },
  {
    kata: 'Westernisasi',
    definisi:
      'Westernisasi : Sej ~ suatu perbuatan seseorang yang mulai kehilangan nasionalismenya yang meniru atau melakukan aktifitas kebarat-baratan. Sos ~ proses pembaratan atau peniruan budaya barat.',
  },
  {
    kata: 'Yupa',
    definisi:
      'Yupa : Sej ~ Prasasti pertama yang dibuat oleh Kerajaan Kutai. Berbentuk tugu batu bertulis untuk peringatan upacara dan persembahan.',
  },
  {
    kata: 'Zaken Kabinet',
    definisi:
      'Zaken Kabinet : Sej ~ suatu kabinet yang para menterinya dipilih dari tokoh-tokoh yang ahli di bidangnya, tanpa mempertimbangkan latar belakang partainya.',
  },
  {
    kata: 'Zone',
    definisi:
      'Zone : Geo ~ tumpukan lempeng suatu wilayah pertemuan antara lempeng atau kerak bumi yang saling berhadapan.',
  },
];

class BySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: DATA,
    };
  }

  salin = copy => {
    Clipboard.setString(copy);
    ToastAndroid.show('Berhasil disalin', ToastAndroid.SHORT);
  };

  search() {
    let data = DATA;

    data = data.filter(item =>
      item.definisi
        .toLocaleLowerCase()
        .includes(this.state.text.toLocaleLowerCase()),
    );

    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#18AEC7', height: '100%'}}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.textheader}>
            <Text style={styles.h1}>KAMUS DIGITAL</Text>
            <Text style={styles.h2}>ILMU PENGETAHUAN SOSIAL</Text>
          </View>
          <Image source={Icon} style={{width: 100, height: 100}} />
        </View>

        {/* Konten */}
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({text: text})}
            value={this.state.text}
            placeholder="Pencarian Kata..."
            placeholderTextColor={'gray'}
            onKeyPress={() => this.search()}
          />
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View style={styles.flatview}>
                <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
                  <Text style={styles.textview}>{item.kata}</Text>
                  <Text style={styles.descview}>{item.definisi}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    // backgroundColor: '#18AEC7',
                    // flex: 1,
                    borderTopEndRadius: 20,
                    borderBottomEndRadius: 20,
                    // borderWidth: 2,
                    // borderColor: '#464646',
                    // flexDirection: 'row',
                    justifyContent: 'center',
                    // backgroundColor: 'green',
                    // marginTop: 15,
                    padding: 20,
                    // borderRadius: 20,
                  }}
                  onPress={() => this.salin(item.definisi)}
                >
                  <Image
                    source={Copy}
                    style={{width: 20, height: 20, marginLeft: 5}}
                  />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.kata}
          />
        </View>
      </View>
    );
  }
}

export default BySearch;

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: 'row',
  },
  textheader: {
    paddingLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  h1: {
    fontSize: 28,
    color: 'white',
    // backgroundColor: 'purple',
  },
  h2: {
    fontSize: 20,
    color: 'white',
  },
  // konten
  content: {
    borderTopLeftRadius: 22,
    borderTopEndRadius: 22,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'black',
    fontSize: 20,
  },
  flatview: {
    borderWidth: 2,
    borderColor: '#464646',
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#18AEC7',
    marginTop: 15,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  textview: {
    fontSize: 20,
    color: 'black',
    // flex: 1,
    paddingLeft: 10,
  },
  descview: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
    padding: 10,
  },
});
