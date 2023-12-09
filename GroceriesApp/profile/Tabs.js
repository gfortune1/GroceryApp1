import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Profile from './Profile';
import Orders from './Orders';
import Colors from '../colors';

const renderScene = SceneMap({
  first: Profile,
  Second: Orders
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'Second', title: 'ORDERS' },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      activeColor={Colors.orange}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={[styles.text, { color }]}>{route.title}</Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabsBar}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
