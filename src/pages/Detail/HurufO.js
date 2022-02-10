import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Oldefo',
    definisi:
      'Sej ~ singkatan dari The Old Established Forces yang merupakan sebutan untuk negara-negara barat yang sudah mapan ekonominya, khususnya negara kapitalis.',
  },
  {
    kata: 'Omzet',
    definisi:
      'Eko ~ jumlah nilai total penjualan barang atau jasa dalam kurun waktu tertentu dan belum dikurangi dengan modal atau harga pokok.',
  },
  {
    kata: 'Orde Baru',
    definisi:
      'Sej ~ sebutan bagi masa pemerintahan Presiden Soeharto di Indonesia tahun 1966-1998.',
  },
  {
    kata: 'Organisasi',
    definisi:
      'Eko ~ bentuk persekutuan antara dua orang atau lebih yang bekerja secara bersama serta terikat secara formal dalam rangka mencapai tujuan yang telah ditentukan. Geo ~ tempat atau wadah bagi orang-orang untuk berkumpul, bekerja sama secara rasional dan sistematis, terencana, terpimpin dan terkendali, dalam memanfaatkan sumber daya, sarana-prasarana, data dan sebagainya yang digunakan untuk mencapai tujuan bersama. Sej ~ suatu kelompok orang dalam suatu wadah untuk tujuan bersama. Sos ~ dilihat sebagai suatu tindakan, institusi, sistem, pola interaksi, dan aturan yang dilakukan individu maupun kelompok dalam masyarakat yang bekerja sesuai fungsinya masing-masing.',
  },
];

class HurufO extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF O</Text>
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

export default HurufO;

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
