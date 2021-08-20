// import Image from "next/image";
import { Box, Stack, Image, Text, Flex, Center } from "@chakra-ui/react";

import { Layout } from "../../components/Layout/Layout";
import { UserCard } from "../../components/UserCard/UserCard";
// pages 配下はexport defaultにしとけ
export default function Profile() {
  return (
    <Layout>
      {/* <div className="min-h-screen px-2 flex flex-col justify-center items-center h-screen"> */}
      <Center>
        {/* <Box
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
            <Image
              boxSize="100px"
              src="/icon.png"
              alt="Avatar"
              m="auto"
            ></Image>

            <Text fontSize="lg" fontWeight="bold">
              Takumi
            </Text>
            <Text fontSize="sm" color="gray">
              takumidevelopment86@gmail.com
            </Text>
          </Stack>
          <Flex>
            <Image boxSize="40px" src="/icon.png" alt="Avatar" m="auto"></Image>
            <Image boxSize="40px" src="/icon.png" alt="Avatar" m="auto"></Image>
            <Image boxSize="40px" src="/icon.png" alt="Avatar" m="auto"></Image>
          </Flex>
        </Box> */}
        <UserCard></UserCard>
      </Center>
    </Layout>
  );
}
