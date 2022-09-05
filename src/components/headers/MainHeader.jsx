import React from 'react';

import { Flex, Text, Button } from '@chakra-ui/react';

const Header = ({ textOn, textOff, handleActiveOn, handleActiveOff }) => {
  //Divider Toggle

  return (
    <Flex
      direction={['column', 'row']}
      mt={['0', '35px']}
      mb={['20px', '75px']}
      align="center"
    >
      {/* <Link
        variant="unstyled"
        position="absolute"
        top={['18px', '55px']}
        left="2px"
        p="8px"
        ml={['', '70px']}
        bg={['', 'bg-gray-secondary']}
        borderRadius="50%"
        as={RouterLink}
        to={to}
      >
        {<ChevronLeftIcon w="32px" h="32px" />}
      </Link> */}
      <Flex
        direction={['column', 'row']}
        justify={['', 'space-between']}
        w="100%"
        align="center"
        mx={['', '130px']}
        mt="30px"
        mb="10px"
      >
        <Flex direction="column">
          <Button
            display={textOn}
            onClick={handleActiveOn}
            variant="unstyled"
            fontSize={['16px', '20px']}
            fontWeight="700"
          >
            მომხმარებლის ინფო
          </Button>
          {/* <Divider orientation="horizontal" bg="black" mt="15px" h="2px" /> */}
        </Flex>
        <Flex direction="column">
          <Button
            display={textOff}
            onClick={handleActiveOff}
            variant="unstyled"
            fontSize={['16px', '20px']}
            fontWeight="700"
          >
            ლეპტოპის მახასიათებლები
          </Button>

          {/* <Divider orientation="horizontal" bg="black" mt="15px" h="2px" /> */}
        </Flex>
      </Flex>
      <Text
        fontSize="14"
        color="gray.400"
        textAlign="center"
        display={['inline', 'none']}
      >
        1/2
      </Text>
    </Flex>
  );
};

export default Header;
