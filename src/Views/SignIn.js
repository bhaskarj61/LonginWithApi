import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, AsyncStorage, View } from 'react-native';
import LoginTextBox from '../Components/LoginTextBox';
import ImageButton from '../Components/ImageButton';
import { observer,inject} from 'mobx-react';
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

 
    //Create user through api
    onSignIn = () => {
        this.props.authStore.authenticateUser(this.state.email,this.state.password);
         responseJson=this.props.authStore.resJson
        // alert("data coming to onSignIn "+JSON.stringify(this.props.authStore.resJson))
        if (responseJson.success) {
            this.props.authStore.storeToken(responseJson.token);
            this.props.authStore.storeEmail(responseJson.data.email);
            this.props.authStore.storeName(responseJson.data.name);
            return this.props.navigation.navigate('List')
        }

    }

    render() {
        
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={{ height: 150, width: 150, marginLeft: 120 }}
                        source={require('../Images/greenLogo.png')}>
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

