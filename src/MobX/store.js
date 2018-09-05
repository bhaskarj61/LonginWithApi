import { observable,action } from "mobx";

class AuthStore{
    @observable resJson=[];
     @action authenticateUser =async (email, password) => {
         response = await fetch('http://192.168.12.39:7000/api/v1/user/authenticateUser',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password:password,
                }),
            });
         res = await response.json();
         this.resJson=res;
         alert(JSON.stringify(res))
        //  return res;
        
    }
}

export default AuthStore;