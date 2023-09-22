import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
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
  Stack,
  Button,
  useMediaQuery,
  Card,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

import Header from './Header';
import Footer from './Footer';

function CatalogPage() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [data, setData] = useState(null);
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    const url = 'https://staging-qore-data-carpet-433625.qore.dev/v1/execute';
    const headers = {
      'x-qore-engine-admin-secret': 'VQd2Y6V1iUOfNLqNTL7EY9bFg5TgCjus',
    };
    const body = {
      operations: [
        {
          operation: 'Select',
          instruction: {
            name: 'data',
            orderBy: { id: 'ASC' },
            condition: {},
            limit: 26,
            offset: 0,
            params: {},
            table: 'katalog',
          },
        },
      ],
    };
    axios
      .post(url, body, { headers })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

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
  }, [setScrollingUp]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const products = data.results.data;

  return (
    <div>
      <Header />
      <div>
        <div
          maxW="100%"
          bg="#F5F5F5"
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
            color="#F5F5F5"
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
            <Text fontSize="lg">Explore our latest and greatest products.</Text>
          </Flex>
        </div>
        <Grid bg="#F5F5F5" pt={8}>
          <Heading
            bg="#F5F5F5"
            as="h2"
            size="lg"
            mt={10}
            mb={7}
            p={5}
            textAlign="center"
          >
            Choose The Best Everyday Wear
          </Heading>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          justifyContent="center"
          alignItems="center"
          pb={10}
          ps={20}
          pe={20}
          bg="#F5F5F5"
        >
          {products.map(product => {
            const newUrl = product.file.url.replace(
              '/storage/files/',
              '/files/public/'
            );
            return (
              <GridItem
                key={product.id}
                maxW="100%"
                maxH="100%"
                px={2}
                bg="#F5F5F5"
              >
                <Card
                  bg="#F5F5F5"
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
                    bg="#F5F5F5"
                  >
                    <Image
                      src={newUrl}
                      alt={product.file.filename}
                      maxW="350px"
                      maxH="350px"
                      width="100%"
                      height="350px"
                      borderRadius={10}
                    />
                  </Box>
                  <Stack p={5} spacing={2} textAlign="left">
                    <Text fontSize="xl" fontWeight="bold">
                      {product.title}
                    </Text>
                    <Text
                      fontSize="md"
                      style={{
                        fontSize: 'md',
                        height: '75px',
                        width: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      {product.desc}
                    </Text>
                    <HStack pt={3}>
                      <Text fontSize="lg" fontWeight="bold" color="#EE7105">
                        {product.harga}
                      </Text>
                      <Spacer />
                      <Text fontSize="md" fontWeight="bold" color="#EE7105">
                        See Details
                      </Text>
                    </HStack>
                  </Stack>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
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
