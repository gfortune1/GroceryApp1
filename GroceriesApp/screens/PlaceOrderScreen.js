import React from "react";
import { Box, Text, ScrollView, Heading } from "native-base";
import OrderInfo from "../components/OrderInfo";
import Colors from "../colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../components/OrderItems";
import PlaceOrderModal from "../components/PlaceOrderModal";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const PlaceOrderScreen = ({ navigation }) => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeAreaTop pt={6}>
      <Box>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Dennis Ngugi"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />

          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: USA"
            text="Payment Method: Cash"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />

          <OrderInfo
            title="DELIVER TO"
            subTitle="Address: PO.BOX 1118-20303"
            text="Contact: +254700112233"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* ORDER ITEMS */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTrancated my={4}>
          PRODUCTS
        </Heading>
        <OrderItems />
        {/* TOTAL */}
        <PlaceOrderModal />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
