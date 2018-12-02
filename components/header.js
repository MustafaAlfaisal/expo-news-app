import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'red',marginTop:Expo.Constants.statusBarHeight}}>
      </View>
    )
  }
}
