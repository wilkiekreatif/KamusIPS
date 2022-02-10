import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Faktor Produksi Pengusaha ',
    definisi:
      'Eko ~ kemampuan manusia untuk mengelola atau mengendalikan usaha untuk memperoleh laba yang besar (wajar).',
  },
  {
    kata: 'Faktor Produksi',
    definisi:
      'Eko ~ segala sesuatu yang digunakan untuk menghasilkan barang atau jasa dalam rangka menambah manfaat suatu barang atau jasa.',
  },
  {
    kata: 'Fasisme',
    definisi:
      'Sej ~ prinsip atau faham golongan nasionalisme ekstrim kanan yang menganjurkan pemerintahan otoriter.',
  },
  {kata: 'Fauna', definisi: 'Geo ~ segala macam jenis hewan di muka bumi.'},
  {
    kata: 'Federasi',
    definisi:
      'Sej ~ berasal dari bahasa Latin; foeduration yang artinya “perjanjian”. ',
  },
  {
    kata: 'Feodal',
    definisi:
      'Sos ~  sistem sosial atau politik yang memberikan kekuasaan yang besar kepada golongan bangsawan. ',
  },
  {
    kata: 'Firma',
    definisi:
      'Eko ~ perusahaan yang dibentuk oleh dua orang atau lebih dengan memakai satu nama.',
  },
  {kata: 'Flora', definisi: 'Geo ~ segala macam jenis tanaman di muka bumi.'},
  {
    kata: 'Fyord  ',
    definisi:
      'Geo ~ semacam teluk yang berasal dari lelehan gletser atau glacair yaitu tumpukan es yang sangat tebal dan berat.',
  },
];

class HurufF extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF F</Text>
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

export default HurufF;

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
