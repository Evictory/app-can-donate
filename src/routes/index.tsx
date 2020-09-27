import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../view/Home/index';
import WhoCanDonate from '../view/WhoCanDonate';
import Links from '../view/Links';
import Contact from '../view/Contact';
import Curiosities from '../view/Curiosities';
import FAQ from '../view/FAQ';
import IwantToDonate from '../view/IwantToDonate';
import LetYourContact from '../view/LetYourContact';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="WhoCanDonate">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Links" component={Links} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Curiosities" component={Curiosities} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="LetYourContact" component={LetYourContact} />
      <Stack.Screen name="IwantToDonate" component={IwantToDonate} />
      <Stack.Screen name="WhoCanDonate" component={WhoCanDonate} />
    </Stack.Navigator>
  );
};

export default Routes;
