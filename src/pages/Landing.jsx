import React from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';

const Landing = () => {
  return (
    <Flex height="100vh" direction="column" align="center">
      <Box boxSize="112px" mt="64px">
        <Image
          objectFit="cover"
          src="./images/mobile-logo.png"
          alt="mobile header logo"
        />
      </Box>
      <Box boxSize="268px" mb="132px">
        <Image
          objectFit="cover"
          src="./image/mobile-hero.png"
          alt="mobile hero image"
        />
      </Box>
      <Flex direction="column">
        <Button
          bg="secondary"
          px="78px"
          py="30px"
          fontSize="20px"
          mt="100px"
          mb="16px"
          color="white"
        >
          ჩანაწერის დამატება
        </Button>
        <Button
          bg="secondary"
          px="78px"
          py="30px"
          fontSize="20px"
          mb="32px"
          color="white"
        >
          ჩანაწერების სია
        </Button>
      </Flex>
    </Flex>
  );
};

export default Landing;
