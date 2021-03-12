//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    //Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

//showing a message to check email when forgot password is called 
export default class AlertScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Check your registered email for a password reset link.</Text>
                <TouchableOpacity style = {styles.button}
                    onPress={() => {this.props.navigation.navigate("LoginScreen")}}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C6BDFF',
        flex:1,
        //width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    text: {
        marginTop: RFValue(50),
        fontSize: RFValue(20),
        color: 'black',
        textAlign:'center'
    },
    button: {
      //  height: RFValue(30),
       // width: RFValue(70),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: 'coral',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
       // fontSize: RFValue(10),
        color: '#fff'
    },
})