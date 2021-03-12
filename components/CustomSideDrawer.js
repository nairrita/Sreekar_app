import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import {DrawerItems} from '../node_modules/react-navigation-drawer';

export default class CustomSideDrawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.43)",
  },
  
  drawerItemsContainer: {
    flex: 1,
    backgroundColor:'beige'
},
});

