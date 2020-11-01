import styled from 'styled-components/native';
import { SafeAreaView, ImageBackground, Image } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Background = styled(ImageBackground)`
  flex: 1;
`;
export const Menu = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image)`
  height: 30px;
  margin: 20px;
  padding: 5px;
  width: 30px;
`;
