"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  InputGroup,
  Input,
  Link,
  Stack,
  Text,
  Flex,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";

import { useState } from "react";
import Header from "./header";
import customTheme from "../utils/theme";

import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Container
        style={{ marginTop: -50 }}
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Sign up your account
              </Heading>
              <Text color="fg.muted">
                Do not have an account? <Link href="/signin">Sign In</Link>
              </Text>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
            boxShadow={{ sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const registgerUser = {
                  name,
                  email,
                  password,
                };
                // axios
                //   .post("http://localhost:5000/auth/login", loginUser)
                //   .then((res) => {
                //     console.log(res.data);
                //   });
              }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="text">Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <IconButton
                          variant="text"
                          aria-label={
                            isOpen ? "Mask password" : "Reveal password"
                          }
                          icon={isOpen ? <HiEyeOff /> : <HiEye />}
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      </InputRightElement>
                      <Input
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={isOpen ? "text" : "password"}
                        autoComplete="current-password"
                        required
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button type="submit">Sign Up</Button>
                  <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <OAuthButtonGroup />
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
};

export default SignUp;
