import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Screens/Home';
import FeatureScreen from './Screens/Features';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  Features: {screen: FeatureScreen, navigationOptions: {headerShown: false}},
});

export default createAppContainer(App);
