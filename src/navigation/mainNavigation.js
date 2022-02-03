import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Login from "../screens/login";
import MainScreen from "../screens/mainScreen";

const MainNavigation = createStackNavigator(
{
    Home:{
        screen:Login,
        navigationOptions:{
            headerShown: false
        }
    },
    PrincipalScreen:{
        screen: MainScreen,
        navigationOptions:{
            headerShown: false
        }
    }
},
{
    initialRouteName:"Home",
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"white",
            height: Platform.OS === "ios" ? 60:100

        },
        headerTitleStyle:{
            textAlign:"center",
            color: "blue",
            fontSize:18
        },
        headerTintColor: "blue",
        headerBackTitle:"Volver",
        headerBackTitleStyle:{
            color:"blue",
        }
        
    }
}
);

export default createAppContainer(MainNavigation);