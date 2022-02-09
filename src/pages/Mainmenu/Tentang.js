import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={style.searchbtn} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Dian Fauziah, S.Pd
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  searchbtn: {
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#00BCDC',
    justifyContent: 'center',
  },
});

export default SearchBtn;
