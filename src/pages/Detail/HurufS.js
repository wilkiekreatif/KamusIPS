import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Saham ',
    definisi:
      'Eko ~ surat berharga tanda turut serta menjadi pemilik perusahaan.',
  },
  {
    kata: 'Salju',
    definisi:
      'Geo ~ air yang jatuh dari awan yang telah membeku padat dan jatuh seperti hujan.',
  },
  {
    kata: 'Samudra ',
    definisi:
      'Geo ~ Laut yang luas dan merupakan massa air asin yang sambung -menyambung meliputi permukaan bumi yang dibatasi  oleh benua ataupun kepulauan yang besar. Geo ~ penampakan muka bumi yang berupa perairan yang sangat luas.',
  },
  {
    kata: 'Sarkofagus',
    definisi:
      'Sej ~ bangunan berupa kubur batu yang berbentuk seperti lesung dan diberi tutup.',
  },
  {
    kata: 'Sedimen',
    definisi:
      'Geo ~ material atau pecahan batuan, mineral, dan material organik yang melayang-layang di dalam air, udara, maupun yang dikumpulkan di dasar sungai atau laut oleh pembawa atau perantara alami lainnya. ',
  },
  {
    kata: 'Sejarah',
    definisi:
      'Umum ~ ilmu yang mempelajari segala peristiwa atau kejadian yang telah terjadi pada masa lampau dalam kehidupan umat manusia.',
  },
  {
    kata: 'Sekularisasi',
    definisi:
      'Sos ~ hal-hal yang mengutamakan kehidupan duniawi dan tidak didasarkan pada ajaran agama.',
  },
  {
    kata: 'Semenanjung',
    definisi: 'Geo ~ wilayah daratan yang sangat luas yang menjorok ke laut.',
  },
  {
    kata: 'Separatisme',
    definisi:
      'Sos ~ paham atau gerakan untuk memisahkan diri (mendirikan negara sendiri). ',
  },
  {
    kata: 'Sidang',
    definisi:
      'Sej ~ forum formal suatu organisasi untuk membahas masalah tertentu dalam upaya menghasilkan keputusan yang akan menjadi sebuah ketetapan. ',
  },
  {
    kata: 'Simpati',
    definisi: 'Sos ~ perasaan atau emosi ketertarikan terhadap pihak lain.',
  },
  {
    kata: 'Sinkretisme',
    definisi:
      'Sej ~ bercampurnya praktik-praktik dan kepercayaan-kepercayaan  dari sebuah agama dengan agama lain sehingga menciptakan tradisi yang baru dan berbeda. Sos ~ proses perpaduan antara dua atau lebih suatu agama atau kepercayaan.',
  },
  {
    kata: 'Sirkum',
    definisi:
      'Geo ~ rangkaian pegunungan yang memanjang hingga ribuan kilometer.',
  },
  {
    kata: 'Skala Peta ',
    definisi:
      'Geo ~ perbandingan antara jarak di peta dengan jarak horizontal di lapangan.',
  },
  {
    kata: 'Social Climbing',
    definisi:
      'Sos ~  ketika suatu individu atau kelompok yang berpindah dari status yang lebih rendah ke tingkatan yang lebih tinggi. Atau disebut juga mobilitas vertikal naik.',
  },
  {
    kata: 'Social Sinking',
    definisi:
      'Sos ~  perpindahan status sosial individu atau kelompok dari tingkatan yang tinggi pindah ke derajat atau tingkatan yang lebih rendah. Disebut juga dengan mobilitas vertikal turun. ',
  },
  {kata: 'Solidaritas', definisi: 'Sos ~ sifat atau rasa sekawan, senasib.'},
  {
    kata: 'Sosialisasi Primer',
    definisi:
      'Sos ~ sosialisasi pertama pada tahap awal perkembangan individu, seperti keluarga, kerabat, lingkungan sekitar termasuk teman bermain.',
  },
  {
    kata: 'Sosialisasi Sekunder',
    definisi:
      'Sos ~ sosialisasi tahap lanjut, terjadi ketika individu sudah melakukan kontak dan interaksi dengan budaya dan kebiasaan di luar komunitasnya, dan dilakukan pada lingkup masyarakat yang lebih luas.',
  },
  {
    kata: 'Sosialisasi',
    definisi:
      'Eko ~ suatu proses bagaimana memperkenalkan suatu sistem pada seseorang. Sos ~ proses penanaman nilai dan norma pada seseorang sedari individu lahir hingga meninggal dunia. ',
  },
  {
    kata: 'Sosiologi',
    definisi:
      'Umum ~ berasal dari  bahasa latin yaitu “socius” yang berarti kawan/masyarakat dan “logos” yang berarti ilmu. Sehingga sosiologi merupakan ilmu yang membahas berbagai aspek dalam masyarakat serta pengaruhnya bagi kehidupan manusia. ',
  },
  {
    kata: 'Spesies',
    definisi:
      'Geo ~ jenis atau kelompok makhluk hidup yang sejenis dan serupa dan dapat melakukan perkawinan. ',
  },
  {
    kata: 'Stabilisasi',
    definisi:
      'Eko ~ suatu kondisi di mana mekanisme ekonomi dalam penetapan harga, alokasi dana, dan pengelolaan risiko berfungsi secara baik. Geo ~  kemampuan yang dimiliki suatu organisme, populasi, komunitas, atau ekosistem untuk menghidupi dirinya sendiri atau meredam sejumlah gangguan maupun tekanan dari luar. Sos ~ usaha atau upaya membuat stabil, penstabilan.',
  },
  {
    kata: 'Stalemate',
    definisi:
      'Sos ~ adanya kekuatan seimbang dari kedua pihak yang sedang bertikai, dan berhenti pada titik tertentu.',
  },
  {
    kata: 'Statis',
    definisi:
      ' Eko ~ tidak mengalami perubahan dan kaku. Geo ~ diam atau tergenang. Sej ~ tidak mau menyesuaiakan diri dengan keadaan zaman. Sos ~ tetap dan tidak berubah.',
  },
  {
    kata: 'Status Sosial',
    definisi: 'Sos ~  kedudukan dan peran seseorang di dalam masyarakat.',
  },
  {
    kata: 'Stratifikasi',
    definisi:
      'Sos ~ penggolongan atau pengelompokkan masyarakat secara bertingkat (vertikal) pada kelas-kelas tertentu.',
  },
  {
    kata: 'Struktur Sosial',
    definisi:
      'Sos ~ bagian-bagian  atau unsur-unsur dalam masyarakat yang tersusun secara teratur guna membentuk suatu kesatuan yang sistemik.',
  },
  {
    kata: 'Stupa',
    definisi:
      'Sej ~ bangunan yang berkaiatan dengan agama Budha yang berbentuk mangkuk terbalik, terdapat bagian berbentuk persegi empat atau persegi delapan membentuk tongkat di atasnya.',
  },
  {kata: 'Subsidensi Massa Udara', definisi: 'Geo ~ turunnya massa udara.'},
  {
    kata: 'Sugesti',
    definisi:
      'Sos ~ sikap, pandangan, dan pendapat orang lain yang diterima tanpa dipikir ulang.',
  },
  {
    kata: 'Suku Bangsa',
    definisi:
      'Geo ~ didasarkan kepada adanya persamaan kebudayaan dalam kelompok masyarakat tersebut. Sej ~ penggolongan manusia berdasarkan kepercayaan, nilai, kebiasaan, adat istiadat, norma, bahasa, sejarah, geografis, dan hubungan kekerabatan. Sos ~ atau suku bangsa adalah suatu golongan atau kelompok manusia yang angota-anggotanya mengidentifikasikan dirinya dengan sesamanya, biasanya berdasarkan garis keturunan yang dianggap sama. ',
  },
  {
    kata: 'Sultan',
    definisi:
      'Sej ~ gelar yang digunakan dalam dunia muslim yang merujuk pada suatu kekuasaan. Penguasa dari sebuah negara muslim. Sering disebut raja atau baginda.',
  },
  {kata: 'Suluk', definisi: 'Sej ~ kitab berisi ajaran-ajaran tasawuf.'},
  {
    kata: 'Sumber Daya Alam',
    definisi:
      'Eko ~ semua benda hidup atau mati yang berguna dan bernilai dalam kondisi di mana manusia menemukannya. Geo ~ segala sesuatu yang berasal dari alam biotik maupun abiotic yang secara keseluruhan membentuk kesatuan ekosistem. Sej ~ semua benda hidup atau mati yang secara alami dikaitkan kegunaannya bagi manusia. Sos ~ segala sesuatu yang berasal dari alam yang dapat digunakan untuk memenuhi kebutuhan hidup manusia.',
  },
  {
    kata: 'Sumber Daya Geologi',
    definisi:
      'Geo ~   segala sumber daya alam non-hayati yang terbentuk melalui proses geologi meliputi sumber daya mineral, sumber daya energi, dan sumber daya air.',
  },
  {
    kata: 'Sumber Daya Hayati',
    definisi:
      'Geo ~ sumber daya berupa biotik atau makhluk hidup, hewan, dan tumbuhan.',
  },
  {
    kata: 'Sumber Daya Manusia',
    definisi:
      'Eko ~ individu yang bekerja dan menjadi anggota suatu perusahaan atau institusi yang biasa disebut pegawai, buruh, karyawan, pekerja, tenaga kerja, dan lain sebagainya. Geo ~ penduduk suatu negara yang sudah memasuki usia angkatan kerja, baik yang belum bekerja maupun yang sudah bekerja. Sej ~ perkembangan pola pikir dan potensi pada diri manusia dari pertengahan abad ke-18 sampai saat ini. Sos ~ individu yang bekerja sebagai penggerak organisasi, baik institusi mapun perusahaan dan berfungsi sebagai asset yang harus dilatih dan dikembangkan kemampuannya.',
  },
  {
    kata: 'Sumber Daya Mineral',
    definisi:
      'Geo ~ bahan alam berupa batuan/mineral yang mengandung cukup unsur yang memiliki nilai ekonomis sehingga memungkinkan adanya penambangan atau penggalian. ',
  },
  {
    kata: 'Sumber Daya Non-Hayati',
    definisi:
      'Geo ~ sumber daya alam berupa abiotik atau benda-benda mati seperti, tanah, angin, dan air. ',
  },
  {
    kata: 'Sumber Daya',
    definisi:
      'Eko ~ faktor-faktor produksi yang dibutuhkan dalam setiap proses produksi. Geo ~ sesuatu yang memiliki nilai guna danpotensi bagi kehidupan.',
  },
  {
    kata: 'Supersemar',
    definisi:
      'Sej ~ singkatan dari Surat Perintah Sebelas Maret. Merupakan surat pemberian mandat dari Presiden Soekarno kepada Letjen Soeharto untuk memulihkan keadaan dan kewibawaan pemerintah. ',
  },
  {kata: 'Swasembada', definisi: 'Eko ~ usaha mencukupi kebutuhan diri.'},
  {
    kata: 'Syair',
    definisi:
      'Sej ~ puisi lama pada setiap baitnya terdiri atas empat baris yang berakhir dengan bunyi yang sama.',
  },
];

class HurufS extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF S</Text>
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

export default HurufS;

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
