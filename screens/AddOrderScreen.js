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

    Alert
} from 'react-native';
import { Input } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase';

export default class AddOrderScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            userType: '',
            item: '',
            rate: '',
            quantity: '',
            listName: '',
            data: [],
            items: [],
            dataState: false
        }
    }

    //differentiating what to show on the screen depending on the type of user
    getUserType = () => {
        db.collection('users').where('email', '==', this.state.userId).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var user_type = doc.data().userType
                    this.setState({
                        userType: user_type
                    })
                })
            })
    }
    getItems = () => {
        /*db.collection("items").doc(this.state.userId).collection(this.state.listName).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var id = doc.id; // randomly generated document ID
                var data = doc.data(); // key-value pairs from the document
                console.log(id)
                console.log(data)
            });
            
        });*/

    }
    addItemToExistingList = (data, item, quantity) => {


        //var index = 1;
        //var fieldName = "item"+index
        //var docRef = db.collection('items')
        //var docRefId = docRef.doc[0].id
        // this.getArray();

        var itemArray = []
        itemArray = [data, { item, quantity }]
        this.setState({
            data: itemArray
        })
        //console.log(this.state.data)
        db.collection('items').doc(this.state.listName).set({
            list: this.state.data
        })
        /*  else{
              var itemArray = [item,quantity];
              
              this.setState({
                      data:[...itemArray]
                  })
         
          db.collection('items').doc(this.state.listName).set({
              list:itemArray
          })
          }*/
        //index++;
        this.setState({
            item: '',
            quantity: '',

        })

    }

    addItemToNewList = (item, quantity) => {


        //var index = 1;
        //var fieldName = "item"+index
        //var docRef = db.collection('items')
        //var docRefId = docRef.doc[0].id
        // this.getArray();

        var itemArray = { item, quantity };
        this.setState({
            data: itemArray
        })
        //console.log(this.state.data)
        db.collection('items').doc(this.state.listName).set({
            list: this.state.data
        })

        /*  else{
              var itemArray = [item,quantity];
              
              this.setState({
                      data:[...itemArray]
                  })
         
          db.collection('items').doc(this.state.listName).set({
              list:itemArray
          })
          }*/
        //index++;
        this.setState({
            item: '',
            quantity: '',

        })

    }

    getArray = () => {
        const getArray = db.collection("items").doc(this.state.listName)
        getArray.get()

            .then((doc) => {
                if (doc.exists) {
                    const documents = doc.data()
                    this.setState({
                        data: documents
                    })
                    this.addItemToExistingList(this.state.data, this.state.item, this.state.quantity)
                    //console.log(this.state.data)
                }
                else { this.addItemToNewList(this.state.item, this.state.quantity) }
            })



    }

    addToDatabase = (item,rate) =>{
        db.collection("owner").add({
            itemName:item,
            rate:rate,
            userId:this.state.userId,
            userType:this.state.userType
        })
    }

    finishList = ()=>{

    }

    //showing user screen if user type is user
    showUser = () => {
        return (
            //user screen
            <View style={styles.container}>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter a random list name:"}
                    placeholder={"eg. List1"}
                    placeholderTextColor="grey"
                    onChangeText={(text) => {
                        this.setState({
                            listName: text
                        })

                    }}
                    value={this.state.listName}
                />
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter item to add to list:"}
                    placeholder={"Item Name"}
                    placeholderTextColor="grey"
                    onChangeText={(text) => {
                        this.setState({
                            item: text
                        })

                    }}
                    value={this.state.item}
                />

                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Quantity:"}
                    placeholder={"Quantity"}
                    keyboardType={"numeric"}
                    placeholderTextColor="grey"
                    onChangeText={(text) => {
                        this.setState({
                            quantity: text
                        })
                    }}
                    value={this.state.quantity} />
                <TouchableOpacity
                style={styles.addButton}
                    onPress={() => {
                        //this.addItem(this.state.item,this.state.quantity)
                        //this.getItems()
                        this.getArray();
                        /*db.collection('items').doc(this.state.userId).collection(this.state.listName)
                        .get()
                        .then(querySnapshot => {
                         const documents = querySnapshot.docs.map(doc => doc.data())
                         this.setState({
                             data:documents
                         })
                         
                         //console.log(this.state.data)
          })*/

                    }}
                ><Text>Add this item</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.finishButton}
                onPress = {()=>{
                    this.finishList()
                }}
                ><Text>Finish list</Text>
                </TouchableOpacity>
            </View>
        )
    }

    //showing owner screen when user type is owner
    showOwner = () => {
        return (
            //owner screen
            <View>
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"Enter an item from your shop to add to available items:"}
                    placeholder={"Item Name"}
                    placeholderTextColor="grey"
                    onChangeText={(text) => {
                        this.setState({
                            item: text
                        })
                    }}
                    value = {this.state.item}
                    />
                <Input
                    theme={{ colors: { primary: '#000000' } }}
                    label={"MRP:"}
                    placeholder={"Rate"}
                    placeholderTextColor="grey"
                    onChangeText={(text) => {
                        this.setState({
                            rate: text
                        })
                    }}
                    value = {this.state.rate}
                    />
                <TouchableOpacity
                    onPress={() => {
                        this.addToDatabase(this.state.item,this.state.rate)
                        this.setState({
                            item:"",
                            rate:"",
                        })
                    }}
                >
                    <Text>Add this item to database</Text>
                </TouchableOpacity>
            </View>
        )
    }

    //calling getUserType as soon as screen is rendered so that when the screen renders,the items can be shown
    componentDidMount() {
        this.getUserType();


    }

    //calling both tyes of screens to be rendered
    render() {
        if (this.state.userType === 'user') {
            return (
                this.showUser()
            )
        }
        else {
            return (
                this.showOwner()
            )
        }
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
    
})