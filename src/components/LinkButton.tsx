import { Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface LinkButtonProps {
  label: string;
  onClick: () => void;
}

function LinkButton(props: LinkButtonProps) {
  const { hovered, ref } = useHover();

  return (
    <Text
      ref={ref}
      td="underline"
      onClick={props.onClick}
      c={hovered ? "#b44655" : "steelblue"}
      style={{ cursor: "pointer" }}
    >
      {props.label}
    </Text>
  );
}

export default LinkButton;
