"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Hero from "./Hero";
import customTheme from "../utils/theme";
import Header from "./header";

export default function Landing() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        <Hero
          title="Build this rad landing page from scratch"
          subtitle="This is the subheader section where you describe the basic benefits of your product"
          image="https://source.unsplash.com/collection/404339/800x600"
          ctaText="Create your account now"
          ctaLink="/signup"
        />
      </Flex>
    </ChakraProvider>
  );
}
