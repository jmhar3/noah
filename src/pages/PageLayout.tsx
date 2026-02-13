import { Box, Flex, Image, ScrollArea, Title } from "@mantine/core";

import type { PropsWithChildren } from "react";

import Menu from "../components/Menu";

interface PageLayoutProps extends PropsWithChildren {
  label?: string;
  image?: string;
}

function PageLayout({ label, image, children }: PageLayoutProps) {
  return (
    <>
      <Box pos="fixed" top="1em" left="1em">
        <Menu />
      </Box>

      <Flex pr="10em" pl="10em" justify="flex-start" gap="xl">
        {label && (
          <Title pb="1.5em" size="4.5em" style={{ writingMode: "sideways-lr" }}>
            {label}
          </Title>
        )}

        <ScrollArea h="100vh" scrollbarSize="none">
          {children}
        </ScrollArea>

        {image && (
          <Image
            pl="lg"
            pt="4em"
            h="calc(100vh - 4em)"
            fit="contain"
            src={image}
          />
        )}
      </Flex>
    </>
  );
}

export default PageLayout;
