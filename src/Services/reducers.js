import {
   CREATE_USER_SUCCESS, 
   CREATE_USER_FAILURE,
   CREATE_USER_REQUEST} 
   from "./constants";
  

const initialState = {
  errorMessage:'',
  user: [],
};

// const userReducer = () => ['a','b','c'];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
      };
      case CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage:action.payload
      };
      case CREATE_USER_SUCCESS:
      return {
        ...state,
        user:action.payload
      };
    default:
      return { state };
  }
};

export default userReducer;
