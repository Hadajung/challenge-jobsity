import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ShowDetailScreen} from '../../../screens';
import {StackConfig} from '../../config';

const HomeStack = createStackNavigator();

const HomeStackScreen = (StackProps: any) => {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen name="Home" options={{headerShown: false}}>
        {(props: any) => <HomeScreen {...{...props, ...StackProps}} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="ShowDetailScreen">
        {(props: any) => <ShowDetailScreen {...{...props, ...StackProps}} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
