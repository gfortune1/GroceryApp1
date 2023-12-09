import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, useTheme, StyleSheet } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center } from 'native-base';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNav from './Navigation/BottomNav';
import SingleProduct from './screens/SingleProduct';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentScreen from './screens/PaymentScreen';
// import OrderScreen from './screens/OrderScreen';
import PlaceOrderModal from './components/PlaceOrderModal';
import OrderScreen from './screens/OrderScreen';
import HomeScreen from './screens/HomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
        >
                {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Checkout" component={PaymentScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Payment" component={PaymentMethod} options={{ headerShown: false }} /> */}
                <Stack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
                <Stack.Screen name="Shipping" component={ShippingScreen} />
                {/* <Stack.Screen name="Checkout" component={PaymentScreen} /> */}
                <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
                {/* <Stack.Screen name="order" component={OrderScreen} /> */}
                <Stack.Screen name="order" component={OrderScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
              </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

