//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    KeyboardAvoidingView,
    Image,
    Alert
} from 'react-native';
import { Header, Icon } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class CurrentOrderScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            data: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>No current orders!</Text>
                <Text style={{ textAlign: 'center', marginTop: 150 }}>Click on the 'Add Order' option to create an order!</Text>
                <Image source={{ uri: "https://static.thenounproject.com/png/546313-200.png" }}
                    style={{
                        width: '20%',
                        height: '50%',
                        marginLeft: RFValue(200),

                    }} />
            </View>
            


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C6BDFF'
        // justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: RFValue(25),
        color: '#005A36',
        marginLeft: RFValue(10)
    },
})