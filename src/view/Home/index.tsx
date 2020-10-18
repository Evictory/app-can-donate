import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';
import { Container, Text } from './styles';

const IwantDonate: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Olá! Estamos aqui para ajudar</Text>
      <NavButton
        style={{ height: 100 }}
        onPress={() => navigation.navigate('Links')}>
        Vamos lá!
      </NavButton>
    </Container>
  );
};

export default IwantDonate;
