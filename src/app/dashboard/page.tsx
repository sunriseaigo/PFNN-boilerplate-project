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

import moment from "moment";

interface User {
  id: number;
  name: string;
  email: string;
  admin: string;
  created_at: string;
}

export default function Home() {
  const { user, isAuth, isAdmin } = useAppContext();

  const [users, setUsers] = useState<User[]>([]);
  const { push } = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `${user}`,
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

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        {isAdmin && (
          <Flex justifyContent="flex-end" maxW={{ xl: "1000px" }} m="0 auto">
            <TableContainer maxWidth="100%">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
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
                  {users.map((user: User, index: number) => (
                    <Tr key={user.id}>
                      <Td>{index + 1}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>
                        <Checkbox
                          isChecked={user.admin == "0" ? false : true}
                          onChange={(e) => {
                            axios.put(
                              "http://localhost:5000/auth/update_admin",
                              {
                                admin: user.admin == "0" ? 1 : 0,
                                id: user.id,
                              }
                            );
                            axios
                              .get("http://localhost:5000/auth")
                              .then((res) => {
                                const users = [...res.data.users];
                                setUsers(users);
                              });
                          }}
                        />
                      </Td>
                      <Td>{moment(user.created_at).format("YYYY-MM-DD")}</Td>
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
        )}
      </Flex>
    </ChakraProvider>
  );
}
