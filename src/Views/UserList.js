import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, FlatList, ActivityIndicator, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class UserList extends Component {
    baseUrl = 'http://192.168.12.39:7000/api'
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            isLoading: false,
            pageNo: 1,
            isLoadingMore: false
        };
    }

    deleteUserToken = async () => {
        try {
            await AsyncStorage.removeItem('token');
            this.props.navigation.navigate("Login")
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    redirectToProfile = async () => {
    this.props.navigation.navigate('profile')
    }

    //Get token from asyn storage
    getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                this.showUserList(value)
                this.setState({ pageNo: ++this.state.pageNo })
            }
        } catch (error) {
            alert(error)
        }
    }

    showUserList = async (token) => {
        try {
            let response = await fetch(this.baseUrl + '/v1/User/getUserList/0/' + this.state.pageNo + '/15',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                });
            let responseJson = await response.json();
            return this.setState({ list: this.state.list.concat(responseJson.message.results) })
        } catch (error) {
            console.error(error);
        }
    }

    componentWillMount() {
        this.getToken()
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <ActivityIndicator size="large" color="#blue" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <View style={{ height: 80, backgroundColor: '#446A36', flexDirection: 'row',justifyContent:'space-between' }}>
                  
                <View >
                        <TouchableOpacity onPress={this.redirectToProfile}>
                        <Icon name="user" size={40} color="grey" style={{margin:20}}  />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize:30,fontStyle:'sans-serif',marginTop:10,color:'#fff'}}>
                            Users List
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.deleteUserToken}>
                        <Icon name="sign-out" size={40} color="grey" style={{margin:20}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={this.state.list}
                        onEndThreshold={0.7}
                        onEndReached={this.getToken}
                        renderItem={({ item }) =>

                            <View style={{ marginTop:1, height: 80, backgroundColor: '#fff', borderColor: '#446A36', flexDirection: 'row'}}>
                                <View>
                                    <Image
                                        style={{ borderRadius: 50, width: 60, height: 60, margin: 10 }}
                                        source={{ uri: item.picture.medium }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', textAlign: 'left', fontSize: 20 }}>{item.name.first} {item.name.last}</Text>
                                    <Text style={{ color: '#727', textAlign: 'left', fontSize: 14 }}>{item.email}</Text>
                                </View>
                            </View>

                        }
                    />
                </View>
            </View>
        );
    }
}