import React from 'react';

import { Container, CardText } from './styles';

const CardInfo: React.FC = ({ children }) => {
  return (
    <Container>
      <CardText>{children}</CardText>
    </Container>
  );
};

export default CardInfo;
