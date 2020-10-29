import React from 'react';
import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container, LabelText, Button, ButtonText } from './styles';

interface LetContactFormData {
  name: string;
  email: string;
  contact: string;
}

const LetYourContact: React.FC = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [contact, onChangeContact] = useState('');
  const [formSubitted, onSubmit] = useState('');

  const handleSubmit = useCallback(async (data: LetContactFormData) => {
    console.log(data);
    try {
      await api.post('userData', JSON.stringify(data));

      onSubmit('Dados enviados com sucesso!');
      clearData();
    } catch (e) {
      console.log('error', e);
      onSubmit(e);
    }
  }, []);

  const clearData = () => {
    onChangeName('');
    onChangeEmail('');
    onChangeContact('');
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
        <Button onPress={() => handleSubmit({ name, email, contact })}>
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
