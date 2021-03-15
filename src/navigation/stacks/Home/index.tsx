import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ShowDetailScreen} from '../../../screens';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ShowDetailScreen" component={ShowDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
