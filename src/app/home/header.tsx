"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Stack,
  Menu,
  MenuButton,
  AvatarBadge,
  Avatar,
  MenuList,
  Center,
  Badge,
} from "@chakra-ui/react";
import Logo from "./logo";
import { useAppContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { push } = useRouter();
  const { user, setIsAuth, setUser, isAuth } = useAppContext();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Flex align="center">
        <Logo />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {isAuth && (
            <Text
              mb={{ dashboard: 8, sm: 0 }}
              mr={{ base: 0, sm: 8 }}
              display="block"
            >
              <Link href="/landing">Dashboard</Link>
            </Text>
          )}
          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
            <Link href="/landing">Landing</Link>
          </Text>
          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
            <Link href="/home">Home</Link>
          </Text>
        </Flex>
      </Box>
      {isAuth ? (
        <Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.githubusercontent.com/u/61585443?v=4"}
                  >
                    <AvatarBadge
                      className="blink"
                      boxSize="1.15em"
                      bg="green.400"
                    />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/61585443?v=4"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <Box>
                      <Text fontWeight="bold">
                        {user}
                        <br />
                        <Badge ml="1" colorScheme="green">
                          ACTIVE - Freelancer
                        </Badge>
                      </Text>
                      <Text fontSize="sm">Software Developer</Text>
                      <Button
                        width={"100%"}
                        colorScheme="red"
                        onClick={() => {
                          localStorage.removeItem("user");
                          setUser("");

                          setIsAuth(false);
                          push("/");
                        }}
                      >
                        Sign out
                      </Button>
                    </Box>
                  </Center>
                  <br />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Box>
      ) : null}
    </Flex>
  );
};

export default Header;
