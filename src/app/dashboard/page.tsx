'use client';

import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Input,
    VStack,
    HStack,
    Grid,
    GridItem,
    Image,
    Button,
    Circle,
    Center,
    Badge,

} from '@chakra-ui/react';
import { Search, Home, Grid as GridIcon, Folder, User, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GroceryApp = () => {
    const [cartCount, setCartCount] = useState(0);
    const router = useRouter();

    const addToCart = (productName: string) => {
        setCartCount(prevCount => prevCount + 1);
    };

    const navigateToCategories = () => {
        router.push('/components/categories');
    };
    
    const navigateToProfile = () => {
        router.push('/components/profile');
    };

    const navigateToCart = () => {
        router.push('/components/cart');
    };

    return (
        <Box height="100vh" display="flex" flexDirection="column" bg="white">
            {/* Status Bar */}
            <Flex justify="space-between" align="center" p={4} bg="white">
                <Text fontSize="sm" fontWeight="medium" color="black">9:41</Text>
                <HStack gap={1}>
                    <Circle size="12px" bg="black" />
                    <Circle size="12px" bg="black" />
                    <Circle size="12px" bg="black" />
                </HStack>
            </Flex>
            
            {/* Address Bar */}
            <Flex justify="space-between" align="center" px={4} py={2} bg="gray.100" borderRadius="lg" mx={4} mb={4}>
                <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="black">2464 Royal Ln, Mesa</Text>
                    <Text fontSize="xs" color="black">Your address</Text>
                </Box>
                <Badge bg="green.100" px={2} py={1} borderRadius="base">
                    <Text color="black" fontWeight="bold" fontSize="sm">02</Text>
                </Badge>
            </Flex>
            
            {/* Search Bar */}
            <Box position="relative" mx={4} mb={6}>
                <Box position="relative">
                    <Input 
                        placeholder="Search" 
                        bg="gray.100" 
                        borderRadius="lg" 
                        pl={4}
                        pr={10}
                    />
                    <Box position="absolute" right="3" top="50%" transform="translateY(-50%)">
                        <Search color="gray" size={20} />
                    </Box>
                </Box>
            </Box>
            
            {/* Categories */}
            <Box px={4} mb={6}>
                <Flex justify="space-between" align="center" mb={3}>
                    <Text fontSize="md" fontWeight="semibold" color="black">Categories</Text>
                    <Text 
                        fontSize="sm" 
                        color="black" 
                        cursor="pointer" 
                        onClick={navigateToCategories}
                        _hover={{ color: "gray.600" }}
                    >
                        View All
                    </Text>
                </Flex>
                
                <Flex justify="space-between">
                    <VStack>
                        <Center 
                            w="16" 
                            h="16" 
                            borderRadius="xl" 
                            bg="orange.200" 
                            mb={2}
                            cursor="pointer"
                            onClick={navigateToCategories}
                        >
                            <Circle size="8" bg="orange.300" />
                        </Center>
                        <Text fontSize="xs" color="black">Snacks</Text>
                    </VStack>
                    
                    <VStack>
                        <Center 
                            w="16" 
                            h="16" 
                            borderRadius="xl" 
                            bg="yellow.200" 
                            mb={2}
                            cursor="pointer"
                            onClick={navigateToCategories}
                        >
                            <Circle size="8" bg="yellow.300" />
                        </Center>
                        <Text fontSize="xs" color="black">Breakfast</Text>
                    </VStack>
                    
                    <VStack>
                        <Center 
                            w="16" 
                            h="16" 
                            borderRadius="xl" 
                            bg="pink.200" 
                            mb={2}
                            cursor="pointer"
                            onClick={navigateToCategories}
                        >
                            <Circle size="8" bg="pink.300" />
                        </Center>
                        <Text fontSize="xs" color="black">Canned</Text>
                    </VStack>
                    
                    <VStack>
                        <Center 
                            w="16" 
                            h="16" 
                            borderRadius="xl" 
                            bg="yellow.200" 
                            mb={2}
                            cursor="pointer"
                            onClick={navigateToCategories}
                        >
                            <Circle size="8" bg="orange.300" />
                        </Center>
                        <Text fontSize="xs" color="black">Sauce</Text>
                    </VStack>
                </Flex>
            </Box>
            
            {/* Tabs */}
            <Flex justify="center" gap={4} mb={6} px={4}>
                <Text color="gray.300" fontWeight="semibold">Flash Sale</Text>
                <Text color="black" fontWeight="bold" fontSize="lg">Popular</Text>
                <Text color="gray.300" fontWeight="semibold">New Arrival</Text>
            </Flex>
            {/* Products */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4} px={4}>
                <GridItem bg="white" borderRadius="xl" p={2} boxShadow="sm">
                    <Center mb={2} h="120px">
                        <Image 
                            src="/mushroom.jpg" 
                            alt="Mushroom Sauce" 
                            maxH="100%" 
                            maxW="100%" 
                            objectFit="contain"
                        />
                    </Center>
                    <Text fontSize="sm" fontWeight="medium" color="black">Mushroom Sauce</Text>
                    <Text fontSize="xs" color="black">24oz</Text>
                    <Flex justify="space-between" align="center" mt={2}>
                        <Text fontWeight="bold" color="black">$8.92</Text>
                        <Button 
                            onClick={() => addToCart("Mushroom Sauce")}
                            size="sm"
                            bg="gray.100" 
                            borderRadius="full"
                            p={1}
                            minW="auto"
                            h="auto"
                        >
                            <Text color="black" fontWeight="bold">+</Text>
                        </Button>
                    </Flex>
                </GridItem>
                
                <GridItem bg="white" borderRadius="xl" p={2} boxShadow="sm">
                    <Center mb={2} h="120px">
                        <Image 
                             src="/icecream.png"
                            alt="Ghetto Gastro" 
                            maxH="100%" 
                            maxW="100%" 
                            objectFit="contain"
                        />
                    </Center>
                    <Text fontSize="sm" fontWeight="medium" color="black">Ice Cream</Text>
                    <Text fontSize="xs" color="black">1.6g</Text>
                    <Flex justify="space-between" align="center" mt={2}>
                        <Text fontWeight="bold" color="black">$20.72</Text>
                        <Button 
                            onClick={() => addToCart("Ice Cream")}
                            size="sm"
                            bg="gray.100" 
                            borderRadius="full"
                            p={1}
                            minW="auto"
                            h="auto"
                        >
                            <Text color="black" fontWeight="bold">+</Text>
                        </Button>
                    </Flex>
                </GridItem>
            </Grid>
            
            {/* Banner */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4} px={4} mt={6} flex="1">
                <GridItem bg="green.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MEAL PLAN</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">WITH GROCERY</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">STORE</Text>
                </GridItem>
                
                <GridItem bg="purple.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MAKING THE</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">MOST OF YOUR</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">GROCERY</Text>
                </GridItem>
                <GridItem bg="yellow.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MAKING THE</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">MOST OF YOUR</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">GROCERY</Text>
                </GridItem>
                <GridItem bg="pink.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MAKING THE</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">MOST OF YOUR</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">GROCERY</Text>
                </GridItem>
                <GridItem bg="orange.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MAKING THE</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">MOST OF YOUR</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">GROCERY</Text>
                </GridItem>
                <GridItem bg="blue.200" borderRadius="xl" p={3} display="flex" flexDirection="column" justifyContent="center">
                    <Text color="black" fontWeight="bold" fontSize="sm">MAKING THE</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">MOST OF YOUR</Text>
                    <Text color="black" fontWeight="bold" fontSize="sm">GROCERY</Text>
                </GridItem>
            </Grid>
            
            {/* Navigation Bar */}
            <Box mt="auto" bg="white" borderTop="1px" borderColor="gray.200" p={4}>
                <Flex justify="space-between" align="center">
                    <VStack gap={1}>
                        <Home size={20} color="#22C55E" />
                        <Text fontSize="xs" color="black" fontWeight="medium">Home</Text>
                    </VStack>
                    
                    <VStack 
                        gap={1} 
                        cursor="pointer" 
                        onClick={navigateToCategories}
                        _hover={{ color: "gray.600" }}
                    >
                        <GridIcon size={20} color="#A0AEC0" />
                        <Text fontSize="xs" color="black">Categories</Text>
                    </VStack>
                    
                    <VStack 
                        gap={1}
                        cursor="pointer"
                        onClick={navigateToCart}
                        position="relative"
                    >
                        <Box position="relative">
                            <ShoppingCart size={20} color="#A0AEC0" />
                            {cartCount > 0 && (
                                <Circle 
                                    size="16px" 
                                    bg="red.500" 
                                    color="white" 
                                    position="absolute" 
                                    top="-5px" 
                                    right="-5px"
                                    fontSize="10px"
                                    fontWeight="bold"
                                >
                                    {cartCount}
                                </Circle>
                            )}
                        </Box>
                        <Text fontSize="xs" color="black">Cart</Text>
                    </VStack>
                    
                    <VStack 
                        gap={1}
                        cursor="pointer"
                        onClick={navigateToProfile}
                        _hover={{ color: "gray.600" }}
                    >
                        <User size={20} color="#A0AEC0" />
                        <Text fontSize="xs" color="black">Profile</Text>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default GroceryApp;