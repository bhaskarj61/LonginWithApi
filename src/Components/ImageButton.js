import React, {Component} from 'react';
import {StyleSheet, Text,ImageBackground,View} from 'react-native';


export default class ImageButton extends Component{
  render() {
    return (
          <ImageBackground
            {...this.props}
            style={styles.button}
            source={require('../Images/orange.png')}>
            <Text style={{ color: 'white'}} >{this.props.value}</Text>
            </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      height: 50,
      marginTop: 20,
      justifyContent: 'center',
       alignItems: 'center'
    }
  });
