import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Lup from '../../assets/img/lup.png';

const SearchBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={style.searchbtn} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={Lup} />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Cari Kata
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  searchbtn: {
    elevation: 1,
    borderRadius: 50,
    width: 280,
    height: 50,
    backgroundColor: '#00BCDC',
    justifyContent: 'center',
  },
});

export default SearchBtn;
