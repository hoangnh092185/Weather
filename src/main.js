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
    // const { region } = this.props;
    // console.log(region);

    return (
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}>
        </MapView>
    );
  }
  onRegionChangeComplete(region){
    console.log(region);
  }
}
const styles = StyleSheet.create({
 map: {
   flex: 1
 }
});

AppRegistry.registerComponent('weather', () => Main);
