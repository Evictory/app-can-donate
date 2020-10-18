import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Menu = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Text`
  margin: 20px;
  padding: 5px;
`;
