import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';

import { Container, Icon, InputText } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  icone?: string;
  hasError?: boolean;
  tipo: "senha" | "texto" | "email" | "numero";
}

const Input: React.FC<IInputProps> = ({ name, icone, hasError, tipo, placeholder, ...rest }) => {
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
      {icone && 
        <Icon name={icone} size={24} color="#0B75D7" />
      }
      <InputText
        keyboardType={tipoTeclado}
        secureTextEntry={tipo === "senha" ? true : false }
        placeholder={placeholder}
        { ...rest }
      />
    </Container>
  );
}

export default Input;