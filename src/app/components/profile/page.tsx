'use client';

import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    VStack,
    HStack,
    Button,
    Circle,
    Badge,
    useDisclosure,
    
} from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent } from '@chakra-ui/react';
// Removed DrawerOverlay and DrawerCloseButton as they are not exported from @chakra-ui/react
import { 
    User, 
    Home, 
    Grid as GridIcon, 
    ShoppingCart, 
    ChevronRight,
    Settings,
    CreditCard,
    Heart,
    Truck,
    LogOut,
    Map,
    Menu as MenuButton,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const navigateToHome = () => {
        router.push('/dashboard');
    };

    const navigateToCategories = () => {
        router.push('/components/categories');
    };

    const navigateToCart = () => {
        router.push('/components/cart');
    };

    return (
        <Box height="100vh" display="flex" flexDirection="column" bg="gray.50">
            {/* Status Bar */}
            <Flex justify="space-between" align="center" p={4} bg="white">
                <Text fontSize="sm" fontWeight="medium" color="black">9:41</Text>
                <HStack gap={1}>
                    <Circle size="12px" bg="black" />
                    <Circle size="12px" bg="black" />
                    <Circle size="12px" bg="black" />
                </HStack>
            </Flex>
            
            {/* Profile Header */}
            <Box bg="white" p={6} boxShadow="sm" mb={4}>
                <Flex align="center" justify="space-between">
                    <HStack gap={4}>
                        <Box>
                            <Text fontSize="xl" fontWeight="bold" color="black">John Doe</Text>
                            <Text fontSize="sm" color="gray.500">john.doe@example.com</Text>
                        </Box>
                    </HStack>
                    <Button 
                        size="sm"
                        colorScheme="green" 
                        onClick={onOpen}
                        p={2}
                    >
                        <MenuButton />
                    </Button>
                </Flex>
            </Box>
            
            {/* Profile Content */}
            <Box px={4} flex="1" overflow="auto">
                <Box bg="white" borderRadius="xl" p={4} mb={4} boxShadow="sm">
                    <Text fontSize="lg" fontWeight="semibold" color="black" mb={4}>Account Information</Text>
                    <VStack align="stretch" gap={3}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" color="black">Full Name</Text>
                            <Text fontSize="md" color="gray.600">John Doe</Text>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" color="black">Email</Text>
                            <Text fontSize="md" color="gray.600">john.doe@example.com</Text>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" color="black">Phone</Text>
                            <Text fontSize="md" color="gray.600">+1 (555) 123-4567</Text>
                        </Flex>
                    </VStack>
                </Box>
                
                <Box bg="white" borderRadius="xl" p={4} mb={4} boxShadow="sm">
                    <Text fontSize="lg" fontWeight="semibold" color="black" mb={4}>Order History</Text>
                    <VStack align="stretch" gap={3}>
                        <Flex justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" fontWeight="medium" color="black">Order #1234</Text>
                                <Text fontSize="xs" color="gray.500">March 28, 2025</Text>
                            </VStack>
                            <Badge colorScheme="green">Delivered</Badge>
                        </Flex>
                        <Flex justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" fontWeight="medium" color="black">Order #1187</Text>
                                <Text fontSize="xs" color="gray.500">March 15, 2025</Text>
                            </VStack>
                            <Badge colorScheme="green">Delivered</Badge>
                        </Flex>
                    </VStack>
                </Box>
                
                <Box bg="white" borderRadius="xl" p={4} mb={4} boxShadow="sm">
                    <Text fontSize="lg" fontWeight="semibold" color="black" mb={4}>Saved Addresses</Text>
                    <VStack align="stretch" gap={3}>
                        <Box p={3} bg="gray.50" borderRadius="md">
                            <Flex justify="space-between" align="start">
                                <VStack align="start" gap={1}>
                                    <Text fontSize="sm" fontWeight="medium" color="black">Home</Text>
                                    <Text fontSize="xs" color="gray.500">2464 Royal Ln, Mesa, AZ 85201</Text>
                                </VStack>
                                <Badge colorScheme="green">Default</Badge>
                            </Flex>
                        </Box>
                        <Box p={3} bg="gray.50" borderRadius="md">
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" fontWeight="medium" color="black">Work</Text>
                                <Text fontSize="xs" color="gray.500">1234 Business Ave, Mesa, AZ 85203</Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Box>
            
            {/* Sidebar Drawer */}
            {isOpen && (
                <Box
                    position="fixed"
                    top="0"
                    right="0"
                    width="80%"
                    height="100vh"
                    bg="white"
                    zIndex="overlay"
                    boxShadow="lg"
                >
                    <Box
                        position="fixed"
                        top="0"
                        left="0"
                        width="100vw"
                        height="100vh"
                        bg="blackAlpha.600"
                        zIndex="overlay"
                        onClick={onClose}
                    />
                    <Box p={4}>
                        <Flex justify="space-between" align="center" mb={4}>
                            <Box>
                                <Text fontSize="md" fontWeight="bold">John Doe</Text>
                                <Text fontSize="xs" color="gray.500">Premium Member</Text>
                            </Box>
                            <Button
                                size="sm"
                                colorScheme="gray"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </Flex>
                        <Box as="ul" listStyleType="none" p={0} m={0}>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <User size={18} />
                                        <Text>Profile</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <Settings size={18} />
                                        <Text>Settings</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <CreditCard size={18} />
                                        <Text>Payment Methods</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <Heart size={18} />
                                        <Text>Favorites</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <Truck size={18} />
                                        <Text>Order History</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <Map size={18} />
                                        <Text>Addresses</Text>
                                    </HStack>
                                    <ChevronRight size={16} />
                                </Flex>
                            </Box>
                            <Box as="li" p={4} _hover={{ bg: "gray.50" }} cursor="pointer">
                                <Flex justify="space-between" align="center">
                                    <HStack>
                                        <LogOut size={18} />
                                        <Text>Log Out</Text>
                                    </HStack>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}

            {/* Navigation Bar */}
            <Box mt="auto" bg="white" borderTop="1px" borderColor="gray.200" p={4}>
                <Flex justify="space-between" align="center">
                    <VStack 
                        gap={1} 
                        cursor="pointer" 
                        onClick={navigateToHome}
                    >
                        <Home size={20} color="#A0AEC0" />
                        <Text fontSize="xs" color="black">Home</Text>
                    </VStack>
                    
                    <VStack 
                        gap={1} 
                        cursor="pointer" 
                        onClick={navigateToCategories}
                    >
                        <GridIcon size={20} color="#A0AEC0" />
                        <Text fontSize="xs" color="black">Categories</Text>
                    </VStack>
                    
                    <VStack
                        gap={1}
                        cursor="pointer"
                        onClick={navigateToCart}
                    >
                        <ShoppingCart size={20} color="#A0AEC0" />
                        <Text fontSize="xs" color="black">Cart</Text>
                    </VStack>
                    
                    <VStack gap={1}>
                        <User size={20} color="#22C55E" />
                        <Text fontSize="xs" color="black" fontWeight="medium">Profile</Text>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProfilePage;