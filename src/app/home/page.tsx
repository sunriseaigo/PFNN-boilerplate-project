"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

import customTheme from "../utils/theme";
import Header from "./header";
import { useAppContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, isAuth } = useAppContext();
  const { push } = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `${user.name}`,
        description: "welcome to our dashboard.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      push("signin");
    }
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
      </Flex>
    </ChakraProvider>
  );
}
