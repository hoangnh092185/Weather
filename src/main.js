/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
// import Api from './src/api';

export default class main extends Component {
  constructor(){
    super();
  }
  render(){
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 11.0,
         longitudeDelta: 11.0,
          }}
        >
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

AppRegistry.registerComponent('weather', () => Main);
