import React from 'react'
import { Box, Input, Text, Center, ScrollView, VStack, FormControl } from 'native-base';
import Colors from '../colors';
import Buttone from '../components/Buttone';

const ShippingInputs = [
    {
        label:"ENTER CITY",
        type:"text",
    },
    {
        label:"ENTER COUNTRY",
        type:"text",
    },
    {
        label:"ENTER POSTAL CODE",
        type:"text",
    },
    {
        label:"ENTER ADDRESS",
        type:"text",
    },
];

const ShippingScreen = ({navigation}) => {
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            {/* Inputs */}
            <Box h='full' bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                    {
                        ShippingInputs.map((input, index) => (
                            <FormControl key={index}>
                            <FormControl.Label _text={{
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}>
                                {input.label}
                            </FormControl.Label>
                            <Input
                                borderWidth={0}
                                bg={Colors.subGreen}
                                py={3}
                                type={input.type}
                                color={Colors.main}
                                fontSize={20}
                                variant='rounded'
                                _focus={{
                                bg: Colors.subGreen,
                                borderColor: Colors.main,
                                borderWidth: 1
                                }}
                                keyboardType={input.type === 'numeric' ? 'numeric' : 'default'}
                            />
                            </FormControl>
                        ))
                        }
                         <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={ ()=> navigation.navigate('Checkout')}>CONTINUE</Buttone>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
      );
}

export default ShippingScreen;
