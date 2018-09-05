import {
   CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE,
    APIServer,} 
    from "./constants";


export const createUserRequest= () => ({type:CREATE_USER_REQUEST});

export const createUserSuccess= (json) => ({
  type:CREATE_USER_SUCCESS,
  payload:json
});

export const createUserFailure= json => ({
  type:CREATE_USER_FAILURE,
  payload:json
});

export const createUser= (email,password) =>{
  return async (dispatch) =>{
    dispatch(createUserRequest());
    try{
      let response = await fetch(APIServer+'/user/authenticateUser',
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
      let json = await response.json();
      dispatch(createUserSuccess(json))
    }
    catch(error){
      dispatch(createUserFailure(error))
    }
  }
}


