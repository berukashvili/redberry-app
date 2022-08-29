import React from 'react';
import {
  Flex,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import Header from 'components/Header';
import ImageBtn from 'components/ImageBtn';
import FormInput from 'components/FormInput';
import SelectInput from 'components/SelectInput';
import RadioInput from 'components/RadioInput';

const LaptopSpecs = () => {
  return (
    <Flex direction="column" justify="space-between">
      <Header />
      <Text fontSize="14" color="gray.400" textAlign="center" mb="30px">
        2/2
      </Text>
      <ImageBtn />
      <Flex direction={['column', 'row']} align={['', 'center']}>
        <FormInput
          label="ლეპტოპის სახელი"
          placeholder="HP"
          val="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
          type="text"
        />
        <SelectInput
          placeholder="ლეპტოპის ბრენდი"
          list={['Acer', 'Lenovo', 'Asus', 'Apple']}
        />
      </Flex>
      <Flex direction={['column', 'row']}>
        <SelectInput
          placeholder="CPU"
          list={['Intel', 'AMD', 'Applle', 'Qualcomm']}
        />
        <FormInput
          label="CPU-ს ბირთვი"
          placeholder="14"
          val="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
          type="number"
        />
        <FormInput
          label="CPU-ს ნაკადი"
          placeholder="365"
          val="მხოლოდ ციფრები"
          type="number"
        />
      </Flex>
      <Flex direction={['column', 'row']}>
        <FormInput
          label="ლეპტოპის RAM (GB)"
          placeholder="16"
          val="მხოლოდ ციფრები"
          type="number"
        />
        <RadioInput label="მეხსიერების ტიპი" value1="SSD" value2="HDD" />
      </Flex>
      <Flex direction={['column', 'row']}>
        <FormInput
          label="შეძენის რიცხვი (არჩევითი)"
          placeholder="დდ/თთ/წწწწ"
          val="მხოლოდ ციფრები"
          type="datetime"
        />
        <FormControl mb="20px">
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
        <Button
          color="white"
          bg="secondary"
          px="28px"
          py="24px"
          fontSize="18px"
          mb="32px"
        >
          დამახსოვრება
        </Button>
      </Flex>
    </Flex>
  );
};

export default LaptopSpecs;
