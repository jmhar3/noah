import { Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface LinkButtonProps {
  label: string;
  size?: string;
  onClick: () => void;
  c?: string;
}

function LinkButton({ label, ...props }: LinkButtonProps) {
  const { hovered, ref } = useHover();

  return (
    <Text
      ref={ref}
      td="underline"
      c={hovered ? "#b44655" : "steelblue"}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {label}
    </Text>
  );
}

export default LinkButton;
