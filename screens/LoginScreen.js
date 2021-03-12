//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    //Dimensions,
    Alert
} from 'react-native';
import { Input } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

//exporting loginScreen as default class and anything else is a normal class. This screen allows authentication
export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            eye: 'visibility-off',
            showPassword: true,
            email: '',
            password: '',

        }
    }
    //userLogin function to login user into app
    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                //return Alert.alert("Logged in!")
                this.props.navigation.navigate('CurrentOrder')
            })
            .catch((error) => {
                //handle errors here
                var errorCode = error.code;
                var errorMessage = error.message;
                //displaying alert message if there's an error
                if (errorCode === 'auth/wrong-password') {
                    Alert.alert('Wrong password.');
                } else {
                    Alert.alert(errorMessage);
                }
            })
    }

    changePwdType = () => {
        if (this.state.showPassword) {
            this.setState({
                eye: 'visibility',
                showPassword: false,
                password: this.state.password
            })
        } else {
            this.setState({
                eye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.title}>Grocery App</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        theme={{ colors: { primary: '#000000' } }}
                        label={"Enter your Email id"}
                        placeholder={'abc@example.com'}
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
                            //console.log(this.state.emailId)
                        }} />

                    <Input
                        theme={{ colors: { primary: '#000000' } }}
                        label={"Enter your Password"}
                        placeholder={'Password'}
                        placeholderTextColor={'grey'}
                        secureTextEntry={this.state.showPassword}
                        leftIcon={{
                            type: 'MaterialCommunityIcons',
                            name: 'lock',
                            color: 'black',
                            size: 24
                        }}
                        rightIcon={{
                            type: 'MaterialIcons',
                            name: this.state.eye,
                            onPress: () => {
                                this.changePwdType()
                            }
                        }}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                            //console.log(this.state.password)
                        }} />

                    <View style = {styles.forgotView}>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate("ForgotPasswordScreen")}}>
                        <Text style={{color:'blue'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => {this.userLogin(this.state.email, this.state.password)}}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpContainer}>
                        <Text>Don't have an account? Sign up!</Text>

                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={() => {this.props.navigation.navigate("UserSignUpScreen")}}>
                            <Text style={styles.signUpButtonText}>Sign Up as a User</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.signUpButton, { width: RFValue(300) }]}
                            onPress={() => {this.props.navigation.navigate("ShopSignUpScreen")}}>
                            <Text style={styles.signUpButtonText}>Sign Up as a Store Owner</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#C6BDFF',
        //width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height
    },
    title: {
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: RFValue(40),
        color: '#005A36',
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: RFValue(10),
    },

    forgotView:{
        marginBottom:RFValue(10)
        //width:Dimensions.get('window').width-RFValue(10)
    },

    loginButton: {
        height: RFValue(50),
        width: RFValue(100),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: 'coral',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText: {
        fontSize: RFValue(20),
        color: '#fff'
    },
    signUpContainer: {
        alignItems: 'center',
        flex:1,
        //width: Dimensions.get('window').width
    },
    signUpButton: {
        marginTop: RFValue(10),
        alignContent: 'center',
        alignSelf: 'center',
        height: RFValue(50),
        width: RFValue(200),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: '#D7D1FF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    signUpButtonText: {
        fontSize: RFValue(15),
        color: '#BC0049',
    }
})
