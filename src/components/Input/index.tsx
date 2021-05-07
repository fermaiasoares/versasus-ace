import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { KeyboardType, KeyboardTypeOptions, TextInputProps } from 'react-native';

import { Container, Icon, InputTexto } from './styles';
interface IInputProps extends TextInputProps {
  name: string;
  hasError?: boolean;
  tipo: "senha" | "texto" | "email" | "numero";
}

const Input: React.FC<IInputProps> = ({ tipo, ...rest }) => {
  const [tipoTeclado, setTipoTeclado] = useState<KeyboardTypeOptions>();

  useEffect(() => {
    if (tipo === "texto")
      setTipoTeclado("default");

    if (tipo === "email")
      setTipoTeclado("email-address");

    if (tipo === "numero")
      setTipoTeclado("numeric");
  }, []);

  return (
    <Container>
      <Icon name="lock" size={24} color="#0B75D7" />
      <InputTexto
        keyboardType={tipoTeclado}
        secureTextEntry={tipo === "senha" ? true : false }
        {...rest} 
      />
    </Container>
  );
}

export default Input;