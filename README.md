# Supertestnet

Supertestnet is an NFT explorer app designed specifically for testnets. It allows users to query and view details of NFTs on various testnet chains.

## Features

-   Select a testnet chain from a dropdown menu
-   Enter contract address and token ID to query NFT details
-   View NFT image, name, description, and attributes

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/supertestnet.git
    cd supertestnet
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Select a testnet chain from the dropdown menu.
2. Enter the contract address of the NFT.
3. Enter the token ID of the NFT.
4. Click the "query" button to fetch and display the NFT details.

## Adding New Chains

To add a new chain to Supertestnet, follow these steps:

1. Open the `lib/config.ts` file.
2. Import the new chain from `wagmi/chains`.
3. Add the new chain to the `chains` array and the `transports` object.

### Example

Suppose you want to add a new chain called `newChain`. Here's how you can do it:

1. Import the new chain:

    ```ts
    import { newChain } from "wagmi/chains";
    ```

2. Add the new chain to the `chains` array and the `transports` object:

    ```ts
    const config = createConfig({
    	chains: [
    		sepolia,
    		baseSepolia,
    		optimismSepolia,
    		polygonAmoy,
    		base,
    		newChain,
    	],
    	transports: {
    		[sepolia.id]: http(),
    		[baseSepolia.id]: http(),
    		[optimismSepolia.id]: http(),
    		[polygonAmoy.id]: http(),
    		[base.id]: http(),
    		[newChain.id]: http(),
    	},
    });

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
    	{
    		value: newChain,
    		label: "new chain",
    	},
    ];

    export { config, chains };
    ```

3. Save the file and restart the development server.

The new chain should now be available in the dropdown menu for selection.

## Making a Pull Request

After adding a new chain, it's important to contribute your changes back to the main repository. Follow these steps to create a pull request:

1. Commit your changes:

    ```sh
    git add lib/config.ts
    git commit -m "Add newChain to the list of supported chains"
    ```

2. Push your changes to your forked repository:

    ```sh
    git push origin your-branch-name
    ```

3. Go to the original repository on GitHub and create a pull request from your forked repository.

4. Provide a clear description of the changes you made and why they are beneficial.

5. Submit the pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
