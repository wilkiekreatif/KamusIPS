import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MainBtn from './MainBtn';
import Icon from '../../assets/img/dekor.png';

const ByAbjad = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{backgroundColor: '#18AEC7', flex: 1}}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.textheader}>
          <Text style={styles.h1}>KAMUS DIGITAL BY ABJAD</Text>
          <Text style={styles.h2}>ILMU PENGETAHUAN SOSIAL</Text>
        </View>
        <Image source={Icon} style={{width: 100, height: 100}} />
      </View>

      {/* Konten */}
      <View style={styles.content}>
        <ScrollView>
          <MainBtn title="HURUF A" onPress={() => handleGoTo('HurufA')} />
          <MainBtn title="HURUF B" onPress={() => handleGoTo('HurufB')} />
          <MainBtn title="HURUF C" onPress={() => handleGoTo('HurufC')} />
          <MainBtn title="HURUF D" onPress={() => handleGoTo('HurufD')} />
          <MainBtn title="HURUF E" onPress={() => handleGoTo('HurufE')} />
          <MainBtn title="HURUF F" onPress={() => handleGoTo('HurufF')} />
          <MainBtn title="HURUF G" onPress={() => handleGoTo('HurufG')} />
          <MainBtn title="HURUF H" onPress={() => handleGoTo('HurufH')} />
          <MainBtn title="HURUF I" onPress={() => handleGoTo('HurufI')} />
          <MainBtn title="HURUF J" onPress={() => handleGoTo('HurufJ')} />
          <MainBtn title="HURUF K" onPress={() => handleGoTo('HurufK')} />
          <MainBtn title="HURUF L" onPress={() => handleGoTo('HurufL')} />
          <MainBtn title="HURUF M" onPress={() => handleGoTo('HurufM')} />
          <MainBtn title="HURUF N" onPress={() => handleGoTo('HurufN')} />
          <MainBtn title="HURUF O" onPress={() => handleGoTo('HurufO')} />
          <MainBtn title="HURUF P" onPress={() => handleGoTo('HurufP')} />
          <MainBtn title="HURUF Q" onPress={() => handleGoTo('HurufQ')} />
          <MainBtn title="HURUF R" onPress={() => handleGoTo('HurufR')} />
          <MainBtn title="HURUF S" onPress={() => handleGoTo('HurufS')} />
          <MainBtn title="HURUF T" onPress={() => handleGoTo('HurufT')} />
          <MainBtn title="HURUF U" onPress={() => handleGoTo('HurufU')} />
          <MainBtn title="HURUF V" onPress={() => handleGoTo('HurufV')} />
          <MainBtn title="HURUF W" onPress={() => handleGoTo('HurufW')} />
          <MainBtn title="HURUF X" onPress={() => handleGoTo('HurufX')} />
          <MainBtn title="HURUF Y" onPress={() => handleGoTo('HurufY')} />
          <MainBtn title="HURUF Z" onPress={() => handleGoTo('HurufZ')} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ByAbjad;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  textheader: {
    paddingLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  h1: {
    fontSize: 30,
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
