import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Link,
  extendTheme,
  Grid,
  GridItem,
  Image,
  Card,
  Stack,
  Button,
  Collapse,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  colors: {
    primary: {
      50: '#f9e3e3',
      100: '#f4c6c6',
      200: '#ee9a9a',
      300: '#e86d6d',
      400: '#e24141',
      500: '#db1414',
      600: '#c91414',
      700: '#ac1313',
      800: '#900f0f',
      900: '#750c0c',
    },
  },
});

const products = [
  {
    id: 1,
    name: 'Women Hot Collection',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',

    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p2.jpg',
    price: 'Rp 100.000',
  },
  {
    id: 2,
    name: 'Awesome Pink Show',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',

    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p4.jpg',
    price: 'Rp 150.000',
  },
  {
    id: 3,
    name: 'Awesome Bags Collection',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',

    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p6.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 4,
    name: 'Women Pant Collectons',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p8.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 5,
    name: 'Awesome Bags Collection',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p10.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 6,
    name: 'Awesome Cap For Women',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p12.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 7,
    name: 'Polo Dress For Women',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p14.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 8,
    name: 'Black Sunglass For Women',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/products/p16.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 9,
    name: 'Red Bag',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface In  ',
    image: 'https://wpthemesgrid.com/themes/free/eshop/images/mini-banner2.jpg',
    price: 'Rp 120.000',
  },
];

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link
              display={{ base: 'none', md: 'block' }}
              href="#"
              color="red"
              fontWeight="bold"
            >
              Beranda
            </Link>
            <Link display={{ base: 'none', md: 'block' }} href="#">
              Produk
            </Link>
            <Link display={{ base: 'none', md: 'block' }} href="#">
              Tentang Kami
            </Link>
            <Link display={{ base: 'none', md: 'block' }} href="#">
              Kontak
            </Link>
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
              <Link href="#" color="red.500">
                Beranda
              </Link>
              <Link href="#">Produk</Link>
              <Link href="#">Tentang Kami</Link>
              <Link href="#">Kontak</Link>
              <Link href="#">Masuk</Link>
              <Link href="#">Register</Link>
            </VStack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box bg="white" p={4} pt={30} color="black">
      <Container maxW="container.lg">
        <VStack spacing={4}>
          <HStack>
            <Text color="red" fontWeight="bold">
              &copy; 2023 Nama Toko Anda.{' '}
            </Text>{' '}
            <Text>All rights reserved.</Text>
          </HStack>
          <HStack spacing={4}>
            <Link href="#">Kebijakan Privasi</Link>
            <Link href="#">Syarat & Ketentuan</Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

function CatalogPage() {
  const [scrollingUp, setScrollingUp] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollingUp(true);
    setTimeout(() => setScrollingUp(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = buttonId => {
    setSelectedButton(buttonId);
  };

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <div>
        <div maxW="100%" bg="white" borderRadius="md">
          <div
            maxW="100%"
            borderRadius="md"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/new-season-banner-template-with-splash_1361-1527.jpg?w=2000')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '50em',
              position: 'relative',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              borderRadius="md"
            ></div>
            <Flex
              alignItems="center"
              justifyContent="center"
              h="100%"
              color="white"
              textAlign="center"
              flexDirection="column"
              borderRadius="md"
              style={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
              left="50%"
              top="50%"
            >
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to Our Product Catalog
              </Heading>
              <Text fontSize="lg">
                Explore our latest and greatest products.
              </Text>
            </Flex>
          </div>

          <Heading as="h2" size="lg" mt={8} mb={4} textAlign="center">
            Choose The Best Everyday Wear
          </Heading>

          <HStack
            p={7}
            pt={10}
            justifyContent="center"
            alignItems="center"
            gap={6}
          >
            <Button
              color={selectedButton === 1 ? 'white' : 'black'}
              shadow="md"
              colorScheme={selectedButton === 1 ? 'red' : 'white'}
              onClick={() => handleButtonClick(1)}
            >
              Man
            </Button>
            <Button
              color={selectedButton === 2 ? 'white' : 'black'}
              shadow="md"
              colorScheme={selectedButton === 2 ? 'red' : 'white'}
              onClick={() => handleButtonClick(2)}
            >
              Woman
            </Button>
            <Button
              color={selectedButton === 3 ? 'white' : 'black'}
              shadow="md"
              colorScheme={selectedButton === 3 ? 'red' : 'white'}
              onClick={() => handleButtonClick(3)}
            >
              Kids
            </Button>
            <Button
              color={selectedButton === 4 ? 'white' : 'black'}
              shadow="md"
              colorScheme={selectedButton === 4 ? 'red' : 'white'}
              onClick={() => handleButtonClick(4)}
            >
              Accesorries
            </Button>
          </HStack>

          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            justifyContent="center"
            alignItems="center"
            pb={10}
            ps={20}
            pe={20}
            pt={10}
            css={{
              '@media (max-width: 1280px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
              '@media (max-width: 768px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
              },
            }}
          >
            {products.map(product => (
              <GridItem key={product.id} maxW="100%" maxH="100%" pt={5} px={2}>
                <Card
                  borderRadius="md"
                  transition="transform 0.2s"
                  _hover={{ transform: 'scale(1.05)' }}
                  boxShadow="lg"
                  width="100%"
                  height="100%"
                >
                  <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      maxW="350px"
                      maxH="350px"
                      width="100%"
                      height="350px"
                      borderRadius={10}
                    />
                  </Box>
                  <Stack p={5} spacing={2} textAlign="left">
                    <Text fontSize="xl" fontWeight="bold">
                      {product.name}
                    </Text>
                    <Text
                      fontSize="md"
                      style={{
                        fontSize: 'md',
                        height: '75px',
                        width: '100%',
                        overflow: 'hidden',
                        // whiteSpace: 'nowrap',
                      }}
                    >
                      {product.description}
                    </Text>
                    <HStack pt={3}>
                      <Text fontSize="lg" fontWeight="bold" color="red">
                        {product.price}
                      </Text>
                      <Spacer />
                      <Text fontSize="md" fontWeight="bold" color="red">
                        See Details
                      </Text>
                    </HStack>
                  </Stack>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      <div>
        {scrollingUp && (
          <Button
            onClick={handleScrollToTop}
            className={`scroll-button ${scrollingUp ? 'hidden' : ''}`}
            right="20px"
            bottom="20px"
            position="fixed"
            zIndex="999"
            colorScheme="red"
            size="lg"
          >
            <ChevronUpIcon />
          </Button>
        )}
      </div>

      <Footer />
    </ChakraProvider>
  );
}

export default CatalogPage;
