import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Mainmenu from './src/pages/Mainmenu';

export default function App() {
  return (
    <NavigationContainer>
      <Mainmenu />
    </NavigationContainer>
  );
}
