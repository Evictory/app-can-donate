import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';

import { Container, Button, ButtonText } from './styles';

interface Curiosity {
  id: number;
  description: string;
  order: string;
}

const FAQ: React.FC = () => {
  const navigation = useNavigation();
  const [curiosities, setCuriosities] = useState<Curiosity[]>([]);
  const [curiosity, setCuriosity] = useState<Curiosity>({} as Curiosity);

  useEffect(() => {
    async function loadCuriosities(): Promise<void> {
      await api.get('curiosity').then((response) => {
        setCuriosities(response.data);
        setCuriosity(response.data[0]);
      });
    }

    loadCuriosities();
  }, []);

  const changeCuriosity = (next: number) => {
    setCuriosity(curiosities[next]);
  };

  const setRandomNumber = () => {
    let min = Math.ceil(0);
    let max = Math.floor(curiosities.length);
    let nextNumber = Math.floor(Math.random() * (max - min)) + min;

    changeCuriosity(nextNumber);
  };

  return (
    <>
      <Container>
        <Title>Olha só que interessante...</Title>
        <CardInfo style={{ fontSize: 18 }}>{curiosity.description}</CardInfo>
        <Button onPress={() => setRandomNumber()}>
          <ButtonText>Quero ver outra!</ButtonText>
        </Button>
      </Container>
      <NavButton onPress={() => navigation.navigate('Dúvidas frequentes')}>
        Dúvidas frequentes
      </NavButton>
    </>
  );
};

export default FAQ;
