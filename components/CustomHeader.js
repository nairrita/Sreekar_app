import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CustomHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <Header
                leftComponent={
                    <Icon name='bars' type='font-awesome' color='#696969'
                    // onPress={() => this.props.navigation.toggleDrawer()}
                    />
                }
                centerComponent={{
                    text: this.props.title,
                    style: {
                        color: '#90A5A9',
                        fontSize: 20,
                        fontWeight: "bold"
                    }
                }} />
                
        )
    }
}