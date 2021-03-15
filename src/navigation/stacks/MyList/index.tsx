import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens';

const MyListStack = createStackNavigator();

const MyListStackScreen = () => {
  return (
    <MyListStack.Navigator screenOptions={{headerShown: false}}>
      <MyListStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </MyListStack.Navigator>
  );
};

export default MyListStackScreen;
