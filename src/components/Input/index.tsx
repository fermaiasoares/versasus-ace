import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';
import { Container, Icon, InputTexto } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  hasError?: boolean;
  tipo: "senha" | "texto" | "email" | "numero" | undefined;
}

const Input: React.FC<IInputProps> = ({ name, hasError, tipo, ...rest }) => {
  const [tipoTeclado, setTipoTeclado] = useState<KeyboardTypeOptions>();

  useEffect(() => {
    switch(tipo) {
      case "texto" : setTipoTeclado("default");
      break;
      
      case "email" : setTipoTeclado("email-address");
      break;

      case "numero" : setTipoTeclado("numeric");
      break;

      case undefined : setTipoTeclado("default");
      break;
      
      default: setTipoTeclado("default");
      break;
    }
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