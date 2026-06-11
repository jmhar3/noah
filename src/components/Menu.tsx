import { useNavigate } from "react-router";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Stack, ActionIcon } from "@mantine/core";

import MenuModal from "./MenuModal";

import MenuIcon from "../assets/icons/MenuIcon";
import BackArrowIcon from "../assets/icons/BackArrowIcon";

import type { JSX } from "react";

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
  const [opened, { open }] = useDisclosure(false);

  return (
    <>
      <MenuModal isOpen={opened} />

      <Stack gap="xs" align="center">
        <IconButton onClick={open} icon={<MenuIcon />} />
        <IconButton onClick={() => navigate(-1)} icon={<BackArrowIcon />} />
      </Stack>
    </>
  );
}

export default Menu;
