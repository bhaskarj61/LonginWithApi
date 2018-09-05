import { observable,action } from "mobx";

class AuthStore{
    @observable responseJson=['a','b','c'];
    //  @action authenticateUser = (email, password) => {
    //     let response =  fetch('http://192.168.12.39:7000/api/v1/user/authenticateUser',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email: email,
    //                 password:password,
    //             }),
    //         });
    //      responseJson = response.json();
    // }
}

export default AuthStore;