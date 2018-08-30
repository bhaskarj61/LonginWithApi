import React, {Component} from 'react';
import {StyleSheet,TextInput} from 'react-native';

export default class LoginTextBox extends Component{
    render() {
      return (
           <TextInput
           {...this.props}
            style={styles.input}>{this.props.value}</TextInput>
      );
    }
  }
  const styles = StyleSheet.create({
    input: {
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
    },
  });