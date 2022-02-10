import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from '../../assets/img/dekor.png';
import Dekor from '../../assets/img/dekor2.png';
import Girl from '../../assets/img/girl.png';
import Boy from '../../assets/img/boy.png';
import Graduate from '../../assets/img/graduate.png';
import Alphabet from '../../assets/img/alphabet.png';
import MainBtn from './MainBtn';
import SearchBtn from './SearchBtn';
// import Tentang from './Tentang';

const Mainmenu = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={style.latar}>
      {/* Header & Dekorasi */}
      <View>
        <View style={style.container}>
          <View style={style.subcontainer}>
            <Text style={style.h1}>KAMUS DIGITAL</Text>
            <Text style={style.h5}>ILMU PENGETAHUAN SOSIAL</Text>
          </View>
          <View style={style.header}>
            <Image source={Icon} style={style.dekor1} />
          </View>
        </View>
        <View>
          <Image source={Dekor} style={style.dekor2} />
        </View>
      </View>
      {/* END Header & Dekorasi */}
      {/* Konten */}
      <View style={style.content}>
        <View style={style.btnkonten}>
          <MainBtn
            title="Kelas 7"
            image={Girl}
            onPress={() => handleGoTo('Kelas1')}
          />
          <MainBtn
            title="Kelas 8"
            image={Boy}
            onPress={() => handleGoTo('Kelas2')}
          />
        </View>
        <View style={style.btnkonten}>
          <MainBtn
            title="Kelas 9"
            image={Graduate}
            onPress={() => handleGoTo('Kelas3')}
          />
          <MainBtn
            title="ByAbjad"
            image={Alphabet}
            onPress={() => handleGoTo('ByAbjad')}
          />
        </View>
        <View style={style.btnkonten1}>
          <SearchBtn onPress={() => handleGoTo('BySearch')} />
        </View>
      </View>
      {/* end Konten */}
    </View>
  );
};

export default Mainmenu;

const style = StyleSheet.create({
  latar: {
    backgroundColor: '#18AEC7',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
  },
  subcontainer: {
    marginLeft: 20,
  },
  h1: {
    fontSize: 30,
    color: '#FFF',
    marginTop: 50,
  },
  h5: {fontSize: 15, color: '#FFF'},
  header: {
    flex: 1,
    height: 195,
    width: 195,
    alignItems: 'flex-end',
  },
  dekor1: {alignContent: 'flex-end', height: 195, width: 195},
  dekor2: {alignContent: 'flex-end', marginTop: -40},
  content: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: -110,
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
  },
  btnkonten: {
    flexDirection: 'row',
    marginTop: -50,
    marginBottom: 47,
    justifyContent: 'center',
  },
  btnkonten1: {
    flexDirection: 'row',
    marginTop: -40,
    marginBottom: 47,
    justifyContent: 'center',
  },
  mainbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 130,
    width: 130,
    margin: 10,
    backgroundColor: '#00BCDC',
  },
  searchbtn: {
    borderRadius: 50,
    width: 280,
    height: 50,
    backgroundColor: '#00BCDC',
  },
});
