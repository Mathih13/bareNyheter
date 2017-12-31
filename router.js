import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CuratedFeed from './screens/CuratedFeed';
import Settings from './screens/Settings'
import Explore from './screens/Explore'

import WebSurfer from './screens/WebSurfer'

const CuratedFeedStack = StackNavigator({
  Feed: {
    screen: CuratedFeed,
    navigationOptions: {
      headerStyle: { height: '3.5%' }
    },
  },
  WebSurfer: {
    screen: WebSurfer,
  },
}, {
  headerMode: 'screen'
});


export const Tabs = TabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="feather" name="search" size={25} color={tintColor} />
    },
  },
  CuratedFeed: {
    screen: CuratedFeedStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="feather" name="home" iconStyle={{ bottom: 2 }} size={35}  containerStyle={{
        backgroundColor: '#fff',
        bottom: '10%',
        borderRadius: 40,
        width: 55,
        height: 55,
        shadowColor: '#555',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
      }}  color={tintColor} />
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="feather" name="settings" size={25} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#659DBD',
    inactiveTintColor: '#999',
    showLabel: false,
    style: {backgroundColor: '#fff'}
  },
  animationEnabled: false,
  initialRouteName: 'CuratedFeed',

});
