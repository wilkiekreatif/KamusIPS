import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Vacuum of Power',
    definisi:
      'Sej ~ kekosongan kekuasaan, saat Jepang yang berkuasa di Indonesia menyerah tanpa syarat kepada Sekutu, sementara Sekutu belum datang di Indonesia.',
  },
  {
    kata: 'Valuta Asing',
    definisi:
      'Eko ~ mata uang yang digunakan sebagai alat pembayaranpada transaksi perdagangan internasional.',
  },
  {
    kata: 'Vandalisme',
    definisi:
      'Sos ~ disebut dengan aksi tawuran yang dilakukan remaja. Tindakan mencoret, merusak fasilitas umum.',
  },
  {
    kata: 'Vegetasi',
    definisi: 'Geo ~ berbagai jenis tanaman yang tumbuh di suatu wilayah.',
  },
  {
    kata: 'VOC',
    definisi:
      'Sej ~ singkatan dari Vereenigde Oostindische Compangie merupakan persekutuan dagang asal Belanda yag memiliki monopoli untuk aktivitas perdagangan di Asia. Kongsi dagang terbesar di Nusantara untuk menyatukan perdagangan rempah-rempah dari wilayah timur dalan memperkokoh kedudukan Belanda di Indonesia. ',
  },
  {
    kata: 'Volksraad',
    definisi:
      'Sej ~  lembaga perwakilan rakyat bagi pemerintahan Hindia Belanda.  ',
  },
  {
    kata: 'Vulkanisme ',
    definisi:
      'Geo ~ peristiwa yang berhubungan dengan keluarnya magma dari dalam bumi ke permukaan bumi.',
  },
];

class HurufV extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF V</Text>
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

export default HurufV;

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
