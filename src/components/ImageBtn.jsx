import React from 'react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import Picture from './Picture';

const ImageBtn = () => {
  return (
    <Button h="100%" bg="none" px="0">
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
        <Box position="absolute" top="52px">
          <Flex direction="column" align="center" position="relative">
            <Picture src="./images/mobile-image-icon.png" mb="30px" />
            <Text color="secondary-blue" fontSize="16px">
              ლეპტოპის ფოტოს ატვირთვა
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Button>
  );
};

export default ImageBtn;
