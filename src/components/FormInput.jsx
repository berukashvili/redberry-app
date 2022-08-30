import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const FormInput = ({ label, placeholder, val, type, w, ml, mb }) => {
  return (
    <FormControl ml={ml} mb="40px" w={w}>
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
