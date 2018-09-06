import { observable, action } from "mobx";
import { AsyncStorage } from 'react-native';
import fetchResource from "../Network_Wrapper/network";

class AuthStore {
    @observable resJson = [];
    @observable email='';
    @observable name='';

    @action authenticateUser = (email, password) => {
        return fetchResource('user/authenticateUSer', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response)=>{
            alert(response);
        })

    }

    @action createUser = async (name, email, password) => {
        let response = await fetch('http://192.168.12.39:7000/api/v1/user/createUser',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            });
        res = await response.json();
        this.resJson = await res;
        //   alert("api"+JSON.stringify(res))

    }

    //Storing data in async storage
    @action storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
            // alert("token stored")
        } catch (error) {
            // Error saving data
            alert(error)
        }
    }
    @action storeEmail = async (email) => {
        try {
            await AsyncStorage.setItem('email', email);
            // alert("email stored")
        } catch (error) {
            // Error saving data
            alert(error)
        }
    }
    @action storeName = async (name) => {
        try {
            await AsyncStorage.setItem('name', name);
            // alert("name stored")
        } catch (error) {
            // Error saving data
            alert(error)
        }
    }
    //Get token from asyn storage
    @action getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            this.token = await value;
            if (value !== null) {
                this.showUserList(value)
                this.setState({ pageNo: ++this.state.pageNo })
            }
        } catch (error) {
            alert(error)
        }
    }
        //Get email from asyn storage
        @action getEmail = async () => {
            try {
                const value = await AsyncStorage.getItem('email');
                this.email = await value;;
                if (value !== null) {
                    this.showUserList(value)
                    this.setState({ pageNo: ++this.state.pageNo })
                }
            } catch (error) {
                alert(error)
            }
        }
            //Get name from asyn storage
    @action getName = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            this.name = await value;
            if (value !== null) {
                this.showUserList(value)
                this.setState({ pageNo: ++this.state.pageNo })
            }
        } catch (error) {
            alert(error)
        }
    }


}

export default AuthStore;