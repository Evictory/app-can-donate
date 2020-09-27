import React from 'react';
import { Container, ItemText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const NavButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {/* <IconItem>{icon}</IconItem> */}
      <ItemText>{children}</ItemText>
    </Container>
  );
};

export default NavButton;
