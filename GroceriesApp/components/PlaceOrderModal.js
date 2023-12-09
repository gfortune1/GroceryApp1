import React, { useState } from 'react';
import { Box, Text, ScrollView, Heading, Center, Modal, HStack, VStack, Button } from 'native-base';
import OrderInfo from '../components/OrderInfo';
import Colors from '../colors';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderItems from '../components/OrderItems';
import Buttone from '../components/Buttone';
import { useNavigation } from '@react-navigation/native';

const OrdersInfo = [
  {
    title: 'products',
    price: 1020.50,
    color: 'black'
  },
  {
    title: 'shipping',
    price: 200,
    color: 'black'
  },
  {
    title: 'Tax',
    price: 100,
    color: 'black'
  },
  {
    title: 'Total Amount',
    price: 1320.50,
    color: 'main'
  },
];

const PlaceOrderModal = () => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false);

  const handleShowTotal = () => {
    setShowModal(true);
  };

  return (
    <Center>
      <Buttone
        onPress={handleShowTotal}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => {
                return (
                  <HStack alignItems='center' justifyContent='space-between' key={index}>
                    <Text fontWeight='medium'>{i.title}</Text>
                    <Text color={i.color === 'main' ? Colors.main : Colors.black} bold>$.{i.price}</Text>
                  </HStack>
                );
              })}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex={1} bg={Colors.main} h={45} _text={{ color: Colors.white }} onPress={() => { navigation.navigate('order'); setShowModal(false)} } _pressed={{ bg: Colors.main }}>
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModal;
