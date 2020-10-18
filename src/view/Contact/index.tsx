import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';

import BeehiveHeart from '../../assets/BeehiveHeart.png';

import {
  Container,
  Logo,
  BeehiveText,
  Card,
  BoldTitle,
  SimpleText,
} from './styles';

const Contact: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Title>Contate-nos!</Title>
        <Logo source={BeehiveHeart} />
        <BeehiveText>Beehive</BeehiveText>
        <Card>
          <BoldTitle>E-mail:</BoldTitle>
          <SimpleText>beehive@beehive.com</SimpleText>
          <BoldTitle>Desenvolvedores:</BoldTitle>
          <SimpleText>Barbara, Emerson, Felipe, Gabriel e Henrique</SimpleText>
        </Card>
      </Container>
      <NavButton onPress={() => navigation.navigate('Home')}>
        Página Inicial
      </NavButton>
    </>
  );
};

export default Contact;
