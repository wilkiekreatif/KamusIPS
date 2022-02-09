import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '../../assets/img/logo.png';

// var Spinner = require('react-native-spinkit');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Mainmenu');
    }, 3000);
  });
  return (
    <View style={style.parent}>
      <Text style={style.appfor}>UNTUK SMP/MTs</Text>
      <View style={style.logowrapper}>
        <Image source={Icon} style={style.logo} />
        <Text style={style.h1}>KAMUS DIGITAL</Text>
        <Text style={style.h4}>ILMU PENGETAHUAN SOSIAL</Text>
        {/* <Spinner
          // style={styles.spinner}
          // isVisible={this.state.isVisible}
          size={50}
          type={'ThreeBounce'}
          color={'#FFF'}
        /> */}
      </View>
      <View style={style.bottom}>
        <Text style={style.h2}>Dian Fauziah, S.Pd</Text>
        <Text style={style.h5}>Version 1.0</Text>
      </View>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#18AEC7',
    flex: 1,
  },
  appfor: {
    marginLeft: 10,
    marginTop: 10,
    color: 'white',
    height: '15%',
  },
  logowrapper: {
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  bottom: {
    flex: 1,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  h1: {
    color: 'white',
    fontSize: 30,
    // marginBottom: 5,
  },
  h2: {
    color: 'white',
    fontSize: 20,
    // marginBottom: 5,
  },
  h4: {
    color: 'white',
    fontSize: 12,
    marginBottom: 50,
  },
  h5: {
    color: 'white',
    fontSize: 12,
    marginBottom: 20,
  },
});
