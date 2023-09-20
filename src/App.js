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
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  FaSignInAlt,
  FaUserPlus,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

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
    <Box bg="white" color="black">
      <Container maxW="container.lg" p={30} pt={20}>
        <VStack spacing={4}>
          <VStack>
            <Image
              src="data:image/jpeg;base64,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"
              alt="Logo Toko"
              width={{ base: '6em', md: '9em' }}
              mr={{ base: '1em', md: '2em' }}
            />
            <Text color="black" fontWeight="bold">
              "Toko Laris, Pilihan Terbaik!"
            </Text>
            <HStack gap={5} pt={5}>
              <Button
                size="sm"
                colorScheme="red"
                leftIcon={<FaFacebook />}
              ></Button>
              <Button
                size="sm"
                colorScheme="red"
                leftIcon={<FaTwitter />}
              ></Button>
              <Button
                size="sm"
                colorScheme="red"
                leftIcon={<FaInstagram />}
              ></Button>
            </HStack>
          </VStack>
          <HStack spacing={4} pt={5}>
            <Text color="red" fontWeight="bold">
              &copy; 2023 Toko Laris
            </Text>
            <Text>.All rights reserved.</Text>
            <Spacer />
            <Spacer />
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
  const [isMobile] = useMediaQuery('(max-width: 600px)');

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
              height: isMobile ? '30em' : '50em',
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
          <HStack
            ps={20}
            pe={20}
            justifyContent="space-between"
            alignItems="center"
            gap={6}
            borderColor="red"
            borderWidth={1}
          >
            <HStack mt="4" mb="4">
              <Heading
                as="h2"
                size="lg"
                fontWeight="600"
                textAlign="start"
                color="red"
              >
                Toko Laris
              </Heading>
            </HStack>
            <Box
              display={{ base: 'block', md: 'flex' }}
              justifyContent="center"
              alignItems="center"
              border={1}
              p={2}
              mt="4"
              mb="4"
              borderRadius="md"
            >
              <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
                <Button
                  flex="1"
                  color={selectedButton === 1 ? 'white' : 'black'}
                  shadow="md"
                  colorScheme={selectedButton === 1 ? 'red' : 'white'}
                  onClick={() => handleButtonClick(1)}
                >
                  Man
                </Button>
                <Button
                  flex="1"
                  color={selectedButton === 2 ? 'white' : 'black'}
                  shadow="md"
                  colorScheme={selectedButton === 2 ? 'red' : 'white'}
                  onClick={() => handleButtonClick(2)}
                >
                  Woman
                </Button>
              </Stack>
              <Spacer display={{ base: 'none', md: 'block' }} />
              <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
                <Button
                  flex="1"
                  color={selectedButton === 3 ? 'white' : 'black'}
                  shadow="md"
                  colorScheme={selectedButton === 3 ? 'red' : 'white'}
                  onClick={() => handleButtonClick(3)}
                >
                  Kids
                </Button>
                <Button
                  flex="1"
                  color={selectedButton === 4 ? 'white' : 'black'}
                  shadow="md"
                  colorScheme={selectedButton === 4 ? 'red' : 'white'}
                  onClick={() => handleButtonClick(4)}
                >
                  Accessories
                </Button>
              </Stack>
            </Box>
          </HStack>

          <Heading as="h2" size="lg" mt={8} mb={4} pt={10} textAlign="center">
            Choose The Best Everyday Wear
          </Heading>

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
              '@media (max-width: 1000px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
              '@media (max-width: 768px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
              },
            }}
          >
            {products.map(product => (
              <GridItem key={product.id} maxW="100%" maxH="100%" px={2}>
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
