import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Habitualisasi',
    definisi:
      'Sos ~ masyarakat dibiasakan mengenal norma baru untuk diterapkan dan dijalankan bersama.',
  },
  {
    kata: 'Hak Veto',
    definisi:
      'Eko ~ hak yang dimiliki oleh seseorang atau badan tertentu untuk menolak suatu keputusan.',
  },
  {
    kata: 'Hak',
    definisi:
      'Eko ~ segala kebutuhan dan keperluan yang harus didapatkan oleh seseorang semenjak ia lahir bahkan sebelum lahir.',
  },
  {
    kata: 'Harga',
    definisi:
      'Eko ~ nilai suatu barang atau jasa yang diukur dengan jumlah uang.',
  },
  {
    kata: 'Hedonisme',
    definisi:
      'Sos ~ suatu pandangan hidup yang menganggap bahwa kesenangan dan kenikmatan materi merupakan tujuan utama hidup. ',
  },
  {
    kata: 'Hibah',
    definisi:
      'Eko ~ pemberian berupa bantuan dari negara lain misalnya pengurangan atau pemotongan utang luar negeri. Sos ~ dianggap sebagai hadiah atau pemberian kepada orang lain secara sukarela dan tidak dapat ditarik kembali.',
  },
  {
    kata: 'Hidrosfer ',
    definisi: 'Geo ~ lapisan air yang menyelimuti permukaan bumi.',
  },
  {
    kata: 'Hikayat',
    definisi:
      'Sej ~  karya sastra Melayu berbentuk prosa berisi cerita atau dongeng yang penuh keajaiban dan keanehan. ',
  },
  {
    kata: 'Hinterland',
    definisi:
      'Geo ~ negera ASEAN yang terpisah dari Benua Asia, seperti Indonesia, Brunei Darussalam, Filipina, Timor Leste, dan Malaysia bagian Timur.',
  },
  {
    kata: 'Hipotesis',
    definisi:
      'Umum ~ pendapat atau alasan yang dikemukakan seorang pakar yang dianggap benar meskipun masih harus dibuktikan. Hipotesis juga diartikan sebagai jawaban sementara terhadap masalah yang masih bersifat praduga karena masih harus dibuktikan kebenarannya, yang akan diuji dengan data yang dikumpulkan dalam penelitian.',
  },
  {
    kata: 'Holtikultura',
    definisi:
      'Geo ~ budidaya  tanaman kebun seperti buah, tanaman bunga, tanaman sayuran, tanaman obat-obatan.',
  },
  {
    kata: 'Homo Economicus',
    definisi:
      'Eko ~ manusia sebagai makhluk ekonomi, yang bersikap rasional dan kegiatannya selalu memperhitungkan keuntungan yang diperoleh.',
  },
  {kata: 'Homo Sapiens', definisi: 'Sej ~ manusia cerdas.'},
  {
    kata: 'Homo Socialis',
    definisi:
      'Sos ~ manusia sebagai makhluk sosial yang tidak dapat hidup tanpa berinteraksi dengan orang lain.',
  },
  {
    kata: 'Hukum Penawaran',
    definisi:
      'Eko ~ hukum yang menjelaskan hubungan antara harga dan jumlah barang atau jasa yang ditawarkan.',
  },
  {
    kata: 'Hukum Permintaan',
    definisi:
      'Eko ~ hukum yang menjelaskan adanya hubungan antara tingkat harga dengan jumlah barang yang diminta.',
  },
];

class HurufH extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF H</Text>
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

export default HurufH;

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
