import React, { useState } from "react";
import {
  Box,
  Text,
  ScrollView,
  Heading,
  Center,
  Modal,
  HStack,
  VStack,
  Button,
  Pressable,
  Image,
} from "native-base";
import OrderInfo from "../components/OrderInfo";
import Colors from "../colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../components/OrderItems";
import Buttone from "./Buttone";
import { useNavigation } from "@react-navigation/native";

const OrdersInfo = [
  {
    title: "products",
    price: 1020.5,
    color: "black",
  },
  {
    title: "shipping",
    price: 200,
    color: "black",
  },
  {
    title: "Tax",
    price: 100,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 1320.5,
    color: "main",
  },
];

const OrderModal = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleShowTotal = () => {
    setShowModal(true);
  };
  const handlePlaceOrder = () => {
    setShowModal(true);

    // Simulating an order placement delay
    setTimeout(() => {
      setShowModal(false);
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <Center>
      <Buttone
        onPress={handleShowTotal}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={index}
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    $.{i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={2}
              onPress={() => setShowModal(false)}
            >
              <Image
                source={require("../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h="34"
              />
            </Pressable>
            <Button
              bg={Colors.black}
              w="full"
              mt={2}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("BottomNav");
                setShowModal(false);
              }}
              _pressed={{ bg: Colors.white }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <Center>
              <Text fontSize={16}>Order placed successfully!</Text>
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
    </Center>
  );
};

export default OrderModal;
