import React, { Component } from 'react';
import {Image, View } from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';

export default class profile extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignitems: 'center' }}>
        <Image
          style={{ height: 100, width: 100, marginLeft: 140, marginTop: 20, borderRadius: 50 }}
          source={{ uri: 'https://images5.alphacoders.com/532/thumb-1920-532559.png' }}>
        </Image>

        <View style={{ margin: 20 }}>
          <LoginTextBox placeholder='bhaskar'></LoginTextBox>
          <LoginTextBox placeholder='joshi'></LoginTextBox>
          <LoginTextBox placeholder='bhaskarj61@gmail.com'></LoginTextBox>
        </View>

        <View style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
          <ImageButton value='Save'> </ImageButton>
        </View>
      </View>

    );
  }
}


