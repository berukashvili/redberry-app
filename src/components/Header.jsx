import React from 'react';
import { IconButton, Flex, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Header = ({ display, fontSize, text1, text2, mr }) => {
  return (
    <Flex mb={['50px', '90px']} align="center">
      <IconButton
        variant="unstyled"
        position="absolute"
        top="19px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        mr="auto"
        ml={['', '70px']}
      />
      <Flex
        direction={['column', 'row']}
        justify={['', 'center']}
        w="100%"
        align="center"
        mt="30px"
        mb="10px"
      >
        <Heading fontSize={fontSize} textAlign="center" mr={['', '100px']}>
          {text1}
        </Heading>
        <Heading
          fontSize={['16px', '20px']}
          textAlign="center"
          display={display}
        >
          {text2}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
