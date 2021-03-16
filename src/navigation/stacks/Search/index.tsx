import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen, ShowDetailScreen} from '../../../screens';
import {StackConfig} from '../../config';

const SearchStack = createStackNavigator();

const SearchStackScreen = (StackProps: any) => {
  return (
    <SearchStack.Navigator screenOptions={StackConfig}>
      <SearchStack.Screen name="Search" options={{headerShown: false}}>
        {(props: any) => <SearchScreen {...{...props, ...StackProps}} />}
      </SearchStack.Screen>
      <SearchStack.Screen name="ShowDetailScreen">
        {(props: any) => <ShowDetailScreen {...{...props, ...StackProps}} />}
      </SearchStack.Screen>
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
