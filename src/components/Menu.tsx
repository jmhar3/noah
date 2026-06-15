import { useNavigate } from "react-router";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Flex, ActionIcon } from "@mantine/core";
import { isMobile } from "react-device-detect";

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

      <Flex gap="xs" align="center" direction={isMobile ? "row" : "column"}>
        <IconButton onClick={open} icon={<MenuIcon />} />
        <IconButton onClick={() => navigate(-1)} icon={<BackArrowIcon />} />
      </Flex>
    </>
  );
}

export default Menu;
