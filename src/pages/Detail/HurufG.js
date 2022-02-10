import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Gapura',
    definisi: 'Sej ~ bangunan berupa pintu gerbang yang meyerupai candi. ',
  },
  {
    kata: 'Garis Kontur ',
    definisi:
      'Geo ~ garis-garis pada peta yang mempunyai nilai ketinggian untuk menggambarkan bentuk permukaan bumi.',
  },
  {
    kata: 'Garis Lintang ',
    definisi:
      'Geo ~ garis khayal paralel yang melintang horizontal dan sejajar dengan equator.',
  },
  {
    kata: 'Garis Meridian ',
    definisi:
      'Geo ~ garis khayal yang mengubungkan kutub utara dengan kutub selatan.',
  },
  {kata: 'Garis Pantai ', definisi: 'Geo ~ batas air laut dengan darat.'},
  {
    kata: 'Garis Van Mook ',
    definisi:
      'Sej ~ garis khayal yang menghubungkan dua daerah terdepan yang dikuasai Belanda sebagai hasil dari agresi militernya.',
  },
  {
    kata: 'Garis Wallace',
    definisi:
      'Geo ~ garis yang memisahkan wilayah geografi hewan Asia dan Australia.',
  },
  {
    kata: 'Garis Weber',
    definisi:
      'Geo ~ garis yang memisahkan fauna Indonesia Timur dan Indonesia Tengah.',
  },
  {
    kata: 'Gempa bumi ',
    definisi:
      'Geo ~ getaran bumi akibat adanya pelepasan energi yang besar secara mendadak.',
  },
  {
    kata: 'Geografi',
    definisi:
      'Umum ~ suatu telaah mengenai bumi sebagai tempat hidup manusia, hewan, dan tumbuhan.  Ilmu yang mempelajari hubungan-hubungan yang terbentuk antara kehidupan dengan lingkungan.',
  },
  {
    kata: 'Geohidrologi ',
    definisi:
      'Geo ~ cabang hidrologi yang mempelajari tentang air yang terdapat di bawah permukaan tanah.',
  },
  {
    kata: 'Geologi',
    definisi:
      'Geo ~ ilmu pengetahuan tentang bumi yang menyelidiki lapisan-lapisan batuan yang ada dalam kerak  bumi. ',
  },
  {
    kata: 'Globalisasi',
    definisi:
      'Eko ~ suatu proses masuk ke lingkungan dunia dan peningkatan integrasi ekonomi dan masuknya ilmu ekonomi ke dalam suatu negara. Geo ~ suatu proses tatanan mendunia dan tidak mengenal batas wilayah. Sos ~  proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek-aspek kebudayaan lainnya. ',
  },
  {kata: 'Globe ', definisi: 'Geo ~ model tiruan bola bumi.'},
  {
    kata: 'Glory',
    definisi:
      'Sej ~ kejayaan atau memperoleh wilayah jajahan untuk dikuasai melalui penjelajahan samudera. ',
  },
  {
    kata: 'Gold',
    definisi:
      'Sej ~ keinginan memperoleh kekayaan di wilayah-wilayah baru yang di temukan.',
  },
  {
    kata: 'Gospel',
    definisi:
      'Sej ~ istilah yang menggambarkan semangat Negara-Negara Eropa untuk menyebar ajaran Agama risten dan Katolik ke seluruh dunia.',
  },
  {
    kata: 'Gregariousness',
    definisi:
      'Sos ~ naluri manusia untuk selalu berinteraksi dan hidup dengan orang lain. ',
  },
  {
    kata: 'Gumuk pasir',
    definisi: 'Geo ~ gundukan bukit pasir yang terhembus oleh angin.',
  },
  {
    kata: 'Gurun',
    definisi:
      'Geo ~ daerah yang menerima curah hujan yang sedikit (kurang dari 250mm/tahun).',
  },
  {kata: 'Gyugun', definisi: 'Sej ~ Pembela Tanah Air untuk Sumatera.'},
];

class HurufG extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF G</Text>
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

export default HurufG;

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
