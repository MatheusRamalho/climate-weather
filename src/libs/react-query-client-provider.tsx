'use client'

import { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface ReactQueryClientProvidersProps {
    children: ReactNode
}

export default function ReactQueryClientProviders({
    children,
}: ReactQueryClientProvidersProps) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
