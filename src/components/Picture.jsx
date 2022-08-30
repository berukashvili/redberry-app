import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Picture = ({ display, boxSize, src, mb, mt }) => {
  console.log(display);
  return (
    <Box boxSize={boxSize} mb={mb} mt={mt} display={display}>
      <Image objectFit="cover" src={src} alt="mobile image upload rectangle" />
    </Box>
  );
};

export default Picture;
