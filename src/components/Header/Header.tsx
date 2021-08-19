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
    // <header className=" w-screen font-mono">
    //   <div className="flex items-center pl-4 h-12">
    //     <div className="align-center space-x-4">
    //       <Link href="/">
    //         <a className="text-blue-800 px-8  py-2 rounded text-xl   ">
    //           kurihara dev
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center pl-8 h-12">
    //     <div className="flex space-x-4">
    //       <Link href="/">
    //         <a className="text-gray-600  hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
    //           Home
    //         </a>
    //       </Link>
    //       <Link href="/blogs">
    //         <a className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
    //           Blog
    //         </a>
    //       </Link>
    //       <Link href="/profile">
    //         <a className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
    //           Profile
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
};
