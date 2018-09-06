import React, { Component } from 'react';
import { Alert, TouchableOpacity, View ,Keyboard} from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';
import { observer,inject} from 'mobx-react';
@inject('authStore')
@observer
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
      this.props.authStore.createUser(this.state.name,this.state.email,this.state.password);
      responseJson=this.props.authStore.resJson
      Keyboard.dismiss();
      // alert(JSON.stringify(this.props.authStore.resJson))
      this.props.navigation.navigate('Login')    
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

