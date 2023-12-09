import React from "react";
import Colors from "../colors";
import { HStack, Pressable, Text, Box, ScrollView, Button } from "native-base";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* for paid orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepestGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTrancated>
              292736287
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTrancated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTrancated>
              May 19 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $.10.2
            </Button>
          </HStack>
        </Pressable>
        {/* for not paid orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTrancated>
              292736287
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTrancated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTrancated>
              May 19 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.white,
              }}
            >
              $.94
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
