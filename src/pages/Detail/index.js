import {StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import React, {Component} from 'react';
import Icon from '../../assets/img/dekor.png';
import {TouchableOpacity} from 'react-native';
import Copy from '../../assets/img/copy.png';
import Clipboard from '@react-native-community/clipboard';

export class Detail extends Component {
  constructor(props) {
    super(props);
  }

  salin = copy => {
    Clipboard.setString(copy);
    ToastAndroid.show('berhasil disalin', ToastAndroid.SHORT);
  };

  render() {
    const kata = this.props.route.params.kata;
    const definisi = this.props.route.params.definisi;
    const copy =
      this.props.route.params.kata + ' : ' + this.props.route.params.definisi;
    return (
      <View style={{backgroundColor: '#18AEC7', flex: 1}}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.textheader}>
            <Text style={styles.h1}>KONSEP {kata.toLocaleUpperCase()}</Text>
            <Text style={styles.h2}>ILMU PENGETAHUAN SOSIAL</Text>
          </View>
          <Image source={Icon} style={{width: 100, height: 100}} />
        </View>
        {/* Konten */}
        <View style={styles.content}>
          <Text style={styles.textcontent}>{kata}</Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              paddingLeft: 15,
              color: 'black',
            }}
          >
            {definisi}
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.salin(copy)}>
            <Text style={{fontSize: 15, color: 'white'}}>Salin</Text>
            <Image
              source={Copy}
              style={{width: 20, height: 20, marginLeft: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  // header
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
    color: 'black',
    // flex: 1,
    // paddingLeft: 5,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#18AEC7',
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
