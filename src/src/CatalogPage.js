import React, { useState, useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Spacer,
  Grid,
  GridItem,
  Image,
  Card,
  Stack,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

import Header from './Header';
import Footer from './Footer';

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
    <div>
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
    </div>
  );
}

export default CatalogPage;
