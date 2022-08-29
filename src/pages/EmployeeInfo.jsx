import React from 'react';
import {
  Flex,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import SelectInput from 'components/SelectInput';
import FooterLogo from 'components/FooterLogo';

const EmployeeInfo = () => {
  return (
    <Flex direction="column" justify="space-between" h={['', '100vh']}>
      <Header />
      <Text
        fontSize="14"
        color="gray.400"
        textAlign="center"
        display={['inline', 'none']}
      >
        1/2
      </Text>
      <Flex direction={['column', 'row']}>
        <FormInput
          label="სახელი"
          placeholder="გრიშა"
          val="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
        />
        <FormInput
          label="გვარი"
          placeholder="ბაგრატიონი"
          val="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          type="text"
        />
      </Flex>
      <Flex direction="column" my="20px">
        <SelectInput
          placeholder="თიმი"
          list={['დეველოპმენტი', 'HR', 'გაყიდვები', 'მარკეტინგი']}
        />
        <SelectInput
          placeholder="პოზიცია"
          list={['სენიორი', 'ინტერნი', 'მიდლი', 'ლიდი']}
        />
      </Flex>
      <FormInput
        label="მეილი"
        placeholder="grish666@redberry.ge"
        val="უნდა მთავრდებოდეს @redberry.ge-ით"
        type="email"
      />
      <FormControl mb={['20px', '2px']}>
        <FormLabel fontSize="18px" fontWeight="bold">
          ტელეფონის ნომერი
        </FormLabel>
        <Input
          type="number"
          placeholder="+995 598 00 07 01"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">
          ქართული მობ-ნომრის ფორმატი
        </FormHelperText>
      </FormControl>
      <Button
        color="white"
        bg="secondary"
        px={['28px', '52px']}
        py={['24px', '30px']}
        fontSize="18px"
        mb={['32px', '2px']}
        ml="auto"
      >
        შემდეგი
      </Button>
      <FooterLogo />
    </Flex>
  );
};

export default EmployeeInfo;
