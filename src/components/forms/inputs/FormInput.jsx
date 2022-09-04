import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

const TestInput = ({
  label,
  placeholder,
  textHelper,
  name,
  type,
  w,
  ml,
  onChange,
  touched,
  onBlur,
  errors,
  value,
}) => {
  return (
    <FormControl ml={ml} mb="40px" w={w} isInvalid={errors && touched}>
      <FormLabel fontSize="18px" fontWeight="500">
        {label}
      </FormLabel>
      <Input
        fontWeight="400"
        name={name}
        type={type}
        placeholder={placeholder}
        size="md"
        borderColor="gray"
        h="60px"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <FormHelperText fontSize="14px" fontWeight="300">
        {textHelper}
      </FormHelperText>
      <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  );
};

export default TestInput;
