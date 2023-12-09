import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  Image,
  Flex,
  Heading,
  Box,
} from "native-base";
import Colors from "../colors";
import Rating from "./../components/Rating";
import products from "../data/products";
// import Rating from "./../components/Rating";
import Single from "../screens/SingleProduct";
import { useNavigation } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import StackNav from "../Navigation/StackNav";

const Stack = createStackNavigator();

function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("SingleProduct", { product })}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              {/* Rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
