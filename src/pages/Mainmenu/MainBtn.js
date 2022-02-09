import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Girl from '../../assets/img/mainmenu/girl.png';

const MainBtn = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <Image source={image} style={style.logo} />
      <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
        {title}
      </Text>
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
});
