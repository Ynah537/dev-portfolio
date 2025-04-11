'use client';
import React from 'react';
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  VStack,
  Circle,
  Center,
  Icon,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { ArrowLeft, Coffee, Wine, Pizza, Apple, Egg, Fish, Carrot, Cookie, Milk, IceCream } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AllCategories = () => {
  const router = useRouter();

  // Category data with icons, background colors, and names
  const categories = [
    { 
      name: 'Snacks', 
      icon: Cookie, 
      bgColor: 'orange.200', 
      iconBgColor: 'orange.300', 
      bgImage: 'url(/snacks.png)' 
    },
    { 
      name: 'Breakfast', 
      icon: Egg, 
      bgColor: 'yellow.200', 
      iconBgColor: 'yellow.300', 
      bgImage: 'url(/breakfast.png)' 
    },
    { 
      name: 'Canned', 
      icon: Fish, 
      bgColor: 'pink.200', 
      iconBgColor: 'pink.300', 
      bgImage: 'url(/canned.png)' 
    },
    { 
      name: 'Sauce', 
      icon: Pizza, 
      bgColor: 'yellow.200', 
      iconBgColor: 'orange.300', 
      bgImage: 'url(/sauce.png)' 
    },
    { 
      name: 'Drinks', 
      icon: Wine, 
      bgColor: 'purple.200', 
      iconBgColor: 'purple.300', 
      bgImage: 'url(/drink.png)' 
    },
    { 
      name: 'Coffee', 
      icon: Coffee, 
      bgColor: 'brown.200', 
      iconBgColor: 'brown.300', 
      bgImage: 'url(/coffee.png)' 
    },
    { 
      name: 'Fruits', 
      icon: Apple, 
      bgColor: 'red.200', 
      iconBgColor: 'red.300', 
      bgImage: 'url(/fruits.png)' 
    },
    { 
      name: 'Vegetables', 
      icon: Carrot, 
      bgColor: 'green.200', 
      iconBgColor: 'green.300', 
      bgImage: 'url(/vegetables.jpg)' 
    },
    { 
      name: 'Dairy', 
      icon: Milk, 
      bgColor: 'blue.200', 
      iconBgColor: 'blue.300', 
      bgImage: 'url(/dairy.jpg)' 
    },
    { 
      name: 'Desserts', 
      icon: IceCream, 
      bgColor: 'pink.200', 
      iconBgColor: 'pink.300', 
      bgImage: 'url(/desserts.jpg)' 
    },
  ];

  // Handle back button click
  const handleBack = () => {
    router.back();
  };

  return (
    <Box minHeight="100vh" bg="white" px={4} py={6}>
      {/* Header */}
      <Flex align="center" mb={6}>
        <IconButton
          aria-label="Back"
          as={ArrowLeft}
          variant="ghost"
          onClick={handleBack}
          mr={2}
        />
        <Heading size="md" color="black">All Categories</Heading>
      </Flex>

      {/* Categories Grid */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {categories.map((category, index) => (
          <GridItem key={index}>
            <VStack gap={2}>
              <Center 
                w="24" 
                h="24" 
                borderRadius="xl" 
                bg={category.bgColor} 
                mb={1}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
                backgroundImage={category.bgImage}
                backgroundSize="cover"
                backgroundPosition="center"
              >
                <Circle size="12" bg={category.iconBgColor}>
                  <Icon as={category.icon} boxSize={6} color="white" />
                </Circle>
              </Center>
              <Text fontSize="sm" fontWeight="medium" color="black">{category.name}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>

      {/* Popular Categories Section */}
      <Box mt={10}>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="black">Popular Categories</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem 
            bg="green.100" 
            p={4} 
            borderRadius="xl"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Flex align="center">
              <Circle size="12" bg="green.200" mr={3}>
                <Icon as={Apple} boxSize={5} color="green.600" />
              </Circle>
              <Text fontWeight="bold" color="black">Fresh Fruits</Text>
            </Flex>
          </GridItem>
          <GridItem 
            bg="blue.100" 
            p={4} 
            borderRadius="xl"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Flex align="center">
              <Circle size="12" bg="blue.200" mr={3}>
                <Icon as={Milk} boxSize={5} color="blue.600" />
              </Circle>
              <Text fontWeight="bold" color="black">Dairy Products</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      {/* Recently Viewed Categories */}
      <Box mt={10} mb={6}>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="black">Recently Viewed</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem 
            bg="orange.100" 
            p={4} 
            borderRadius="xl"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Flex align="center">
              <Circle size="12" bg="orange.200" mr={3}>
                <Icon as={Cookie} boxSize={5} color="orange.600" />
              </Circle>
              <Text fontWeight="bold" color="black">Snacks</Text>
            </Flex>
          </GridItem>
          <GridItem 
            bg="purple.100" 
            p={4} 
            borderRadius="xl"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Flex align="center">
              <Circle size="12" bg="purple.200" mr={3}>
                <Icon as={Wine} boxSize={5} color="purple.600" />
              </Circle>
              <Text fontWeight="bold" color="black">Drinks</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AllCategories;