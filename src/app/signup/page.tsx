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
    InputGroup,
    Container,
    Flex,
} from '@chakra-ui/react';

interface FormData {
    name?: string;
    username?: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Errors {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const SignupPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Errors>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name as keyof Errors]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert("We've created your account successfully!");
            setFormData({
                name: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
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
                <VStack >
                    <VStack textAlign="center">
                        <Heading size="xl" fontWeight="bold" color="blue.600">Create Account</Heading>
                        <Text color="gray.500" fontSize="lg">
                            Sign up to get started with our platform
                        </Text>
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
                                    <Text mb={2}>Full Name</Text>
                                    <Input
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        size="lg"
                                        borderRadius="md"
                                    />
                                    {errors.name && <Text color="red.500">{errors.name}</Text>}
                                </Box>

                                <Box w="100%">
                                    <Text mb={2}>Username</Text>
                                    <Input
                                        name="username"
                                        placeholder="johndoe"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        size="lg"
                                    />
                                    {errors.username && <Text color="red.500">{errors.username}</Text>}
                                </Box>

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
                                    {errors.email && <Text color="red.500">{errors.email}</Text>}
                                </Box>

                                <Box w="100%">
                                    <Text mb={2}>Password</Text>
                                    <InputGroup>
                                        <>
                                            <Input
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Create a password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                borderRadius="md"
                                            />
                                            <Button
                                                h="1.75rem"
                                                size="sm"
                                                onClick={() => setShowPassword(!showPassword)}
                                                variant="ghost"
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </>
                                    </InputGroup>
                                    {errors.password && <Text color="red.500">{errors.password}</Text>}
                                </Box>

                                <Box w="100%">
                                    <Text mb={2}>Confirm Password</Text>
                                    <Input
                                        name="confirmPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        size="lg"
                                        borderRadius="md"
                                    />
                                    {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword}</Text>}
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
