// src/app/providers.tsx
'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./lib/theme";
import React from "react";

export default function Providers({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}