import React from 'react';
import { Box, Heading, Rating, Text } from 'native-base';
import Colors from '../colors';
import Message from '../Notifications/Message';

function Reviewed({ value }) {
  return (
    <Box flex={1} my={9}>
    <Heading bold fontSize={15} mb={2}>
      Reviews
    </Heading>
    {/* If there are no reviews */}

    {/* Otherwise, the reviews will be as follows */}
    <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
      <Heading fontSize={15} color={Colors.black}>
        User Doe
      </Heading>
      <Rating value={4} />
      <Text mb={3} my={2} fontSize={11}>
        Jan 12 2023
      </Text>
      <Message
        color={Colors.black}
        bg={Colors.white}
        size={12}
        children="React Native TextInput provides keyboardType props with following possible values: default number-pad decimal-pad numeric email-address phone-pad"
      />
    </Box>
  </Box>
  );
}

export default Reviewed;