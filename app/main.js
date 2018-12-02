import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NewsList from '../components/newsList';
import SearchBar from '../components/searchBar';
import Header from '../components/header';


export default class Main extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Header />
          <SearchBar />
          <NewsList />
      </View>
    )
  }
}
