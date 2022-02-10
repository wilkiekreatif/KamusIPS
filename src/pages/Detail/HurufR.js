import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Ras',
    definisi:
      'Geo ~ suatu sistem klasifikasi yang digunakan untuk mengkategorikan manusia dalam populasi atau kelompok  besar dan berbeda menurut ciri fenotip, asal-usul geografis, tampang jasmani, dan kesukuan yang terwarisi. Sej ~ pengelompokkan manusia berdasarkan bentuk tubuh dan warna kulit. Sos~ penggolongan manusia berdasrakan ciri-ciri fisik manusia.',
  },
  {
    kata: 'Rasional',
    definisi: 'Umum ~ cara berfikir logis yang sesuai dengan akal pikiran.',
  },
  {
    kata: 'Reboisasi',
    definisi:
      'Geo ~ penghijauan atau penanaman hutan kembali pada hutan dan lahan gundul.',
  },
  {
    kata: 'Reformasi',
    definisi:
      'Sej ~ perubahan secara drastic untuk perbaikkan (dibidang sosial, politi,ekonomi, dan agama) dalam suatu masyarakat atau negara.',
  },
  {
    kata: 'Region',
    definisi:
      'Geo ~ suatu wilayah yang memiliki ciri atau karakteristik tersendiri yang berbeda dengan wilayah lain. ',
  },
  {
    kata: 'Relief',
    definisi:
      'Geo ~ tinggi rendahnya permukaan bumi atau bentuk raut muka bumi. Sej ~ seni pahat pada dinding suatu bangunan atau candi.',
  },
  {
    kata: 'Remigrasi',
    definisi:
      'Geo ~ bila orang yang sebelumnya melakukan perpindahan imigrasi atau emigrasi kembali ke negara aslinya. ',
  },
  {
    kata: 'Rempah-Rempah',
    definisi:
      'Geo ~ tumbuhan yang beraroma dan berasa kuat yang digunakan dalam jumlah kecil pada makanan sebagai pengawet atau penambah rasa dalam makanan. ',
  },
  {
    kata: 'Revolusi Industri',
    definisi:
      'Sos ~ periode antara tahun 1750-1850 yang pada saat itu terjadi perubahan secara besar-besaran di bidang pertanian, manufaktur, pertambangan,  transportasi dan teknologi serta memiliki dampak yang mendalam terhadap sosial, ekonomi, dan budaya dunia.',
  },
  {
    kata: 'RIS',
    definisi:
      'Sej ~  singkatan dari Repuplik Indonesia Serikat, yang berdiri tanggal 27 Desember 1949 dengan Undang-Undang Dasar Sementara sebagai Konstitusinya. ',
  },
  {
    kata: 'RMS',
    definisi:
      'Sej ~ singkatan dari pemberontakan Republik Maluku Selatan, yang menolak terhadap pembentukan Negara Kesatuan Republik Indonesia. Mereka ingin merdeka dan melepaskan diri dari Republik Indonesia, karena mereka menganggap Maluku memiliki kekuatan secara ekonomi, politik, dan geografis untuk berdiri sendiri. ',
  },
  {
    kata: 'Ruang',
    definisi:
      'Eko ~ tempat manusia dan makhluk hidup lainnya, melakukan kegiatan, dan memelihara kelangsungan hidup. Geo ~ kesatuan geografis beserta unsur terkait (ruang darat, ruang laut, ruang udara). Sej ~ latar tempat kejadian dari sebuah peristiwa. Sos ~ tempat berlangsungnya kegiatan individu dan/atau kelompok.',
  },
  {
    kata: 'Rumpun',
    definisi:
      'Geo ~ kelompok tumbuhan yang tumbuh anak-beranak seakan-akan mempunyai akar yang sama. Sej ~ sekelompok bangsa yang memiliki nenek moyang yang sama.',
  },
];

class HurufR extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF R</Text>
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

export default HurufR;

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
