import React from 'react';
import {
  Flex,
  Heading,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const EmployeeInfo = () => {
  return (
    <Flex direction="column" justify="space-between">
      <IconButton
        variant="unstyled"
        position="absolute"
        top="19px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        mr="auto"
      />
      <Flex direction="column" align="center" mt="30px" mb="40px">
        <Heading fontSize="16px" textAlign="center">
          თანამშრომლის ინფო
        </Heading>
        <Text fontSize="14" color="gray.400">
          1/2
        </Text>
      </Flex>
      <FormControl mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          სახელი
        </FormLabel>
        <Input
          type="text"
          placeholder="გრიშა"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">
          მინიმუმ 2 სიმბოლო, ქართული ასოები
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="18px" fontWeight="bold">
          გვარი
        </FormLabel>
        <Input
          type="text"
          placeholder="ბაგრატიონი"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">
          მინიმუმ 2 სიმბოლო, ქართული ასოები
        </FormHelperText>
      </FormControl>
      <Flex direction="column" my="20px">
        <Select
          bg="gray.200"
          h="60px"
          placeholder="თიმი"
          fontSize="18px"
          fontWeight="bold"
          mb="40px"
        >
          <option value="option1">დეველოპმენტი</option>
          <option value="option2">HR</option>
          <option value="option3">გაყიდვები</option>
          <option value="option3">მარკეტინგი</option>
        </Select>
        <Select
          bg="gray.200"
          h="60px"
          placeholder="პოზიცია"
          fontSize="18px"
          fontWeight="bold"
        >
          <option value="option1">სენიორი</option>
          <option value="option2">სტაჟიორი</option>
          <option value="option3">მიდლი</option>
          <option value="option3">ლიდი</option>
        </Select>
      </Flex>
      <FormControl mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          მეილი
        </FormLabel>
        <Input
          type="email"
          placeholder="grish666@redberry.ge"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">
          უნდა მთავრდებოდეს @redberry.ge-ით
        </FormHelperText>
      </FormControl>
      <FormControl mb="20px">
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
        px="28px"
        py="24px"
        fontSize="18px"
        mb="32px"
        ml="auto"
      >
        შემდეგი
      </Button>
    </Flex>
  );
};

export default EmployeeInfo;
