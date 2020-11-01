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
  QuestionContainer,
  QuestionText,
  HandleOpenCard,
} from './styles';

interface Question {
  description: string;
  answer: string;
  is_visible: boolean;
}

const WhoCanDonate: React.FC = () => {
  const [descriptions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');

  useEffect(() => {
    async function loadQuestions(): Promise<void> {
      await api.get('/faq').then((response) => {
        setQuestions(response.data);
      });
    }

    loadQuestions();
  }, []);

  const renderQuestion = ({ item }: any) => {
    const description = (
      <QuestionContainer>
        <QuestionText key={item.description}>{item.description}</QuestionText>
      </QuestionContainer>
    );
    const answer = <Answer key={item.answer}>{item.answer}</Answer>;

    return (
      <>
        <HandleOpenCard
          key={item.description}
          onPress={() => setSelectedQuestion(item.description)}>
          <CardContainer key={item.description}>
            {item.description === selectedQuestion
              ? [description, answer]
              : [description]}
          </CardContainer>
        </HandleOpenCard>
      </>
    );
  };

  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Title>Dúvidas frequentes</Title>
        <FlatList
          data={descriptions}
          renderItem={renderQuestion}
          keyExtractor={(item) => item.description}
          extraData={selectedQuestion}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('Depoimento')}>
        Deixe seu depoimento!
      </NavButton>
    </>
  );
};

export default WhoCanDonate;
