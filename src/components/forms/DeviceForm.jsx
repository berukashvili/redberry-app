import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import MainLink from 'components/MainLink';
import MainHeader from 'components/headers/MainHeader';
import ImageBtn from 'components/buttons/ImageBtn';
import FormInput from 'components/forms/inputs/FormInput';
import SelectInput from 'components/forms/inputs/SelectInput';
import RadioInput from 'components/forms/inputs/RadioInput';
import MainBtn from 'components/buttons/MainBtn';
import MainModal from 'components/MainModal';
import FooterLogo from 'components/FooterLogo';

const DeviceForm = () => {
  const [contentDisplay, setContentDisplay] = useState('flex');
  const [display, setDisplay] = useState('none');

  const handleDisplay = () => {
    setContentDisplay('none');
    setDisplay('inline');
  };

  return (
    <Box h="100%">
      <MainModal display={display} />
      <Flex display={contentDisplay} direction="column" justify="space-between">
        <MainHeader
          text1="მომხმარებლის ინფო"
          text2="ლეპტოპის მახასიათებლები"
          display1={['none', 'inline']}
          to="/user-info"
          vis1="hidden"
          vis2="visible"
        />
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
            mt="11px"
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
          <MainLink
            color="secondary-blue"
            variant="unstyled"
            to="/user-info"
            text="უკან"
          />
          <MainBtn
            color="white"
            fontSize="18px"
            bg="secondary"
            px={['35px', '60px']}
            py={['10px', '30px']}
            ml="auto"
            to="/success"
            text="შემდეგი"
            onClick={handleDisplay}
          />
        </Flex>
        <FooterLogo />
      </Flex>
    </Box>
  );
};

export default DeviceForm;
