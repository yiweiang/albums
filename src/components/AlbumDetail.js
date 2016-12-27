//Import a library to create a component
import React from 'react';
import { View, Text } from 'react-native';

//Create a component

const AlbumDetail = (props) => {
  console.log('Loading AD');

  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};
//Make the component available to other parts of the app
export default AlbumDetail;
