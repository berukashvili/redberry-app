import React from 'react';
import { Select } from '@chakra-ui/react';

const SelectInput = ({ placeholder, list }) => {
  return (
    <Select
      bg="gray.200"
      h="60px"
      placeholder={placeholder}
      fontSize="18px"
      fontWeight="bold"
      mb="70px"
    >
      {list.map(text => {
        return <option key={text}>{text}</option>;
      })}
    </Select>
  );
};

export default SelectInput;
