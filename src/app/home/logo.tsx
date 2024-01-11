import { Box, Text, Link } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Link href="/landing">
      <Box w="100px" color={["white", "white", "primary.500", "primary.500"]}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Box>
    </Link>
  );
}
