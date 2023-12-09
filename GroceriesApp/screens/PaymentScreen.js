import React, { useState } from 'react';
import { Box, Image, Input, Text, Center, ScrollView, VStack, HStack, Spacer } from 'native-base';
import Colors from '../colors';
import Buttone from '../components/Buttone';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const PaymentMethods = [
  {
    image: require('../assets/cash.png'),
    alt: 'Cash',
    icon: 'Ionicons',
  },
  {
    image: require('../assets/mpesa.png'),
    alt: 'M-Pesa',
    icon: 'Ionicons',
  },
  {
    image: require('../assets/paypal.png'),
    alt: 'PayPal',
    icon: 'Ionicons',
  },
  {
    image: require('../assets/Card1.png'),
    alt: 'Card',
    icon: 'Ionicons',
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation()
  const [selectedMethod, setSelectedMethod] = useState(0);

  const handlePaymentMethodClick = (index) => {
    setSelectedMethod(index);
  };

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          SELECT PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h='full' bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {PaymentMethods.map((paymentMethod, index) => (
              <HStack
                key={index}
                alignItems='center'
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent='space-between'
                rounded={10}
                onPress={() => handlePaymentMethodClick(index)}
              >
                <Box>
                  <Image
                    source={paymentMethod.image}
                    alt={paymentMethod.alt}
                    resizeMode='contain'
                    w={60}
                    h={50}
                  />
                </Box>
                <Spacer />
                {selectedMethod === index ? (
                  <Ionicons name='checkmark-circle' size={30} color={Colors.main} />
                ) : (
                  <FontAwesome name='circle-thin' size={30} color={Colors.main} />
                )}
              </HStack>
            ))}
            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={ ()=> navigation.navigate('PlaceOrder')} >
              CONTINUE
            </Buttone>
            <Text italic textAlign='center'>
              Payment Method is{' '}
              <Text bold>{PaymentMethods[selectedMethod].alt}</Text>
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
