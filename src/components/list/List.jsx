import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ListItem from './ListItem';

const List = () => {
  return (
    <Box w={['100%', '']}>
      <Flex
        direction={['column', 'row']}
        align="center"
        justifyContent="space-between"
      >
        <ListItem />
        <ListItem />
      </Flex>
      <Flex
        direction={['column', 'row']}
        align="center"
        justifyContent="space-between"
      >
        <ListItem />
        <ListItem />
      </Flex>
      <Flex
        direction={['column', 'row']}
        align="center"
        justifyContent="space-between"
      >
        <ListItem />
        <ListItem />
      </Flex>
      <Flex
        direction={['column', 'row']}
        align="center"
        justifyContent="space-between"
      >
        <ListItem />
        <ListItem />
      </Flex>
    </Box>
  );
};

export default List;
