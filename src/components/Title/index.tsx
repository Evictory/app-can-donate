import React from 'react';

import { Container, Text } from './styles';

const Title: React.FC = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Text {...rest}>{children}</Text>
    </Container>
  );
};

export default Title;
