//Import a library to create a component
import React from 'react';
import { View, Text } from 'react-native';

//Create a component

const Header = (props) => {
  const { textStyle, viewStyle } = styles; //Destructuring 

//without this const above, the {viewStyle} = styles.viewStyle
  return (
    <View style={viewStyle}> 
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white'
  },
  viewStyle: {
    backgroundColor: '#70CF32',
    height: 60, 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  }
};

//Make the component available to other parts of the app
export default Header;
