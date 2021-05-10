import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  icone?: string;
  tipo: "senha" | "texto" | "email" | "numero";
}

const Input: React.FC<IInputProps> = (
  { name, icone, placeholder, tipo, ...rest }
) => {
  const [tipoTeclado, setTipoTeclado] = useState<KeyboardTypeOptions>();

  useEffect(() => {
    switch(tipo) {
      case "texto" : setTipoTeclado("default");
      break;
      
      case "email" : setTipoTeclado("email-address");
      break;

      case "numero" : setTipoTeclado("numeric");
      break;
      
      default: setTipoTeclado("default");
      break;
    }
  }, []);

  return (
    <Container>
      {icone && 
        <Icon name={icone} size={24} color="#0B75D7" />
      }

      <TextInput
        keyboardType={tipoTeclado}
        secureTextEntry={tipo === "senha" ? true : false }
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
}

export default Input;