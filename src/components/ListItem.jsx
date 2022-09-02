import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

const ListItem = ({ to }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      bg="secondary-bg"
      borderRadius="10px"
      border="1px"
      borderColor="secondary-blue"
      mb={['20px', '50px']}
      w={['', '405px']}
      h={['', '150px']}
    >
      <Box m="5px" mr={['20px', '0']} w={['45%', '50%']}>
        <Image
          objectFit="cover"
          src="./images/device.png"
          alt="list device hero image"
        />
      </Box>
      <Flex direction="column" mr="30px" w="50%">
        <Text fontSize={['14px', '18px']} fontWeight="500">
          ირინე ჩანქსელიანი
        </Text>
        <Text fontSize="18px" fontWeight="400">
          Pentium II
        </Text>
        <Link
          color="secondary-blue"
          fontSize={['14px', '16px']}
          fontWeight="400"
          textDecoration="underline"
          as={RouterLink}
          to="/details"
          mt="8px"
        >
          მეტის ნახვა
        </Link>
      </Flex>
    </Flex>
  );
};

export default ListItem;
