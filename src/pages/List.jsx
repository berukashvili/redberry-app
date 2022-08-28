import React from 'react';
import Header from 'components/Header';
import ListItem from 'components/ListItem';
import { Flex } from '@chakra-ui/react';

const List = () => {
  return (
    <Flex direction="column">
      <Header />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Flex>
  );
};

export default List;
