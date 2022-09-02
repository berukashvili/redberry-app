import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import MainLink from './MainLink';
import Picture from 'components/Picture';

const MainModal = ({ display }) => {
  return (
    <Box
      display={display}
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      zIndex="20"
    >
      <Flex
        height="100vh"
        direction="column"
        justify="center"
        align="center"
        mt={['60px', '0']}
        bg={['', 'bg-gray']}
      >
        <Picture src="./images/mobile-success.png" zIndex="3" />
        <Text
          mb="50px"
          fontSize={['22px', '25px']}
          fontWeight="bold"
          width="50%"
          textAlign="center"
          zIndex="2"
        >
          ჩანაწერი დამატებულია!
        </Text>
        <Box
          display={['none', 'inline']}
          w="850px"
          h="540px"
          position="absolute"
          bg="white"
          zIndex="1"
          borderRadius="8px"
        />
        <Flex direction="column">
          <MainLink
            text="სიაში გადაყვანა"
            bg="secondary"
            px="78px"
            py="15px"
            mt={['160px', '60px']}
            mb="6px"
            color="white"
            zIndex="1"
            to="/entry-list"
          />
          <Link
            bg="none"
            px="78px"
            py="15px"
            fontSize="20px"
            fontWeight="500"
            textAlign="center"
            borderRadius="8px"
            mb="32px"
            color="secondary-blue"
            zIndex="1"
            _hover={{ bg: 'secondary-blue', color: 'white' }}
            as={RouterLink}
            to="/landing"
          >
            მთავარი
          </Link>
        </Flex>
        <Box
          display={['none', 'inline']}
          w="100%"
          h="100%"
          position="absolute"
          bg="bg-gray"
          zIndex="-1"
        />
      </Flex>
    </Box>
  );
};
export default MainModal;
