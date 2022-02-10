import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'KAA',
    definisi:
      'Sej ~ singkatan dari Konferensi Asia Afrika, yang diselenggrakan di Bandung tanggal 18-24 April 1955 yang menghasilkan sepuluh prinsip yang disebut Dasasila Bandung. ',
  },
  {
    kata: 'Kaligrafi',
    definisi:
      'Sej ~  seni menulis aksara indah berupa kata atau kalimat dengan menggunakan huruf Arab.',
  },
  {
    kata: 'Kasta',
    definisi:
      'Sej ~ penggolongan masyarakat berdasarkan tingkat derajatnya dalam agama Hindu.  Sos ~ stratifikasi tertutup, di mana seseorang tidak dapat mengubah status sosial mereka.',
  },
  {
    kata: 'KEA',
    definisi:
      'Eko ~ singkatan dari Komunitas Ekonomi ASEAN ialah komunitas yang dibentuk untuk bekerja sama dalam upaya memperdalam dan memperluas ekonomi terpadu di kawasan ASEAN dan di luar ASEAN. ',
  },
  {
    kata: 'Keberagaman',
    definisi:
      'Eko ~ perbedaan taraf dan tingkat ekonomi dalam masyarakat.  Geo ~ berbagai jenis yang dilihat dari sisi wilayah, makhluk hidup, tumbuhan, hewan, dan lingkungan. Sej ~ dilihat dari sisi budaya, ras, suku bangsa, adat istiadat, dan bahasa. Sos ~ perbedaan yang ditinjau dari sisi kelompok etnik dan budaya yang dimiliki.',
  },
  {
    kata: 'Kebiasaan',
    definisi:
      'Sos ~ terbentuk dari perilaku yang berulang-ulang. Ing:  folkways.',
  },
  {
    kata: 'Kebudayaan',
    definisi:
      'Sej ~ cara hidup yang berkembang dan dimiliki bersama oleh sebuah kelompok orang dan diwariskan dari generasi ke generasi. Sos ~ seluruh sistem gagasan, tindakan, dan hasil karya manusia dalam rangka kehidupan masyrakat yang dimiliki manusia dengan belajar.',
  },
  {
    kata: 'Kebutuhan Manusia',
    definisi:
      'Eko ~ semua barang ataupun jasa yang dibutuhkan manusia demi menunjang segala aktivitas dalam kehidupan sehari-hari.',
  },
  {
    kata: 'Kegiatan Ekonomi',
    definisi:
      'Eko ~ teridiri atas kegiatan produksi, distribusi, dan konsumsi.',
  },
  {
    kata: 'Kehutanan',
    definisi:
      'Eko ~ usaha pengelolaan komoditas hasil hutan, seperti kayu-kayu besar, rotan, damar, dan kemenyan. ',
  },
  {
    kata: 'Kelangkaan',
    definisi:
      'Eko ~ keterbatasnya sumber daya untuk memenuhi dan mencukupi kebutuhan manusia yang tidak terbatas. Ing:  Scarcity.',
  },
  {
    kata: 'Kemerdekaan',
    definisi:
      'Sej ~ keadaan berdiri sendiri, bebas, lepas, dan tidak terjajah lagi.',
  },
  {
    kata: 'Ken',
    definisi:
      'Sej ~ sistem pemerintahan daerah pada masa pendudukan Jepang setingkat kabupaten.',
  },
  {
    kata: 'Keraton',
    definisi: 'Sej ~ tempat tinggal sultan beserta keluarganya.',
  },
  {
    kata: 'Kerja Rodi',
    definisi:
      'Sej ~ sistem tanam paksa serta pemungutan pajak pada rakyat Indonesia dalam bentuk hasil produksi pertanian.',
  },
  {
    kata: 'Kerja Sama',
    definisi:
      'Eko ~ hubungan antar individu atau kelompok untuk mendapatkan hasil produksi, pemasaran, serta pembelian untuk mendapatkan keuntungan bersama. Sej ~ bentuk gotong-royong dalam melakukan sesuatu dan ingin mencapai sesuatu. Sos ~ usaha bersama antara perorangan atau kelompok untuk mencapai tujuan bersama, dengan menjalin kontak dan komunikasi antara individu dengan individu, individu dengan kelompok, dan antara kelompok untuk mencapai tujuan dan kepentingan tertentu.',
  },
  {
    kata: 'Kesenjangan Sosial',
    definisi:
      'Eko ~ perbedaan yang tajam antara satu kelompok dengan kelompok lain dalam bidang sosial dan ekonomi, terutama dalam hal pendapatan dan kesejahteraan hidup. Sos ~ suatu keadaan atau kondisi yang tidak seimbang dalam kehidupan sosial masyarakat baik individu maupun kelompok.',
  },
  {
    kata: 'Kesenjangan Sosial',
    definisi:
      'Sos ~ suatu keadaan yang tidak seimbang di masyarakat, ketidaksamarataan baik secara individu maupun kelompok pada pendapatan, nilai kekayaan harta,  ekonomi, imbalan, hukum, politik, dan kesempatan yang diperoleh pada setiap orang.',
  },
  {
    kata: 'Kewirausahaan',
    definisi:
      'Eko ~ kemampuan menangkap peluang dengan mengombinasikan sumber daya yang dimiliki agar bermanfaat bagi diri sendiri dan orang lain. ',
  },
  {
    kata: 'Khatulistiwa',
    definisi:
      'Geo ~ garis khayal keliling Bumi, terletak melintang pada nol derajat, yang membagi Bumi menjadi dua belahan yang sama yaitu belahan Bumi Utara dan belahan Bumi Selatan.',
  },
  {
    kata: 'KMB',
    definisi:
      'Sej ~  singkatan dari Konferensi Meja Bundar, merupakan pertemuan yang dilaksanakan di Den Haag, Belanda dari 23 Agustus- 2 November 1949. Konferensi ini merupakan titik terang bagi bangsa Indonesia dalam upaya mempertahankan kemerdekaannya. ',
  },
  {
    kata: 'KNIP',
    definisi:
      'Sej ~ singkatan dari Pembentukan Komite Nasional Indonesia Pusat. Tugas dan wewenang KNIP adalah menjalankan fungsi pengawasan dan berhak ikut serta dalam Garis-Garis Besar Haluan Negara (GBHN).  ',
  },
  {
    kata: 'Koalisi',
    definisi:
      'Sos ~ kerja sama dua kelompok sosial atau lebih untuk mencapai   tujuan yang sama dengan cara bergabung menjadi satu dengan cara yang kooperatif. Ing:  coalition.',
  },
  {
    kata: 'Koersi',
    definisi:
      'Sos ~ penyelesaian perselisihan dengan cara paksaan atau kekerasan untuk mencapai tujuan yang diinginkan. Ing:  coercion.',
  },
  {kata: 'Komoditas', definisi: 'Eko ~ barang ekspor atau impor.'},
  {
    kata: 'Kompetisi',
    definisi:
      'Sos ~ persaingan yang dilakukan individu atau kelompok dalam berbagai bidang kehidupan masyarakat.',
  },
  {
    kata: 'Komposisi Penduduk',
    definisi:
      'Geo ~ pengelompokkan penduduk berdasarkan kriteria tertentu, misalkan berdasarkan agama, jenis kelamin, ras, usia, status perkawinan, dan lain-lain. ',
  },
  {kata: 'Komprehensif', definisi: 'Umum ~ secara menyeluruh.'},
  {
    kata: 'Kompromi',
    definisi:
      'Sos ~ penyelesaian konflik dengan jalan damai atau saling mengurangi tuntutan sehingga diperoleh kesepakatan dalam penyelesaian masalah. Ing:  compromise.',
  },
  {kata: 'Komunikan', definisi: 'Sos ~ orang yang menerima pesan.'},
  {
    kata: 'Komunikasi',
    definisi:
      'Eko ~ proses transfer informasi dari satu orang ke orang lain di dalam dan diluar lingkungan bisnis. Geo ~ proses pengiriman dan penerimaan informasi atau pesan antara dua individu atau lebih dengan efektif sehingga dapat dipahami dengan mudah.  Sej ~ menyampaikan apa yang ada di dalam benak pikiran atau perasaan hati nurani kepada orang lain baik secara langsung maupun tidak langsung. Sos ~   proses penyampaian pesan, gagasan, pendapat, ide, dan harapan kepada penerima komunikasi.',
  },
  {kata: 'Komunikator ', definisi: 'Sos ~ orang yang menyampaikan pesan.'},
  {
    kata: 'Konferensi',
    definisi:
      'Eko ~ pertemuan yang diagendakan untuk menyamakan persepsi dan memperoleh kesepakatan dalam menanggulangi masalah perekonomian. Sej ~  rapat atau pertemuan untuk berunding atau bertukar pendapat mengenai suatu masalah yang dihadapi bersama.',
  },
  {
    kata: 'Konflik Destruktif',
    definisi:
      'Sos ~ konflik yang diakibatkan oleh perasaan tidak senang, benci atau dendam kepada seseorang atau sekelompok orang yang bersifat negatif dan merusak.',
  },
  {
    kata: 'Konflik Diagonal',
    definisi:
      'Sos ~ muncul karena ketidakmerataan pengelolaan sumber daya, keseluruh organisasi sehingga menimbulkan pertentangan.',
  },
  {
    kata: 'Konflik Horizontal',
    definisi:
      'Sos ~ konflik yang terjadi antarindividu atau kelompok yang mempunyai kelas sosial yang  sama atau sederajat. ',
  },
  {
    kata: 'Konflik Konstruktif',
    definisi:
      'Sos ~ konflik yang diakibatkan oleh perbedaan pemahaman atau pendapat antar individu atau kelompok, bersifat membangun dan positif.',
  },
  {
    kata: 'Konflik Sosial',
    definisi:
      'Sos ~ suatu keadaan pertentangan antara dua pihak atau lebih yang berusaha memenuhi tujuan dengan cara menentang pihak lawan. Seperti, percekcokkan, perselisihan, dan pertentangan.',
  },
  {
    kata: 'Konflik Vertikal',
    definisi:
      'Sos ~ konflik yang terjadi pada antargolongan atau tingkatan yang berbeda.',
  },
  {
    kata: 'Konflik',
    definisi:
      'Eko ~  benturan kekuatan dan kepentingan antar satu kelompok dengan kelompok lain dalam proses perebutan sumber-sumber kemasyarakatan. Sos ~ suatu proses sosial antara dua orang atau lebih, di mana salah satu pihak berusaha menyingkirkan pihak lain dengan menghancurkan, merusak, dan menyakiti pihak lawan. Sos ~ suatu keadaan pertentangan antara dua pihak atau lebih yang berusaha memenuhi tujuan dengan cara menentang pihak lawan. Seperti percekcokkan, perselisihan, dan pertentangan.',
  },
  {
    kata: 'Konfrontasi',
    definisi:
      'Sej ~ ketegangan yang terjadi pada tahun 1963 yang berubah menjadi perang antara Indonesia  dan Malaysia mengenai kepemilikan Sabah, Sarawak, dan Brunei.',
  },
  {
    kata: 'Konservasi',
    definisi:
      'Geo ~ pelestarian atau perlindungan dengan tujuan untuk mencegah kerusakan dan kemusnahan.',
  },
  {
    kata: 'Konsoliasi',
    definisi:
      'Sos ~ penyelesaian konflik dengan mempertemukan keinginan kedua pihak yang berselisih. Ing: conciliation.',
  },
  {
    kata: 'Konstituante',
    definisi:
      'Sej ~ lembaga negara yang ditugaskan untuk membentuk Undang-Undang Dasar atau konstitusi baru untuk menggantikan UUDS 1950. ',
  },
  {
    kata: 'Konsultasi',
    definisi: 'Umum ~ berbicara atau berdiskusi mengenai suatu hal.',
  },
  {
    kata: 'Konsumen',
    definisi:
      'Eko ~ setiap orang yang memakai, menggunakan, dan menghabiskan nilai guna suatu barang atau jasa.',
  },
  {
    kata: 'Konsumerisme',
    definisi:
      'Eko ~ membeli atau menggunakan barang atau jasa secara berlebihan tanpa mempertimbangkan kebutuhan. Sos~  gaya hidup yang menganggap bahwa kepuasan diri dengan mengkonsumsi atau membeli barang-barang mewah tanpa melihat nilai gunanya. ',
  },
  {
    kata: 'Konsumsi',
    definisi: 'Eko ~ tindakan menghabiskan nilai guna suatu barang dan jasa.',
  },
  {
    kata: 'Konsumtif ',
    definisi:
      'Geo ~ kegiatan individu mengkonsumsi suatu barang karena ransangan perasaan suka. Sos ~ merupakan gaya hidup di mana seseorang secara berlebihan membeli suatu barang atau jasa dengan mengutamakan keinginannya dari pada kebutuhannya dan secara ekonomi akan menyebabkan pemborosan.',
  },
  {
    kata: 'Kontak Primer',
    definisi: 'Sos ~ kontak secara langsung antar pihak yang terlibat.',
  },
  {
    kata: 'Kontak Sekunder',
    definisi:
      'Sos ~ kontak dilakukan adanya perantara antara pihak yang terlibat.',
  },
  {
    kata: 'Kontak Sosial',
    definisi:
      'Sos ~ tindakan yang diarahkan kepada orang lain dan mengharapkan respon serta ditandai dengan keunikan interaksi.',
  },
  {
    kata: 'Kontravensi',
    definisi:
      'Sos ~ perasaan tidak senang  dan tidak suka terhadap orang lain yang disembunyikan dan dapat  memicu pertikaian. Ing: contravention. ',
  },
  {
    kata: 'Kooperasi',
    definisi:
      'Sos ~ usaha bersama antara perorangan atau kelompok untuk mencapai tujuan bersama.',
  },
  {
    kata: 'Kooptasi',
    definisi:
      'Sos ~ kerja sama yang dilakukan dengan menyepakati pemimpin yang ditunjuk untuk mengendalikan jalannya organisasi atau kelompok. Ing:  cooptation. ',
  },
  {
    kata: 'Korupsi',
    definisi:
      'Eko ~ penyelewengan atau penyalahgunaan uang negara untuk kepentingan pribadi atau orang lain. Sos ~   suatu tingkah laku yang menyimpang dari tugas-tugas resmi jabatannya dalam negara, di mana memperoleh keuntungan status atau uang yang menyangkut diri pribadi atau perorangan, keluarga dekat, kelompok sendiri. ',
  },
  {
    kata: 'Kreativitas',
    definisi:
      'Eko ~ kemampuan menghasilkan ide atau barang yang baru bermanfaat bagi kehidupan manusia. Eko ~ kemampuan seseorang untuk melahirkan atau menciptakan sesuatu yang baru,baik berupa gagasan maupun karya nyata yang relatif berbeda dengan yang ada sebelumnya. Sos  ~ kemampuan memunculkan solusi atas berbagai macam permasalahan yang dialami individu ataupun kelompok. ',
  },
  {
    kata: 'Kriminalitas',
    definisi:
      'Sos ~ sebuah tindakan kejahatan dan melanggar hukum, perbuatan dan tindakan secara ekonomi, politik, sosial, dan psikologis sangat merugikan masyarakat dan melanggar norma yang berlaku.',
  },
  {
    kata: 'KTN',
    definisi:
      'Sej ~ singkatan dari Komisi Tiga Negara yaitu Australia (pilihan Indonesia), Belgia (pilihan Belanda), dan Amerika Serikat (pilihan Indonesia dan Belanda).',
  },
];

class HurufK extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF K</Text>
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

export default HurufK;

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
