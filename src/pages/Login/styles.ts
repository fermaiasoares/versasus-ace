import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background-color: #f1f1f1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 4;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  
`

export const BackgrounLogin = styled.ImageBackground`
  width: 100%;
  height: 500px;
  border-top-left-radius: 30px;
  margin-bottom: ${426-500}px;

  align-items: center;
  justify-content: center;
`;

export const ButtonEntrar = styled.TouchableOpacity`
  width: 325px;
  height: 48px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  margin-bottom: 56px;

  background-color: #0B75D7;
`;

export const ButtonEntrarTexto = styled.Text`
  font-family: DMSans_700Bold;
  font-size: 14px;
  line-height: 18.23px;
  color: #FCFCFF;
`;