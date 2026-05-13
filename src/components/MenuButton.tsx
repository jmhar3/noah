import { Text, UnstyledButton } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface MenuButtonProps {
  label: string;
  path: string;
  isExternal?: boolean;
}

function MenuButton({ label, path, isExternal }: MenuButtonProps) {
  const { hovered, ref } = useHover();

  return (
    <UnstyledButton
      ref={ref}
      href={path}
      component="a"
      c={hovered ? "#B44655" : "steelblue"}
      target={isExternal ? "_blank" : undefined}
    >
      <Text size="1.8em">{label.toUpperCase()}</Text>
    </UnstyledButton>
  );
}

export default MenuButton;
