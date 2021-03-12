//import statements
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    KeyboardAvoidingView,
    ScrollView,
    //Dimensions,
    Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

export default class OrderDetailsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>No current orders for details!</Text>
            </View>
        )
    }
}