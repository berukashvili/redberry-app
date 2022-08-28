import React from 'react';
import { IconButton, Flex, Heading, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <>
      <IconButton
        variant="unstyled"
        position="absolute"
        top="19px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        mr="auto"
      />
      <Flex direction="column" align="center" mt="30px" mb="10px">
        <Heading fontSize="16px" textAlign="center">
          ლეპტოპის მახასიათებლები
        </Heading>
      </Flex>
    </>
  );
};

export default Header;
