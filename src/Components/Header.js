import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View} from 'react-native';


export default class Header extends Component {
  render() {
    return (
        <View style={{ height: 80, backgroundColor: '#446A36', flexDirection: 'row',justifyContent:'space-between' }}>
                  
        <View >
                <TouchableOpacity onPress={this.redirectToProfile}>
                    <Image
                        style={{ height: 50,borderRadius:50,marginTop:24, width: 40, marginRight: 20 }}
                        source={require('../Images/profile.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:30,fontStyle:'sans-serif',marginTop:10,color:'#fff'}}>
                    Users List
                </Text>
            </View>

            <View>
                <TouchableOpacity onPress={this.deleteUserToken}>
                    <Image
                        style={{ height: 60,borderRadius:50,marginTop:20, width: 40, marginRight: 20 }}
                        source={{ uri: 'http://chittagongit.com//images/logout-icon/logout-icon-18.jpg' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}