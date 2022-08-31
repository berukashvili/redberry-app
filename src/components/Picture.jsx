import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Picture = ({ display, boxSize, src, mb, mt, zIndex }) => {
  return (
    <Box boxSize={boxSize} mb={mb} mt={mt} display={display} zIndex={zIndex}>
      <Image objectFit="cover" src={src} alt="mobile image upload rectangle" />
    </Box>
  );
};

export default Picture;
