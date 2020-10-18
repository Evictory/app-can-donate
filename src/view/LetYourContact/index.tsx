import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container, LabelText, Button, ButtonText } from './styles';

const LetYourContact: React.FC = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [contact, onChangeContact] = useState('');
  const sendData = () => {
    let data = {
      name,
      email,
      contact,
    };
    console.log(data);
  };

  return (
    <>
      <Container>
        <Title>Deixe seu contato!</Title>
        <LabelText>Nome completo</LabelText>
        <Input
          onChangeText={(text) => onChangeName(text)}
          value={name}
          placeholder="Insira seu nome aqui"
        />
        <LabelText>E-mail</LabelText>
        <Input
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="Seu e-mail aqui :)"
        />
        <LabelText>Número para contato</LabelText>
        <Input
          onChangeText={(text) => onChangeContact(text)}
          value={contact}
          placeholder="Pode ser o celular ou fixo ;)"
        />
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
