import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Mainmenu, Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mainmenu"
        component={Mainmenu}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
