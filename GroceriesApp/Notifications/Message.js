import React from 'react';
import { Center, Text } from 'native-base';

function Message({ color, bg, size, children, bold }) {
  return (
    <Center bg={bg} p={4} rounded={5} bold={bold}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
}

export default Message;
