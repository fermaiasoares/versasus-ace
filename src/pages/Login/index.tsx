import React from 'react';
import { View } from 'react-native';

import { BackgrounLogin, ButtonEntrar, ButtonEntrarTexto, ImageBackground } from './styles';

import Logo from '../../assets/logo.svg';
import VersaTec from '../../assets/versatec.svg';
import Input from '../../components/Input';
const LoginContainer = require('../../assets/login-background.png');

const Login: React.FC = () => {
  const background = require('../../assets/background.png');
  
  return (
    <ImageBackground source={background}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Logo width={300} />
      </View>

      <BackgrounLogin source={LoginContainer}>
        
        <Input
          name="usuario"
          tipo="numero"
          placeholder="Digite seu usuário"
        />

        <Input
          name="senha"
          tipo="senha"
          placeholder="Digite sua senha"
        />

          <ButtonEntrar>
            <ButtonEntrarTexto>Entrar</ButtonEntrarTexto>
          </ButtonEntrar>
          <VersaTec />
        </BackgrounLogin>
    </ImageBackground>
  );
}

export default Login;