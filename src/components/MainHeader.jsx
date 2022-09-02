import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import MainLink from './MainLink';
import { Flex, Text, Link, Divider } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Header = ({ display1, display2, text1, text2, to, vis1, vis2 }) => {
  const { pathname } = useLocation();
  const pageCount = pathname === '/user-info' ? '1/2' : '2/2';

  return (
    <Flex
      direction={['column', 'row']}
      mt={['0', '35px']}
      mb={['20px', '75px']}
      align="center"
    >
      <Link
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
      </Link>
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
          <MainLink
            display={display1}
            fontSize={['16px', '20px']}
            fontWeight="700"
            text={text1}
            to="/user-info"
          />
          <Divider
            visibility={vis1}
            orientation="horizontal"
            bg="black"
            mt="15px"
            h="2px"
          />
        </Flex>
        <Flex direction="column">
          <MainLink
            display={display2}
            fontSize={['16px', '20px']}
            fontWeight="700"
            text={text2}
            to="/laptop-specs"
          />
          <Divider
            visibility={vis2}
            orientation="horizontal"
            bg="black"
            mt="15px"
            h="2px"
          />
        </Flex>
      </Flex>
      <Text
        fontSize="14"
        color="gray.400"
        textAlign="center"
        display={['inline', 'none']}
      >
        {pageCount}
      </Text>
    </Flex>
  );
};

export default Header;
