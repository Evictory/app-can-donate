import styled from 'styled-components/native';
import { SafeAreaView, Image, Text, View } from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  flex: 1;
  padding: 10px;
`;

export const Logo = styled(Image)`
  margin: 5px;
  height: 34.8px;
  width: 35px;
`;

export const BeehiveText = styled(Text)`
  color: #b40d1a;
  font-size: 40px;
  font-weight: bold;
  margin: 5px;
`;

export const Card = styled(View)`
  align-items: center;
  justify-content: center;
  background: #b40d1a;
  border-radius: 5px;
  margin-top: 30px;
  height: 170px;
  width: 300px;
`;

export const BoldTitle = styled(Text)`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
  text-align: center;
`;

export const SimpleText = styled(Text)`
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
`;
