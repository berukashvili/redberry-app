import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Text, Link } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const AltHeader = ({ mt, mb, to }) => {
  return (
    <Flex align="center">
      <Link
        variant="unstyled"
        position="absolute"
        top={['0px', '6px']}
        left="2px"
        p="8px"
        ml={['', '70px']}
        bg={['', 'bg-gray-secondary']}
        borderRadius="50%"
        as={RouterLink}
        to={to}
      >
        {<ChevronLeftIcon w="32px" h="32px" />}
      </Link>
      <Text
        fontSize={['16px', '34px']}
        textAlign="center"
        fontWeight="700"
        w="100%"
        mt={mt}
        mb={mb}
      >
        ჩანაწერების სია
      </Text>
    </Flex>
  );
};

export default AltHeader;
