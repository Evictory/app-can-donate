import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';
// import HeartZip from '../../assets/HeartZip.png';
// import HeartSmile from '../../assets/HeartSmile.png';

import { Container, LineItens, CardImage, ImageContainer } from './styles';
import { FlatList } from 'react-native';

interface InfoMessages {
  description: string;
  brotherImage: any;
  imageSide: string;
}

const WhoCanDonate: React.FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<InfoMessages[]>([]);

  useEffect(() => {
    async function loadMessages(): Promise<void> {
      await api.get('/infoMessages').then((response) => {
        setMessages(response.data);
      });
    }

    loadMessages();
  }, []);

  const renderLine = ({ item }: any) => {
    const card = <CardInfo key={item.description}>{item.description}</CardInfo>;
    const imageContainer = (
      <ImageContainer key={item.brotherImage}>
        <CardImage key={item.brotherImage} source={item.brotherImage} />
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
      <NavButton onPress={() => navigation.navigate('IwantToDonate')}>
        Como faço para doar?
      </NavButton>
    </>
  );
};

export default WhoCanDonate;
