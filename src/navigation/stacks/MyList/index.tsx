import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyListScreen, ShowDetailScreen} from '../../../screens';
import {StackConfig} from '../../config';

const MyListStack = createStackNavigator();

const MyListStackScreen = (StackProps: any) => {
  return (
    <MyListStack.Navigator screenOptions={StackConfig}>
      <MyListStack.Screen name="MyList" options={{headerShown: false}}>
        {(props: any) => <MyListScreen {...{...props, ...StackProps}} />}
      </MyListStack.Screen>
      <MyListStack.Screen name="ShowDetailScreen">
        {(props: any) => <ShowDetailScreen {...{...props, ...StackProps}} />}
      </MyListStack.Screen>
    </MyListStack.Navigator>
  );
};

export default MyListStackScreen;
