import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';

import {
  BeehiveHeartPhoto,
  HeartSmilePhoto,
  HeartZipPhoto,
  QuestionPhoto,
} from '../../assets/index';

import { Container, LineItens, CardImage, ImageContainer } from './styles';

interface InfoMessages {
  description: string;
  imageSide: string;
}

const WhoCanDonate: React.FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<InfoMessages[]>([]);

  useEffect(() => {
    async function loadMessages(): Promise<void> {
      await api.get('/faqinfo').then((response) => {
        setMessages(response.data);
      });
    }

    loadMessages();
  }, []);

  const Images = [
    BeehiveHeartPhoto,
    HeartSmilePhoto,
    HeartZipPhoto,
    QuestionPhoto,
  ];

  const setRandomNumber = () => {
    let min = Math.ceil(0);
    let max = Math.floor(Images.length);
    let nextNumber = Math.floor(Math.random() * (max - min)) + min;

    return nextNumber;
  };

  const renderLine = ({ item }: any) => {
    const card = <CardInfo key={item.description}>{item.description}</CardInfo>;
    const imageContainer = (
      <ImageContainer key={item.brotherImage}>
        <CardImage key={item.brotherImage} source={Images[setRandomNumber()]} />
      </ImageContainer>
    );

    return (
      <>
        <LineItens key={item.description}>
          {item.imageSide === 'right'
            ? [card, imageContainer]
            : [imageContainer, card]}
        </LineItens>
      </>
    );
  };

  return (
    <>
      <Container>
        <Title>Afinal, quem pode doar?</Title>
        <FlatList
          data={messages}
          renderItem={renderLine}
          keyExtractor={(item) => item.description}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('Quero doar!')}>
        Como faço para doar?
      </NavButton>
    </>
  );
};

export default WhoCanDonate;
