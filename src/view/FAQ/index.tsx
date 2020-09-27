import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../components/NavButton';
import Title from '../../components/Title';

import { Container } from './styles';

const WhoCanDonate: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Title>Dúvidas frequentes</Title>
      </Container>
      <NavButton onPress={() => navigation.navigate('Home')}>Home</NavButton>
    </>
  );
};

export default WhoCanDonate;
