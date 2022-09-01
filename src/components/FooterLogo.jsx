import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';

const FooterLogo = () => {
  return (
    <Flex mb="45px" w="100%" justify="center">
      <Box boxSize="85px" display={['none', 'inline']}>
        <Image
          objectFit="cover"
          src="./images/desktop-footer-logo.png"
          alt="mobile hero image"
        />
      </Box>
    </Flex>
  );
};

export default FooterLogo;
