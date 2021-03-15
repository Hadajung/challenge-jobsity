import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen, MyListStackScreen, SearchStackScreen} from './stacks';
import {Icon} from '../components';
import {SystemIcons} from '../constants/theme';
import Config from './config';

const getRouteIcon = (name: string) => {
  switch (name) {
    case 'Home':
      return SystemIcons.home;
    case 'MyList':
      return SystemIcons.heart;
    case 'Search':
      return SystemIcons.search;
    default:
      return '';
  }
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  // const {showRating} = this.state;
  // const {alertConfig, closeAlert, loadingConfig} = this.props;
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          // tabBar={(props) => <TabBar {...props} />}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon source={getRouteIcon(route.name)} tintColor={color} />
              );
            },
          })}
          tabBarOptions={{...Config}}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="MyList" component={MyListStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
