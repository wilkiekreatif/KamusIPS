import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'La Nina',
    definisi:
      'Geo ~ gejala cuaca yang mengakibatkan hujan lebat pada rentang waktu yang sangat lama sebagai akibat angin pusat berhembus dengan keras dan terus menerus melintasi Samudra Pasifik ke arah Australia.',
  },
  {
    kata: 'Landrent System',
    definisi: 'Sej ~ sistem sewa tanah pada penjajahan Inggris di Indonesia.',
  },
  {
    kata: 'Leasing',
    definisi:
      'Eko ~ lembaga yang kegiatannya melakukan pembiayaan dalam bentuk penyediaan dana atau barang modal dengan tidak menarik dana secara langsung dari masyarakat.',
  },
  {
    kata: 'Lebensraum',
    definisi:
      'Sej ~ semboyan politik Jerman untuk melakukan ekspansi (perluasan wilayah) yang akhirnya menjadikan salah satu sebab terjadinya Perang Dunia II.',
  },
  {
    kata: 'Legenda',
    definisi:
      'Eko ~ cerita rakyat zaman dahulu yang ada hubungannya dengan peristiwa sejarah. Geo ~ menunjukkan keterangan simbol dalam peta. Sej ~ cerita rakyat yang berisikan tentang, tokoh, peristiwa, atau tempat tertentu yang memcampurkan fakta historis dengan mitos. Sos ~ cerita yang mempunyai ciri-ciri mirip dengan mitos, dianggap benar-benar terjadi tetapi tidak dianggap suci.',
  },
  {
    kata: 'Lembaga Sosial',
    definisi:
      'Eko ~ bagian dari lembaga sosial yang mengatur hubungan antar manusia dalam pemenuhan kebutuhan pokok (pangan, papan, dan sandang). Sos ~ suatu sistem hubungan sosial terorganisir yang mencakup nilai-nilai dan aturan tertentu dalam usaha memenuhi kebutuhan-kebutuhan dasar masyarakat. ',
  },
  {
    kata: 'Liberalisasi',
    definisi:
      ' Sej ~ proses dan usaha untuk menerapkan paham liberal (bebas) dalam kehidupan (tata negara dan ekonomi).',
  },
  {
    kata: 'Lingkungan Hidup',
    definisi:
      'Geo ~ kesatuan ruang dengan semua benda, daya, keadaan dan makhluk hidup, termasuk manusia, dan perilakunya, yang mempengaruhi kelangsungan perikehidupan dan kesejahteraan manusia serta mahkluk hidup dengan manusia.',
  },
  {
    kata: 'Lingkungan',
    definisi:
      'Geo ~ kesatuan ruang dengan semua benda, daya, keadaan dan makhluk hidup, termasuk manusia, dan perilakunya, yang mempengaruhi kelangsungan kehidupan dan kesejahteraan manusia serta mahkluk hidup dengan manusia.',
  },
  {
    kata: 'Litosfer',
    definisi:
      'Geo ~ lapisan terluar kulit bumi yang tersusun atas batuan dan mineral.',
  },
  {
    kata: 'Lubuk Laut',
    definisi:
      'Geo ~ dasar laut dalam yang berbentuk cekungan dalam memanjang dan bertebing curam.',
  },
];

class HurufL extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF L</Text>
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

export default HurufL;

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
