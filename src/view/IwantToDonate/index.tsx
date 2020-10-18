import React from 'react';
import { useNavigation } from '@react-navigation/native';
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

const IwantToDonate: React.FC = () => {
  const navigation = useNavigation();
  const infoMessages = [
    {
      description: 'Lorem Ipson',
      step: 1,
      imageSide: 'right',
    },
    {
      description: 'Juao Ipson',
      step: 2,
      imageSide: 'left',
    },
    {
      description: 'Juao Ipson',
      step: 3,
      imageSide: 'right',
    },
  ];
  return (
    <>
      <Container>
        <MainTitle>Algúem deve estar sorrindo!</MainTitle>
        <StepInfo>
          <CardImage source={HeartSmile} />
        </StepInfo>
        <SecondaryTitle>Veja só como é fácil ser doador</SecondaryTitle>
        {infoMessages.map((item) => {
          if (item.imageSide === 'right') {
            return (
              <>
                <LineItens key={item.description}>
                  <CardInfoWhite key={item.description}>
                    {item.description}
                  </CardInfoWhite>
                  <StepInfo key={item.step}>
                    <StepText key={item.step}>{item.step} º passo</StepText>
                  </StepInfo>
                </LineItens>
              </>
            );
          } else {
            return (
              <>
                <LineItens key={item.description}>
                  <StepInfo key={item.step}>
                    <StepText key={item.step}>{item.step} º passo</StepText>
                  </StepInfo>
                  <CardInfoWhite key={item.description}>
                    {item.description}
                  </CardInfoWhite>
                </LineItens>
              </>
            );
          }
        })}
      </Container>
      <NavButton onPress={() => navigation.navigate('LetYourContact')}>
        Deixe seu contato
      </NavButton>
    </>
  );
};

export default IwantToDonate;
