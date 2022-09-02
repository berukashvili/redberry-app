import React from 'react';
import { Button } from '@chakra-ui/react';

const MainBtn = ({
  variant,
  color,
  bg,
  px,
  py,
  fontSize,
  mt,
  mb,
  ml,
  text,
  zIndex,
}) => {
  return (
    <Button
      color={color}
      _hover={{ bg: 'secondary-blue' }}
      bg={bg}
      px={px}
      py={py}
      fontSize={fontSize}
      fontWeight="500"
      mb={mb}
      ml={ml}
      mt={mt}
      variant={variant}
      zIndex={zIndex}
    >
      {text}
    </Button>
  );
};

export default MainBtn;
