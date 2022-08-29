import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';

const RadioInput = ({ label, value1, value2 }) => {
  return (
    <FormControl as="fieldset" mb="20px">
      <FormLabel fontSize="18px" fontWeight="bold">
        {label}
      </FormLabel>
      <RadioGroup>
        <HStack spacing="24px">
          <Radio value="Sasuke" fontSize="bold">
            {value1}
          </Radio>
          <Radio value="Nagato" fontSize="bold">
            {value2}
          </Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
