import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';

import { BeehiveHeartPhoto } from '../../assets/index';

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
        <Logo source={BeehiveHeartPhoto} />
        <BeehiveText>Beehive</BeehiveText>
        <Card>
          <BoldTitle>E-mail:</BoldTitle>
          <SimpleText>beehive@beehive.com</SimpleText>
          <BoldTitle>Desenvolvedores:</BoldTitle>
          <SimpleText>Barbara, Emerson, Felipe, Gabriel e Henrique</SimpleText>
        </Card>
      </Container>
      <NavButton onPress={() => navigation.navigate('Navegue por aqui')}>
        Página Inicial
      </NavButton>
    </>
  );
};

export default Contact;
