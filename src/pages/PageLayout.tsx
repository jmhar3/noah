import { isMobile } from "react-device-detect";

import {
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Title,
  ScrollArea,
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
      <Box
        pos="fixed"
        top={isMobile ? "1em" : "4.2em"}
        left={isMobile ? "1em" : "8em"}
      >
        <Menu />
      </Box>

      <Group grow>
        <Flex
          pr={isMobile ? "0" : "lg"}
          gap={isMobile ? "0" : "lg"}
          justify="flex-start"
          pl={isMobile ? "0" : "6em"}
          direction={isMobile ? "column" : "row"}
        >
          {label && (
            <Title
              pr={isMobile ? "lg" : "0"}
              pb={isMobile ? "0" : "1.5em"}
              ta={isMobile ? "right" : "left"}
              size={isMobile ? "calc(1rem + 9vw)" : "4.5em"}
              style={{
                writingMode: isMobile ? "horizontal-tb" : "sideways-lr",
              }}
            >
              {label}
            </Title>
          )}

          <ScrollArea scrollbars="y" h="90vh" w="100%" scrollbarSize="none">
            {isMobile && <Image src={image} />}

            <Stack
              gap="md"
              py={isMobile ? "0" : "4em"}
              px={isMobile ? "lg" : "0"}
            >
              {children}
            </Stack>
          </ScrollArea>
        </Flex>

        {!isMobile && image && <Image h="100vh" fit="cover" src={image} />}
      </Group>
    </>
  );
}

export default PageLayout;
