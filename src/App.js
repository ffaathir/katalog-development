import React from 'react';
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
  CSSReset,
  Grid,
  GridItem,
  Image,
  Card,
  Stack,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
      500: '#db1414', // Warna Utama Merah
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
    name: 'Produk 1',
    description: 'Deskripsi Produk 1',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 100.000',
  },
  {
    id: 2,
    name: 'Produk 2',
    description: 'Deskripsi Produk 2',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 150.000',
  },
  {
    id: 3,
    name: 'Produk 3',
    description: 'Deskripsi Produk 3',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 4,
    name: 'Produk 4',
    description: 'Deskripsi Produk 4',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 5,
    name: 'Produk 5',
    description: 'Deskripsi Produk 5',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 6,
    name: 'Produk 6',
    description: 'Deskripsi Produk 6',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 7,
    name: 'Produk 7',
    description: 'Deskripsi Produk 7',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 8,
    name: 'Produk 8',
    description: 'Deskripsi Produk 8',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
  {
    id: 9,
    name: 'Produk 9',
    description: 'Deskripsi Produk 9',
    image:
      'https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg',
    price: 'Rp 120.000',
  },
];

function Header() {
  return (
    <Box bg="white" p={4} color="black" boxShadow="md">
      <Container maxW="container.lg">
        <Flex alignItems="center">
          <Heading color="red" fontSize="xl">
            Nama Toko Anda
          </Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#">Beranda</Link>
            <Link href="#">Produk</Link>
            <Link href="#">Tentang Kami</Link>
            <Link href="#">Kontak</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box bg="white" p={4} pt={30} color="red">
      <Container maxW="container.lg">
        <VStack spacing={4}>
          <Text>&copy; 2023 Nama Toko Anda. All rights reserved.</Text>
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
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box p={10} bg="#f5f5f5" pb={20}>
        <div>
          <Container maxW="80%" bg="white" borderRadius="md">
            <div maxW="100%" borderRadius="md">
              <div
                style={{
                  backgroundImage: `url('https://radarlampung.disway.id/upload/891504aea3381619b7bbf4670f20b785.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '600px',
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
                >
                  <Heading as="h1" size="xl" mb={4}>
                    Welcome to Our Product Catalog
                  </Heading>
                  <Text fontSize="lg">
                    Explore our latest and greatest products.
                  </Text>
                </Flex>
              </div>
            </div>

            <Heading as="h2" size="lg" mt={8} mb={4} textAlign="center">
              Choose The Best Everyday Wear
            </Heading>

            <Grid
              templateColumns="repeat(auto-fill, minmax(17em, 1fr))"
              gap={4}
              justifyContent="center"
              alignItems="center"
              pb={10}
            >
              {products.map(product => (
                <GridItem
                  key={product.id}
                  maxW="100%"
                  maxH="100%"
                  pt={5}
                  px={2}
                >
                  <Card
                    borderRadius="md"
                    transition="transform 0.2s"
                    _hover={{ transform: 'scale(1.05)' }}
                    boxShadow="lg"
                    width="100%"
                    height="100%"
                    p={5}
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
                        height="auto"
                        borderRadius={10}
                      />
                    </Box>
                    <Stack p={4} spacing={2} textAlign="left">
                      <Text fontSize="xl" fontWeight="bold">
                        {product.name}
                      </Text>
                      <Text fontSize="md">{product.description}</Text>
                      <Text fontSize="lg" fontWeight="bold">
                        {product.price}
                      </Text>
                    </Stack>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </div>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default CatalogPage;
