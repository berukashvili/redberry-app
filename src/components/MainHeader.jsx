import React from 'react';
import { IconButton, Flex, Heading, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

const Header = ({ display1, display2, text1, text2 }) => {
  const { pathname } = useLocation();
  const pageCount = pathname === '/user-info' ? '1/2' : '2/2';

  return (
    <Flex direction={['column', 'row']} mb={['20px', '75px']} align="center">
      <IconButton
        variant="unstyled"
        position="absolute"
        top="18px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        ml={['', '70px']}
        bg={['', 'bg-gray-secondary']}
        borderRadius="50%"
      />
      <Flex
        direction={['column', 'row']}
        justify={['', 'space-between']}
        w="100%"
        align="center"
        mx={['', '130px']}
        mt="30px"
        mb="10px"
      >
        <Heading
          display={display1}
          fontSize={['16px', '20px']}
          fontWeight="700"
          textAlign="center"
        >
          {text1}
        </Heading>
        <Heading
          display={display2}
          fontSize={['16px', '20px']}
          textAlign="center"
          fontWeight="700"
        >
          {text2}
        </Heading>
      </Flex>
      <Text
        fontSize="14"
        color="gray.400"
        textAlign="center"
        display={['inline', 'none']}
      >
        {pageCount}
      </Text>
    </Flex>
  );
};

export default Header;
