import {
  Box,
  Flex,
  Group,
  Image,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";

import type { PropsWithChildren } from "react";

import Menu from "../components/Menu";

interface PageLayoutProps extends PropsWithChildren {
  label?: string;
  image?: string;
}

function PageLayout({ label, image, children }: PageLayoutProps) {
  return (
    <>
      <Box pos="fixed" top="4.2em" left="8em">
        <Menu />
      </Box>

      <Group grow>
        <Flex pl="6em" justify="flex-start" gap="lg" pr="lg">
          {label && (
            <Title
              pb="1.5em"
              size="4.5em"
              style={{ writingMode: "sideways-lr" }}
            >
              {label}
            </Title>
          )}

          <ScrollArea scrollbars="y" h="100vh" w="100%" scrollbarSize="none">
            <Stack gap="md" py="4em">
              {children}
            </Stack>
          </ScrollArea>
        </Flex>

        {image && <Image h="100vh" fit="cover" src={image} />}
      </Group>
    </>
  );
}

export default PageLayout;
