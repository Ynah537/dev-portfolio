'use client';

import React from 'react';
import { 
    Box, 
    Button, 
    VStack, 
    Heading, 
    Text, 
    Flex, 
    Container 
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const router = useRouter();

    const handleCreateAccount = () => {
        router.push('/signup');  // This will navigate to /signup
    };

    const handleLogin = () => {
        router.push('/login');   // This will navigate to /login
    };

    return (
        <Box
            minH="100vh"
            width="100%"
            bgImage="url('/sample.jpeg')"
       
            bgSize="cover"
            bgRepeat="no-repeat"
            position="relative"
        >
            {/* Overlay to darken the background image for better readability */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
            />

            {/* Content container */}
            <Container maxW="container.md" position="relative" zIndex={1}>
                <Flex
                    minH="100vh"
                    direction="column"
                    align="center"
                    justify="center"
                    textAlign="center"
                >
                    <VStack >
                        <VStack >
                            <Heading 
                                size="2xl" 
                                color="white" 
                                fontWeight="bold"
                            >
                                Welcome to Our Platform
                            </Heading>
                            <Text 
                                fontSize="xl" 
                                color="white"
                            >
                                Get started by creating an account or logging in
                            </Text>
                        </VStack>

                        <VStack  width="100%" maxW="md">
                            <Button
                                size="lg"
                                height="16"
                                width="100%"
                                colorScheme="blue"
                                borderRadius="md"
                                fontSize="lg"
                                onClick={handleCreateAccount}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.2s"
                            >
                                Create Account
                            </Button>

                            <Button
                                size="lg"
                                height="16"
                                width="100%"
                                variant="outline"
                                colorScheme="whiteAlpha"
                                color="white"
                                borderRadius="md"
                                fontSize="lg"
                                borderWidth="2px"
                                onClick={handleLogin}
                                _hover={{
                                    bg: "whiteAlpha.200",
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.2s"
                            >
                                Login
                            </Button>
                        </VStack>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default HomePage;