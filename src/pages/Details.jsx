import React from 'react';
import { Flex, Divider } from '@chakra-ui/react';
import Header from 'components/Header';
import Picture from 'components/Picture';
import DetailsList from 'components/DetailsList';

const Details = () => {
  return (
    <Flex direction="column" align="center">
      <Header text1="ლეპტოპის ინფო" />
      <Flex direction={['column', 'row']} align="center" w="100%">
        <Picture
          src="./images/mobile-details-hero.png"
          alt="mobile hero image"
          display={['inline', 'none']}
          boxSize="100%"
          mb="30px"
        />
        <Picture
          src="./images/desktop-details-hero.png"
          alt="desktop hero image"
          display={['none', 'inline']}
          boxSize="100%"
          mt="18px"
          mb="30px"
        />
        <DetailsList
          index={[0]}
          justify={['space-between', '']}
          mr={['100px', '100px']}
          w2={['100%', '35%']}
        />
      </Flex>
      <Divider orientation="horizontal" bg="black" my="32px" />
      <Flex direction={['column', 'row']} justify="space-between" w="100%">
        <DetailsList
          index={[1]}
          justify="space-between"
          mr={['80px', '50px']}
          w="100%"
        />
        <DetailsList
          index={[2]}
          justify="space-between"
          ml={['0', '35px']}
          w={[['100%', '']]}
        />
      </Flex>
      <Divider
        bg="black"
        orientation="horizontal"
        my="32px"
        ml={['0', '10px']}
        w="100%"
      />
      <Flex direction={['column', 'row']} justify="space-between" w="100%">
        <DetailsList index={[3]} justify="space-between" ml={['0', '70px']} />
        <DetailsList index={[4]} justify="space-between" ml={['0', '40px']} />
      </Flex>
    </Flex>
  );
};

export default Details;
