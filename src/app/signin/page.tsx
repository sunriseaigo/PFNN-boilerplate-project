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
  InputRightElement,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { ChakraProvider } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import Header from "./header";
import customTheme from "../utils/theme";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { useAppContext } from "@/context/authContext";

const Login = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { push } = useRouter();
  const { isAuth, setUser, setIsAuth, setIsAdmin } = useAppContext();

  useEffect(() => {
    if (isAuth) {
      push("/dashboard");
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

      <Container
        style={{ marginTop: -50 }}
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Link href="/landing">
              <Logo />
            </Link>
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
              </Heading>
              <Text color="fg.muted">
                Do not have an account? <Link href="/signup">Sign up</Link>
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
                const loginUser = {
                  email,
                  password,
                };
                axios
                  .post("http://localhost:5000/auth/login", loginUser)
                  .then((res) => {
                    if (res.data.success) {
                      interface User {
                        name: string;
                        admin: string;
                        email: string;
                      }

                      const user: User = jwtDecode(res.data.token);

                      setUser(user.name);
                      setIsAuth(true);
                      setIsAdmin(user.admin === "1" ? true : false);
                      localStorage.setItem("user", JSON.stringify(user));
                      push("/dashboard");
                    } else {
                      toast({
                        title: "Warning",
                        description: res.data.msg,
                        status: "warning",
                        duration: 5000,
                        isClosable: true,
                        position: "top-right",
                      });
                    }
                  });
              }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
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
                  <Button type="submit">Sign in</Button>
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

export default Login;
