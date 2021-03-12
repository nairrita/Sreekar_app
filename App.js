import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ShopSignUpScreen from './screens/ShopSignUpScreen';
import UserSignUpScreen from './screens/UserSignUpScreen';
import SplashScreen from './screens/SplashScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AlertScreen from './screens/AlertScreen';
import {DrawerNavigator} from './components/DrawerNavigator'

export default class App extends React.Component{
     render(){
       return (
         //never give view tag in app.js here as it can lead to glitches. 
           <AppContainer/>
           
      );
    }
}

const switchNavigator = createSwitchNavigator({
  SplashScreen:{
    screen:SplashScreen
  },
  LoginScreen:{
    screen:LoginScreen
  },
  UserSignUpScreen:{
    screen:UserSignUpScreen
  },
  ShopSignUpScreen:{
    screen:ShopSignUpScreen
  },
  ForgotPasswordScreen:{
    screen:ForgotPasswordScreen
  },
  AlertScreen:{
    screen:AlertScreen
  },
  //BottomTab:{
   //screen:AppTabNavigator
  //},
  Drawer:{
    screen:DrawerNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
