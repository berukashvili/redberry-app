import React from 'react';
import {
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Image,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Button,
  IconButton,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import Header from 'components/Header';

const LaptopSpecs = () => {
  return (
    <Flex direction="column" justify="space-between">
      <Header />
      <Text fontSize="14" color="gray.400" textAlign="center" mb="30px">
        2/2
      </Text>
      <Button h="100%" bg="none">
        <Flex direction="column" align="center" position="relative" mb="40px">
          <Box boxSize="100%">
            <Image
              objectFit="cover"
              src="./images/mobile-rectangle.png"
              alt="mobile image upload rectangle"
            />
          </Box>
          <Box position="absolute" top="52px">
            <Flex direction="column" align="center" position="relative">
              <Box mb="30px">
                <Image
                  objectFit="cover"
                  src="./images/mobile-image-icon.png"
                  alt="mobile upload icon"
                />
              </Box>
              <Text
                color="secondary-blue"
                fontSize="16px"
                width="70%"
                textAlign="center"
              >
                ლეპტოპის ფოტოს ატვირთვა
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Button>
      <FormControl mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          ლეპტოპის სახელი
        </FormLabel>
        <Input
          type="text"
          placeholder="HP"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">
          ლათინური ასოები, ციფრები, !@#$%^&*()_+=
        </FormHelperText>
      </FormControl>
      <Flex direction="column" my="20px">
        <Select
          bg="gray.200"
          h="60px"
          placeholder="ლეპტოპის ბრენდი"
          fontSize="18px"
          fontWeight="bold"
          mb="70px"
        >
          <option value="option1">დეველოპმენტი</option>
          <option value="option2">HR</option>
          <option value="option3">გაყიდვები</option>
          <option value="option3">მარკეტინგი</option>
        </Select>
        <Select
          bg="gray.200"
          h="60px"
          placeholder="CPU"
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
          CPU-ს ბირთვი
        </FormLabel>
        <Input
          type="number"
          placeholder="14"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">მხოლოდ ციფრები</FormHelperText>
      </FormControl>
      <FormControl mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          CPU-ს ნაკადი
        </FormLabel>
        <Input
          type="number"
          placeholder="365"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">მხოლოდ ციფრები</FormHelperText>
      </FormControl>
      <FormControl mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          ლეპტოპის RAM (GB)
        </FormLabel>
        <Input
          type="number"
          placeholder="16"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">მხოლოდ ციფრები</FormHelperText>
      </FormControl>
      <FormControl as="fieldset" mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          მეხსიერების ტიპი
        </FormLabel>
        <RadioGroup>
          <HStack spacing="24px">
            <Radio value="Sasuke" fontSize="bold">
              SSD
            </Radio>
            <Radio value="Nagato" fontSize="bold">
              HDD
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl mt="20px" mb="20px">
        <FormLabel fontSize="18px" fontWeight="bold">
          შეძენის რიცხვი (არჩევითი)
        </FormLabel>
        <Input
          type="datetime"
          placeholder="დდ/თთ/წწწწ"
          size="md"
          borderColor="gray"
          h="60px"
        />
        <FormHelperText fontSize="14px">მხოლოდ ციფრები</FormHelperText>
      </FormControl>
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

      <FormControl as="fieldset" mb="40px">
        <FormLabel fontSize="18px" fontWeight="bold">
          ლეპტოპის მდგომარეობა
        </FormLabel>
        <RadioGroup>
          <HStack spacing="24px">
            <Radio value="Sasuke" fontSize="bold">
              ახალი
            </Radio>
            <Radio value="Nagato" fontSize="bold">
              მეორადი
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
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
