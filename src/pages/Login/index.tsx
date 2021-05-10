import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import {
  BackgroundLogin, 
  ButtonEntrar, 
  ButtonEntrarTexto, 
  ImageBackground
} from './styles';

import Logo from '../../assets/logo.svg';
import VersaTec from '../../assets/versatec.svg';

import Input from '../../components/Input';
import Select from '../../components/Select';

import InstanciasService from '../../services/InstanciasService';
const service = new InstanciasService();

interface IItem {
  id: number;
  label: string;
  value: string;
}

const Login: React.FC = () => {
  const LoginContainer = require('../../assets/login-background.png');
  const background = require('../../assets/background.png');

  const [instancias, setInstancias] = useState<IItem[]>();

  useEffect(() => {
    service.execute().then(
      response => setInstancias(response)
    )    
  }, [])

  return (
    <ImageBackground source={background}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Logo width={300} />
      </View>

      <BackgroundLogin source={LoginContainer}>

        { instancias && (
          <Select
            icone="filter"
            name="ambientes"
            placeholder="Escolha seu ambiente"
            items={instancias}
          />
        )}
        
        <Input
          icone="user"
          name="usuario"
          tipo="texto"
          placeholder="Digite seu usuário"
        />

        <Input
          icone="lock"
          name="senha"
          tipo="senha"
          placeholder="Digite sua senha"
        />

          <ButtonEntrar>
            <ButtonEntrarTexto>Entrar</ButtonEntrarTexto>
          </ButtonEntrar>
          <VersaTec />
        </BackgroundLogin>
    </ImageBackground>
  );
}

export default Login;