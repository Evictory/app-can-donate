import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import HeartSmile from '../../assets/HeartSmile.png';
import NavButton from '../../components/NavButton';

import {
  Container,
  MainTitle,
  SecondaryTitle,
  StepInfo,
  CardImage,
  LineItens,
  StepText,
  CardInfoWhite,
} from './styles';

interface InfoMessages {
  description: string;
  step: number;
}

const IwantToDonate: React.FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<InfoMessages[]>([]);

  useEffect(() => {
    async function loadMessages(): Promise<void> {
      await api.get('infoMessagesStep').then((response) => {
        setMessages(response.data);
      });
    }

    loadMessages();
  }, []);

  const renderLine = ({ item }: any) => {
    const card = (
      <CardInfoWhite key={item.description}>{item.description}</CardInfoWhite>
    );

    const stepInfo = (
      <StepInfo key={item.step}>
        <StepText key={item.step}>{item.step} º passo</StepText>
      </StepInfo>
    );

    return (
      <>
        <LineItens key={item.description}>
          {item.step % 2 === 0 ? [stepInfo, card] : [card, stepInfo]}
        </LineItens>
      </>
    );
  };

  return (
    <>
      <Container>
        <MainTitle>Algúem deve estar sorrindo!</MainTitle>
        <StepInfo>
          <CardImage source={HeartSmile} />
        </StepInfo>
        <SecondaryTitle>Veja só como é fácil ser doador</SecondaryTitle>
        <FlatList
          data={messages}
          renderItem={renderLine}
          keyExtractor={(item) => item.description}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('LetYourContact')}>
        Deixe seu contato
      </NavButton>
    </>
  );
};

export default IwantToDonate;
