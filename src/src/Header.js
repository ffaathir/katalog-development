import React from 'react';
import { Box, Container } from '@chakra-ui/react';

function Header() {
  const headerStyle = {
    fontFamily: 'Inter',
    fontSize: '2em',
    fontWeight: 600,
    lineHeight: '32px',
    letterSpacing: '0px',
    textAlign: 'center',
    background: 'linear-gradient(92.96deg, #EE7105 -28.61%, #693202 111.82%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <Box bg="white" p={10} boxShadow="md">
      <Container maxW="container.xl">
        <h4 style={headerStyle}>TokoLaris</h4>
      </Container>
    </Box>
  );
}

export default Header;
