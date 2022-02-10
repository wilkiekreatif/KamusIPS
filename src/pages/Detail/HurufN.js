import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Nasakom',
    definisi:
      'Sej ~   nasionalis-agama-komunis, ajaran Presiden Soekarno yang mengharuskan adanya persatuan nasional progresif revolusioner dengan ketiga golongan politik sebagai porosnya.',
  },
  {
    kata: 'Nasionalisme',
    definisi: 'Sej ~ paham (ajaran) untuk mencintai bangsa dan negara sendiri.',
  },
  {
    kata: 'Nefo',
    definisi:
      'Sej ~ singkatan dari The New Emerging Forces adalah sebutan untuk negara-negara baru, khususnya negara-negara sosialis. ',
  },
  {kata: 'Neolitikum', definisi: 'Sej ~ zaman batu muda. '},
  {
    kata: 'Nepotisme',
    definisi:
      'Sej ~ tindakan mementingkan sanak saudara atau teman-teman sendiri, terutama dalam pemerintahan. Sos ~   perilaku atau tindakan yang memilih dan memihak kepada kerabat dekat atau keluarga sendiri untuk memegang jabatan atau pemerintahan.',
  },
  {
    kata: 'Neraca',
    definisi:
      'Eko ~ timbangan/perimbangan. Berupa dokumen yang berisi laporan keuangan yang berisi data, jenis, aset, modal, dansaldo total suatu perusahaan.',
  },
  {
    kata: 'NICA',
    definisi:
      'Sej ~ singkatan dari Nederland Indies Civil Administration (Pemerintahan Sipil Hindia Belanda).',
  },
  {
    kata: 'Nilai ',
    definisi: 'Sos ~ sesuatu yang dianggap penting dan berharga.',
  },
  {
    kata: 'Nirleka',
    definisi:
      'Sej ~ bahasa lain dari praaksara (sebelum manusia mengenal bentuk tulisan). Nir artinya tidak ada dan leka artinya tulisan.',
  },
  {
    kata: 'Nisan',
    definisi:
      'Sej ~  tonggak pendek yang terbuat dari batu yang ditanam di atas gundukkan tanah sebagai tanda kuburan. ',
  },
  {
    kata: 'NKRI',
    definisi:
      'Sej ~   singkatan dari Negara Kesatuan Republik Indonesia. Resmi menjadi Republik Indonesia pada tanggal 17 Agustus 1950. ',
  },
  {
    kata: 'Nomaden',
    definisi:
      'Geo ~ kehidupan yang berpindah-pindah berdasarkan lingkungan dan sumber daya alam yang ada. Sej ~ kehidupan yang selalu berpindah-pindah. Sos ~ pola kehidupan tidak menetap dan berpindah-pindah sesuai lingkungan dan kebutuhan sosial. ',
  },
  {
    kata: 'Norma Sosial',
    definisi:
      'Eko ~ perilaku yang pantas bagi suatu kelompok masyarakat. Sos ~ pedoman perilaku yang sudah ada dalam suatu kelompok masyarakat dan memiliki batasan wilayah tertentu, berisi perintah, larangan, dan anjuran untuk mengatur tindakan dan perilaku masyarakat dan memiliki sanksi apabila dilanggar.',
  },
];

class HurufN extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF N</Text>
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

export default HurufN;

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
