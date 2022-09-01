import React from 'react';
import List from 'components/List';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const EntryList = () => {
  return (
    <Flex direction="column" justify="center" mt={['30px', '50px']}>
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
          mb={['40px', '100px']}
        >
          ჩანაწერების სია
        </Text>
      </Flex>
      <Flex direction="column" justify={['', 'center']} align="center">
        <List />
      </Flex>
    </Flex>
  );
};

export default EntryList;
