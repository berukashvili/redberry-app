import React from 'react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import Picture from 'components/Picture';
import MainBtn from './MainBtn';

const ImageBtn = () => {
  return (
    <Flex direction="column" align="center" position="relative" mb="40px">
      <Picture
        display={['inline', 'none']}
        boxSize="100%"
        src="./images/mobile-rectangle.png"
      />
      <Picture
        display={['none', 'inline']}
        boxSize="100%"
        src="./images/desktop-rectangle.png"
      />
      <Box display={['none', 'inline']} position="absolute" top="0">
        <Flex direction="column" justify="center" align="center">
          <Button
            fontSize="20px"
            variant="unstyled"
            mt="120px"
            color="secondary-blue"
            noOfLines={2}
          >
            ჩააგდე ან ატვირთე ლეპტოპის ფოტო
          </Button>
          <MainBtn
            text="ატვირთე"
            bg="secondary"
            px="70px"
            py="30px"
            fontSize="20px"
            mt="60px"
            color="white"
          />
        </Flex>
      </Box>
      <Box
        display={['inline', 'none']}
        position="absolute"
        top={['52px', '35%']}
      >
        <Flex direction="column" align="center" position="relative">
          <Button h="100%" bg="none" px="0" variant="unstyled">
            <Picture src="./images/mobile-image-icon.png" mb="30px" />
            <Text
              color="secondary-blue"
              fontSize={('16px', '20px')}
              fontWeight="500"
            >
              ლეპტოპის ფოტოს ატვირთვა
            </Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ImageBtn;
