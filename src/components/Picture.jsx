import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const Picture = ({ display, boxSize, src, mb, mt, zIndex }) => {
  return (
    <Flex
      boxSize={boxSize}
      mb={mb}
      mt={mt}
      display={display}
      justify="center"
      zIndex={zIndex}
    >
      <Image objectFit="cover" src={src} alt="mobile image upload rectangle" />
    </Flex>
  );
};

export default Picture;
