import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Stack, Title, ActionIcon } from "@mantine/core";

import MenuIcon from "../assets/icons/MenuIcon";

interface MenuItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

function Menu() {
  const [opened, { open, close }] = useDisclosure(false);

  const menu: MenuItem[] = [
    { label: "Who am I?", path: "about-me" },
    { label: "Working with me", path: "working-with-me" },
    { label: "Explore My Work", path: "portfolio" },
    { label: "Packages", path: "/packages" },
    { label: "Frequently Asked Questions", path: "faq" },
    { label: "Get in touch", path: "/contact" },
    { label: "Studio Space", path: "www.studioxixi.com.au", isExternal: true },
  ];

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close} withCloseButton={false}>
        <Stack align="center">
          <Title size="6em">Melbourne Art Natural</Title>

          {menu.map(({ label, path, isExternal }) => (
            <Button
              key="label"
              component="a"
              variant="transparent"
              target={isExternal ? "_blank" : undefined}
              href={path}
            >
              {label.toUpperCase()}
            </Button>
          ))}
        </Stack>
      </Modal>

      <ActionIcon size="lg" color="cadetblue" variant="filled" onClick={open}>
        <MenuIcon />
      </ActionIcon>
    </>
  );
}

export default Menu;
