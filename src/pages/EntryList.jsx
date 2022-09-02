import React from 'react';
import List from 'components/List';
import { Flex } from '@chakra-ui/react';
import AltHeader from 'components/AltHeader';

const EntryList = () => {
  return (
    <Flex direction="column" justify="center" mt={['30px', '50px']}>
      <AltHeader mt={['10px', '0']} mb={['40px', '100px']} />
      <Flex direction="column" justify={['', 'center']} align="center">
        <List />
      </Flex>
    </Flex>
  );
};

export default EntryList;
