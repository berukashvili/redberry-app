import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import Picture from 'components/Picture';

const Success = () => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justify="center"
      align="center"
      mt={['60px', '0']}
    >
      <Picture src="./images/mobile-success.png" zIndex="3" />
      <Text
        fontSize={['22px', '25px']}
        fontWeight="bold"
        width="50%"
        textAlign="center"
        zIndex="2"
      >
        ჩანაწერი დამატებულია!
      </Text>
      <Box
        display={['none', 'inline']}
        w="850px"
        h="540px"
        position="absolute"
        bg="white"
        zIndex="1"
        borderRadius="8px"
      />
      <Flex direction="column">
        <Button
          bg="secondary"
          px="78px"
          py="30px"
          fontSize="20px"
          mt={['160px', '60px']}
          mb="16px"
          color="white"
          zIndex="1"
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
          zIndex="1"
        >
          მთავარი
        </Button>
      </Flex>
      <Box
        display={['none', 'inline']}
        w="100%"
        h="100%"
        position="absolute"
        bg="bg-gray"
        zIndex="-1"
      />
    </Flex>
  );
};

export default Success;
