import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

export const Container = styled.View`
  width: 325px;
  height: 50px;
  background-color: #fff;

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  border-radius: 10px;

  padding: 0 8px;

`;

export const SelectInput = styled(Picker)`
  flex: 1;
  color: #0B75D7;
`;

export const SelectIcon = styled(Feather)`
  margin-right: 8px; 
`