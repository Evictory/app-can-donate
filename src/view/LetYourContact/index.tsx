import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container, LabelText, Button, ButtonText } from './styles';

const LetYourContact: React.FC = () => {
  const navigation = useNavigation();
  const sendData = () => {
    console.log('here!');
  };
  return (
    <>
      <Container>
        <Title>Deixe seu contato!</Title>
        <LabelText>Nome completo</LabelText>
        <Input placeholder="Insira seu nome aqui" />
        <LabelText>E-mail</LabelText>
        <Input placeholder="Seu e-mail aqui :)" />
        <LabelText>Número para contato</LabelText>
        <Input placeholder="Pode ser o celular ou fixo ;)" />
        <Button onPress={() => sendData()}>
          <ButtonText>Enviar dados</ButtonText>
        </Button>
      </Container>
      <NavButton onPress={() => navigation.navigate('Curiosities')}>
        Curiosidades
      </NavButton>
    </>
  );
};

export default LetYourContact;
