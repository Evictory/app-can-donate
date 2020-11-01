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

export const TestimonyContainer = styled.View`
  align-items: center;
  background-color: #c7141a;
  border-radius: 15px;
  flex-direction: row;
  height: 33px;
  width: 294px;
`;

export const TestimonyText = styled.Text`
  color: #f2ece9;
  margin-left: 20px;
  width: 240px;
`;

export const HandleOpenCard = styled.TouchableWithoutFeedback``;

export const DeleteContainer = styled.TouchableWithoutFeedback``;

export const DeleteText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
