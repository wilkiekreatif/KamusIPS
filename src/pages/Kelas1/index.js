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

export default class Kelas1 extends React.Component {
  render() {
    const source = {
      uri: 'https://wildanauliana.rsintanhusada.com/pdf/kls7.pdf',
      cache: true,
    };

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
                KAMUS DIGITAL KELAS 7
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
