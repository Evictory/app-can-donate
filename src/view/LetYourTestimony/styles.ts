import styled from 'styled-components/native';

import { SafeAreaView, Text, View } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  padding: 10px;
`;

export const FormView = styled(View)``;

export const LabelText = styled(Text)`
  color: #000000;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  background-color: #c7141a;
  border: 3px solid #c7141a;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  height: 55px;
  width: 300px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;
