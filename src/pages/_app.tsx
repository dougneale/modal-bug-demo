import "@/styles/globals.css";
import type { AppProps } from "next/app";

import * as React from "react";

import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets } from "@cosmos-kit/keplr";

// Import this in your top-level route/layout
import "@interchain-ui/react/styles";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ChainProvider
        chains={chains} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
      >
        <Component />
      </ChainProvider>
    </ChakraProvider>
  );
}
