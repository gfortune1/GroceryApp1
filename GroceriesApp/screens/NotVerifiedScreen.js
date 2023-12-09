import React from 'react';
import { View, Text, VStack, Box, Center, Image, Button } from 'native-base';
import Colors from '../colors';
import Buttone from '../components/Buttone';

const NotVerifiedScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require('./../assets/favicon.png')} alt="logo" size="lg" />
        <VStack space={6} px={5} alignItems="center" justifyContent="center">
          <Buttone bg={Colors.black} color={Colors.white}>
            Register
          </Buttone>
          <Buttone bg={Colors.white} color={Colors.gray}>Login</Buttone>
        </VStack>
      </Center>
    </Box>
  );
}

export default NotVerifiedScreen;
