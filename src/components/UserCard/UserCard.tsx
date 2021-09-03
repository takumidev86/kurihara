import Link from "next/link";

import { VFC } from "react";
import { Box, Stack, Image, Text, Flex, Center } from "@chakra-ui/react";

export const UserCard: VFC = () => {
  return (
    <Box
      w="80%"
      h="70%"
      bg="white"
      borderRadius="10px"
      shadow="2xl"
      p={4}
      m={8}
    >
      <Stack textAlign="center">
        <Image boxSize="100px" src="/icon.png" alt="Avatar" m="auto"></Image>

        <Text fontSize="lg" fontWeight="bold">
          Takumi
        </Text>
        <Text fontSize="sm" color="gray" pb="10px">
          takumidev86@gmail.com
        </Text>
      </Stack>
      <Center>
        <Box w="40%">
          <Flex>
            <Link href="https://www.linkedin.com/in/takumi-kurihara-913514205/">
              <Image
                boxSize={{ base: "25px", md: "30px" }}
                src="/linkedin-original.svg"
                alt="Avatar"
                m="auto"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link href="https://github.com/takumidev86">
              <Image
                boxSize={{ base: "25px", md: "30px" }}
                src="/github-original.svg"
                alt="Avatar"
                m="auto"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link href="https://twitter.com/takumi_______86">
              <Image
                boxSize={{ base: "25px", md: "30px" }}
                href=""
                src="/twitter-original.svg"
                alt="Avatar"
                m="auto"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100005429313609">
              <Image
                boxSize={{ base: "25px", md: "30px" }}
                src="/facebook-original.svg"
                alt="Avatar"
                m="auto"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
