import React, { useEffect, useState } from 'react';
import { PickerItemProps, PickerProps } from 'react-native';

import { Container, SelectIcon, SelectInput } from './styles';

interface IItem extends PickerItemProps {
  id: number;
}

interface ISelectProps extends PickerProps {
  name: string;
  icone?: string;
  placeholder?: string;
  items?: IItem[];
}

const Select: React.FC<ISelectProps> = ({icone, items, name, placeholder = "Selecione" }) => {
  const [selecionado, setSelecionado] = useState();
  const [itemsSelect, setItemsSelect] = useState<IItem[]>();

  useEffect(() => {
    if(items) {
      setItemsSelect(items);
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
          itemsSelect && itemsSelect.map((item) => <SelectInput.Item label={item.label} value={item.value} key={item.id}/>)
        }
      </SelectInput>
    </Container>
  );
}

export default Select;