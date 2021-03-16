import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyListScreen, ShowDetailScreen} from '../../../screens';

const MyListStack = createStackNavigator();

const MyListStackScreen = (StackProps: any) => {
  return (
    <MyListStack.Navigator screenOptions={{headerShown: false}}>
      <MyListStack.Screen name="MyList">
        {(props: any) => <MyListScreen {...{...props, ...StackProps}} />}
      </MyListStack.Screen>
      <MyListStack.Screen name="ShowDetailScreen">
        {(props: any) => <ShowDetailScreen {...{...props, ...StackProps}} />}
      </MyListStack.Screen>
    </MyListStack.Navigator>
  );
};

export default MyListStackScreen;
