import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';

import { Container, Button, ButtonText } from './styles';

interface Curiosity {
  description: string;
  image: string;
}

const FAQ: React.FC = () => {
  const navigation = useNavigation();
  const curiosities = [
    { description: 'Sabiq eu  o eu...', image: 'hehe' },
    { description: 'Você sabia que...', image: 'SS' },
    { description: 'A quantidade de doadores no brasil...', image: 'AA' },
    { description: 'Essa poderia ser engraçada', image: 'BB' },
  ];
  const [curiosity, setCuriosity] = useState<Curiosity>(curiosities[0]);

  function changeCuriosity(next: number): void {
    setCuriosity(curiosities[next]);
  }

  function setRandomNumber(): void {
    let min = Math.ceil(0);
    let max = Math.floor(curiosities.length);
    let nextNumber = Math.floor(Math.random() * (max - min)) + min;

    changeCuriosity(nextNumber);
  }

  return (
    <>
      <Container>
        <Title>Olha só que interessante...</Title>
        <CardInfo>{curiosity.description}</CardInfo>
        <Button onPress={() => setRandomNumber()}>
          <ButtonText>Quero ver outra!</ButtonText>
        </Button>
      </Container>
      <NavButton onPress={() => navigation.navigate('FAQ')}>
        Dúvidas frequentes
      </NavButton>
    </>
  );
};

export default FAQ;
