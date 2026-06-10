import { useDisclosure } from "@mantine/hooks";
import { Modal, Stack, Title, ActionIcon, Center } from "@mantine/core";

import MenuIcon from "../assets/icons/MenuIcon";
import MenuButton from "./MenuButton";

interface MenuItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

function Menu() {
  const [opened, { open, close }] = useDisclosure(false);

  const menu: MenuItem[] = [
    { label: "Who am I?", path: "/about-me" },
    { label: "Working with me", path: "/working-with-me" },
    { label: "Explore My Work", path: "/portfolio" },
    { label: "Packages", path: "/packages" },
    { label: "Frequently Asked Questions", path: "/faq" },
    { label: "Get in touch", path: "/contact" },
    { label: "Studio Space", path: "www.studioxixi.com.au", isExternal: true },
  ];

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          content: { background: "floralwhite" },
        }}
      >
        <Center h="100vh">
          <Stack
            pt="4.5em"
            pb="8em"
            h="100%"
            align="center"
            justify="space-around"
          >
            <Title size="6em" h="1.5em">
              Melbourne Art Natural
            </Title>

            {menu.map((buttonProps) => (
              <MenuButton key={buttonProps.label} {...buttonProps} />
            ))}
          </Stack>
        </Center>
      </Modal>

      <ActionIcon
        size="lg"
        color="steelblue"
        variant="transparent"
        onClick={open}
      >
        <MenuIcon />
      </ActionIcon>
    </>
  );
}

export default Menu;
