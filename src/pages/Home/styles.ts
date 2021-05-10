import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #0B75D7;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    
`;

export const Body = styled.View`
    background-color: #F1F1FA;
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    align-items: center;
`;

export const ProgressoContainer = styled.View`
    background-color: #FCFCFF;
    width: ${Dimensions.get('screen').width - 60}px;
    max-width:500px;
    height: 170px;
    border-radius: 10px;
    padding: 15px;
    elevation: 10;
    margin-top: -${170/2}px;

`;

export const ProgressoDados = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const ProgressoDadosWrapper = styled.View`
    flex: 1;
`;

export const ProgressoDadosTextos = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextoContainer = styled.View`
    flex: 1;
`;

export const Titulo = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 16px;
    line-height: 20px;
`;

export const SubTitulo = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 14px;
    line-height: 18px;
`;

export const ProgressoDadosIcon = styled( RectButton )`
    background-color: #0B75D7;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    elevation: 5;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

export const BarraDeProgresso = styled.View`
    flex: 1;
`;

export const BarraDeProgressoWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const BarraDeProgressoIcon = styled.View`
    width: 35px;
    height: 35px;
    background-color: #F1F1FA;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
`;

export const BarraDeProgressoConteinerTexto = styled.View`
    flex:1;
    justify-content: center;
`;

export const TextoProgresso = styled.Text`
    font-family: DMSans_400Regular;
    font-size: 10px;
    line-height: 20px;
    color: #91919F;
`;

export const BarraDeProgressoCarregamento = styled.View`
    flex: 1;
    justify-content: center;
`;
