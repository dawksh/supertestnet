"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from "wagmi";
import { config } from '@/lib/config';

const queryClient = new QueryClient()

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    )
}

export default TanstackProvider