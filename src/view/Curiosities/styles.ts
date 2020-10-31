import styled from 'styled-components/native';
import { SafeAreaView, Image } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  align-self: center;
  flex: 1;
  padding: 10px;
  width: 90%;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  background-color: #ffefef;
  border: 3px solid #c7141a;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 55px;
  width: 266px;
`;

export const ButtonText = styled.Text`
  color: #c60000;
  font-size: 14px;
  text-align: center;
`;
