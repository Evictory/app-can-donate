import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';

import { Container, LineItens } from './styles';

const WhoCanDonate: React.FC = () => {
  const navigation = useNavigation();
  const infoMessages = [
    {
      description: 'Lorem Ipson',
      brotherImage: 'Image later',
      imageSide: 'left',
    },
    {
      description: 'Juao Ipson',
      brotherImage: 'Image later',
      imageSide: 'right',
    },
  ];
  return (
    <>
      <Container>
        <Title>Afinal, quem pode doar?</Title>
        {infoMessages.map((item) => {
          return (
            <>
              <LineItens>
                <CardInfo>{item.description}</CardInfo>
                <CardInfo>{item.description}</CardInfo>
              </LineItens>
            </>
          );
        })}
      </Container>
      <NavButton onPress={() => navigation.navigate('Home')}>Home</NavButton>
    </>
  );
};

export default WhoCanDonate;
