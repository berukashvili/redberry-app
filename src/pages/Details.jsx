import React from 'react';
import { Flex, Box, Image, Text, Divider } from '@chakra-ui/react';
import Header from 'components/Header';

const Details = () => {
  const mainList = [
    ['სახელი:', 'თიმი:', 'პოზიცია:', 'მეილი:', 'ტელ. ნომერი:'],
    [
      'ლეპტოპის სახელი:',
      'ლეპტოპის ბრენდი:',
      'RAM:',
      'მეხსიერების ტიპი:',
      'CPU:',
      'CPU-ს ბირთვი:',
      'CPU-ს ნაკადი:',
    ],
    ['მდგომარეობა:', 'ლეპტოპის ფასი:', 'შევსების რიცხვი:'],
  ];

  return (
    <Flex direction="column" align="center">
      <Header />
      <Box boxSize="100%" mt="18px" mb="30px">
        <Image
          objectFit="cover"
          src="./images/mobile-details-hero.png"
          alt="mobile hero image"
        />
      </Box>
      {mainList[0].map((item, i) => {
        return (
          <Flex justify="space-between" width="100%" key={i}>
            <Text fontSize="14px" mb="6px">
              {item}
            </Text>
            <Text fontSize="14px" color="gray.500" mr="80px">
              ტესტი
            </Text>
          </Flex>
        );
      })}
      <Divider bg="black" orientation="horizontal" my="32px" />
      {mainList[1].map((item, i) => {
        return (
          <Flex justify="space-between" width="100%" key={i}>
            <Text fontSize="14px" mb="6px">
              {item}
            </Text>
            <Text fontSize="14px" color="gray.500" mr="80px">
              ტესტი
            </Text>
          </Flex>
        );
      })}
      <Divider bg="black" orientation="horizontal" my="32px" />
      {mainList[2].map((item, i) => {
        return (
          <Flex justify="space-between" width="100%" key={i}>
            <Text fontSize="14px" mb="6px">
              {item}
            </Text>
            <Text fontSize="14px" color="gray.500" mr="80px">
              ტესტი
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Details;
