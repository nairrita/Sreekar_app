//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    //Dimensions
} from 'react-native';
import { Input,Icon } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';
var logo = require("../assets/grocery.gif")
var loading = require("../assets/loading.gif")

export default class SplashScreen extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate("LoginScreen")
        },5000)
    }

//this is a loading screen
render(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Grocery App</Text>
            <Image source = {logo} style = {styles.animationStyle}/>
            <Image source = {loading} style = {styles.loadingStyle}/>
        </View>
    )
  }   
}

const styles = StyleSheet.create({
    container:{
        flex:1,alignItems:'center',justifyContent:'center'
    },
    title:{
        color:'green',fontSize:RFValue(30)
    },
    animationStyle:{
        width:400,
        height:350
    },
    loadingStyle:{
        width:200,
        height:100,
        marginLeft:50,
    },
})