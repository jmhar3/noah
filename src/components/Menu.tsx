import { useNavigate } from "react-router";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Flex, ActionIcon, Title } from "@mantine/core";
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

function Menu({ label }: { label?: string }) {
  const navigate = useNavigate();
  const [opened, { open }] = useDisclosure(false);

  return opened ? (
    <MenuModal isOpen={opened} />
  ) : (
    <Flex
      pos="fixed"
      align="center"
      justify="space-between"
      left={isMobile ? "0" : "8em"}
      top={isMobile ? "0" : "4.2em"}
      px={isMobile ? "lg" : undefined}
      bg={isMobile ? "floralwhite" : undefined}
      w={isMobile ? "100%" : "fit-content"}
      style={{ zIndex: "9999" }}
    >
      <Flex gap="xs" align="center" direction={isMobile ? "row" : "column"}>
        <IconButton onClick={open} icon={<MenuIcon />} />
        <IconButton onClick={() => navigate(-1)} icon={<BackArrowIcon />} />
      </Flex>

      {isMobile && (
        <Title ta="right" size="calc(1rem + 9vw)">
          {label}
        </Title>
      )}
    </Flex>
  );
}

export default Menu;
