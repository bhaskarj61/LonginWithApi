import React, {Component} from 'react';
import SignIn from './src/Views/SignIn';
import SignUp from './src/Views/SignUp';
import { createStackNavigator} from 'react-navigation'
import UserList from './src/Views/UserList';

export default class App extends Component {
  render() {
    return (
        <AppStackNavigator></AppStackNavigator>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  List:{
    screen:UserList
  }

})