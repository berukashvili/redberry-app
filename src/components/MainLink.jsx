import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const MainLink = ({
  text,
  bg,
  color,
  w,
  px,
  py,
  ml,
  mb,
  to,
  variant,
  zIndex,
}) => {
  return (
    <Link
      bg={bg}
      variant={variant}
      w={w}
      px={px}
      py={py}
      fontSize="20px"
      fontWeight="500"
      ml={ml}
      mb={mb}
      color={color}
      borderRadius="8px"
      textAlign="center"
      zIndex={zIndex}
      as={RouterLink}
      to={to}
    >
      {text}
    </Link>
  );
};

export default MainLink;
