import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../components/NavButton';
import Title from '../../components/Title';

import { Container } from './styles';

const LetYourContact: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Title>Deixe seu contato!</Title>
      </Container>
      <NavButton onPress={() => navigation.navigate('Home')}>Home</NavButton>
    </>
  );
};

export default LetYourContact;
