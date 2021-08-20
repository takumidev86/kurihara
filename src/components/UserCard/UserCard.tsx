import { VFC } from "react";
import { Box, Stack, Image, Text, Flex } from "@chakra-ui/react";

export const UserCard: VFC = () => {
  return (
    <Box
      w="360px"
      h="360px"
      bg="white"
      borderRadius="10px"
      shadow="2xl"
      p={4}
      m={8}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image boxSize="100px" src="/icon.png" alt="Avatar" m="auto"></Image>

        <Text fontSize="lg" fontWeight="bold">
          Takumi
        </Text>
        <Text fontSize="sm" color="gray" pb="10px">
          takumidevelopment86@gmail.com
        </Text>
      </Stack>
      <Flex>
        <Image
          boxSize="35px"
          src="/linkedin-original.svg"
          alt="Avatar"
          m="auto"
          _hover={{ bg: "blue.500" }}
        ></Image>
        <Image
          boxSize="35px"
          src="/github-original.svg"
          alt="Avatar"
          m="auto"
          _hover={{ bg: "blue.500" }}
        ></Image>
        <Image
          boxSize="35px"
          src="/twitter-original.svg"
          alt="Avatar"
          m="auto"
          _hover={{ bg: "blue.500" }}
        ></Image>
      </Flex>
    </Box>
  );
};
