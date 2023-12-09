import React from "react";
import { Box, Text, ScrollView, Heading } from "native-base";
import OrderInfo from "../components/OrderInfo";
import Colors from "../colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../components/OrderItems";
import OrderModal from "../components/OrderModal";

const OrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeAreaTop pt={6}>
      <Box>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            primary
            subTitle="Dennis Ngugi"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />

          <OrderInfo
            title="SHIPPING INFO"
            success
            subTitle="Shipping: United States"
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
            danger
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
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItems />
        {/* TOTAL */}
        <OrderModal />
      </Box>
    </Box>
  );
};

export default OrderScreen;
