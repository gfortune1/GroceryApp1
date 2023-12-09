import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center } from 'native-base';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../colors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
          backBehavior="main"
          initialRouteName="Login"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { elevation: 0,
              backgroundColor: Colors.red,
              height: 60, },
            headerShown: false,
            tabBarHiddenOnKeyboard: true,
          }}
        >
          <Tab.Screen
            name="Main"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Center>
                  {focused ? (
                    <Entypo name="home" size={24} color={Colors.deepestGray} />
                  ) : (
                    <AntDesign name="home" size={24} color={Colors.black} />
                  )}
                </Center>
              ),
            }}
          />
          {/* Cart screen */}
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Center>
                  {focused ? (
                    <FontAwesome5 name="shopping-basket" size={24} color={Colors.deepestGray} />
                  ) : (
                    <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.black} />
                  )}
                </Center>
              ),
            }}
          />
          {/* Profile screen */}
          {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Center>
                  {focused ? (
                    <FontAwesome name="user" size={24} color={Colors.deepestGray} />
                  ) : (
                    <AntDesign name="user" size={24} color={Colors.black} />
                  )}
                </Center>
              ),
            }}
          />
          
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.black,
    height: 60,
  },
});

export default BottomNav;
