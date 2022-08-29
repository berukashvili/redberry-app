import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const FormInput = ({ label, placeholder, val, type }) => {
  return (
    <FormControl mb="20px">
      <FormLabel fontSize="18px" fontWeight="bold">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        size="md"
        borderColor="gray"
        h="60px"
      />
      <FormHelperText fontSize="14px">{val}</FormHelperText>
    </FormControl>
  );
};

export default FormInput;
