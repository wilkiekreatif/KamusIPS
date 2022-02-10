import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Pajak',
    definisi:
      'Eko ~ iuran wajib warga negara kepada negara yang diatur dalam undang-undang.',
  },
  {kata: 'Paleolitikum', definisi: 'Sej ~ zaman batu tua.'},
  {
    kata: 'Pangea',
    definisi:
      'Geo ~ super benua yang menggabungkan  hampir semua dataran Bumi pada waktu geologis awal yang terbentuk sekitar 300 juta tahun, dan mulai retak 200 juta tahun yang lalu. Pangea disebut juga sebagai benua tunggal.',
  },
  {kata: 'Pantai ', definisi: 'Geo ~ batas antara daratan dan lautan.'},
  {
    kata: 'Pasar',
    definisi:
      'Eko ~ tempat bertemunya pembeli dan penjual untuk melakukan transaksi ekonomi (jual-beli).',
  },
  {
    kata: 'Patung',
    definisi:
      'Sej ~ benda tiga dimensi karya manusia sebagai karya seni, umumnya berbentuk binatang atau manusia.',
  },
  {
    kata: 'Patungan',
    definisi:
      'Eko ~ pengaturan bisnis bersama di mana dua pihak atau lebih sepakat untuk menyatukan sumber daya mereka untuk tujuan menyelesaikan sesuatu. Dapat berupa proyek atau aktivitas bisnis yang sering disebut perusahaan patungan. Geo ~ bersama-sama membeli, menyewa, mengumpulkan uang, untuk maksud tertentu dan sebaginya. Sos ~ kerjasama dua badan usaha atau lebih untuk memperoleh keuntungan dalam bidang ekonomi, demi keuntungan bersama yang akan dibagi nanti secara proporsional dengan cara saling mengisi kekurangan masing-masing partner.',
  },
  {
    kata: 'PDRI',
    definisi:
      'Sej ~ singkatan dari Pemerintah Darurat Republik Indonesia, yang dibentuk di Sumatera Barat dengan tujuan pemerintahan Indonesia masih berlangsung saat Ir. Soekarno dan M. Hatta ditangkap oleh Belanda yang diasingkan ke Bangka. ',
  },
  {
    kata: 'Pedagang Besar (Grosir) ',
    definisi:
      'Eko ~  pedagang yang usahanya membeli barang dalam jumlah yang besar kemudian menjualnya lagi kepada pedagang kecil (pengecer).',
  },
  {
    kata: 'Pedagang Eceran ',
    definisi:
      'Eko ~ pedagang yang membeli barang dari pedagang besar (grosir) kemudian menjualnya langsung ke konsumen akhir.',
  },
  {
    kata: 'Pelaku Ekonomi',
    definisi:
      'Eko ~ pihak yang menjalankan kegiatan ekonomi dalam suatu sistem ekonomi. ',
  },
  {
    kata: 'Pelapukan',
    definisi:
      'Geo ~ peristiwa hancurnya batuan dari batuan yang berbentuk gumpalan menjadi butiran yang kecil bahkan larut dalam air.',
  },
  {
    kata: 'Pelita',
    definisi:
      'Sej ~ singkatan dari Pembangunan Lima Tahun yang merupakan program jangka panjang yang dilakukan pemerintah pada masa orde baru. ',
  },
  {
    kata: 'Pembeli',
    definisi:
      'Eko ~ orang yang melakukan permintaan terhadap barang atau jasa yang ditawarkan pedagang.',
  },
  {
    kata: 'Pemberontakan',
    definisi:
      'Eko ~ penolakan terhadap otoritas, diawali dengan adanya ketidakpuasan sebagian masyarakat terhadap situasi dan kondisi. Sej ~  penolakkan terhadap otoritas, pembangkangan sipil, hingga kekerasan terorganisir yang berupaya meruntuhkan otoritas yang ada. Sos ~ menolak dan tidak menerima aturan dan norma baru yang ditetapkan, baik itu budaya, politik, hukum, dan sosial. ',
  },
  {
    kata: 'Pemilu',
    definisi:
      'Sej ~  singkatan dari Pemilihan Umum. Pemilu merupakan proses pemilihan seseorang untuk mengisi jabatan politik. Sos ~ proses formal pengambilan keputusan kelompok di mana anggota masyarakat yang memenuhi persyarakatan memilih seseorang untuk memegang jabatan administrasi publik. ',
  },
  {
    kata: 'Pemukiman ',
    definisi:
      'Eko ~ kondisi tempat tinggal penduduk disuatu tempat yang membentuk pola dan tertentu. Biasanya pola pemukiman mengelompok, memanjang, dan menyebar terhadap suatu fenomena alam.',
  },
  {
    kata: 'Penawaran',
    definisi:
      'Eko ~ banyaknya barang atau jasa yang tersedia dan dapat ditawarkan oleh produsen ke konsumen pada setiap tingkat harga selama periode waktu tertentu.',
  },
  {
    kata: 'Penduduk ',
    definisi:
      'Eko ~  mereka yang bertempat tinggal atau yang berdomisisli dalam suatu negara baik warga negara asli maupun warga negara asing yang disahkan undang-undang. Geo ~ kumpulan manusia yang menempati wilayah geografi dan ruang tertentu. Sej ~ orang-orang yang mendiami dan tinggal di daerah tersebut. Sos ~ jumlah manusia yang tinggal di suatu wilayah atau ruang.',
  },
  {
    kata: 'Penetrasi',
    definisi:
      'Eko ~ usaha untuk menyelesaikan atau menghadapi masalah bidang ekonomi, berupa strategi atau cara pengembangan pangsa pasar. Sej ~ pemaksaan kebudayaan dari bangsa penjajah kepada bangsa yang dijajah. Sos ~ proses perembesan atau penerobosan unsur budaya kepada masyarakat baik secara damai ataupun paksaan.',
  },
  {
    kata: 'Penjual ',
    definisi:
      'Eko ~ pihak yang melakukan penawaran atau menyediakan barang atau jasa. ',
  },
  {
    kata: 'Penyimpangan Sosial',
    definisi:
      'Sos ~ semua tindakan yang bertentangan dengan nilai dan norma sosial dalam masyarakat.',
  },
  {
    kata: 'Peperangan',
    definisi:
      'Sej ~ kondisi permusuhan dengan menggunakan kekerasan, baik aksi fisik maupun non fisik. Atau dikenal dengan pertikaian bersenjata. Sos ~ akibat konflik yang kompleks yang mengakibatkan pertempuran besar bersenjata antara dua pasukan atau lebih.',
  },
  {
    kata: 'Perairan',
    definisi:
      'Geo ~ suatu kumpulan masa air pada suatu wilayah tertentu, baik yang bersifat dinamis (bergerak atau mengalir) maupun statis (tergenang).',
  },
  {
    kata: 'Perdagangan Internasional',
    definisi:
      'Eko ~ kegiatan transaksi dagang antara satu negara dengan negara lain, baik berupa barang ataupun jasa guna memenuhi kebutuhan dalam negeri dan untuk mendapatkan keuntungan yang lebih. Eko ~ proses pertukaran barang dan jasa antara dua negara atau lebih dengan tujuan mendapatkan keuntungan atau laba.   Geo ~ perdagangan yang dilakukan oleh penduduk suatu negara dengan penduduk negara lain atas dasar kesepakatan bersama.',
  },
  {
    kata: 'Perdagangan',
    definisi:
      'Eko ~ kegiatan tukar-menukar barang atau jasa berdasarkan kesepakatan bersama dan bukan paksaan dengan menggunakan alat tukar berupa uang.',
  },
  {
    kata: 'Perikanan',
    definisi:
      'Eko ~ semua kegiatan yang berhubungan dengan pengelolaan dan pemanfaatan sumber daya ikan dan lingkungannya mulai dari praproduksi, produksi, pengolahan, sampai dengan pemasaran yang dilaksanakan dalam satu sistem bisnis. Geo ~  semua aktivitas yang berkaitan dengan ikan, termasuk memproduksi ikan, melalui penangkapan maupun budidaya ikan dan atau mengolahnya untuk memenuhi kebutuhan manusia sebagai sumber protein.',
  },
  {
    kata: 'Perilaku Sosial',
    definisi:
      'Sos~ perilaku manusia selain didorong oleh faktor internal dan eksternal, namun juga didorong oleh makna atau tujuan dan orang lain. Perilaku sosial belum dirancang untuk menimbulkan respon balik.',
  },
  {
    kata: 'Perilaku',
    definisi:
      'Eko ~ respon atau reaksi seseorang terhadap stimulus (ransangan dari luar). Geo ~  perilaku adalah cabang ilmu geografi manusia, yang mempelajari proses kognitif dengan responsnya terhadap lingkungannya, melalui behaviorisme. Sej ~ gerak-gerik yang dimiliki oleh manusia dan dipengaruhi oleh adat, sikap, emosi, nilai, etika, kekuasaan, persuasi, dan/atau genetika. Sos~ gerak reflek yang dilakukan oleh organisme makhluk hidup sebagai akibat dari dorongan fisik baik dari dalam organisme makhluk hidup itu sendiri atau ransangan lingkungan, secara sadar atau bawah sadar, terbuka atau terselubung.',
  },
  {
    kata: 'Perkebunan',
    definisi:
      'Eko ~ usaha penanaman lahan dengan tanaman keras yang bersifat tahunan. Geo ~ aktivitas budi daya tanaman semusim atau tanaman tahunan.',
  },
  {
    kata: 'Permesta',
    definisi:
      'Sej ~  singkatan dari Perjuangan Rakyat Semesta, merupakan gerakan militer yang dideklarasikan oleh pemimpin militer negara Indonesia Timur kepada militer pemerintah pusat.',
  },
  {
    kata: 'Permintaan',
    definisi:
      'Eko ~ sejumlah barang atau jasa yang diinginkan seseorang untuk dibeli pada berbagai tingkat harga, waktu, dan tempat tertentu.',
  },
  {
    kata: 'Pertanian',
    definisi:
      'Eko ~ usaha produksi bahan makanan utama atau pokok. Geo ~ aktivitas pemanfaatan sumber daya hayati yang dilakukan manusia untuk menghasilkan bahan pangan, bahan baku industri, sumber energi, serta untuk mengelola lingkungan hidupnya. ',
  },
  {
    kata: 'Perubahan Sosial Besar',
    definisi:
      'Sos ~ perubahan yang perpengaruh pada sendi-sendi kehidupan masyarakat yang memberi perubahan besar dan signifikan. ',
  },
  {
    kata: 'Perubahan Sosial Evolusi',
    definisi:
      'Sos ~ perubahan sosial yang terjadi secara lambat yang memerlukan waktu lama dan diikuti oleh perubahan kecil yang terjadi secara lambat. ',
  },
  {
    kata: 'Perubahan Sosial Kecil',
    definisi:
      'Sos ~ perubahan yang pengaruhnya kecil dan diikuti oleh sebagian kecil orang. ',
  },
  {
    kata: 'Perubahan Sosial Revolusi',
    definisi:
      'Sos ~ perubahan sosial yang terjadi dalam waktu yang cepat dan dan hal-hal mendasar dalam masyarakat ikut mengalami perubahan.',
  },
  {
    kata: 'Perubahan Sosial',
    definisi:
      'Sej ~ perubahan fungsi kebudayaan dan perilaku manusia dalam masyarakat dari keadaan tertentu ke keadaan yang lain. Sos ~ perubahan-perubahan yang terjadi pada lembaga-lembaga kemasyarakatan dalam suatu warga yang memengaruhi sistem sosialnya, termasuk nilai, sikap-sikap sosial, dan pola perilaku kelompok dalam masyarakat. ',
  },
  {
    kata: 'Perubahan Tidak Direncanakan ',
    definisi:
      'Sos ~ perubahan yang terjadi di luar jangkauan dan kehendak masyarakat. ',
  },
  {
    kata: 'Perubahan yang Direncanakan',
    definisi:
      'Sos ~ perubahan yang memang diinginkan dan dikehendaki oleh masyarakat atau pihak yang menginginkan perubahan. ',
  },
  {
    kata: 'Peta',
    definisi:
      'Geo ~ gambaran permukaan bumi pada suatu bidang datar dan diperkecil menggunakan skala.',
  },
  {
    kata: 'Peternakan',
    definisi:
      'Eko ~ usaha memelihara binatang peliharaan yang dapat diambil manfaatnya sehingga mampu memberikan suatu keuntungan. Geo ~ kegiatan mengembangbiakan dan pemeliharaan hewan ternak untuk mendapatkan manfaat dan hasil dari kegiatan tersebut.',
  },
  {
    kata: 'Plato',
    definisi:
      'Geo ~ dataran tinggi yang luas dengan lembah dan bukit akibat pengikisan.',
  },
  {
    kata: 'Pluralitas',
    definisi:
      'Eko ~ tindakan ekonomi berdasarkan prinsip ekonomi yaitu dengan modal seminimal mungkin akan mendapatkan hasil semaksimal mungkin. Sos ~ paham atas keberagaman untuk dapat hidup secara toleran ditengah-tengah banyaknya perbedaan dan keberagaman dalam masyarakat.',
  },
  {
    kata: 'Politeisme',
    definisi:
      'Sej ~ kepercayaan yang mengakui adanya lebih dari satu tuhan atau menyembah banyak dewa. Sos ~ merupakan kepercayaan kepada dewa-dewa.',
  },
  {
    kata: 'Politik dumping',
    definisi:
      'Eko ~ kebijakan menjual barang lebih murah di luar negeri dari pada di dalam negeri. ',
  },
  {
    kata: 'Politik',
    definisi:
      'Umum ~ pengetahuan mengenai ketatanegaraan  atau kenegaraan seperti sistem pemerintahan atau dasar-dasar pemerintahan. ',
  },
  {
    kata: ' Populasi',
    definisi:
      'Geo ~ kelompok organisme atau makhluk hidup yang sejenis yang hidup dan beranak pada suatu daerah tertentu. Sos ~ merupakan wilayah generalisasi yang terdiri dari obyek atau subyek yang memiliki kuantitas dan karakteristik tertentu yang ditetapkan oleh peneliti untuk dipelajari yang kemudian ditarik kesimpulannya.',
  },
  {
    kata: 'Potensi',
    definisi:
      'Umum ~ kemampuan yang mempunyai kemungkinan untuk dikembangkan kekuatan, kesanggupan, dan dayanya. ',
  },
  {
    kata: 'PPKI',
    definisi:
      'Sej ~ singkatan dari Pembentukan Panitia Persiapan Kemerdekaan Indonesia. Dibentuk dengan tujuan menyusun rancangan Undang-Undang Dasar bagi Negara Indonesia yang diketuai oleh Ir. Soekarno. ',
  },
  {
    kata: 'PPRI',
    definisi:
      'Sej ~  singkatan dari Pemerintah Revolusioner Republik Indonesia, merupakan gerakan pertentangan antara pemerintah  daerah kepada pemerintah pusat. Dengan tujuan agar mendorong pembangunan secara menyeluruh ke seluruh daerah. ',
  },
  {
    kata: 'Praaksara',
    definisi: 'Sej ~ masa sebelum manusia mengenal bentuk tulisan.',
  },
  {
    kata: 'Pranata Sosial',
    definisi:
      'Sos ~ sistem tata kelakuan dan berhubungan pada aktivitas-aktivitas untuk memenuhi berbagai kebutuhan khusus dalam kehidupan masyarakat.',
  },
  {
    kata: 'Prasasti',
    definisi:
      'Sej ~ piagam atau dokumen yang ditulis pada bahan yang keras dan tahan lama, atau dikenal juga berupa batu bertulis. ',
  },
  {
    kata: 'Primordial',
    definisi:
      'Sos ~ ikatan yang muncul dari perasaan dari hubungan keluarga atau ikatan kelompok yang berlebihan. ',
  },
  {
    kata: 'Primus Interpares',
    definisi:
      'Sej ~ sistem yang digunakan manusia purba untuk memilih seorang pemimpin atau kepala suku. Sos ~ sistem pemilihan pemimpin melalui musyawarah di antara sesamanya berdasarkan kelebihan yang dimiliki baik secara fisik ataupun spriritual.',
  },
  {
    kata: 'Prinsip Ekonomi ',
    definisi:
      'Eko ~ panduan dalam kegiatan ekonomi untuk mencapai perbandingan rasional  antara pengorbanan yang dikeluarkan dan hasil yang diperoleh. Prinsip ekonomi berlaku dalam tiga kegiatan yaitu, produksi, distribusi, dan konsumsi.',
  },
  {
    kata: 'Produksi',
    definisi: 'Eko ~ kegiatan yang menghasilkan barang atau jasa.',
  },
  {
    kata: 'Produktivitas',
    definisi:
      'Eko ~ perbandingan antara hasil yang dicapai (barang atau jasa) dengan segala sumber daya yang diperlukan (tenaga kerja, bahan, uang, dan waktu).',
  },
  {
    kata: 'Produsen',
    definisi:
      'Eko ~ orang atau lembaga yang menghasilkan atau menambah nilai guna barang dan jasa.',
  },
  {
    kata: 'Proklamasi',
    definisi:
      'Sej ~ pemberitahuan atau pengumuman resmi kepada seluruh rakyat.',
  },
  {
    kata: 'Propaganda',
    definisi:
      'Sej ~ membujuk sasaran agar menerima pandangan dari propandis (orang yang melakukan propaganda) sebagai media untuk menyebarluaskan keyakinan atau doktrin. Sos ~ usaha untuk melakukan suatu komunikasi yang bersifat persuasif, direncanakan untuk mempengaruhi  pandangan serta tingkah laku individu atau kelompok yang menjadi sasaran.  ',
  },
  {
    kata: 'Proses Sosial',
    definisi:
      'Sos ~ cara-cara individu, kelompok saling berinteraksi, bertemu dan membangun sistem hubungan sosial di tengah perubahan pola kehidupan.',
  },
  {
    kata: 'Proteksi',
    definisi:
      'Eko ~ kebijakan untuk melindungi produk dalam negeri. Sos ~ fungsi perlindungan yang diberikan oleh keluarga. ',
  },
  {
    kata: 'Pulau',
    definisi: 'Geo ~ daratan luas yang dikelilingi atau dipisahkan laut.',
  },
  {
    kata: 'Punden Berundak',
    definisi:
      'Sej ~ bangunan bertingkat atau besusun yang menyerupai candi yang dipergunakan untuk tempat pemujaan roh nenek moyang.',
  },
];

class HurufP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: DATA,
    };
  }

  render() {
    return (
      <View style={{backgroundColor: '#18AEC7', flex: 1}}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.textheader}>
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF P</Text>
            <Text style={styles.h2}>ILMU PENGETAHUAN SOSIAL</Text>
          </View>
          <Image source={Icon} style={{width: 100, height: 100}} />
        </View>

        {/* Konten */}
        <View style={styles.content}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.flatview}
                onPress={() =>
                  this.props.navigation.navigate('Detail', {
                    kata: item.kata,
                    definisi: item.definisi,
                  })
                }
              >
                <Text style={styles.textcontent}>{item.kata}</Text>
                <Image
                  source={Arrow}
                  style={{width: 15, height: 15, marginRight: 5}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

export default HurufP;

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
  flatview: {
    borderWidth: 2,
    borderColor: '#464646',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18AEC7',
    marginTop: 15,
    padding: 5,
    borderRadius: 20,
  },
  textcontent: {
    fontSize: 30,
    color: 'white',
    flex: 1,
    paddingLeft: 10,
  },
});
