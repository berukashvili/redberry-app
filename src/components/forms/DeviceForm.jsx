import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import ImageBtn from 'components/buttons/ImageBtn';
import FormInput from 'components/forms/inputs/FormInput';
import SelectInput from 'components/forms/inputs/SelectInput';
import RadioInput from 'components/forms/inputs/RadioInput';
import MainBtn from 'components/buttons/MainBtn';
import MainModal from 'components/MainModal';

const DeviceForm = ({ handleActiveOn }) => {
  const [contentDisplay, setContentDisplay] = useState('flex');
  const [display, setDisplay] = useState('none');

  const handleDisplay = () => {
    setContentDisplay('none');
    setDisplay('inline');
  };

  return (
    <Box h="100%">
      <MainModal display={display} />
      <Flex direction="column" justify="space-between">
        <ImageBtn />
        <Flex
          direction={['column', 'row']}
          align={['', 'center']}
          justify={['', 'space-between']}
        >
          <FormInput
            label="ლეპტოპის სახელი"
            placeholder="HP"
            val="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
            type="text"
            w={['100%', '390px']}
          />
          <SelectInput
            placeholder="ლეპტოპის ბრენდი"
            list={['Acer', 'Lenovo', 'Asus', 'Apple']}
            w={['100%', '390px']}
            mt="11px"
          />
        </Flex>
        <Flex
          direction={['column', 'row']}
          align={['', 'center']}
          justify={['', 'space-between']}
        >
          <SelectInput
            placeholder="CPU"
            list={['Intel', 'AMD', 'Applle', 'Qualcomm']}
            mr={['', '24px']}
            mt="10px"
            w={['100%', '300px']}
          />
          <FormInput
            label="CPU-ს ბირთვი"
            placeholder="14"
            val="მხოლოდ ციფრები"
            type="number"
            w={['100%', '300px']}
          />
          <FormInput
            label="CPU-ს ნაკადი"
            placeholder="365"
            val="მხოლოდ ციფრები"
            type="number"
            w={['100%', '300px']}
            ml={['', '24px']}
          />
        </Flex>
        <Flex
          direction={['column', 'row']}
          align={['', 'center']}
          justify={['', 'space-between']}
        >
          <FormInput
            label="ლეპტოპის RAM (GB)"
            placeholder="16"
            val="მხოლოდ ციფრები"
            type="number"
            w={['100%', '390px']}
          />
          <RadioInput
            label="მეხსიერების ტიპი"
            value1="SSD"
            value2="HDD"
            w={['100%', '390px']}
          />
        </Flex>
        <Flex direction={['column', 'row']} justify={['', 'space-between']}>
          <FormInput
            label="შეძენის რიცხვი (არჩევითი)"
            placeholder="დდ/თთ/წწწწ"
            val="მხოლოდ ციფრები"
            type="datetime"
            w={['100%', '390px']}
          />
          <FormControl mb="20px" w={['100%', '390px']}>
            <FormLabel fontSize="18px" fontWeight="bold">
              ლეპტოპის ფასი
            </FormLabel>
            <InputGroup>
              <Input
                type="number"
                placeholder="16"
                size="md"
                borderColor="gray"
                h="60px"
              />
              <InputRightElement children={'₾'} top="9px" />
            </InputGroup>
            <FormHelperText fontSize="14px">მხოლოდ ციფრები</FormHelperText>
          </FormControl>
        </Flex>
        <RadioInput
          label="ლეპტოპის მდგომარეობა"
          value1="ახალი"
          value2="მეორადი"
        />
        <Flex justify="space-between" align="center">
          <Button
            color="secondary-blue"
            variant="unstyled"
            onClick={handleActiveOn}
          >
            უკან
          </Button>
          <MainBtn
            color="white"
            fontSize="18px"
            bg="secondary"
            px={['35px', '40px']}
            py={['10px', '30px']}
            ml="auto"
            to="/success"
            text="ჩანაწერის შენახვა"
            onClick={handleDisplay}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DeviceForm;
