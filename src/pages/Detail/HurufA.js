import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Arrow from '../../assets/img/arrow.png';

let DATA = [
  {
    kata: 'Abiotik',
    definisi:
      'Geo ~ segala sesuatu yang tidak bernyawa atau tidak hidup. Konsep ini juga digunakan dalam ilmu biologi yang diartikan sebagai komponen penyusun ekosistem yang terdiri dari benda-benda tidak hidup.',
  },
  {
    kata: 'Abris Sous Roche',
    definisi:
      'Sej ~ gua yang menyerupai ceruk peninggalan masyarakat pada masa praaksara.',
  },
  {
    kata: 'Afeksi',
    definisi:
      'Sos ~ sering digunakan untuk menjelaskan hubungan antara dua orang (atau lebih) yang lebih dari sekadar rasa simpati atau persahabatan.',
  },
  {
    kata: 'AFTA',
    definisi:
      'Eko ~ singkatan dari Asean Free Trade Area ialah kesepakatan di antara negara-negara ASEAN untuk membentuk sebuah zona perdagangan bebas.',
  },
  {
    kata: 'Agent Of Change',
    definisi:
      'Eko ~ disebut juga sebagai agen perubahan yaitu orang yang bergerak sebagai pelopor atau penggerak perubahan. Sej ~ pihak yang menghendaki perubahan. Sos ~ seorang individu atau kelompok yang memiliki kemampuan untuk memengaruhi orang lain, kelompok atau suatu organisasi dalam mengambil keputusan yang berkaitan dengan inovasi agar sesuai yang diharapkan oleh agen perubahan itu sendiri.',
  },
  {
    kata: 'Agresi',
    definisi: 'Sej ~ penyerangan suatu negara terhadap negara lain.',
  },
  {
    kata: 'Agrikultur',
    definisi:
      'Geo ~ proses memproduksi makanan, pangan, serat, dan banyak hasil-hasil kebutuhan lain disektor pertanian tanaman-tanaman tertentu dan pertambahan hewan-hewan lokal (ternak).',
  },
  {
    kata: 'Ajudikasi',
    definisi:
      'Sos ~ penyelesaian konflik/perselisihan melalui pengadilan (meja hijau), Ing: adjudication. ',
  },
  {
    kata: 'Aklamasi',
    definisi:
      'Sej ~ pernyataan setuju secara lisan dari seluruh peserta rapat terhadap suatu usulan tanpa melalui pemungutan suara. Biasanya disebut juga dengan “kesepakatan bulat”.',
  },
  {
    kata: 'Akomodasi',
    definisi:
      'Eko ~ sesuatu yang disediakan untuk memenuhi kebutuhan, seperti tempat menginap atau tempat tinggal sementara bagi orang yang berpergian. Sos ~ merupakan proses sosial dalam masyarakat dengan tujuan menyelesaikan pertentangan atau konflik sosial antara dua pihak atau lebih yang sedang bersengketa.',
  },
  {
    kata: 'Akulturasi',
    definisi:
      'Sej ~ proses pertemuan dua kebudayaan atau lebih yang lambat laun diterima dan tanpa menyebabkan hilangnya kepribadian budaya itu sendiri. Sej ~ perpaduan antara dua kebudayaan, kebudayaan masa praaksara dengan kebudayaan Hindu-Budha yang memiliki ciri khas masing-masing. Sos ~ proses penerimaan unsur budaya baru yang datang dari luar, tanpa menghilangkan sifat budaya asli atau budaya lama.',
  },
  {
    kata: 'Amalgamasi',
    definisi:
      'Eko ~ penggabungan dua atau lebih perusahaan menjadi satu perusahaan baru, untuk mencapai posisi dan skala ekonomi yang lebih baik. Geo ~ istilah dalam geopolitik yang mengacu pada bergabungnya dua atau lebih unit administratif. Sos ~ Berarti “penggabungan” atau “menyatukan” tindakan atau proses di mana dua atau lebih budaya, etnik, ras, adat-istiadat membentuk sebuah hal baru yang lebih kuat.',
  },
  {
    kata: 'Amplitudo',
    definisi: 'Geo ~ jarak naik dan turunnya suatu getaran.',
  },
  {
    kata: 'Analisis SWOT',
    definisi:
      'Sej ~ alat analisis yang digunakan untuk mengukur strength (kekuatan), weaknsses (kelemahan), opportunities (peluang), dan threats (tantangan) pada suatu objek penelitian.',
  },
  {
    kata: 'Angin',
    definisi:
      'Geo ~ udara yang bergerak karena adanya perbedaan tekanan udara.',
  },
  {
    kata: 'Animisme',
    definisi:
      'Sej ~ kepercayaan kepada makhluk halus dan roh yang merupakan asal kepercayaan agama dikalangan manusia purba. Sos ~ kepercayaan kepada roh dan mahkluk halus.',
  },
  {
    kata: 'Anti Sosial',
    definisi:
      'Sos ~ tindakan mementingkan diri sendiri dan tidak peduli dengan lingkungan sekitar.',
  },
  {
    kata: 'APRA',
    definisi:
      'Sej ~ singkatan dari Pemberontakan Angkatan Perang Ratu Adil, yang bertujuan mempertahankan bentuk negera federal di Indonesia dan memiliki tentara tersendiri pada negara bagian RIS.',
  },
  {
    kata: 'Arbitrasi',
    definisi:
      'Sos ~ penyelesaian konflik menggunakan pihak ketiga sebagai penentu dan pengambil keputusan. Ing: arbitration. ',
  },
  {
    kata: 'Arca',
    definisi:
      'Sej ~ patung yang dibuat dari batu dan dipahat menyerupai bentuk manusia atau binatang. ',
  },
  {
    kata: 'Artefak',
    definisi: 'Sej ~ benda-benda peninggalan masa lalu.',
  },
  {
    kata: 'ASEAN',
    definisi:
      'IPS ~ singkatan dari Association of Southeast Asian Nations yang berarti perhimpunan Bangsa-Bangsa Asia Tenggara.',
  },
  {
    kata: 'Asimilasi',
    definisi:
      'Sej ~ pembauran dua kebuadayaan atau lebih yang disertai hilangnya ciri khas kebudayaan asli. Sos ~ peleburan atau penggabungan dua budaya atau lebih menjadi satu dan membentuk budaya baru. Atau dikenal juga dengan istilah bercampurnya kelompok minoritas ke dalam masyarakat yang dominan.',
  },
  {
    kata: 'Asosiasi',
    definisi:
      'Sos~ perkumpulan orang-orang yang mempunyai kepentingan bersama. Dikenal juga sebagai organisasi penggerak lembaga sosial.',
  },
  {
    kata: 'Asosiatif',
    definisi:
      'Sos ~ proses sosial membawa kemajuan dan stabilitas di masyarakat. Disebut sebagai proses sosial integratif, yang mengarah pada penyatuan dan meningkatkan hubungan solidaritas, seperti kerjasama, akomodasi, asimilasi dan seterusnya.',
  },
  {
    kata: 'Astronomis',
    definisi:
      'Geo ~ cabang ilmu yang melibatkan pengamatan benda-benda langit, serta fenomena alam yang terjadi di luar atmosfer bumi.',
  },
  {
    kata: 'Aswamedha',
    definisi:
      'Sej ~ upacara pelepasan kuda untuk menentukan batas wilayah kerajaan yang diterapkan di Kerajaan Kutai.',
  },
  {
    kata: 'Atlas',
    definisi:
      'Geo ~ kumpulan peta-peta yang dirancang untuk disimpan dalam bentuk jilid (buku) atau dalam keadaan lepas-lepas, dan dikumpulkan menjadi satu.',
  },
  {
    kata: 'Atmosfer',
    definisi: 'Geo ~ lapisan udara yang menyelubungi bumi.',
  },
  {
    kata: 'Awan',
    definisi:
      'Geo ~ titik-titik air yang melayang-layang di atmosfer dan terjadi sebagai akibat adanya kondensasi uap air.',
  },
];

class HurufA extends Component {
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
            <Text style={styles.h1}>KONSEP BERAWALAN HURUF A</Text>
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

export default HurufA;

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
