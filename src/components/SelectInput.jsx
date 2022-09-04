import React from 'react';
import { Select } from '@chakra-ui/react';

const SelectInput = ({
  placeholder,
  name,
  list,
  mt,
  mr,
  w,
  onChange,
  value,
  errors,
  onBlur,
  touched,
}) => {
  return (
    <Select
      isInvalid={errors && touched}
      name={name}
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
        return (
          <option key={text} onChange={onChange} onBlur={onBlur} values={value}>
            {text}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectInput;
