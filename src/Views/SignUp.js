import React, { Component } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      email: '',
      password: '',
    };
  }

  onSignUp=async()=> {

    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   if(regexEmail.test(this.state.email)&&regexPassword.test(this.state.password)){
    try {
      let response = await fetch('http://192.168.12.39:7000/api/v1/user/createUser',
       {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       },
        body: JSON.stringify({
          name:this.state.name,
          email: this.state.username,
          password:this.state.password,
          }),
        });
      let responseJson = await response.json();
      alert("responseJson.success")
     return this.props.navigation.navigate('SignIn')    
      } catch (error) {
      console.error(error);
      }
   }
   else{
    alert("Invalid entries")
   } 
    }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

        <View style={{ margin: 20 }}>

          <LoginTextBox placeholder='Name'
          onChangeText={(name) => this.setState({ name })}
          ></LoginTextBox>

          <LoginTextBox placeholder='Email'
          onChangeText={(email) => this.setState({ email })}></LoginTextBox>

          <LoginTextBox placeholder='Password'
          onChangeText={(password) => this.setState({ password })}></LoginTextBox>

          <TouchableOpacity
            onPress={this.onSignUp}>
            <ImageButton value='SignIn'></ImageButton>

          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

