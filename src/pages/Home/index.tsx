import React, { useEffect, useState } from 'react';
import Icone from '@expo/vector-icons/Feather';
import {ProgressBarAndroid} from 'react-native';

import { Container, Header, Body, ProgressoContainer, ProgressoDados, ProgressoDadosTextos, ProgressoDadosIcon, TextoContainer, Titulo, SubTitulo, ProgressoDadosWrapper, BarraDeProgresso, BarraDeProgressoIcon, TextoProgresso, BarraDeProgressoConteinerTexto, BarraDeProgressoWrapper, BarraDeProgressoCarregamento } from './styles';


const Home: React.FC = () => {
    const [cor, setCor] = useState<string>("#FF8181");
    const [porcentagem, setPorcentagem] = useState<number>(0);

    useEffect(() => {
        if(porcentagem < 100) {
            setTimeout(() => {
                setPorcentagem(porcentagem + 0.1);
            }, 1000);
        }

        if(porcentagem <= 0.25)
            setCor("#FF8181");

        if(porcentagem > 0.25 && porcentagem <= 0.50)
            setCor("#FFC960");

        if(porcentagem > 0.50 && porcentagem <= 0.75)
            setCor("#7DC579");

        if(porcentagem > 0.75 && porcentagem <= 100)
            setCor("#0B75D7");

        if(porcentagem > 1) {
            setPorcentagem(0);
            setCor("#FF8181");

        }
    }, [porcentagem])
    
    return (
        <Container>
            <Header>

                
            </Header>
            <Body>
                <ProgressoContainer>
                    <ProgressoDados>
                        <ProgressoDadosWrapper>
                            <ProgressoDadosTextos>
                                <TextoContainer>
                                    <Titulo>Acredita não Mateus.</Titulo>
                                </TextoContainer>
                            </ProgressoDadosTextos>
                            <ProgressoDadosTextos>
                                <SubTitulo>Visitados: 10</SubTitulo>
                                <SubTitulo>Esperados: 50</SubTitulo>
                            </ProgressoDadosTextos>
                        </ProgressoDadosWrapper>
                        <ProgressoDadosIcon>
                            <Icone name='upload-cloud' size={43} color="#FFF" />
                        </ProgressoDadosIcon>
                    </ProgressoDados>
                    <BarraDeProgresso>
                        <BarraDeProgressoWrapper>
                            <BarraDeProgressoIcon>
                                <Icone name='award' size={20} color="#161719"/>
                            </BarraDeProgressoIcon>
                            <BarraDeProgressoConteinerTexto>
                                <TextoProgresso>Progresso atual</TextoProgresso>
                                <SubTitulo>{porcentagem * 100}%</SubTitulo>
                            </BarraDeProgressoConteinerTexto>
                        </BarraDeProgressoWrapper>

                        <BarraDeProgressoCarregamento>
                            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={porcentagem} color={cor} />
                        </BarraDeProgressoCarregamento>

                    </BarraDeProgresso>
                </ProgressoContainer>
            </Body>
        </Container>
    )
}

export default Home;