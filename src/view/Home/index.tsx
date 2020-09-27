import React from 'react';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';

import { Text } from 'react-native';

const IwantDonate: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Olá! Estamos aqui para ajudar</Text>
      <NavButton onPress={() => navigation.navigate('Links')}>
        Vamos lá!
      </NavButton>
    </Container>
  );
};

export default IwantDonate;
