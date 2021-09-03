import Head from "next/head";

import { Layout } from "../../components/Layout/Layout";
import { Footer } from "../../components/Footer/Footer";
import { PostCards } from "../../components/PostCards/PostCards";
import { Header } from "../../components/Header/Header";

export default function Blog({ blog }) {
  return (
    <Layout>
      <PostCards />
    </Layout>
  );
}
