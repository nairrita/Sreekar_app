import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideDrawer from './CustomSideDrawer';
import PaymentTestScreen from '../screens/PaymentTestScreen';

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        
    },
    Payment: {
        screen: PaymentTestScreen
    }
},

    {
        contentComponent: CustomSideDrawer,
        contentOptions:{
            activeTintColor:"red"
        },
        drawerBackgroundColor: "beige",
    },

    {
        initialRouteName: 'Home',
        
    },

)
