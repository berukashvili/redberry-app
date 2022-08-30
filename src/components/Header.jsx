import React from 'react';
import { IconButton, Flex, Heading, Box } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box mb={['', '50px']}>
      <IconButton
        variant="unstyled"
        position="absolute"
        top="19px"
        left="2px"
        icon={<ChevronLeftIcon w="32px" h="32px" />}
        size="lg"
        mr="auto"
        ml={['', '70px']}
      />
      <Flex
        direction={['column', 'row']}
        justify={['', 'center']}
        align="center"
        mt="30px"
        mb="10px"
      >
        <Heading
          fontSize={['16px', '20px']}
          textAlign="center"
          mr={['', '70px']}
        >
          ლეპტოპის მახასიათებლები
        </Heading>
        <Heading
          fontSize={['16px', '20px']}
          textAlign="center"
          display={['none', 'inline']}
        >
          ლეპტოპის მახასიათებლები
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
