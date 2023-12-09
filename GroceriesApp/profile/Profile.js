import { Box, FormControl, ScrollView, Text, Input, VStack } from 'native-base'
import React from 'react'
import Colors from '../colors';
import Buttone from '../components/Buttone';

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "PHONE",
    type: "numeric",
  },
  {
    label: "NEW PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  }
]

const Profile = () => {
  return (
    <Box h='full' bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} mt={5} pb={10}>
        {
          Inputs.map((input, index) => (
            <FormControl key={index}>
              <FormControl.Label _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}>
                {input.label}
              </FormControl.Label>
              <Input
                borderWidth={0.2} 
                borderColor={Colors.main}
                bg={Colors.subGreen}
                py={3}
                color={Colors.main}
                fontSize={20}
                type={input.type}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.black,
                  borderWidth: 1,
                }}
                variant='rounded'
              />
            </FormControl>
          ))
        }
        <Buttone bg={Colors.main} color={Colors.white}>UPDATE PROFILE</Buttone>
        </VStack>

      </ScrollView>
    </Box>
  )
}

export default Profile;
