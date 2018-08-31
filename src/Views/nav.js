import React, {Component} from 'react';
import { View,AsyncStorage,ActivityIndicator} from 'react-native';

export default class Nav extends Component {

    componentWillMount()
    {
        this.getToken();
    }
    getToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            this.props.navigation.navigate('List')
          }
          else{
            this.props.navigation.navigate('Login')
          }
         } catch (error) {
            alert(error)
           // Error retrieving data
         }
      }
  render() {
    return (
        <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
                <ActivityIndicator size="large" color="#756" />
        </View>
    );
  }
}
