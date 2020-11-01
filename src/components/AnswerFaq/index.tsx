import React from 'react';

import { Container, AnswerText } from './styles';

const AnswerFaq: React.FC = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <AnswerText {...rest}>{children}</AnswerText>
    </Container>
  );
};

export default AnswerFaq;
