import { Center } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { PostCards } from "../components/PostCards/PostCards";
import { UserCard } from "../components/UserCard/UserCard";
// pages 配下はexport defaultにしとけ
export default function Home() {
  return (
    <Layout>
      <Center>
        <UserCard />
      </Center>

      <PostCards />
    </Layout>
  );
}
