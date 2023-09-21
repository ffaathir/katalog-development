import React, { useState } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Spacer,
  Image,
  Button,
  Collapse,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box bg="white" p={4} boxShadow="md">
      <Container maxW="container.xl">
        <Flex alignItems="center" flexDirection="start">
          <Image
            src="https://upload.wikimedia.org/wikipedia/id/thumb/c/c4/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png"
            alt="Logo Toko"
            width={{ base: '6em', md: '9em' }}
            mr={{ base: '1em', md: '2em' }}
          />
          <Spacer />
          <HStack spacing={{ base: 0, md: 4 }}>
            <RouterLink
              to="/"
              display={{ base: 'none', md: 'block' }}
              href="#"
              color={location.pathname === '/' ? 'red' : 'initial'}
              fontWeight="bold"
            >
              Beranda
            </RouterLink>
            <RouterLink
              to="/form"
              display={{ base: 'none', md: 'block' }}
              href="#"
              color={location.pathname === '/form' ? 'red' : 'initial'}
            >
              Produk
            </RouterLink>
            <ChakraLink display={{ base: 'none', md: 'block' }} href="#">
              Tentang Kami
            </ChakraLink>
            <ChakraLink display={{ base: 'none', md: 'block' }} href="#">
              Kontak
            </ChakraLink>
            <Button
              display={{ base: 'block', md: 'none' }}
              onClick={toggleMobileMenu}
            >
              Menu
            </Button>
          </HStack>
          <Spacer />
          <HStack spacing={{ base: 0, md: 4 }}>
            <Button
              display={{ base: 'none', md: 'block' }}
              color="black"
              leftIcon={<FaSignInAlt style={{ color: 'black' }} />}
              colorScheme="black"
              variant="solid"
              border={1}
              shadow="md"
            >
              Login
            </Button>
            <Button
              display={{ base: 'none', md: 'block' }}
              leftIcon={<FaUserPlus style={{ color: 'white' }} />}
              colorScheme="red"
              variant="solid"
            >
              Register
            </Button>
          </HStack>
        </Flex>
        <Collapse in={isMobileMenuOpen}>
          <Box
            mt={4}
            p={4}
            bgColor="gray.100"
            borderRadius="md"
            boxShadow="md"
            display={{ base: 'block', md: 'none' }}
          >
            <VStack spacing={2} alignItems="left">
              <ChakraLink href="#" color="red.500">
                Beranda
              </ChakraLink>
              <ChakraLink href="#">Produk</ChakraLink>
              <ChakraLink href="#">Tentang Kami</ChakraLink>
              <ChakraLink href="#">Kontak</ChakraLink>
              <ChakraLink href="#">Masuk</ChakraLink>
              <ChakraLink href="#">Register</ChakraLink>
            </VStack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

export default Header;
