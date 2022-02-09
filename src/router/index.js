import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Mainmenu} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mainmenu" component={Mainmenu} />
    </Stack.Navigator>
  );
};

export default Router;
