import {Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const MainBtn = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <Image source={image} style={style.logo} />
      <Text style={style.fonts}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainBtn;

const style = StyleSheet.create({
  mainbtn: {
    justifyContent: 'center',
    elevation: 1,
    alignItems: 'center',
    borderRadius: 20,
    height: 130,
    width: 130,
    margin: 10,
    backgroundColor: '#00BCDC',
  },
  logo: {
    height: 90,
    width: 90,
  },
  fonts: {fontSize: 20, color: 'black', fontWeight: 'bold'},
});
