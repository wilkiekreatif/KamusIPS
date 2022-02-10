import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Mainmenu,
  Splash,
  Kelas1,
  Kelas2,
  Kelas3,
  ByAbjad,
  BySearch,
  Detail,
  HurufA,
  HurufB,
  HurufC,
  HurufD,
  HurufE,
  HurufF,
  HurufG,
  HurufH,
  HurufI,
  HurufJ,
  HurufK,
  HurufL,
  HurufM,
  HurufN,
  HurufO,
  HurufP,
  HurufQ,
  HurufR,
  HurufS,
  HurufT,
  HurufU,
  HurufV,
  HurufW,
  HurufX,
  HurufY,
  HurufZ,
} from '../pages';

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
      <Stack.Screen
        name="Kelas1"
        component={Kelas1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kelas2"
        component={Kelas2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kelas3"
        component={Kelas3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ByAbjad"
        component={ByAbjad}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BySearch"
        component={BySearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufA"
        component={HurufA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufB"
        component={HurufB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufC"
        component={HurufC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufD"
        component={HurufD}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufE"
        component={HurufE}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufF"
        component={HurufF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufG"
        component={HurufG}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufH"
        component={HurufH}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufI"
        component={HurufI}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufJ"
        component={HurufJ}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufK"
        component={HurufK}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufL"
        component={HurufL}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufM"
        component={HurufM}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufN"
        component={HurufN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufO"
        component={HurufO}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufP"
        component={HurufP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufQ"
        component={HurufQ}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufR"
        component={HurufR}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufS"
        component={HurufS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufT"
        component={HurufT}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufU"
        component={HurufU}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufV"
        component={HurufV}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufW"
        component={HurufW}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufX"
        component={HurufX}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufY"
        component={HurufY}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HurufZ"
        component={HurufZ}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
