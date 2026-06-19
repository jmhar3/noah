import { isMobile } from "react-device-detect";
import { useHover } from "@mantine/hooks";
import { Text, Stack, Divider } from "@mantine/core";

import defaultImage from "../assets/images/gypsy.jpg";

export interface TestimonialType {
  name: string;
  testimonial: string[];
  image: string;
}

interface TestimonialProps extends TestimonialType {
  setImage: (image: string) => void;
  showDivider: boolean;
}

function Testimonial({
  name,
  image,
  setImage,
  showDivider,
  testimonial,
}: TestimonialProps) {
  const { hovered, ref } = useHover();

  return (
    <Stack
      pt="sm"
      gap="sm"
      ref={ref}
      key={name}
      onMouseEnter={() => setImage(image)}
      onMouseLeave={() => setImage(defaultImage)}
    >
      {showDivider && <Divider color="#b44655" />}

      {isMobile && (
        <Text size="1.4em" ta="center" c={hovered ? "#b44655" : "steelblue"}>
          - {name.toUpperCase()} -
        </Text>
      )}

      <Stack>
        {testimonial.map((string) => (
          <Text size="xl" key={string}>
            {string}
          </Text>
        ))}
      </Stack>

      {!isMobile && (
        <Text size="1.4em" ta="right" c={hovered ? "#b44655" : "steelblue"}>
          - {name.toUpperCase()}
        </Text>
      )}
    </Stack>
  );
}

export default Testimonial;
