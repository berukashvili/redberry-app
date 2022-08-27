import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Select,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const EmployeeInfo = () => {
  return (
    <Flex direction="column" justify="space-between" h="100vh">
      <IconButton
        position="absolute"
        top="0"
        left="2px"
        icon={
          <ChevronLeftIcon
            w="32px"
            h="32px"
            position="absolute"
            top="26px"
            left="3px"
          />
        }
        size="lg"
        mr="auto"
      />
      <Flex direction="column" align="center" mt="30px">
        <Heading fontSize="16px" textAlign="center">
          თანამშრომლის ინფო
        </Heading>
        <Text fontSize="14" color="gray.400">
          1/2
        </Text>
      </Flex>
      <Stack spacing={3}>
        <Text fontSize="18px" fontWeight="bold">
          სახელი
        </Text>
        <Input size="md" borderColor="gray" h="60px" />
        <Text fontSize="18px" fontWeight="bold">
          გვარი
        </Text>
        <Input size="md" borderColor="gray" h="60px" />
      </Stack>
      <Select
        placeholder="თიმი"
        bg="gray.200"
        h="60px"
        fontSize="18px"
        fontWeight="bold"
      >
        <option value="option1" bg="white">
          დეველოპმენტი
        </option>
        <option value="option2">HR</option>
        <option value="option3">გაყიდვები</option>
        <option value="option3">მარკეტინგი</option>
      </Select>
      <Select
        placeholder="პოზიცია"
        bg="gray.200"
        h="60px"
        fontSize="18px"
        fontWeight="bold"
      >
        <option value="option1">სენიორი</option>
        <option value="option2">სტაჟიორი</option>
        <option value="option3">მიდლი</option>
        <option value="option3">ლიდი</option>
      </Select>
      <Stack spacing={3}>
        <Text fontSize="18px" fontWeight="bold">
          მეილი
        </Text>
        <Input size="md" borderColor="gray" h="60px" />
        <Text fontSize="18px" fontWeight="bold">
          ტელეფონის ნომერი
        </Text>
        <Input size="md" borderColor="gray" h="60px" />
      </Stack>
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
