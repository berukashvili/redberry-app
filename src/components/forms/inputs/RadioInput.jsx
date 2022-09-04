import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';

const RadioInput = ({ label, value1, value2, w }) => {
  return (
    <FormControl as="fieldset" mb="40px" w={w}>
      <FormLabel fontSize="18px" fontWeight="bold">
        {label}
      </FormLabel>
      <RadioGroup>
        <HStack spacing="24px">
          <Radio fontSize="16px" fontWeight="500">
            {value1}
          </Radio>
          <Radio fontSize="16px" fontWeight="500">
            {value2}
          </Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
