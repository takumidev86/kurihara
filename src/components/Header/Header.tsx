import Link from "next/link";
import { VFC } from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Spacer,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        // bg="gray.200"
        align="center"
        justify="space-between"
        py={{ base: 3, md: 5 }}
        px={{ base: "15%", md: "15%" }}
      >
        <Flex align="center" as="a" mr={10} _hover={{ cursor: "pointer" }}>
          <Text fontSize={{ base: "md", md: "xl" }} fontFamily="mono">
            <Link href="/">
              <Text color="blue.600"> kurihara.dev</Text>
            </Link>
          </Text>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/">
            <Box
              p={2}
              _hover={{
                cursor: "pointer",
                bg: "gray.100",
                borderRadius: "5px",
                color: "blue.500",
              }}
            >
              Home
            </Box>
          </Link>
          <Link href="/blogs">
            <Box
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
          </Link>
          <Link href="/profile">
            <Box
              p={2}
              _hover={{
                cursor: "pointer",
                bg: "gray.100",
                borderRadius: "5px",
                color: "blue.500",
              }}
            >
              Profile
            </Box>
          </Link>
        </Flex>
        <IconButton
          aria-label="memu-button"
          icon={<HamburgerIcon />}
          size="lg"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        ></IconButton>
      </Flex>
      <Drawer placement="bottom" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              {/* <Link href="/">
                <Button
                  w="95%"
                  m="10px"
                  colorScheme="blackAlpha"
                  variant="ghost"
                >
                  Home
                </Button>
              </Link>
              <Link href="/blogs">
                <Button w="95%" m="10px" colorScheme="blue" variant="ghost">
                  Blogs
                </Button>
              </Link>
              <Link href="/profile">
                <Button w="95%" m="10px" colorScheme="blue" variant="ghost">
                  Profile
                </Button>
              </Link> */}
              <Link href="/">
                <Box
                  p={2}
                  w="95%"
                  m="10px"
                  textAlign="center"
                  _hover={{
                    cursor: "pointer",
                    bg: "gray.300",
                    borderRadius: "5px",
                    color: "blue.500",
                  }}
                >
                  Home
                </Box>
              </Link>
              <Link href="/blogs">
                <Box
                  p={2}
                  w="95%"
                  m="10px"
                  textAlign="center"
                  _hover={{
                    cursor: "pointer",
                    bg: "gray.300",
                    borderRadius: "5px",
                    color: "blue.500",
                  }}
                >
                  Blog
                </Box>
              </Link>
              <Link href="/profile">
                <Box
                  p={2}
                  w="95%"
                  m="10px"
                  textAlign="center"
                  _hover={{
                    cursor: "pointer",
                    bg: "gray.300",
                    borderRadius: "5px",
                    color: "blue.500",
                  }}
                >
                  Profile
                </Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
