//Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render it - at least register one component to the application.
//Render app 'albums', pass in a function that returns the first component. It's called App
AppRegistry.registerComponent('albums', () => App);
