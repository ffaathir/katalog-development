import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Stack,
  Center,
  Icon,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  const tokoLarisStyle = {
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

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingBottom: '1em',
  };
  return (
    <Box bg="white" color="black">
      <Container maxW="container.lg" p={30} pt={20}>
        <VStack spacing={4}>
          <h4 style={tokoLarisStyle}>TokoLaris</h4>
          <Box bg="white" p={3} boxShadow="md">
            <Container maxW="container.xl">
              <Text>
                <Text as="span" fontWeight="bold">
                  Address:
                </Text>{' '}
                Jl. Simpang Raya No 30C
              </Text>
            </Container>
          </Box>
        </VStack>
      </Container>
      <Box bg="white" py={4}>
        <Container maxW="container.xxl">
          <div style={footerStyle}>
            <HStack display={{ base: 'none', md: 'flex' }}>
              <Text>&copy; 2023 Toko Laris</Text>
              <Text>. All rights reserved.</Text>
            </HStack>
            <HStack display={{ base: 'none', md: 'flex' }}>
              <HStack spacing={4} alignItems="center">
                <HStack spacing={1}>
                  <Icon as={FaInstagram} boxSize={6} />
                  <Text>Instagram</Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={FaFacebook} boxSize={6} />
                  <Text>Facebook</Text>
                </HStack>
              </HStack>
            </HStack>
          </div>
        </Container>
        <Center py={4}>
          <Stack spacing={2} direction="column" textAlign="center">
            <Stack
              display={{ base: 'flex', md: 'none' }}
              justifyContent="space-between"
            >
              <Text>&copy; 2023 Toko Laris</Text>
              <Text>. All rights reserved.</Text>
            </Stack>
            <Stack
              display={{ base: 'flex', md: 'none' }}
              pt={5}
              justifyContent="space-between"
            >
              <HStack spacing={4} alignItems="center">
                <HStack spacing={1}>
                  <Icon as={FaInstagram} boxSize={6} />
                  <Text>Instagram</Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={FaFacebook} boxSize={6} />
                  <Text>Facebook</Text>
                </HStack>
              </HStack>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
}

export default Footer;
