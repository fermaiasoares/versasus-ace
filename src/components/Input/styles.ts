import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 325px;
  height: 50px;

  background-color: #FCFCFF;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 16px;
`;

export const InputText = styled.TextInput`
  flex: 1;
`;

export const Icon = styled(Feather)`
  margin-right: 8px 
`