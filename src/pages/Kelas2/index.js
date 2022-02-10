/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';
import Pdf from 'react-native-pdf';
import Icon from '../../assets/img/dekor.png';

export default class Kelas2 extends React.Component {
  render() {
    const source = {
      uri: 'https://wildanauliana.rsintanhusada.com/pdf/kls8.pdf',
      cache: true,
    };
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
      <View>
        {/* <View style={styles.container}> */}
        <View style={{backgroundColor: '#18AEC7'}}>
          <View
            style={{
              height: 70,
              backgroundColor: '#18AEC7',
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                marginLeft: 20,
                // backgroundColor: 'purple',
              }}
            >
              <Text style={{fontSize: 20, color: '#FFF'}}>
                KAMUS DIGITAL KELAS 8
              </Text>
              <Text style={{fontSize: 15, color: '#FFF'}}>
                ILMU PENGETAHUAN SOSIAL{' '}
              </Text>
            </View>
            <Image source={Icon} style={{width: 100, height: 100}} />
          </View>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: '#FFF',
    width: '100%',
    // height: 500,
    // flex: 1,
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
