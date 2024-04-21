import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children}) => {
    return (
        <TouchableOpacity
        style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 32,
            justifyContent: "center",
            marginTop: -8,
            alignItems: "center",
            backgroundColor: "#5C3EBC",
            width: 55,
            height: 55,
          }}
        >
            <Entypo name="list" size={32} color="#FFD00C" />
        </TouchableOpacity>
    )
}

function RootNavigator() {
  return (
    // 1
    // önce Tab.Navigator'a initialRouteName'i verdik,
    // sonra screenOptions veriyoruz bunlar Tab.Navigator'ın stili
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      {/* 2 - Şimdi de child'larını vereceğiz */}
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
       <Tab.Screen
          name="Search"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
        name="list"
        component={HomeNavigator}
        options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        />
        <Tab.Screen
          name="Kullanici"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
          
        />
        <Tab.Screen
          name="Gift"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />            ),
          }}
        />
    </Tab.Navigator>
  );
}

export default RootNavigator;
