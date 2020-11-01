import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container, LabelText, Button, ButtonText } from './styles';

interface LetContactFormData {
  name: string;
  email: string;
  phone: number | string;
}

const LetYourContact: React.FC = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [formSubitted, onSubmit] = useState('');

  const handleSubmit = useCallback(async (data: LetContactFormData) => {
    data.phone = Number(data.phone);

    try {
      await api.post('contact', data);

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
    onChangePhone('');
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
          onChangeText={(text) => onChangePhone(text)}
          value={phone}
          placeholder="Pode ser o celular ou fixo ;)"
        />
        <Button onPress={() => handleSubmit({ name, email, phone })}>
          <ButtonText>Enviar dados</ButtonText>
        </Button>
      </Container>
      <NavButton onPress={() => navigation.navigate('Curiosidades')}>
        Curiosidades
      </NavButton>
    </>
  );
};

export default LetYourContact;
