// import Image from "next/image";
import { Box, Stack, Image, Text, Flex, Center } from "@chakra-ui/react";

import { Layout } from "../../components/Layout/Layout";
import { UserCard } from "../../components/UserCard/UserCard";
// pages 配下はexport defaultにしとけ
export default function Profile() {
  return (
    <Layout>
      <Center>
        <UserCard></UserCard>
      </Center>
    </Layout>
  );
}
