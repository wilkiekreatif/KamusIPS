import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Icon from '../../assets/img/dekor.png';
import Tentang1 from '../../assets/img/tentang.jpg';

class Tentang extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#18AEC7', height: '100%'}}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.textheader}>
            <Text style={styles.h1}>Tentang Penulis</Text>
          </View>
          <Image source={Icon} style={{width: 100, height: 100}} />
        </View>

        {/* Konten */}
        <View style={styles.content}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Tentang1}
              style={{
                width: 110,
                height: 170,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={styles.h2}>Nama : Dian Fauziah, S.Pd., M.Pd</Text>
              <Text style={styles.h2}>Alamat: Surabaya, Indonesia</Text>
              <Text style={styles.h2}>Email: dian.20007@mhs.unesa.ac.id</Text>
            </View>
          </View>
          <ScrollView style={{marginTop: 20}}>
            <Text style={styles.h2}>
              Adalah Seorang Pengajar dan Asisten Dosen di Universitas Negeri
              Surabaya (Unesa). Menempuh Studi S1 di Universitas Negeri Padang
              (UNP) sebagai lulusan terbaik pada Progam Studi Pendidikan
              Sosiologi-Antropologi. Melanjutkan studi S2 di Pascasarjana
              Universitas Negeri Surabaya (Unesa) pada Program Studi Ilmu
              Pengetahuan Sosial. Jejak pengalaman yang pernah ditempuh menjadi
              Founder Sanggar Tari Dan Musik FIS UNP (2015). Praktek Lapangan
              Kependidikan Juli-Desember (2017). Tenaga Pengajar di SMA Negeri
              10 Padang (2018). Founder dan Guru Hidihara Privat (2018). Tenaga
              Pengajar di SMA Excellent Nurul Ikhlas (2019). Asisten Dosen
              Kaprodi IPS Unesa (2021-2022). Asisten Reasearch Internasional
              (2021). Mentor Bimbel di SMA Negeri 7 Surabaya (2021-2022). Selain
              aktif di dunia akademisi ia juga aktif dalam menulis karya ilmiah,
              adapun di antaranya tulisan yang pernah ia tulis dan diterbitkan,
              Jurnal: Nilai Edukatif dalam Permaianan Tradisional Anak (2015);
              Komik Inspiratif Sosiologi (2017); Kamus Belajar Sosiologi (2018);
              Jurnal: Pelaksanaan E-rapor (2018); Buku Diktat Sosiologi SMA
              Kelas X dan XI (2019); Jurnal: Pilihan Penggunaan Masker di Masa
              Pandemi Covid-19 (Dilihat dari Pedagang Kaki Lima) (2021); Jurnal:
              Problematika Guru dalam Sistem Penilaian Berbasis Web (Pada
              Sekolah Rujukkan Di Sumatera Barat) (2021). Saat ini sedang
              merancang dan mengembangkan media pembelajaran berupa aplikasi
              kamus digital IPS Integratif.
            </Text>
            <Text style={styles.h2}>
              Ia juga aktif dalam kegiatan Pengabdian Masyarakat di antaranya,
              Penyelesaian Sengketa Konflik Tanah di Paninjauan; Kegiatan Batobo
              Di Nagari Sungai Lansek; Bakti Sosial dan Pelestarian Usaha
              Palawija Di Sijangek; Kearifan Lokal Lebak Lebung Di Ogan Komering
              Ilir Palembang; Social Project Mural Painting PAUD Rusunawa
              Komarudin di Jakarta. Ia juga meperoleh beberapa penghargaan
              selama studi, menjadi Mahasiswa Berprestasi Fakultas Ilmu Sosial
              UNP; Lulusan cum laude Universitas Negeri Padang; Guru Sosiologi
              Terfavorit Se-Kabupaten Tanah Datar; Awardee LPDP (PK¬¬-160).
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Tentang;

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: 'row',
  },
  textheader: {
    paddingLeft: 25,
    justifyContent: 'center',
    flex: 1,
  },
  h1: {
    textAlign: 'justify',
    fontSize: 28,
    color: 'white',
    // backgroundColor: 'purple',
  },
  h2: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'black',
    // marginLeft: 20,
    marginBottom: 10,
  },
  // konten
  content: {
    borderTopLeftRadius: 22,
    borderTopEndRadius: 22,
    padding: 20,
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
