import React from 'react';
import { Select } from '@chakra-ui/react';

const SelectInput = ({ placeholder, list, mt, mr, ml, mb, w }) => {
  return (
    <Select
      bg="gray.200"
      h="60px"
      placeholder={placeholder}
      fontSize="18px"
      fontWeight="bold"
      mt={mt}
      mr={mr}
      mb="40px"
      w={w}
    >
      {list.map(text => {
        return <option key={text}>{text}</option>;
      })}
    </Select>
  );
};

export default SelectInput;
