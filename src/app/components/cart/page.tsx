'use client';

import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    VStack,
    HStack,
    Image,
    Button,
    IconButton,
    Circle,
    Center,
    Heading,
    Icon
} from '@chakra-ui/react';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CartPage = () => {
    const router = useRouter();
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Mushroom Sauce', price: 8.92, quantity: 1, image: '/mushroom.jpg', size: '24oz' },
        { id: 2, name: 'Ice Cream', price: 20.72, quantity: 1, image: '/icecream.png', size: '1.6g' },
    ]);
    
    const incrementQuantity = (id: number) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };
    
    const decrementQuantity = (id: number) => {
        setCartItems(cartItems.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };
    
    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };
    
    const getSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };
    
    const goBack = () => {
        router.back();
    };
    
    const checkout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout...');
    };

    return (
        <Box height="100vh" display="flex" flexDirection="column" bg="white">
            {/* Header */}
            <Flex justify="space-between" align="center" p={4} borderBottom="1px" borderColor="gray.200">
                <IconButton
                    aria-label="Back"
                    as={ArrowLeft}
                    variant="ghost"
                    onClick={goBack}
                    mr={2}
                />
                <Heading size="md" textAlign="center" flex="1" color="black">
                    Cart
                </Heading>
                <Box width="24px" />
            </Flex>
            
            {cartItems.length === 0 ? (
                <Center flex="1" flexDirection="column" p={6}>
                    <Circle size="80px" bg="gray.100" mb={4}>
                        <Trash2 size={40} color="gray" />
                    </Circle>
                    <Text fontSize="xl" fontWeight="bold" mb={2} color="black">Your cart is empty</Text>
                    <Text color="black" textAlign="center">
                        Looks like you haven't added any items to your cart yet
                    </Text>
                    <Button 
                        mt={6} 
                        colorScheme="green" 
                        onClick={goBack}
                        width="full"
                        borderRadius="lg"
                    >
                        Start Shopping
                    </Button>
                </Center>
            ) : (
                <>
                    {/* Cart Items */}
                    <VStack gap={4} p={4} align="stretch" flex="1" overflowY="auto">
                        {cartItems.map(item => (
                            <Box key={item.id} bg="white" borderRadius="lg" p={3} boxShadow="sm">
                                <Flex>
                                    <Center bg="gray.100" borderRadius="md" p={2} mr={3} width="80px" height="80px">
                                        <Image 
                                            src={item.image} 
                                            alt={item.name} 
                                            maxH="100%" 
                                            maxW="100%" 
                                            objectFit="contain"
                                        />
                                    </Center>
                                    <Box flex="1">
                                        <Flex justify="space-between" mb={1}>
                                            <Text fontWeight="semibold" color="black">{item.name}</Text>
                                            <IconButton 
                                                icon={<Icon as={Trash2} />} 
                                                size="sm" 
                                                variant="ghost" 
                                                colorScheme="red"
                                                onClick={() => removeItem(item.id)}
                                                aria-label="Remove item"
                                            />
                                        </Flex>
                                        <Text fontSize="sm" color="black" mb={2}>{item.size}</Text>
                                        <Flex justify="space-between" align="center">
                                            <Text fontWeight="bold" color="black">${item.price.toFixed(2)}</Text>
                                            <HStack>
                                            ...
                                            <IconButton 
                                                as={Minus} 
                                                size="sm" 
                                                variant="outline"
                                                onClick={() => decrementQuantity(item.id)}
                                                aria-label="Decrease quantity"
                                            />
                                            <Text mx={2} fontWeight="medium" color="black">{item.quantity}</Text>
                                            <IconButton 
                                                as={Plus} 
                                                size="sm" 
                                                variant="outline"
                                                onClick={() => incrementQuantity(item.id)}
                                                aria-label="Increase quantity"
                                            />
...
                                            </HStack>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </VStack>
                    <Box p={4} borderTop="1px" borderColor="gray.200" bg="white">
                        <Flex justify="space-between" mb={2}>
                            <Text color="black">Subtotal</Text>
                            <Text fontWeight="semibold" color="black">${getSubtotal().toFixed(2)}</Text>
                        </Flex>
                        <Flex justify="space-between" mb={2}>
                            <Text color="black">Delivery Fee</Text>
                            <Text fontWeight="semibold" color="black">$2.99</Text>
                        </Flex>
                        <Flex justify="space-between" mb={2}>
                            <Text color="black">Tax</Text>
                            <Text fontWeight="semibold" color="black">$0.00</Text>
                        </Flex>
                        <Flex justify="space-between" mb={4}>
                            <Text fontWeight="bold" color="black">Total</Text>
                            <Text fontWeight="bold" color="green.600">${(getSubtotal() + 2.99).toFixed(2)}</Text>
                        </Flex>
                        <Button 
                            width="full" 
                            colorScheme="green" 
                            size="lg" 
                            borderRadius="lg"
                            onClick={checkout}
                        >
                            Proceed to Checkout
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default CartPage;