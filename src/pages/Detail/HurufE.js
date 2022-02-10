import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Efektif',
    definisi:
      'Umum ~ sesuai target yang ditetapkan oleh seseorang atau organisasi.',
  },
  {
    kata: 'Efisien',
    definisi:
      'Umum ~ pencapaian target oleh seseorang atau organisasi dengan biaya terkecil.',
  },
  {
    kata: 'Ekologi',
    definisi:
      'Geo ~ ilmu yang mempelajari baik interaksi antar makhluk hidup maupun interaksi antara makhluk hidup dan lingkungannya. Sos ~ hubungan timbal balik antar makhluk hidup dengan lingkungannya.',
  },
  {
    kata: 'Ekonomi',
    definisi:
      'Umum ~ ilmu sosial yang mempelajari perilaku manusia dalam mengelola sumber daya yang terbatas serta menyalurkannya ke dalam berbagai individu atau kelompok yag ada dalam masyarkat, kegiatannya meliputi, produksi, distribusi, dan konsumsi. Atau disebut juga ilmu yang mempelajari tindakan manusia dalam memenuhi kebutuhan hidupnya.',
  },
  {
    kata: 'Ekosistem',
    definisi:
      'Eko ~ keterhubungan sistem yang mendukung rantai nilai ekonomi kreatif, yaitu kreasi, produksi, distribusi, konsumsi, dan konservasi, yang dilakukan oleh pelaku ekonomi untuk memberikan nilai tambah pada produknya sehingga berdaya saing tinggi, mudah diakses, dan terlindungi secara hukum. Geo ~ suatu sistem ekologi yang terbentuk oleh hubungan timbal balik tidak terpisahkan antara makhluk hidup dengan lingkungannya. ',
  },
  {
    kata: 'Eksogen',
    definisi:
      'Geo ~  tenaga yang berasal dari luar bumi yang berpengaruh terhadap pembentukan relief muka bumi. ',
  },
  {
    kata: 'Eksosfer ',
    definisi:
      'Geo ~  lapisan atmosfer yang berada pada ketinggian di atas 500 km dari permukaan bumi.',
  },
  {
    kata: 'Ekspedisi',
    definisi:
      'Eko ~ pengiriman surat, pengankutan barang, atau perjalanan berkaitan dengan penyelidikan ilmiah ke suatu daerah yang kurang dikenal. Sej ~ perjalanan yang dilakukan untuk tujuan tertentu, biasanya penjelajahan dan/atau penelitian.',
  },
  {
    kata: 'Eksploitasi',
    definisi:
      'Eko ~ pemanfataan yang secara sewenang-wenang atau terlalu berlebihan terhadap suatu subyek hanya untuk kepentingan ekonomi tanpa mempertimbangkan rasa kepatutan, keadilan, serta kesejahteraan. Geo ~ kegiatan pengambilan barang tambang dan sumber daya alam secara berlebihan tanpa melakukan konservasi dan reboisasi. Sos ~ suatu tindakan yang bertujuan untuk mengambil keuntungan atau memanfaatkan sesuatu secara berlebihan dan sewenang-wenang, yang mengakibatkan kerugian pada manusia maupun lingkungan.',
  },
  {
    kata: 'Ekspor',
    definisi:
      'Eko ~ bentuk perdagangan internasional, ketika barang yang diproduksi disuatu negara dikirim ke negara lain untuk dijual dan diperdagangkan. Eko ~ perdagangan dengan cara mengeluarkan atau mengirim barang atau jasa ke luar negeri. Geo ~ suatu aktivitas yang menjual suatu barang atau jasa ke luar negeri. ',
  },
  {
    kata: 'Eksportir ',
    definisi:
      'Eko ~  pedagang yang membeli barang di dalam negeri kemudian menjualnya ke luar negeri. Eko ~ pihak atau orang yang melakukan penjualan barang ke luar negeri.',
  },
  {
    kata: 'Ekstensifikasi',
    definisi:
      'Eko ~  usaha peningkatan hasil produksi dengan menambah faktor produksi.',
  },
  {
    kata: 'El nino',
    definisi:
      'Geo ~ gejala cuaca berupa penumpukan energi panas di Samudra Pasifik bagian selatan yang menyebabkan udara mengalir ke pusat panas sehingga berpengaruh pada iklim di wilayah sekitarnya.',
  },
  {
    kata: 'Elite',
    definisi:
      'Sos ~   kelompok kecil orang-orang terpandang atau berderajat tinggi (kaum bangsawan, cendikiawan, terpelajar, dan sebagainya).',
  },
  {
    kata: 'Emigrasi',
    definisi:
      'Geo ~ meninggalkan daerah asal dan berpindah ke wilayah atau negara baru. Sos ~   ke luarnya penduduk dari negara sendiri ke negara lain untuk menetap atau tinggal lama. ',
  },
  {
    kata: 'Empati',
    definisi:
      'Sos ~ perasaan atau emosi yang seakan mengalami kondisi yang dirasakan oleh orang lain. Empati biasanya diikuti oleh tindakan. ',
  },
  {
    kata: 'Endogen ',
    definisi:
      'Geo ~  tenaga yang berasal dari dalam bumi yang berpengaruh terhadap pembentukan relief muka bumi.',
  },
  {
    kata: 'Enkulturasi',
    definisi:
      'Sos ~ proses mempelajari dan menyesuaikan pikiran serta sikap dengan nilai dan norma yang disosialisasikan.  ',
  },
  {
    kata: 'Epifit',
    definisi:
      'Geo ~ tumbuhan yang berkembang dengan cara menumpang pada tumbuhan lain sebagai tempat hidupnya. ',
  },
  {
    kata: 'Erosi ',
    definisi:
      'Geo ~  peristiwa terangkutnya lapisan tanah atas dari suatu tempat ke tempat lain terangkut oleh air atau angin.',
  },
  {
    kata: 'Etnik',
    definisi:
      'Geo ~ didasarkan kepada adanya persamaan kebudayaan dalam kelompok masyarakat tersebut. Sej ~ penggolongan manusia berdasarkan kepercayaan, nilai, kebiasaan, adat istiadat, norma, bahasa, sejarah, geografis, dan hubungan kekerabatan. Sos ~ atau suku bangsa adalah suatu golongan atau kelompok manusia yang angota-anggotanya mengidentifikasikan dirinya dengan sesamanya, biasanya berdasarkan garis keturunan yang dianggap sama.',
  },
  {
    kata: 'Etnosentris',
    definisi:
      'Sos~ sikap atau perilaku yang memandang budaya atau suku bangsa sendiri lebih baik dibandingkan dengan budaya dan suku bangsa lain serta meremehkan budaya dan suku bangsa lain.',
  },
];

class HurufE extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF E</Text>
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

export default HurufE;

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
