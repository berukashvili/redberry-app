import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const FormInput = ({ label, placeholder, val, type, w, ml }) => {
  return (
    <FormControl ml={ml} mb="40px" w={w}>
      <FormLabel fontSize="18px" fontWeight="500">
        {label}
      </FormLabel>
      <Input
        fontWeight="400"
        type={type}
        placeholder={placeholder}
        size="md"
        borderColor="gray"
        h="60px"
      />
      <FormHelperText fontSize="14px" fontWeight="300">
        {val}
      </FormHelperText>
    </FormControl>
  );
};

export default FormInput;
