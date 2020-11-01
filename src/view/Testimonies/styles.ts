import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  padding: 10px;
`;

export const CardContainer = styled.View`
  align-items: center;
  font-size: 14px;
  padding: 5px;
`;

export const QuestionContainer = styled.View`
  align-items: center;
  background-color: #c7141a;
  border-radius: 15px;
  justify-content: center;
  height: 33px;
  width: 294px;
`;

export const QuestionText = styled.Text`
  color: #f2ece9;
`;

export const HandleOpenCard = styled.TouchableWithoutFeedback``;
