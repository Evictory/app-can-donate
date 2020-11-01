import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container, LabelText, Button, ButtonText } from './styles';

interface LetYourTestimony {
  description: string;
}

const LetYourTestimony: React.FC = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [description, onChangeTestimony] = useState('');
  const [formSubitted, onSubmit] = useState('');

  const handleSubmit = useCallback(async (data: LetYourTestimony) => {
    try {
      await api.post('testimony', data);

      onSubmit('Depoimento enviado com sucesso!');
      clearData();
    } catch (e) {
      console.log('error', e);
      onSubmit(e);
    }
  }, []);

  const clearData = () => {
    onChangeName('');
    onChangeTestimony('');
  };

  return (
    <>
      <Container>
        <View>
          <Title>Compartilhe sua experiência! Deixe um depoimento...</Title>
        </View>
        <LabelText>Qual é o seu nome?</LabelText>
        <Input
          onChangeText={(text) => onChangeName(text)}
          value={name}
          placeholder="Insira seu nome aqui"
        />
        <LabelText>Deixe sua inspiração aqui</LabelText>
        <View>
          <Input
            style={{ height: 100 }}
            multiline={true}
            numberOfLines={10}
            onChangeText={(text) => onChangeTestimony(text)}
            value={description}
            placeholder="Inspire-se..."
          />
        </View>

        <Button onPress={() => handleSubmit({ description })}>
          <ButtonText>Enviar depoimento :)</ButtonText>
        </Button>
      </Container>
      <NavButton onPress={() => navigation.navigate('Depoimentos')}>
        Listar depoimentos
      </NavButton>
    </>
  );
};

export default LetYourTestimony;
