//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    //Dimensions,
    Alert
} from 'react-native';
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons';
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

export default class ShopSignUpScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            eye:'visibility-off',
            showPassword:true,
            ceye:'visibility-off',
            showConPassword:true,
            name:'',
            contact:'',
            email: '',
            password: '',
            confirmPassword: '',
            userType:''
        }
    }

    userSignUp = (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            Alert.alert("Password doesn't match.")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    Alert.alert("Signed up successfully")
                    this.props.navigation.navigate("LoginScreen")
                    db.collection('users').add({
                        name:this.state.name,
                        contact:this.state.contact,
                        email:this.state.email,
                        userType:this.state.userType
                    })
                })
                .catch(error => {
                    //var errorCode = error.code
                    var errorMessage = error.message
                    Alert.alert(errorMessage)
                 })
        }
    }

    //show/hide password
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

    //show/hide password
    changeConPwdType = () => {
        if (this.state.showConPassword) {
            this.setState({
                ceye: 'visibility',
                showConPassword: false,
                confirmPassword: this.state.confirmPassword
            })
        } else {
            this.setState({
                ceye: 'visibility-off',
                showConPassword: true,
                confirmPassword: this.state.confirmPassword
            })
        }
    }

    //this screen allows to sign up as a user
    render() {
        return (
            <ScrollView style = {styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>User Registration</Text>
                </View>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter your name:"}
                    placeholder={'Your name'}
                    placeholderTextColor={'grey'}
                    leftIcon={{
                        type: 'MaterialIcons',
                        name: 'person',
                        color: 'black',
                        size: 24
                    }}
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        })
                    }}/>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Contact details:"}
                    placeholder={'Phone no.'}
                    placeholderTextColor={'grey'}
                    keyboardType = {'phone-pad'}
                    maxLength = {10}
                    leftIcon={{
                        type: 'FontAwesome',
                        name: 'phone',
                        color: 'black',
                        size: 24
                    }}
                    onChangeText={(text) => {
                        this.setState({
                            contact: text
                        })
                    }}/>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter your email:"}
                    placeholder={'abc@example.com'}
                    placeholderTextColor={'grey'}
                    keyboardType={'email-address'}
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

                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter your password:"}
                    placeholder={'Password'}
                    placeholderTextColor={'grey'}
                    secureTextEntry={this.state.showPassword}
                    leftIcon={{
                        type: 'MaterialCommunityIcons',
                        name: 'lock',
                        color: 'black',
                        size: 24
                    }}
                    rightIcon = {{
                        type:'MaterialIcons',
                        name:this.state.eye,
                        onPress:()=>{
                            this.changePwdType()
                        }
                    }}
                    onChangeText={(text) => {
                        this.setState({
                            password: text
                        })
                    }}/>

                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Confirm your password:"}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'grey'}
                    secureTextEntry={this.state.showConPassword}
                    leftIcon={{
                        type: 'MaterialCommunityIcons',
                        name: 'lock',
                        color: 'black',
                        size: 24
                    }}
                    rightIcon = {{
                        type:'MaterialIcons',
                        name:this.state.ceye,
                        onPress:()=>{
                            this.changeConPwdType()
                        }
                    }}
                    onChangeText={(text) => {
                        this.setState({
                            confirmPassword: text
                        })
                    }}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.userSignUp(this.state.email, this.state.password, this.state.confirmPassword)
                            this.setState({
                                userType:'user'
                            })
                        }}><Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => {this.props.navigation.navigate("LoginScreen")}}>
                        <Text style={styles.buttonText2}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    titleContainer:{
        justifyContent: 'center' 
    },
    title: {
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: RFValue(35),
        color: '#005A36',
        marginTop:RFValue(10)
    },
    buttonContainer:{
        alignItems:'center'
    },
    button: {
        height: RFValue(50),
        width: RFValue(120),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: 'coral',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        fontSize: RFValue(20),
        color: '#fff'
    },
    button2: {
        marginTop: RFValue(10),
        alignContent: 'center',
        alignSelf: 'center',
        height: RFValue(50),
        width: RFValue(100),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        backgroundColor: '#D7D1FF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText2: {
        fontSize: RFValue(15),
        color: '#BC0049',
    }
})