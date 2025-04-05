import { http, createConfig } from 'wagmi'
import { base, baseSepolia, optimismSepolia, polygonAmoy, sepolia } from 'wagmi/chains'

const config = createConfig({
    chains: [sepolia, baseSepolia, optimismSepolia, polygonAmoy, base],
    transports: {
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
        [optimismSepolia.id]: http(),
        [polygonAmoy.id]: http(),
        [base.id]: http()
    },
})

const chains = [
    {
        value: sepolia,
        label: "sepolia",
    },
    {
        value: baseSepolia,
        label: "base sepolia",
    },
    {
        value: optimismSepolia,
        label: "optimism sepolia",
    },
    {
        value: polygonAmoy,
        label: "polygon amoy",
    },
    {
        value: base,
        label: "base",
    },
]

export { config, chains }