import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';
import HeartZip from '../../assets/HeartZip.png';
import HeartSmile from '../../assets/HeartSmile.png';

import { Container, LineItens, CardImage, ImageContainer } from './styles';

const WhoCanDonate: React.FC = () => {
  const navigation = useNavigation();
  const infoMessages = [
    {
      description: 'Lorem Ipson',
      brotherImage: HeartZip,
      imageSide: 'right',
    },
    {
      description: 'Juao Ipson',
      brotherImage: HeartSmile,
      imageSide: 'left',
    },
    {
      description: 'Juao Ipson',
      brotherImage: HeartZip,
      imageSide: 'right',
    },
  ];
  return (
    <>
      <Container>
        <Title>Afinal, quem pode doar?</Title>
        {infoMessages.map((item) => {
          if (item.imageSide === 'right') {
            return (
              <>
                <LineItens key={item.description}>
                  <CardInfo>{item.description}</CardInfo>
                  <ImageContainer key={item.brotherImage}>
                    <CardImage source={item.brotherImage} />
                  </ImageContainer>
                </LineItens>
              </>
            );
          } else {
            return (
              <>
                <LineItens key={item.description}>
                  <ImageContainer key={item.brotherImage}>
                    <CardImage source={item.brotherImage} />
                  </ImageContainer>
                  <CardInfo>{item.description}</CardInfo>
                </LineItens>
              </>
            );
          }
        })}
      </Container>
      <NavButton onPress={() => navigation.navigate('Home')}>
        Como faço para doar?
      </NavButton>
    </>
  );
};

export default WhoCanDonate;
