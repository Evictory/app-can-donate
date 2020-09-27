import React from 'react';
import { Container, TextButton } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const NavButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {/* <IconItem>{icon}</IconItem> */}
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default NavButton;
