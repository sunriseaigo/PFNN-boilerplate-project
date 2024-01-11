"use client";

import { ChakraProvider, Checkbox } from "@chakra-ui/react";
import {
  Flex,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import customTheme from "../utils/theme";
import Header from "./header";
import { useAppContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import axios from "axios";

// import moment from ''

export default function Home() {
  const { user, isAuth, isAdmin } = useAppContext();
  const [users, setUsers] = useState([]);
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
    axios.get("http://localhost:5000/auth").then((res) => {
      setUsers(res.data.users);
    });
  }, []);
  console.log(users);

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        <Flex justifyContent="flex-end" maxW={{ xl: "1000px" }} m="0 auto">
          <TableContainer maxWidth="100%">
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Admin</Th>
                  <Th>Create at</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user, index) => (
                  <Tr key={user.id}>
                    <Td>{index + 1}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      <Checkbox isChecked={user.admin ? true : false} />
                    </Td>
                    <Td>{user.created_at}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Admin</Th>
                  <Th>Create at</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
