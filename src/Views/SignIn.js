import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image,AsyncStorage, View} from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
        };
      }

      //Storing data in async storage
      storeToken = async (token) => {
        try {
          await AsyncStorage.setItem('token',token);
          alert("token stored")
        } catch (error) {
          // Error saving data
          alert(error)
        }
      }

      //Create user through api
      onSignIn=async()=> {
        try {
          let response = await fetch('http://192.168.12.39:7000/api/v1/user/authenticateUser',
           {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           },
            body: JSON.stringify({
              email: this.state.email,
              password:this.state.password,
              }),
            });
          let responseJson = await response.json();
          console.log(responseJson)
           if(responseJson.success){
            this.storeToken(responseJson.token);   
            return this.props.navigation.navigate('List')}
          } catch (error) {
          console.error(error);
          }
        }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#acefe2', justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={{ height: 150,width:150,marginLeft:70}}
                        source={require('../Images/loginLogo.png')}>
                    </Image>

                    <View style={{ margin: 20 }}>
               
                        <LoginTextBox placeholder='Email'
                         onChangeText={(email) => this.setState({ email })}
                        ></LoginTextBox>

                        <LoginTextBox placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                        ></LoginTextBox>

                        <TouchableOpacity
                            onPress={this.onSignIn}>
                            <ImageButton value='SignIn'></ImageButton>
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >

                        <Text>Forget Your Password?</Text>

                    </TouchableOpacity>

                </View>

                <View>

                    <TouchableOpacity
                     onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Create New Account..</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
    
}



