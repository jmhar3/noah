import { useNavigate } from "react-router";
import { useHover } from "@mantine/hooks";

import { Modal, Stack, Title, Center, Divider } from "@mantine/core";

import MenuButton from "./MenuButton";

interface MenuItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

function MenuModal({ isOpen }: { isOpen: boolean }) {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();

  const menu: MenuItem[] = [
    { label: "Who am I?", path: "/about-me" },
    { label: "Working with me", path: "/working-with-me" },
    { label: "Explore My Work", path: "/portfolio" },
    { label: "Packages", path: "/packages" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Frequently Asked Questions", path: "/faq" },
    { label: "Get in touch", path: "/contact" },
  ];

  return (
    <Modal
      fullScreen
      opened={isOpen}
      onClose={() => {}}
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
          <Title
            h="1em"
            size="6em"
            ref={ref}
            onClick={() => navigate("/")}
            c={hovered ? "#b44655" : "steelblue"}
            style={{ cursor: "pointer" }}
          >
            Melbourne Art Natural
          </Title>
          <Divider w="100%" color="#b44655" />

          {menu.map((buttonProps) => (
            <MenuButton key={buttonProps.label} {...buttonProps} />
          ))}
        </Stack>
      </Center>
    </Modal>
  );
}

export default MenuModal;
