import React from "react";
import {
  Box,
  Text,
  Center,
  ScrollView,
  HStack,
  Button,
  Spacer,
  VStack,
} from "native-base";
import Colors from "../colors";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import Buttone from "../components/Buttone";

function CartScreen({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center py={3}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}

      {/* CART ITEMS */}
      <VStack showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* TOTAL */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="center"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text fontSize="25">Total</Text>
            <Spacer />
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{ bg: Colors.main }}
            >
              $.10.2
            </Button>
          </HStack>
        </Center>

        {/* Checkout Button */}
        <Center>
          <Buttone
            bg={Colors.black}
            color={Colors.white}
            mt={10}
            onPress={() => navigation.navigate("Shipping")}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </VStack>
    </Box>
  );
}

export default CartScreen;
