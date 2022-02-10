import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Mainland',
    definisi:
      'Geo ~ Negara Asia Tenggara yang letaknya menyatu dengan Benua Asia, seperti Thailand, Myanmar, Laos, Kamboja, Vietnam, dan Malaysia bagian Barat.',
  },
  {
    kata: 'Majemuk',
    definisi:
      'Geo ~ keberagaman suatu wilayah yang diakibatkan oleh faktor geografi dan sosial. Sos ~ sebuah ideologi yang yang menekankan pengakuan dan penghargaan pada kesederajatan perbedaan kebudayaan. ',
  },
  {
    kata: 'Makelar ',
    definisi:
      'Eko ~ orang atau badan yang melakukan kegiatan jual beli barang yang bertindak atas nama orang lain atau atas nama yang menyuruhnya (prinsipalnya), bukan atas namanya sendiri.',
  },
  {
    kata: 'Manufaktur',
    definisi:
      'Eko ~ suatu cabang industri yang mengaplikasikan mesin, peralatan, dan tenaga kerja dan suatu medium proses untuk mengubah bahan mentah menjadi barang jadi untuk dijual.',
  },
  {
    kata: 'Manusia',
    definisi:
      'Eko ~ disebut sebagai makhluk ekonomi , karena manusia selalu memikirkan upaya untuk memenuhi kebutuhannya sesuai dengan prinsip-prinsip ekonomi. Geo ~ makhluk yang berakal budi. Sej ~ makhluk pengendali alam dan lingkungan. Sos ~ makhluk yang berhubungan secara timbal-balik dengan manusia lain.',
  },
  {
    kata: 'Maritim',
    definisi:
      'Eko ~ seluruh kegiatan ekonomi yang terjadi baik di pesisir laut, dan wilayah sekitar laut. Termasuk di dalamnya industri kapal, pelabuhan, pelelangan ikan, dan juga kegiatan pariwisata atau pantai. Geo ~ negara yang di kelilingi laut atau perairan yang luas, yang berhubungan dengan pelayaran dan perdagangan laut. Sej ~ pembelajaran aktivitas manusia di laut. Sos ~ hubungan masyarakat dan budaya manusia dengan lautan dan lingkungan laut serta proses sosial terkait.',
  },
  {
    kata: 'Masa Reformasi',
    definisi:
      'Sej ~ masa setelah berakhirnya pemerintahan orde baru, Soeharto mengundurkan diri dari Presiden dan digantikan oleh Wakil Presiden B.J Habibie, masa reformasi di mulai sejak 12 Mei 1988 dan masih berlanjut hingga saat ini. ',
  },
  {
    kata: 'Masalah Sosial',
    definisi:
      'Sos ~   kondisi di mana ketidaksesuaian antara harapan dan kenyataan dalam masyarakat, atau suatu kondisi yang tidak sesuai dengan aturan dan norma yang berlaku dalam masyarakat.',
  },
  {
    kata: 'Mata Pencaharian',
    definisi:
      'Geo ~ pekerjaan yang menjadi pokok penghidupan yang dikerjakan untuk memenuhi biaya sehari-hari. ',
  },
  {
    kata: 'MEA',
    definisi:
      'Eko ~ singkatan dari Masyarakat Ekonomi ASEAN yang merupakan salah satuwujud kerjasama ekonomi ASEAN dalam menghadapi perdagangan bebas antarnegara di ASEAN.',
  },
  {
    kata: 'Mediasi',
    definisi:
      'Sos ~ penyelesaian perselisihan dengan menggunakan pihak ketiga yang bersifat netral. Ing  mediation.',
  },
  {kata: 'Megalitikum', definisi: 'Sej ~ zaman batu besar.'},
  {
    kata: 'Meghanthropus Palaeojavanicus',
    definisi:
      'Sej ~ manusia yang paling primitif, makhluk tertua yang pernah hidup di Pulau Jawa. ',
  },
  {
    kata: 'Meghanthropus Palaeojavanicus',
    definisi:
      'Sej ~ manusia yang paling primitif, makhluk tertua yang pernah hidup di Pulau Jawa. ',
  },
  {
    kata: 'Meramu',
    definisi:
      'Sej ~ masa di mana manusia belum mengenal bercocok tanam, masa di mana manusia mengumpulkan bahan makanan dengan cara mengumpulkan buah-buahan liar, akar-akar tumbuhan, daun-daunan, dan sumber daya lainnya yang bisa dimakan.',
  },
  {kata: 'Mesolitikum', definisi: 'Sej ~ zaman batu tengah.'},
  {
    kata: 'Migran Internal',
    definisi: 'Geo ~ pekerja yang bermigrasi dalam kawasan satu negara.',
  },
  {
    kata: 'Migran Internasional',
    definisi:
      'Geo ~ perseorangan yang bermigrasi ke luar negeri untuk keperluan bekerja. ',
  },
  {
    kata: 'Migrasi',
    definisi:
      'Geo ~  perpindahan penduduk dari suatu wilayah ke wilayah lain, dengan tujuan menetap. ',
  },
  {
    kata: 'Milenarisme',
    definisi:
      'Sej ~ suatu keyakinan oleh suatu kelompok atau gerakan keagamaan, sosial atau politik, tentang suatu transformasi besar dalam masyarakat dan setelah itu akan berubah ke arah yang positif. Sos ~ salah satu bentuk kebangkitan yang berusaha mengangkat golongan masyarakat bawah yang tertindas dan telah lama menderita dalam kedudukan sosial yang rendah.',
  },
  {
    kata: 'Minseifu',
    definisi:
      'Sej ~ daerah yang diperintah oleh Angkatan Laut pada masa pendudukan Jepang.',
  },
  {
    kata: 'Mobilitas Antargenerasi',
    definisi:
      'Sos ~  mobilitas yang terjadi pada dua generasi atau lebih yang ditandai dengan adanya perubahan dalam taraf hidup pada suatu generasi atau keturunan. ',
  },
  {
    kata: 'Mobilitas Geografis',
    definisi:
      'Sos ~  perpindahan individu atau sekelompok orang dari suatu daerah ke daerah lainnya. ',
  },
  {
    kata: 'Mobilitas Horizontal',
    definisi:
      'Sos ~ perpindahan status sosial seseorang maupun sekelompok orang pada lapisan sosial yang sama.',
  },
  {
    kata: 'Mobilitas Intergenerasi',
    definisi:
      'Sos ~  mobilitas atau perpindahan status sosial yang melibatkan lebih dari satu generasi atau di antara beberapa generasi.',
  },
  {
    kata: 'Mobilitas Intragenerasi',
    definisi:
      'Sos ~  mobilitas atau perpindahan status sosial yang terjadi pada individu atau sekelompok orang dalam satu generasi yang sama dan dapat naik turun.  ',
  },
  {
    kata: 'Mobilitas Sosial',
    definisi:
      'Sos ~ perpindahan atau perubahan status dan peran sosial individu atau kelompok sosial naik ataupun turun.',
  },
  {
    kata: 'Mobilitas Vertikal',
    definisi:
      'Sos ~  perpindahan status sosial seseorang maupun sekelompok orang pada lapisan sosial  yang berbeda atau tidak sederajat.',
  },
  {
    kata: 'Mobilitas',
    definisi:
      'Geo ~ perpindahan penduduk dari suatu tempat ke tempat lainnya yang bersifat sementara maupun permanen. Sos ~   perpindahan status sosial sekelompok orang atau individu baik secara vertikal (naik) maupun horizontal (turun).',
  },
  {
    kata: 'Modernisasi',
    definisi:
      'Eko ~ suatu proses trans-formasi dari suatu perubahan ke arah yang lebih maju atau meningkat di berbagai aspek dalam kehidupan masyarakat. Sos ~ usaha untuk hidup sesuai dengan zaman dan perkembangan dunia sekarang, meliputi sistem nilai, pola berpikir, bertindak, serta perkembangan teknologi.',
  },
  {
    kata: 'Monopoli',
    definisi:
      'Sej ~ penguasaan oleh satu pihak terhadap harga perdagangan lokal maupun internasional.',
  },
  {
    kata: 'Monoteisme',
    definisi:
      'Sej ~ adanya kepercayaan kepada satu tuhan atau dewa yang berkuasa. Sos ~ paham yang mengungkapkan cuma ada satu Tuhan untuk seluruh alam. ',
  },
  {kata: 'Morfologi', definisi: 'Geo ~ bentuk permukaan bumi.'},
  {
    kata: 'Motif',
    definisi:
      'Eko ~ faktor pendorong seseorang untuk melakukan tindakan ekonomi. Sos ~ Gagasan atau tujuan seseorang untuk melakukan suatu tindakan.',
  },
  {
    kata: 'Motivasi',
    definisi:
      'Sos ~ dorongan dari dalam diri seseorang untuk melakukan  tindakan.',
  },
  {
    kata: 'Multilateral',
    definisi:
      'Eko ~ kerja sama yang mengikutsertakan lebih dari dua negara dan tidak terikat oleh wilayah atau kawasan tertentu.',
  },
  {
    kata: 'Musim',
    definisi:
      'Geo ~ pembagian waktu dalam setahun yang ditentukan oleh adanya perubahan cuaca, ekologi, dan durasi penyinaran matahari. ',
  },
];

class HurufM extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF M</Text>
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

export default HurufM;

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
