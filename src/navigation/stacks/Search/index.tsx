import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
