import React from 'react';
import { Flex } from '@chakra-ui/react';
import Picture from 'components/Picture';
import MainBtn from 'components/MainBtn';

const Landing = () => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justify={['', 'center']}
      align="center"
    >
      <Picture boxSize="112px" mt="64px" src="./images/mobile-logo.png" />
      <Picture
        boxSize="268px"
        mb="132px"
        display={['inline', 'none']}
        src="./images/mobile-hero.png"
      />
      <Picture
        boxSize="780px"
        mt="100px"
        display={['none', 'inline']}
        src="./images/desktop-hero.png"
      />
      <Flex direction="column" mb={['', '120px']}>
        <MainBtn
          bg="secondary"
          px={['78px', '92px']}
          py="30px"
          fontSize="20px"
          mt="100px"
          mb="16px"
          color="white"
          text="ჩანაწერის დამატება"
        />
        <MainBtn
          bg="secondary"
          px="78px"
          py="30px"
          fontSize="20px"
          mb="32px"
          color="white"
          text="ჩანაწერების სია"
        />
      </Flex>
    </Flex>
  );
};

export default Landing;
