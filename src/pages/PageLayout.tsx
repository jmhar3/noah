import { isMobile } from "react-device-detect";

import { Flex, Image, Stack, Title } from "@mantine/core";

import type { PropsWithChildren } from "react";

import Menu from "../components/Menu";

interface PageLayoutProps extends PropsWithChildren {
  label: string;
  image?: string;
}

function PageLayout({ label, image, children }: PageLayoutProps) {
  return (
    <>
      <Flex
        pos="fixed"
        align="center"
        justify="space-between"
        left={isMobile ? "0" : "8em"}
        top={isMobile ? "0" : "4.2em"}
        px={isMobile ? "lg" : undefined}
        bg={isMobile ? "floralwhite" : undefined}
        w={isMobile ? "100%" : "fit-content"}
      >
        <Menu />

        {isMobile && (
          <Title ta="right" size="calc(1rem + 9vw)">
            {label}
          </Title>
        )}
      </Flex>

      {!isMobile && (
        <Title
          ta="left"
          left="1.8em"
          pos="fixed"
          size="3.6em"
          bottom="1.5em"
          style={{
            writingMode: "sideways-lr",
          }}
        >
          {label}
        </Title>
      )}

      <Stack
        pr={isMobile ? undefined : "52vw"}
        pl={isMobile ? undefined : "11em"}
        pt={isMobile ? "3em" : undefined}
      >
        {isMobile && image && <Image src={image} mah="30vh" />}

        <Stack gap="md" py={isMobile ? "0" : "4em"} px={isMobile ? "lg" : "0"}>
          {children}
        </Stack>
      </Stack>

      {!isMobile && image && (
        <Image
          w="50vw"
          h="100vh"
          pos="fixed"
          top="0"
          right="0"
          fit="cover"
          src={image}
        />
      )}
    </>
  );
}

export default PageLayout;
