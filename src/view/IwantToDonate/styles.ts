import styled from 'styled-components/native';
import Title from '../../components/Title';
import CardInfo from '../../components/CardInfo';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: rgba(199, 20, 26, 0.5);
  flex: 1;
  padding: 10px;
`;

export const MainTitle = styled(Title)`
  color: #ffffff;
  margin-bottom: 5px;
`;

export const SecondaryTitle = styled(Title)`
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
  margin: 5px;
`;

export const CardInfoWhite = styled(CardInfo)`
  background-color: #ffffff;
  color: #b40d1a;
  font-size: 14px;
`;

export const LineItens = styled.View`
  flex-direction: row;
  height: 140px;
  margin-bottom: 10px;
  width: 340px;
`;

export const StepInfo = styled.View`
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const StepText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const CardImage = styled.Image`
  height: 60px;
  width: 60px;
`;
