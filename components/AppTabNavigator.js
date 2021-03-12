//import statements
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddOrderScreen from '../screens/AddOrderScreen';
import CurrentOrderScreen from '../screens/CurrentOrderScreen';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize'
import { AppStackNavigator } from './AppStackNavigator';
import PaymentTestScreen from '../screens/PaymentTestScreen';

//tab navigation const
export const AppTabNavigator = createBottomTabNavigator({
    
    //first bottom tab
    CurrentOrder: {
        screen: CurrentOrderScreen,
        navigationOptions: {
            width:'100%',
            tabBarIcon:<Image
            source ={require('../assets/order-list.png')}
            style = {{width:RFValue(20),height:RFValue(20)}}
            />,
            tabBarOptions:{
                activeTintColor: '#fff',
                inactiveTintColor: 'grey',
                activeBackgroundColor: '#1ca9c9',
                inactiveBackgroundColor: '#b0e0e6',
                    style: {
                          backgroundColor: '#C6BDFF',
                          
                    }
             },
            tabBarLabel: 'Current Order',
        }
        
    },

    //second bottom tab
    AddOrder: {
        screen: AddOrderScreen,
        navigationOptions: {
            width:'100%',
            tabBarIcon:<Image
            source ={require('../assets/add-order.png')}
            style = {{width:RFValue(20),height:RFValue(20)}}
            />,
            tabBarOptions:{
                activeTintColor: '#fff',
                inactiveTintColor: 'grey',
                activeBackgroundColor: '#1ca9c9',
                inactiveBackgroundColor: '#b0e0e6',
                    style: {
                          backgroundColor: '#C6BDFF',
                          
                    }
             },
            tabBarLabel: 'Add Order',
        }
    },
  /*  Payment:{
        screen:PaymentTestScreen,
        navigationOptions: {
            width:'100%',
            tabBarIcon:<Image
            source ={require('../assets/Payment.png')}
            style = {{width:RFValue(20),height:RFValue(20)}}
            />,
            tabBarLabel: 'Payment',
        }
    }*/
},
    {   //lazy: loads all tabs when rendered instead when focused
        lazy:false,
        
    },
    
)


    