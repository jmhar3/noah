import { useNavigate } from "react-router";
import { useDisclosure, useHover } from "@mantine/hooks";
import {
  Modal,
  Stack,
  Title,
  ActionIcon,
  Center,
  Divider,
} from "@mantine/core";

import MenuButton from "./MenuButton";

import MenuIcon from "../assets/icons/MenuIcon";
import BackArrowIcon from "../assets/icons/BackArrowIcon";

import type { JSX } from "react";

interface MenuItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

interface IconButtonProps {
  onClick: () => void;
  icon: JSX.Element;
}

function IconButton(props: IconButtonProps) {
  const { hovered, ref } = useHover();

  return (
    <ActionIcon
      color={hovered ? "#b44655" : "steelblue"}
      variant="transparent"
      onClick={props.onClick}
      ref={ref}
    >
      {props.icon}
    </ActionIcon>
  );
}

function Menu() {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);

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

      <Stack gap="xs" align="center">
        <IconButton onClick={open} icon={<MenuIcon />} />
        <IconButton onClick={() => navigate(-1)} icon={<BackArrowIcon />} />
      </Stack>
    </>
  );
}

export default Menu;
