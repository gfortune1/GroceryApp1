import React from "react";
import { Box, Text, Center, Image, Heading } from "native-base";
import Colors from "../colors";
import Tabs from "../profile/Tabs";

const ProfileScreen = () => {
  return (
    <Box flex={1}>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={require("../assets/profile.png")}
          alt="profile-image"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Morris Gachoki
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined December 2023
        </Text>
      </Center>
      {/* Tabs */}
      <Tabs />
    </Box>
  );
};

export default ProfileScreen;
