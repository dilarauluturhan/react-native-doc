import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreens"
import { Image } from 'react-native';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
            headerStyle: {backgroundColor: "#5C3EBC"},
            headerTitle: () => (
                <Image
                resizeMode='contain'
                style={{width: 70, height: 30, marginLeft: 130}}
                source={require("../../assets/getirlogo.png")}
                />
            )
        }}
        >

        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigator