'use client';

import { ChakraProvider, Box } from '@chakra-ui/react';
import SignupPage from './signup/page';
import { system } from './lib/theme';

export default function Home() {
  return (
    <ChakraProvider value={system}>
      <Box minH="100vh" bg="gray.50">
        <SignupPage />
      </Box>
    </ChakraProvider>
  );
}