import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Candi',
    definisi:
      'Sej ~ sebuah bangunan keagamaan tempat ibadah peningggalan purbakala yang berasal dari peradaban Hindu-Budha.  Umum ~ bangunan kuno yang terbuat dari batu (sebagai tempat pemujaan,  penyimpanan abu jenazah raja-raja, pendeta-pendeta Hindu atau Budha pada zaman dulu).',
  },
  {
    kata: 'Cara',
    definisi: 'Sos ~ norma yang merujuk pada suatu perbuatan. Ing:  usage.',
  },
  {
    kata: 'Cateris Paribus',
    definisi:
      'Eko ~ faktor lain yang mempengaruhi jumlah barang dan jasa yang diminta tidak berubah.',
  },
  {
    kata: 'Coalition',
    definisi:
      'Sos ~ usaha dua organisasi atau lebih untuk mengejar tujuan yang sama dengan cara yang kooperatif. ',
  },
  {
    kata: 'Cooptation',
    definisi:
      'Sos ~ usaha ke arah kerjasama yang dilakukan dengan jalan menyepakati pemimpin yang akan ditunjuk untuk mengendalikan jalannya organisasi atau kelompok.',
  },
  {
    kata: 'Cuaca',
    definisi:
      'Geo ~  keadaan yang terjadi pada atmosfer, langit, atau udara di bumi dalam waktu yang singkat.',
  },
  {
    kata: 'Cultural Animosity',
    definisi:
      'Sos ~  kedua kebudayaan seimbang tarafnya sehingga saling tolak-menolak. ',
  },
  {
    kata: 'Cultural Lag',
    definisi:
      'Sos ~   sering disebut sebagai ketertinggalan budaya, kondisi di mana kebudayaan material mengalami perubahan sementara kebudayaan nonmaterial lebih lambat dalam proses penyesuaian.',
  },
  {
    kata: 'Cultural Shock',
    definisi:
      'Sos ~   kondisi di mana seseorang mengalami keterkejutan terhadap perubahan nilai budaya baru. Sering disebut juga gegar budaya yang terjadi ketika seseorang berada di lingkungan baru, baik itu pindah negara, ke luar kota, pindah rumah, sekolah, kampus, bahkan organisasi perusahaan. ',
  },
];

class HurufC extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF C</Text>
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

export default HurufC;

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
