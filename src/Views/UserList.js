import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, View } from 'react-native';
import ImageButton from '../Components/ImageButton';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: '',
        };
    }
    static navigationOptions = {
        title: 'User',
        headerTitleStyle:{
            flex:1,
            textAlign:'center'
        }
    };
    showUserList = async() => {
        const { params } = this.props.navigation.state;
        try {
            let response = await fetch('http://192.168.12.39:7000/api/v1/User/getUserList/0/1/100',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': params.token
                    },
                });
            let responseJson = await response.json();
            alert(responseJson.status)
                this.setState({ list: responseJson.message.results })
        } catch (error) {
            console.error(error);
        }
    }
componentWillMount(){
  this.showUserList()
}

    render() {
  
        return (
            <View>
                {/* <TouchableOpacity
                    onPress={this.showUserList}>
                    <ImageButton value='ShowUsers'></ImageButton>
                </TouchableOpacity> */}
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <View style={{ borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ color: '#000', fontSize: 24 }}>{item.name.first}</Text>
                            <Text style={{ color: '#000', fontSize: 16 }}>{item.email}</Text>
                        </View>

                    }
                />
            </View>
        );
    }
}