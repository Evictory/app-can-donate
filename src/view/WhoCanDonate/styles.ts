import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  padding: 10px;
`;

export const LineItens = styled.View`
  flex-direction: row;
  height: 140px;
  margin-bottom: 10px;
  width: 340px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const CardImage = styled.Image`
  height: 90px;
  width: 90px;
`;
