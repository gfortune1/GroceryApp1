import React from "react";
import { View, Text } from "native-base";
//import { createNativeStackNavigar } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import SingleProduct from "../screens/SingleProduct";
import PaymentScreen from "../screens/PaymentScreen";
import ShippingScreen from "../screens/ShippingScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import SingleProductScreen from "../screens/SingleProduct";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomNav} />
      <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Chec" component={PaymentScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
