import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, AsyncStorage, View } from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';
// import AuthStore from '../MobX/store';
import { observer,inject} from 'mobx-react';
// import {connect} from 'react-redux'
// import { createUser } from './src/Services/actions';
 @inject('authStore')
 @observer
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
            await AsyncStorage.setItem('token', token);
            alert("token stored")
        } catch (error) {
            // Error saving data
            alert(error)
        }
    }
    storeEmail = async (email) => {
        try {
            await AsyncStorage.setItem('email', email);
            alert("email stored")
        } catch (error) {
            // Error saving data
            alert(error)
        }
    }

    //Create user through api
    onSignIn = () => {

        // store.authenticateUser(this.state.email,this.state.password);
        // responseJson=this.props.responseJson
        console.log(responseJson)
        if (responseJson.success) {
            this.storeToken(responseJson.token);
            this.storeEmail(responseJson.data.email);
            return this.props.navigation.navigate('List')
        }

    }

    render() {
        alert(JSON.stringify(this.props.authStore.responseJson))
        return (
            <View style={{ flex: 1, backgroundColor: '#acefe2', justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={{ height: 150, width: 150, marginLeft: 70 }}
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

