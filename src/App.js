import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Splash from './pages/Splash';
import Router from './router';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
