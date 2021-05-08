import React, { useEffect, useState } from 'react';
import { PickerItemProps, PickerProps } from 'react-native';

import { Container, SelectIcon, SelectInput } from './styles';

interface ISelectProps extends PickerProps {
  name: string;
  icone?: string;
  placeholder?: string;
  items?: PickerItemProps[];
}

const Select: React.FC<ISelectProps> = ({icone, items, name, placeholder = "Selecione" }) => {
  const [selecionado, setSelecionado] = useState("");
  const [itemsSelect, setItemsSelect] = useState<PickerItemProps[]>();

  useEffect(() => {
    if(items) {
      setItemsSelect(items);
      console.log(items);
    }
  }, [])

  return (
    <Container>
      {icone && (
        <SelectIcon name={icone} size={24} color="#0B75D7"/>
        )
      }
      <SelectInput
        selectedValue={selecionado}
        onValueChange={(itemValue, itemIndex) => setSelecionado(itemValue)}
      >
        <SelectInput.Item label={placeholder} value="" color="#91919F"/>
        { 
          items && items.map((item) => <SelectInput.Item label={item.label} value={item.value} />)
        }
      </SelectInput>
    </Container>
  );
}

export default Select;