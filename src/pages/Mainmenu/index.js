import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '../../assets/img/dekor.png';
import Dekor from '../../assets/img/dekor2.png';
import Girl from '../../assets/img/girl.png';
import Boy from '../../assets/img/boy.png';
import Graduate from '../../assets/img/graduate.png';
import Alphabet from '../../assets/img/alphabet.png';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import MainBtn from './MainBtn';
import SearchBtn from './SearchBtn';
import Tentang from './Tentang';

const Mainmenu = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{backgroundColor: '#18AEC7', flex: 1}}>
      {/* Header & Dekorasi */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 30,
                color: '#FFF',
                marginTop: 50,
              }}
            >
              KAMUS DIGITAL
            </Text>
            <Text style={{fontSize: 15, color: '#FFF'}}>
              ILMU PENGETAHUAN SOSIAL
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 195,
              width: 195,
              alignItems: 'flex-end',
            }}
          >
            <Image
              source={Icon}
              style={{alignContent: 'flex-end', height: 195, width: 195}}
            />
          </View>
        </View>
        <View>
          <Image
            source={Dekor}
            style={{alignContent: 'flex-end', marginTop: -40}}
          />
        </View>
      </View>
      {/* END Header & Dekorasi */}
      {/* Konten */}
      <View
        style={{
          backgroundColor: '#FFF',
          flex: 1,
          marginTop: -120,
          borderTopLeftRadius: 40,
          borderTopEndRadius: 40,
        }}
      >
        {/* Mainbtn row 1 */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: -50,
            marginBottom: 20,
            justifyContent: 'center',
          }}
        >
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
        {/* Mainbtn row 2 */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: -20,
            marginBottom: 20,
            justifyContent: 'center',
          }}
        >
          <MainBtn
            title="Kelas 9"
            image={Graduate}
            onPress={() => handleGoTo('Kelas3')}
          />
          <MainBtn
            title="by Abjad"
            image={Alphabet}
            onPress={() => handleGoTo('ByAbjad')}
          />
        </View>
        {/* Mainbtn row 3 */}
        <View
          style={{
            // flexDirection: 'row',
            flex: 1,
            marginTop: -10,
            marginBottom: 20,
            alignItems: 'center',
            // backgroundColor: 'purple',
          }}
        >
          <SearchBtn onPress={() => handleGoTo('BySearch')} />
        </View>
        <View>
          <Tentang onPress={() => handleGoTo('Tentang')} />
        </View>
      </View>
      {/* END Konten */}
    </View>
  );
};

export default Mainmenu;

const style = StyleSheet.create({
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
