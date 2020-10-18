import React from 'react';

import { Container, CardText } from './styles';

const CardInfo: React.FC = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <CardText {...rest}>{children}</CardText>
    </Container>
  );
};

export default CardInfo;
