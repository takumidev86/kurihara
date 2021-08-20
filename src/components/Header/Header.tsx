import Link from "next/link";
import { VFC } from "react";
import { Flex, Heading, Box, Text, Spacer } from "@chakra-ui/react";

export const Header: VFC = () => {
  return (
    <>
      <Flex
        as="nav"
        // bg="gray.200"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={10} _hover={{ cursor: "pointer" }}>
          <Text fontSize={{ base: "md", md: "xl" }} fontFamily="mono">
            <Link href="/">
              <Text color="blue.500"> kurihara.dev</Text>
            </Link>
          </Text>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box
            p={2}
            _hover={{
              cursor: "pointer",
              bg: "gray.100",
              borderRadius: "5px",
              color: "blue.500",
            }}
          >
            <Link href="/">Home</Link>
          </Box>
          <Box
            as="a"
            href="/blogs"
            p={2}
            _hover={{
              cursor: "pointer",
              bg: "gray.100",
              borderRadius: "5px",
              color: "blue.500",
            }}
          >
            Blog
          </Box>
          <Box
            p={2}
            _hover={{
              cursor: "pointer",
              bg: "gray.100",
              borderRadius: "5px",
              color: "blue.500",
            }}
          >
            <Link href="/profile"> Profile</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
