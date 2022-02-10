import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Dekadensi',
    definisi:
      'Sos ~ memudarnya nilai dan norma sosial yang mengakibatkan menurun atau merosotnya akhlak atau moral seseorang.',
  },
  {
    kata: 'Deklarasi',
    definisi:
      'Eko ~ suatu keterangan lengkap mengenai suatu biaya, uang barang yang masuk dan sebagainya. Sej ~ suatu pernyataan yang jelas dan ringkas mengenai suatu hal. Sos ~ perjanjian internasional yang berbentuk traktat dan dokumen tidak resmi.',
  },
  {
    kata: 'Dekrit',
    definisi:
      'Sej ~ perintah yang dikeluarkan oleh kepala negara maupun pemerintahan dan memiliki kekuatan hukum. ',
  },
  {
    kata: 'Delegasi',
    definisi:
      'Eko~ pelimpahan wewenang dan tanggung jawab, pelimpahan otoritas dari atasan kebawahan harus dilakukan agar organisasi dapat berfungsi efisien. Sej ~ orang yang dijuntuk untuk mewakili suatu perkumpulan dalam perundingan.',
  },
  {
    kata: 'Delta',
    definisi:
      'Eko ~ simbol atau suatu penyebutan yang mewakili selisih suatu keadaan atau selisih dua variabel  yaitu variabel awal dan variabel akhir. Geo ~ pengendapan yang terbentuk karena adanya aktivitas sungai maupun muara sungai.',
  },
  {
    kata: 'Demonstration Effect ',
    definisi:
      'Eko ~ suatu pengaruh seseorang memiliki daya beli bukan karena faktor kebutuhan tetapi takut akan sebutan ketinggalan zaman dan hanya memenuhi gaya hidup. Sos ~   efek peniruan yang dilakukan oleh masyarakat dalam mengkonsumsi sebuah barang atau produk tertentu karena terpengaruh oleh pola konsumsi kelompok masyarakat lain disekitarnya yang memiliki kemampuan finansial/penghasilan yang lebih tinggi darinya. ',
  },
  {
    kata: 'Demoralisasi',
    definisi:
      'Sej ~ penurunan nilai moral. Sos ~ memudarnya nilai dan norma sosial yang mengakibatkan menurun atau merosotnya akhlak atau moral seseorang.',
  },
  {
    kata: 'Devaluasi',
    definisi:
      'Eko ~ kebijakan moneter yang diambil oleh pemerintah untuk melakukan penurunan nilai mata uang dalam negeri terhadap mata uang luar negeri khususnya mata uang asing yang sangat berpengaruh dalam perdagangan internasional. Sej ~ menurunkan nilai mata uang Rp.1.000 dan Rp.500 menjadi Rp.100 dan Rp.50 pada masa demokrasi terpimpin 1959-1965. Dengan tujuan untuk mengurangi banyaknya uang yang beredar demi kepentingan perbaikan keuangan negara.',
  },
  {
    kata: 'Devide Et Impera',
    definisi:
      'Sej ~  politik adu domba yang dilakukan oleh Belanda kepada rakyat Indonesia. ',
  },
  {
    kata: 'Devisa',
    definisi:
      'Eko ~ alat pembayaran antarnegara, serta dapat diterima oleh dunia internasional.',
  },
  {
    kata: 'Difusi',
    definisi:
      'Sos ~ proses penyebaran unsur baru atau budaya, baik berupa alat, ide atau gagasan, dari satu pihak ke pihak lain, dari satu tempat ke tempat lain, dari satu masyarakat ke masyarakat lain. ',
  },
  {
    kata: 'Dinamika',
    definisi:
      'Eko ~ perubahan atau pergerakan suatu suatu sistem ekonomi dari waktu ke watktu. Geo ~ perubahan atau pertumbuhan jumlah penduduk. Sej ~ suatu yang yang mempunyai tenaga serta selalu bergerak dan berubah-ubah menyesuaiakan keadaan. Sos ~ perubahan sosial dalam masyarakat yang mengalami berbagai bentuk permasalahan yang dilakukan oleh individu atau kelompok.  ',
  },
  {
    kata: 'Dinamis',
    definisi:
      'Eko ~ penuh semangat dan tenaga sehingga cepat bergerak dan mudah menyesuaiakan diri dengan keaadan. Geo ~ bergerak atau mengalir. Sej ~ selalu bergerak mengikuti perkembangan zaman. Sos ~ sesuatu yang memiliki sifat aktif dan berubah-ubah.',
  },
  {
    kata: 'Dinamisme',
    definisi:
      'Sej ~ kepercayaan pada benda-benda yang mempunyai kekuatan gaib. Sos ~ kepercayaan kepada benda-benda yang ditempati makhluk halus. Kekuatan dari benda yang disembah pada masa itu, mampu memberikan rasa nyaman dan perlindungan bagi manusia ketika berdekatan atau bersentuhan dengan benda tersebut. ',
  },
  {
    kata: 'Dinasti',
    definisi: 'Sej ~ keturunan raja-raja yang berasal dari satu keluarga.',
  },
  {
    kata: 'Diplomasi',
    definisi:
      'Sej ~ urusan kepentingan sebuah negara dengan perantaraan wakil-wakilnya di negara lain. Sos ~   seni dan praktik bernegosiasi oleh seseorang (disebut diplomat)  yang biasanya mewakili sebuah negara atau organisasi, yang mengurus berbagai hal seperti budaya, ekonomi, dan perdagangan.',
  },
  {
    kata: 'Discovery',
    definisi:
      'Sos ~  suatu penemuan baru, akan tetapi belum diketahui oleh orang banyak atau sesuatu yang belum diakui secara masal.',
  },
  {
    kata: 'Disosiatif',
    definisi:
      'Sos ~ proses sosial yang selalu mengarah pada disintegrasi masyarakat serta menghambat kemajuan dan perkembangan masyarakat, yang mengarah pada perpecahan atau pertentangan antar anggota masyarakat.',
  },
  {
    kata: 'Distribusi',
    definisi: 'Eko ~ kegiatan penyaluran produk dari produsen ke konsumen.',
  },
  {
    kata: 'Distributor',
    definisi:
      'Eko ~ orang yang berperan melakukan kegiatan distrubusi atau penyaluran barang dan jasa.',
  },
  {
    kata: 'Dolmen',
    definisi:
      'Sej ~ meja batu tempat meletakkan sesaji yang dipersembahkan kepada arwah nenek moyang.',
  },
  {
    kata: 'Domestik',
    definisi:
      'Eko ~ segala sesuatu yang berkaitan dengan kegiatan kerumahtanggaan  atau hubungan keluarga. Sos ~ berhubungan dengan mengenai permasalahan dalam negeri.',
  },
];

class HurufD extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF D</Text>
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

export default HurufD;

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
