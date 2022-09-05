import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { fetchTeams } from 'api/RedberryApi';

const SelectInput = ({
  placeholder,
  name,
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
      {/* {teams?.map(item => {
        return (
          <option
            key={item.id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          >
            {item.name}
          </option>
        );
      })} */}
    </Select>
  );
};

export default SelectInput;
