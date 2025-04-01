'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    Box,
    Button,
    Input,
    VStack,
    Heading,
    Text,
    Link,
    Container,
    Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface FormData {
    email: string;
    password: string;
}

const SignupPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Redirect to dashboard instead of showing popup
        router.push('/dashboard');
    };

    return (
        <Flex 
            minH="100vh" 
            align="center" 
            justify="center" 
            bg="gray.50"
            py={12}
        >
            <Container maxW="md">
                <VStack>
                    <VStack textAlign="center">
                        <Heading size="xl" fontWeight="bold" color="blue.600">Create Account</Heading>
                    </VStack>

                    <Box 
                        w="100%" 
                        p={8} 
                        borderRadius="xl" 
                        boxShadow="lg" 
                        bg="white"
                    >
                        <form onSubmit={handleSubmit}>
                            <VStack >
                                <Box w="100%">
                                    <Text mb={2}>Email Address</Text>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        size="lg"
                                        borderRadius="md"
                                    />
                                </Box>

                                <Box w="100%">
                                    <Text mb={2}>Password</Text>
                                    <Input
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        size="lg"
                                        borderRadius="md"
                                    />
                                    <Button
                                        mt={2}
                                        size="sm"
                                        onClick={() => setShowPassword(!showPassword)}
                                        variant="ghost"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </Button>
                                </Box>

                                <Button
                                    w="100%"
                                    mt={6}
                                    size="lg"
                                    colorScheme="blue"
                                    type="submit"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{
                                        boxShadow: 'md',
                                        transform: 'translateY(-2px)',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Create Account
                                </Button>

                                <Flex w="100%" justify="center" pt={4}>
                                    <Text>
                                        Already have an account?{' '}
                                        <Link color="blue.500" href="/login" fontWeight="semibold">
                                            Log in
                                        </Link>
                                    </Text>
                                </Flex>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </Container>
        </Flex>
    );
};

export default SignupPage;