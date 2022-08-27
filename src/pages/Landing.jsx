import React from 'react';
import { Box, Flex, Image, ButtonGroup, Button } from '@chakra-ui/react';

const Landing = () => {
  return (
    <Flex height="100vh" direction="column" align="center">
      <Box boxSize="112px" mt="64px">
        <Image
          objectFit="cover"
          src="./images/mobile-logo.png"
          alt="Mobile Header Logo"
        />
      </Box>
      <Box boxSize="268px" mb="132px">
        <Image
          objectFit="cover"
          src="./images/mobile-hero.png"
          alt="Mobile Hero Image"
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
        >
          ჩანაწერის დამატება
        </Button>
        <Button bg="secondary" px="78px" py="30px" fontSize="20px" mb="32px">
          ჩანაწერების სია
        </Button>
      </Flex>
    </Flex>
  );
};

export default Landing;
