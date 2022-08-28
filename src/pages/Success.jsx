import React from 'react';
import { Box, Flex, Image, Button, Text } from '@chakra-ui/react';

const Success = () => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justify="center"
      align="center"
      mt="60px"
    >
      <Box>
        <Image
          objectFit="cover"
          src="./images/mobile/mobile-success.png"
          alt="mobile succes hero image"
        />
      </Box>
      <Text fontSize="22px" fontWeight="bold" width="50%" textAlign="center">
        ჩანაწერი დამატებულია!
      </Text>
      <Flex direction="column">
        <Button
          bg="secondary"
          px="78px"
          py="30px"
          fontSize="20px"
          mt="160px"
          mb="16px"
          color="white"
        >
          სიაში გადაყვანა
        </Button>
        <Button
          bg="none"
          px="78px"
          py="30px"
          fontSize="20px"
          mb="32px"
          color="secondary-blue"
        >
          მთავარი
        </Button>
      </Flex>
    </Flex>
  );
};

export default Success;
