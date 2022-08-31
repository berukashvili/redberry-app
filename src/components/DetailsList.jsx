import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const DetailsList = ({ index, justify, w, w2, mr, mb, ml }) => {
  const itemList = [
    ['სახელი:', 'თიმი:', 'პოზიცია:', 'მეილი:', 'ტელ. ნომერი:'],
    ['ლეპტოპის სახელი:', 'ლეპტოპის ბრენდი:', 'RAM:', 'მეხსიერების ტიპი:'],
    ['CPU:', 'CPU-ს ბირთვი:', 'CPU-ს ნაკადი:'],
    ['მდგომარეობა:', 'შევსების რიცხვი:'],
    ['ლეპტოპის ფასი:'],
  ];
  return (
    <Flex direction="column" w={w2}>
      {itemList[index].map((item, i) => {
        return (
          <Flex justify={justify} w={w} key={i}>
            <Text fontSize={['14px', '22px']} mr={mr} mb={['6px', '16px']}>
              {item}
            </Text>
            <Text fontSize={['14px', '22px']} color="gray.500" ml={ml}>
              ტესტი
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default DetailsList;
