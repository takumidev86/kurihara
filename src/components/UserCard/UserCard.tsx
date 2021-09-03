import Link from "next/link";

import React, { VFC } from "react";
import { Box, Stack, Image, Text, Flex, Center } from "@chakra-ui/react";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkdinIcon } from "../Icons/LinkedinIcon";

import { TwitterIcon } from "../Icons/TwitterIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";

export const UserCard: VFC = () => {
  return (
    <Box
      w="70%"
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
        <Box w="50%">
          <Flex>
            <Link href="https://www.linkedin.com/in/takumi-kurihara-913514205/">
              <Box m="auto">
                <GithubIcon />
              </Box>
            </Link>
            <Link href="https://github.com/takumidev86">
              <Box m="auto">
                <LinkdinIcon />
              </Box>
            </Link>
            <Link href="https://twitter.com/takumi_______86">
              <Box m="auto">
                <TwitterIcon />
              </Box>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100005429313609">
              <Box m="auto">
                <FacebookIcon />
              </Box>
            </Link>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
