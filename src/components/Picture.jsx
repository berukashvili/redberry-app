import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Picture = ({ display, boxSize, src, mb }) => {
  return (
    <Box boxSize={boxSize} mb={mb}>
      <Image
        objectFit="cover"
        src={src}
        alt="mobile image upload rectangle"
        display={display}
      />
    </Box>
  );
};

export default Picture;
