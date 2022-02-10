import {Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Arrow from '../../assets/img/arrow.png';

const MainBtn = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold',
          flex: 1,
          marginLeft: 20,
        }}
      >
        {title}
      </Text>
      <Image source={Arrow} style={{width: 15, height: 15, marginRight: 15}} />
    </TouchableOpacity>
  );
};

export default MainBtn;

const style = StyleSheet.create({
  mainbtn: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#464646',
    borderRadius: 40,
    height: 50,
    width: Dimensions.get('window').width - 23,
    marginTop: 20,
    backgroundColor: '#18AEC7',
  },
  logo: {
    height: 90,
    width: 90,
  },
});
