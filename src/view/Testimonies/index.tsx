import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import NavButton from '../../components/NavButton';
import Title from '../../components/Title';
import Answer from '../../components/AnswerFaq';

import {
  Container,
  CardContainer,
  TestimonyContainer,
  TestimonyText,
  HandleOpenCard,
  DeleteContainer,
  DeleteText,
} from './styles';

interface Testimony {
  id: number;
  wrap_description: string;
  description: string;
}

const Testimonies: React.FC = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [selectedTestimony, setSelectedTestimony] = useState<string>('');

  useEffect(() => {
    async function loadTestimony(): Promise<void> {
      await api.get('/testimony').then((response) => {
        let updatedData = wrapText(response.data);

        setTestimonies(updatedData);
      });
    }

    loadTestimony();
  }, []);

  const handleDeleteTestimony = async (id: number) => {
    console.log('ID', id);
    await api.delete(`/testimony/${id}`).then(() => {
      var newTestimonies = testimonies.filter(function fn(item) {
        return item.id !== id;
      });

      setTestimonies(newTestimonies);
    });
  };

  const wrapText = (data: Testimony[]): Testimony[] => {
    data.forEach((element) => {
      element.wrap_description = element.description.substring(0, 20) + '...';
    });

    return data;
  };

  const renderTestimony = ({ item }: any) => {
    const testimony = (
      <TestimonyContainer>
        <TestimonyText key={item.wrap_description}>
          {item.wrap_description}
        </TestimonyText>
        <DeleteContainer>
          <DeleteText onPress={() => handleDeleteTestimony(item.id)}>
            X
          </DeleteText>
        </DeleteContainer>
      </TestimonyContainer>
    );
    const answer = <Answer key={item.description}>{item.description}</Answer>;

    return (
      <>
        <HandleOpenCard
          key={item.description}
          onPress={() => setSelectedTestimony(item.description)}>
          <CardContainer key={item.description}>
            {item.description === selectedTestimony
              ? [testimony, answer]
              : [testimony]}
          </CardContainer>
        </HandleOpenCard>
      </>
    );
  };

  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Title>Veja os depoimentos</Title>
        <FlatList
          data={testimonies}
          renderItem={renderTestimony}
          keyExtractor={(item) => item.description}
          extraData={selectedTestimony}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('Desenvolvedores')}>
        Veja os desenvolvedores
      </NavButton>
    </>
  );
};

export default Testimonies;
