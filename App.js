import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation' 
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FaceBook from './screens/Facebook';
import Insta from './screens/Instagram';
export default function App() {
  return (
   
    <AppContainer/>
   
  );
}

const TabNavigator = createBottomTabNavigator({

Instagram:{screen:Insta},
FaceBook:{screen:FaceBook}

})

const AppContainer = createAppContainer(TabNavigator)

