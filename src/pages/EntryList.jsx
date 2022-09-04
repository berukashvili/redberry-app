import React from 'react';
import { Flex } from '@chakra-ui/react';
import AltHeader from 'components/headers/AltHeader';
import List from 'components/list/List';

const EntryList = () => {
  return (
    <Flex direction="column" justify="center" mt={['30px', '50px']}>
      <AltHeader mt={['10px', '0']} mb={['40px', '100px']} to="/landing" />
      <Flex direction="column" justify={['', 'center']} align="center">
        <List />
      </Flex>
    </Flex>
  );
};

export default EntryList;
