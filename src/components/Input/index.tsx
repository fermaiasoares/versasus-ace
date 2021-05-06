import React from 'react';

import { Container, Icon, InputTexto } from './styles';

const Input: React.FC = ({ children }) => {
  return (
    <Container>
      <Icon name="lock" size={24} color="#0B75D7" />
      <InputTexto />
    </Container>
  );
}

export default Input;