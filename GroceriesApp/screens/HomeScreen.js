import React from 'react'
import { Text, Box} from 'native-base';
import Colors from '../colors';
import HomeSearch from '../components/HomeSearch';
import HomeProducts from '../components/HomeProducts';

const HomeScreen =() => {
  return (
    <Box flex={1} bg={Colors.subGreen}>
        {/* <Text>Hello home here</Text> */}
        <HomeSearch />
        <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
