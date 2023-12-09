import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, useTheme, Text, Image, Box, VStack, Heading, Input, Button, Pressable } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from './../colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
    return (
          <Box 
          flex={1} 
          bg={Colors.black}>
            <Image 
            flex={1} 
            alt="logo" 
            resizeMode="cover"
            size="lg"
            width="full"
            source={require("./../assets/cover.png")} />
    
            <Box 
              w="full" 
              h="full" 
              position="absolute" 
              px="6" 
              // bg={Colors.deepGray} 
              justifyContent="center"
            >
              <Heading>Register</Heading>
              <VStack space={5} pt="6">
              <Input 
                  InputLeftElement={
                    <FontAwesome name="user" size={24} color={Colors.main} />
                  }
                  variant='underlined' 
                  placeholder='****' 
                  w="70%" 
                  type='text'
                  color={Colors.main} 
                  borderBottomColor={Colors.underline}
                  />
                <Input 
                  InputLeftElement={
                    <MaterialIcons name="email" size={20} color={Colors.main} />
                  }
                  variant='underlined' 
                  placeholder='****@gmail.com' 
                  w="70%" 
                  type='text'
                  color={Colors.main} 
                  borderBottomColor={Colors.underline}
                  />
                   <Input 
                  InputLeftElement={
                    <FontAwesome5 name="user-lock" size={20} color={Colors.main} />
                  }
                  variant='underlined' 
                  placeholder='**********' 
                  w="70%" 
                  type='password'
                  color={Colors.main} 
                  borderBottomColor={Colors.underline}
                  />
              </VStack>
              <Button 
                _pressed={{ 
                  bg : Colors.main,
                 }}
                my={30} 
                w="40%" 
                rounded={50} 
                bg={Colors.main}
                onPress={ ()=> navigation.navigate('BottomNav')}
              >
                SIGN UP
              </Button>
    
              <Pressable mt={4}  onPress={ ()=> navigation.navigate('Login')}>
               <Text color={Colors.deepestGray}>
               You want to Login?
               </Text>
              </Pressable>
            </Box>
          </Box>
      );
}

export default RegisterScreen;
