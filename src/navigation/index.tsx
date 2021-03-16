import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
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
  const {t, i18n} = useTranslation();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              return (
                <Icon source={getRouteIcon(route.name)} tintColor={color} />
              );
            },
          })}
          tabBarOptions={{...Config}}>
          <Tab.Screen name="Home">
            {(props) => <HomeStackScreen {...{props, t, i18n}} />}
          </Tab.Screen>
          <Tab.Screen name="Search">
            {(props) => <SearchStackScreen {...{props, t, i18n}} />}
          </Tab.Screen>
          <Tab.Screen name="MyList">
            {(props) => <MyListStackScreen {...{props, t, i18n}} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
