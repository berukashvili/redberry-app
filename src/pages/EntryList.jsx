import React from 'react';
import Header from 'components/Header';
import List from 'components/List';
import { Flex, Box } from '@chakra-ui/react';

const EntryList = () => {
  return (
    <Box>
      <Header
        text1="ჩანაწერების სია"
        display={['none', 'none']}
        mr={['', '']}
        fontSize={['16px', '34px']}
      />
      <Flex direction="column" justify={['', 'center']} align="center">
        <List />
      </Flex>
    </Box>
  );
};

export default EntryList;
