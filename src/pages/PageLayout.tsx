import { Box, Flex, Image, ScrollArea, Stack, Title } from "@mantine/core";

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

      <Flex pr="10em" pl="10em" justify="flex-start" gap="lg">
        {label && (
          <Title pb="1.5em" size="4.5em" style={{ writingMode: "sideways-lr" }}>
            {label}
          </Title>
        )}

        <ScrollArea scrollbars="y" h="100vh" w="100%" scrollbarSize="none">
          <Stack gap="md" py="4em">
            {children}
          </Stack>
        </ScrollArea>

        {image && (
          <Image pt="4em" h="calc(100vh - 4em)" fit="contain" src={image} />
        )}
      </Flex>
    </>
  );
}

export default PageLayout;
