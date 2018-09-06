import React, { Component } from 'react';
import SignIn from './src/Views/SignIn';
import SignUp from './src/Views/SignUp';
import { createStackNavigator } from 'react-navigation'
import UserList from './src/Views/UserList';
import Nav from './src/Views/nav';
import profile from './src/Views/profile';
import { Provider } from 'mobx-react'
import AuthStore from './src/MobX/store';
import Settings from './src/Views/Settings';

const authStore = new AuthStore();

const stores = {
authStore
}
 export default class App extends Component {
  render() {
    return(
      <Provider {...stores}>
        <AppStackNavigator/>
      </Provider>
    )
  }
}
const AppStackNavigator = createStackNavigator({
  Nav: {
    screen: Nav,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  List: {
    screen: UserList,
    navigationOptions: {
      header: null
    }
  },
  profile:{
    screen:profile,  
     navigationOptions: {
      header: null
    }
  },
  settings:{
    screen:Settings,  
     navigationOptions: {
      header: null
    }
  }

})



