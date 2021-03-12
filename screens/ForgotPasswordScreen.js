//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native';
import { Input } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

//this screen facilitates forgot password option
export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showForm: true
        }
    }

    ForgotPassword = (email) => {
        if(email===null){
            Alert.alert("Enter an email")
        }
        else{
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => { this.props.navigation.navigate("AlertScreen") })
            .catch(error => {
                //var errorCode = error.code
                var errorMessage = error.message
                Alert.alert(errorMessage)
            })
    }
}

    showForm = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter your registered email id"}
                    placeholder={"abc@example.com"}
                    placeholderTextColor={'grey'}
                    keyboardType='email-address'
                    leftIcon={{
                        type: 'Entypo',
                        name: 'mail',
                        color: 'black',
                        size: 24
                    }}
                    onChangeText={(text) => {
                        this.setState({
                            email: text
                        })
                    }}/>

                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.ForgotPassword(this.state.email)
                        this.setState({
                            showForm: false
                        })
                    }}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                    onPress={() => {
                        this.props.navigation.navigate("LoginScreen")
                    }}>
                    <Text style={styles.buttonText2}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            this.showForm()
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
    title: {
        marginTop: RFValue(10),
        fontSize: RFValue(25),
        color: '#005A36'
    },
    button: {
       // height: RFValue(30),
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
    button2: {
        marginTop: RFValue(10),
        alignContent: 'center',
        alignSelf: 'center',
      //  height: RFValue(30),
      //  width: RFValue(70),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: '#D7D1FF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText2: {
       // fontSize: RFValue(10),
        color: '#BC0049',
    },
})