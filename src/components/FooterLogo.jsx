import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const FooterLogo = () => {
  return (
    <Box boxSize="85px" mb="45px" ml={['', '50%']} display={['none', 'inline']}>
      <Image
        objectFit="cover"
        src="./images/desktop-footer-logo.png"
        alt="mobile hero image"
      />
    </Box>
  );
};

export default FooterLogo;
