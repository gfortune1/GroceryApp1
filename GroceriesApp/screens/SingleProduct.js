import React, { useState } from "react";
import {
  View,
  Text,
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import Colors from "../colors";
import Buttone from "./../components/Buttone";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
// import Reviewed from '../components/Reviewed';
import Message from "../Notifications/Message";

const SingleProduct = ({ navigation }) => {
  const [value, setValue] = useState(0);
  const [ratings, setRatings] = useState("");
  return (
    <Box flex={1} safeArea bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("./../assets/mangoes1.jpg")}
          alt="image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          Palmer Mangoes
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            onChange={setValue}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $2.9a
          </Heading>
        </HStack>
        <Text lineWeight={24} fontSize={12}>
          Palmer mangoes are known for their sweet and creamy flavor profile.
          The fruit is often enjoyed for its rich taste, making it a popular
          choice among mango enthusiasts. are relatively large compared to some
          other mango varieties. This can be an advantage for those who enjoy
          larger servings of fruit or want more mango flesh per fruit.
        </Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </Buttone>
        <Box flex={1} my={9}>
          <Heading bold fontSize={15} mb={2}>
            Reviews
          </Heading>
          {/* If there are no reviews */}
          <Message
            color={Colors.main}
            bg={Colors.deepestGray}
            bold
            children="No Review Available"
          />
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
              children="I love this groceries Application due to its broad and dynamic nature of offering all types of groceries. "
            />
          </Box>
          {/* Place to write the review */}
          <Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
              REVIEW THIS PRODUCT
            </Heading>
            <VStack space={6}>
              <FormControl>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Rating
                </FormControl.Label>
                <Select
                  bg={Colors.subGreen}
                  borderWidth={0}
                  rounded={5}
                  py={4}
                  placeholder="choose rating"
                  _selectedItem={{
                    bg: Colors.subGreen,
                    endIcon: <CheckIcon size={3} />,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  selectedValue={ratings}
                  onValueChange={(e) => setRatings(e)}
                >
                  <Select.Item label="1 - Poor" value="1" />
                  <Select.Item label="2 - Fair" value="2" />
                  <Select.Item label="3 - Good" value="3" />
                  <Select.Item label="4 - Awesome" value="4" />
                </Select>
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Comments
                </FormControl.Label>
                <TextArea
                  h={20}
                  w="full"
                  placeholder="This product is good...."
                  borderWidth={0}
                  bg={Colors.subGreen}
                  py={4}
                  _focus={{
                    bg: Colors.subGreen,
                  }}
                />
              </FormControl>
              <Buttone bg={Colors.main} color={Colors.white}>
                Submit
              </Buttone>
              <Message
                color={Colors.white}
                bg={Colors.black}
                children={"Please 'Login' to write a review"}
              />
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SingleProduct;
