import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen, ShowDetailScreen} from '../../../screens';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Home" component={SearchScreen} />
      <SearchStack.Screen
        name="ShowDetailScreen"
        component={ShowDetailScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
