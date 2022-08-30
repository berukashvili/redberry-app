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
}) => {
  return (
    <Button
      color={color}
      bg={bg}
      px={px}
      py={py}
      fontSize={fontSize}
      mb={mb}
      ml={ml}
      mt={mt}
      variant={variant}
    >
      {text}
    </Button>
  );
};

export default MainBtn;
