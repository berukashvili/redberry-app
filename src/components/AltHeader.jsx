import React from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const AltHeader = ({ mt, mb }) => {
  return (
    <Flex align="center">
      <IconButton
        variant="unstyled"
        position="absolute"
        top="0px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        ml={['', '70px']}
        bg={['', 'bg-gray-secondary']}
        borderRadius="50%"
      />
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
