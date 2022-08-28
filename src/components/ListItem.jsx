import React from 'react';
import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

const ListItem = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      bg="secondary-bg"
      borderRadius="10px"
      border="1px"
      borderColor="secondary-blue"
      mt="30px"
    >
      <Box m="5px">
        <Image
          objectFit="cover"
          src="./images/device.png"
          alt="list device hero image"
        />
      </Box>
      <Flex direction="column" mr="30px">
        <Text fontSize="14px" fontWeight="500">
          ირინე ჩანქსელიანი
        </Text>
        <Text fontSize="18px">Pentium II</Text>
        <Link
          color="secondary-blue"
          fontSize="14px"
          textDecoration="underline"
          mt="8px"
        >
          მეტის ნახვა
        </Link>
      </Flex>
    </Flex>
  );
};

export default ListItem;
