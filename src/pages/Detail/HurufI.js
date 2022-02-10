import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Identifikasi',
    definisi:
      'Sos ~ kecenderungan atau keinginan seseorang menjadi sama dengan pihak lain. Meniru secara identik.',
  },
  {
    kata: 'Ideologi',
    definisi:
      'Umum ~ kumpulan konsep bersistem yang dijadikan asas pendapat (kejadian) yang memberikan arah dan tujuan untuk kelangsungan hidup.',
  },
  {
    kata: 'Iklim Kontenental',
    definisi:
      'Geo ~ memiliki ciri suhu musim dingin yang cukup untuk mengalami periode bersalju setiap tahun.',
  },
  {
    kata: 'Iklim Lautan ',
    definisi:
      'Geo ~ iklim yang biasa ditemukan sepanjang pantai barat di area garis lintang tengah dibeberapa benua di dunia dan di area tenggara Australia.',
  },
  {
    kata: 'Iklim Sub Tropis',
    definisi:
      'Geo ~ iklim yang memiliki empat musim yaitu, musim semi, panas, gugur, dan dingin.',
  },
  {
    kata: 'Iklim Tropis',
    definisi:
      'Geo ~ secara geografis berada di sekitar ekuator, yaitu berada pada wilayah di antara garis lintang 23,5 LU dan 23,5 LS. ',
  },
  {
    kata: 'Iklim',
    definisi:
      'Geo ~ kondisi cuaca di wilayah tertentu dan waktunya lama, daerahnya luas.',
  },
  {
    kata: 'Imigrasi',
    definisi:
      'Geo ~ berpindah atau menetap di wilayah atau negara baru atau pendatang dari daerah/negara lain. Sos ~  masuknya penduduk ke dalam suatu negara untuk menetap atau tinggal lama.',
  },
  {
    kata: 'Imitasi',
    definisi: 'Sos ~ kecenderung meniru sikap dan tindakan seseorang.',
  },
  {
    kata: 'Impor',
    definisi:
      'Eko ~ kegiatan membeli barang atau jasa dari negara lain yang tidak bisa diproduksi di dalam negeri. Eko ~ kegiatan memasukan atau membeli barang dari luar negeri ke dalam negeri. Geo ~ suatu aktivitas dalam membeli suatu barang atau jasa dari luar negeri. ',
  },
  {
    kata: 'Importer',
    definisi:
      'Eko ~ pihak atau orang yang melakukan pembelian barang dari luar negeri.',
  },
  {
    kata: 'Indische partij',
    definisi:
      'Sej ~ dalam bahasa Indonesia disebut Partai Hindia merupakan organisasi politik pertama yang memiliki tujuan untuk kemerdekaan Indonesia yang dibentuk oleh tiga serangkai (Douwes Dekker, Ki Hajar Dewantara, dan Tjipto Mangoenkoesoemo).',
  },
  {
    kata: 'Individualisme',
    definisi:
      'Sos ~  sikap mementingkan kebebabasan dan kebutuhan diri sendiri di atas kepentingan orang lain. Sos ~ paham yang menganggap diri sendiri lebih penting dari orang lain.',
  },
  {
    kata: 'Industri Manufaktur',
    definisi:
      'Eko ~ industri yang mengelolah barang mentah  atau setengah jadi menjadi barang jadi yang dapat digunakan langsung oleh konsumen.',
  },
  {
    kata: 'Inflasi',
    definisi:
      'Eko ~ kenaikan harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu. Sej ~  masalah pada masa awal kemerdekaan, di mana mata uang Jepang beredar secara tidak terkendali di Indonesia.',
  },
  {
    kata: 'Inset ',
    definisi: 'Geo ~ peta berukuran kecil yang disisipkan pada peta utama.',
  },
  {
    kata: 'Institusionalisasi ',
    definisi:
      'Sos ~ sistem norma yang mengatur praktik-praktik kehidupan yang bersifat khusus.',
  },
  {
    kata: 'Integrasi Sosial',
    definisi:
      'Sos~  penyatuan atau penyesuaian unsur-unsur yang berbeda dalam masyarakat sehingga dapat diterima dengan baik.',
  },
  {
    kata: 'Intensifikasi',
    definisi:
      'Eko ~ peningkatan hasil produksi tanpa menambah faktor-faktor produksi.',
  },
  {
    kata: 'Interaksi Antarruang',
    definisi:
      'Eko ~ hubungan timbal balik berupa perpindahan barang dan jasa, manusia, dan informasi. Geo ~ hubungan timbal balik yang terjadi antara satu ruang dengan ruang lainnya dipermukaan bumi. Termasuk interaksi antar negara.',
  },
  {
    kata: 'Interaksi Sosial',
    definisi:
      'Sos ~ sebuah perilaku antara dua orang atau lebih yang saling memberi arti, di mana antar individu saling menembus pikiran satu sama lain.',
  },
  {
    kata: 'Interaksi',
    definisi:
      'Sos ~ suatu tindakan, reaksi, perilaku, terhadap suatu ransangan. Juga merupakan jenis tindakan yang terjadi apabila dua objek atau lebih saling mempengaruhi atau memiliki efek satu sama lain.',
  },
  {
    kata: 'Internalisasi',
    definisi:
      'Sos ~  penyerapan nilai dan norma oleh masyarakat, menerima, dan menjalankan dengan penuh kesadaran.',
  },
  {
    kata: 'Invasi',
    definisi:
      'Sej ~ aksi militer di mana angkatan bersenjata  suatu negara memasuki daerah yang dikuasai oleh negara lain, dengan tujuan menguasai daerah tersebut dan menggulingkan pemerintahan yang berkuasa di daerah tersebut. Sos ~ masuknya unsur-unsur kebudayaan asing ke dalam kebudayaan setempat dengan cara peperangan (penaklukan) terhadap bangsa lain.',
  },
  {
    kata: 'Invention',
    definisi:
      'Sos ~  penemuan baru hasil kreasi manusia dan sudah diakui serta digunakan dikalangan masyarakat. ',
  },
  {
    kata: 'Inversi ',
    definisi:
      'Geo ~ Lapisan udara pada stratosfer dengan ketinggian 20-50 km dan terjadi pembalikan suhu udara dengan semakin panas semakin ke atas.',
  },
  {
    kata: 'Islamisasi',
    definisi: 'Sej ~ proses mengubah/konversi masyarakat menjadi islam.',
  },
  {
    kata: 'Isobar ',
    definisi:
      'Geo ~ garis yang menghubungkan tempat-tempat yang memiliki tekanan udara yang sama.',
  },
  {
    kata: 'Isohyet',
    definisi:
      'Geo ~ garis yang menghubungkan tempat-tempat yang memiliki curah hujan sama.',
  },
  {
    kata: 'Isoterm ',
    definisi:
      'Geo ~ garis yang menghubungkan tempat-tempat yang memiliki temperatur yang sama.',
  },
  {
    kata: 'Isotermal ',
    definisi:
      'Geo ~ lapisan udara pada stratosfer dengan ketinggian 11-20 Km yang mempunyai temperatur seragam.',
  },
];

class HurufI extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF I</Text>
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

export default HurufI;

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
