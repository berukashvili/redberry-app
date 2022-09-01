import React from 'react';
import { Flex, Divider, Text, IconButton } from '@chakra-ui/react';
import Picture from 'components/Picture';
import DetailsList from 'components/DetailsList';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Details = () => {
  return (
    <Flex direction="column" align="center" mt={['30px', '50px']}>
      <Flex align="center">
        <IconButton
          variant="unstyled"
          position="absolute"
          top="0px"
          left="2px"
          icon={<ChevronLeftIcon w="32px" h="32px" />}
          size="lg"
          ml={['', '70px']}
          bg={['', 'bg-gray-secondary']}
          borderRadius="50%"
        />
        <Text
          fontSize={['16px', '34px']}
          textAlign="center"
          fontWeight="700"
          mb={['40px', '70px']}
        >
          ჩანაწერების სია
        </Text>
      </Flex>
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
