import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
    <Stack.Navigator
      initialRouteName="Navegue por aqui"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C7141A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Navegue por aqui" component={Links} />
      <Stack.Screen name="Desenvolvedores" component={Contact} />
      <Stack.Screen name="Curiosidades" component={Curiosities} />
      <Stack.Screen name="Dúvidas frequentes" component={FAQ} />
      <Stack.Screen name="Deixe seu contato!" component={LetYourContact} />
      <Stack.Screen name="Quero doar!" component={IwantToDonate} />
      <Stack.Screen name="Quem pode doar?" component={WhoCanDonate} />
    </Stack.Navigator>
  );
};

export default Routes;
