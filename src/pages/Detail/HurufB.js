import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Babad',
    definisi: 'Sej ~ dongeng yang sengaja diubah sebagai cerita sejarah.',
  },
  {
    kata: 'Badai',
    definisi:
      'Geo ~ fenomena siklon tropis berupa cuaca ekstrem diikuti hujan es, badai salju, serta badai pasir dan debu.',
  },
  {
    kata: 'Bandung Lautan Api',
    definisi:
      'Sej ~ peristiwa kebakaran besar yang terjadi di Kota Bandung,  Jawa Barat pada tanggal 23 Maret 1946. Sengaja dibakar oleh tentara keamanan rakyat dan rakyat setempat dengan tujuan agar tentara sekutu tidak dapat menggunakan kota Bandung sebagai pos-pos militer. ',
  },
  {
    kata: 'Bargaining',
    definisi:
      'Sos ~ disebut juga dengan tawar-menawar. Perundingan atau negosiasi mengenai pertukaran barang dan jasa antara dua pihak atau lebih.',
  },
  {kata: 'Barometer', definisi: 'Geo ~ alat untuk mengukur tekanan udara.'},
  {
    kata: 'Barter',
    definisi:
      'Sej ~ kegiatan perdagangan dengan cara menukar barang dengan barang tanpa perantara uang. Sos ~ kegiatan tukar-menukar barang tanpa melibatkkan uang sebagai alat transaksi, barter juga bisa menggunakan jasa selama bisa dianggap sebagai alat tukar.',
  },
  {
    kata: 'Batuan Beku',
    definisi:
      'Geo ~ jenis bantuan yang terbentuk dari magma yang mendingin dan mengeras. ',
  },
  {
    kata: 'Benua',
    definisi:
      'Geo ~ hamparan daratan yang sangat luas yang berada dipermukaan bumi. ',
  },
  {
    kata: 'Berburu',
    definisi:
      'Sej ~ praktik mengejar, menangkap, atau membunuh hewan liar untuk dimakan, perdagangan, atau memanfaatkan hasil produknya.',
  },
  {
    kata: 'Bercocok Tanam',
    definisi:
      'Sej ~ kelanjutan dari masa berburu dan meramu ditandai dengan mulai menetapnya manusia praaksara disuatu tempat, ketika manusia mulai memenuhi kebutuhan hidup dengan cara membuka lahan di hutan untuk dijadikan ladang.',
  },
  {
    kata: 'BIG',
    definisi:
      'Geo ~ singkatan dari Badan Informasi Geospasial, yang merupakan lembaga pemerintah nonkementerian Indonesia yang bertugas melaksanakan tugas pemerintahan dibidang informasi geospasial. ',
  },
  {
    kata: 'Bilateral',
    definisi:
      'Eko ~ kerjasama antara dua pihak atau dua negara saja. Sos ~  sistem kekerabatan berdasarkan garis keturunan dari pihak ayah dan ibu.',
  },
  {
    kata: 'Biotik',
    definisi:
      'Geo ~ segala sesuatu yang bernyawa atau makhluk hidup. Konsep ini juga digunakan dalam ilmu biologi, diartikan sebagai semua makhluk hidup yang ada di bumi yang dibagi ke dalam tiga kelompok yaitu produsen, konsumen, dan decomposer atau pengurai.',
  },
  {
    kata: 'Blokade',
    definisi:
      'Eko~ menutup sektor perdagangan Indonesia ke beberapa kawasan, wilayah, daerah, maupun suatu negara. Sej ~  pengepungan atau penutupan suatu daerah atau negara sehingga orang, barang, kapal, dan sebagainya tidak dapat keluar masuk dengan bebas.',
  },
  {
    kata: 'BMKG',
    definisi:
      'Geo ~ merupakan singkatan dari Badan Meteorologi, Klimatologi, dan Geofisika lembaga pemerintah nondepartemen Indonesia yang mempunyai tugas melaksanakan tugas pemerintahan dibidang meteorologi, klimatologi, dan geofisika. ',
  },
  {
    kata: 'Bonus Demografi ',
    definisi:
      'Sos ~ bonus yang dinikmati suatu negara sebagai akibat dari besarnya proporsi penduduk produktif (rentang usia 15-64 tahun).',
  },
  {
    kata: 'BPUPKI',
    definisi:
      'Sej ~ singkatan dari Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia. Dibentuk dalam usaha mempersiapakan kemerdekaan Inodnesia yang diketuai oleh Dr. K.R.T Radjiman Wedyodiningrat.',
  },
  {
    kata: 'Budaya',
    definisi:
      'Eko ~ perilaku individu datau kelompok dalam melakukan optimisasi untuk mencapai keseimbangan ekonomi. Geo ~  berasal dari kata  “colore” yang berarti mengolah atau mengerjakan yang kemudian berubah menjadi kata “culture” diartikan sebagai segala daya dan kegiatan manusia untuk mengolah dan merubah alam. Sej ~ berasal dari bahasa Sanskerta yaitu buddhayah, yang merupakan bentuk jamak dari buddhi (budia atau akal), diartikan sebagai hal-hal yang berkaitan dengan budi dan akal manusia. Sos ~  hasil cipta, rasa, dan karsa manusia yang mencakup pengetahuan, ide/gagasan, kepercayaan, kesenian, moral, hukum adat-istiadat, dan kemampuan.',
  },
  {
    kata: 'BUMN',
    definisi:
      'Eko ~ singkatan dari Badan UsahaMilik Negara, badan usaha yang modalnya dimiliki oleh negara (pemerintah) baik seluruhnya maupun sebagian.',
  },
  {
    kata: 'Buruh Migran',
    definisi:
      'Geo ~ orang yang bermigrasi atau berpindah dari wilayah kelahiran/lokasi tinggal yang bersifat tetap untuk keperluan bekerja. ',
  },
];

class HurufB extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF B</Text>
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

export default HurufB;

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
