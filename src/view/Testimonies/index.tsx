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
  question: string;
  answer: string;
  is_visible: boolean;
}

const Testimonies: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
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
    const question = (
      <QuestionContainer>
        <QuestionText key={item.question}>{item.question}</QuestionText>
      </QuestionContainer>
    );
    const answer = <Answer key={item.answer}>{item.answer}</Answer>;

    return (
      <>
        <HandleOpenCard
          key={item.question}
          onPress={() => setSelectedQuestion(item.question)}>
          <CardContainer key={item.question}>
            {item.question === selectedQuestion
              ? [question, answer]
              : [question]}
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
          data={questions}
          renderItem={renderQuestion}
          keyExtractor={(item) => item.question}
          extraData={selectedQuestion}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('Desenvolvedores')}>
        Veja os desenvolvedores
      </NavButton>
    </>
  );
};

export default Testimonies;
