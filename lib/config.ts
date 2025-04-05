import { http, createConfig } from 'wagmi'
import { base, baseSepolia, optimismSepolia, polygonAmoy, sepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [sepolia, baseSepolia, optimismSepolia, polygonAmoy, base],
    transports: {
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
        [optimismSepolia.id]: http(),
        [polygonAmoy.id]: http(),
        [base.id]: http()
    },
})