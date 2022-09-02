import React from 'react';
import { Flex } from '@chakra-ui/react';
import MainLink from 'components/MainLink';
import Picture from 'components/Picture';

const Landing = () => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justify={['', 'center']}
      align="center"
    >
      <Picture
        mt={['64px', '100px']}
        mb="100px"
        src="./images/mobile-logo.png"
      />
      <Picture
        boxSize="268px"
        mb="180px"
        display={['inline', 'none']}
        src="./images/mobile-hero.png"
      />
      <Picture
        boxSize="780px"
        mt={['100px', '0']}
        display={['none', 'inline']}
        src="./images/desktop-hero.png"
      />
      <Flex direction="column" align="center" mb={['', '120px']} w="100%">
        <MainLink
          bg="secondary"
          w={['100%', '45%']}
          px={['0', '78px']}
          py="15px"
          mb="32px"
          color="white"
          to="/user-info"
          text="ჩანაწერის დამატება"
        />
        <MainLink
          bg="secondary"
          w={['100%', '45%']}
          px={['0', '78px']}
          py="15px"
          text="ჩანაწერების სია"
          mb="32px"
          color="white"
          to="/entry-list"
        />
      </Flex>
    </Flex>
  );
};

export default Landing;
