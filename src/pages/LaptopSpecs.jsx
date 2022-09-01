import React from 'react';
import {
  Flex,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import Header from 'components/Header';
import ImageBtn from 'components/ImageBtn';
import FormInput from 'components/FormInput';
import SelectInput from 'components/SelectInput';
import RadioInput from 'components/RadioInput';
import MainBtn from 'components/MainBtn';
import FooterLogo from 'components/FooterLogo';

const LaptopSpecs = () => {
  return (
    <Flex direction="column" justify="space-between">
      <Header display1={['none', 'inline']} />
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
        <Button color="secondary" variant="unstyled" fontSize="18px" mb="32px">
          უკან
        </Button>
        <MainBtn
          color="white"
          bg="secondary"
          px="28px"
          py="24px"
          fontSize="18px"
          mb="32px"
          text="დამახსოვრება"
        ></MainBtn>
      </Flex>
      <FooterLogo />
    </Flex>
  );
};

export default LaptopSpecs;
