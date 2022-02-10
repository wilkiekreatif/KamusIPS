import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Taktik Gerilya',
    definisi:
      'Sej ~ taktik peperangan yang dilakukan dengan cara menipu, mengelabui, dan menyerang secara tiba-tiba dan mengandalkan kecepatan untuk menghilang tanpa sempat dibalas oleh lawan.',
  },
  {
    kata: 'Tanah Aluvial',
    definisi:
      'Geo ~ tanah hasil endapan. Jenis tanah yang dibawa dan diendapkan oleh aliran sungai. Tanah ini juga subur.',
  },
  {
    kata: 'Tanah Vulkanik',
    definisi:
      'Geo ~ jenis tanah hasil dari vulkanisme (gunung berapi) bersifat subur, dan baik untuk pertanian serta perkebunan. Geo ~ lapisan tanah yang berasal dari material letusan gunung api.',
  },
  {
    kata: 'Tarif',
    definisi: 'Eko ~ kebijakan pajak atas barang impor dan ekspor. ',
  },
  {
    kata: 'Tata Kelakuan',
    definisi:
      'Sos ~ berasal dari kebiasaan yang diterima sebagai patokan untuk membatasi tindakan masyarakat. Ing: mores.',
  },
  {
    kata: 'Tawar -Menawar',
    definisi:
      'Sos ~ perundingan mengenai pertukaran barang dan jasa antara dua pihak atau lebih.',
  },
  {
    kata: 'Tektonik',
    definisi:
      'Geo ~ proses gerakan lempeng yang menimbulkan lipatan, retakan, dan patahan sehingga menyebabkan bentuk muka bumi beragam. ',
  },
  {kata: 'Teluk', definisi: 'Geo ~ lautan yang menjorok ke daratan.'},
  {
    kata: 'Tempat',
    definisi:
      'Eko ~ bagian tertentu dari suatu ruang (bidang, daerah, lokasi, ruang penyimpanan dan sebagainya). Geo ~  menunjukkan wilayah secara khusus. Sej ~ bangunan zaman dahulu yang memiliki suatu makna yang terkandung di dalamnya dan memiliki sejarah yang penting. Sos ~ ruang aktivitas manusia. ',
  },
  {
    kata: 'Tetomisme',
    definisi:
      'Sej ~ kepercayaan yang menganggap bahwa hewan atau tumbuhan tertentu memiliki kekuatan supranatural untuk memberikan keselamatan atau malapetaka kepada penganutnya. Sos ~ sistem kepercayaan di mana manusia dikatakan memiliki kekerabatan atau hubungan mistis dengan roh halus seperti binatang atau tumbuhan yang dijadikan sebagai lambang atau simbol mereka.',
  },
  {
    kata: 'Tindakan Sosial',
    definisi:
      'Sos ~ tindakan yang penuh arti/makna subjektif yang diarahkan kepada orang lain. ',
  },
  {
    kata: 'Tindakan',
    definisi:
      'Eko ~ pertimbangan individu terhadap nilai pengorbanan yang harus dilakukan sebelum memperoleh yang diinginkan. Sos ~ perilaku yang mengarah pada pemenuhan niat atau memiliki tujuan, tindakan adalah kegiatan yang kompleks, terkoordinasi, dan ditentukan oleh tujuan. Atau sering juga disebut sebagai perilaku nonreflek. ',
  },
  {
    kata: 'Toleransi ',
    definisi: 'Sos ~ sikap menghargai perbedaan yang ada di dalam masyarakat.',
  },
  {
    kata: 'Traktat ',
    definisi:
      'Sej ~ perjanjian atau persetujuan di antara dua negara atau lebih untuk dapat mencapai hubungan hukum tentang objek-objek hukum dengan kepentingan yang sama.',
  },
  {
    kata: 'Transmigrasi',
    definisi:
      'Geo ~ perpindahan penduduk dari daerah padat, ke wilayah yang penduduknya masih jarang, dilakukan sebagai upaya pemerataan penduduk. Sej ~ suatu program yang dibuat oleh pemerintah Indonesia untuk memindahkan penduduk dari suatu daerah yang padat ke darah lain dalam wilayah NKRI. ',
  },
  {
    kata: 'Transportasi',
    definisi:
      'Eko ~ perpindahan manusia atau barang dari satu tempat ke tempat lainnya  dengan menggunakan sebuah kendaraan yang digerakan oleh manusia atau mesin. Geo ~ pergerakan  dari manusia/barang/jasa yang terjadi di dalam suatu ruang permukaan bumi. Sos ~ perpindahan barang atau manusia dari suatu tempat ke tempat lain menggunakan kendaraan. ',
  },
  {
    kata: 'Trikora',
    definisi:
      'Sej ~ singkatan dari Tri Komando Rakyat, merupakan konflik dua tahun yang dilancarkan Indonesia untuk menggabungkan wilayah Irian Barat. Dengan tujuan merebut kembali Irian Barat dari Belanda yaitu menggagalkan pembentukan negara boneka Papua buatan Belanda. ',
  },
  {
    kata: 'Tritura',
    definisi:
      'Sej ~ singkatan dari Tiga Tuntutan Rakyat. Tiga tuntutan kepada pemerintah yang diserukan para mahasiswa yang bergabung dalam Kesatuan Aksi Mahasiswa Indonesia (KAMI). Isi Tritura di antranya; bubarkan PKI dan oramas-ormasnya; Perombakan kabinet Dwikora; turunkan harga pangan. ',
  },
];

class HurufT extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF T</Text>
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

export default HurufT;

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
