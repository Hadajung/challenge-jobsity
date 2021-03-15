import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyListScreen, ShowDetailScreen} from '../../../screens';

const MyListStack = createStackNavigator();

const MyListStackScreen = () => {
  return (
    <MyListStack.Navigator screenOptions={{headerShown: false}}>
      <MyListStack.Screen name="MyList" component={MyListScreen} />
      <MyListStack.Screen
        name="ShowDetailScreen"
        component={ShowDetailScreen}
      />
    </MyListStack.Navigator>
  );
};

export default MyListStackScreen;
