import { Image } from "@mantine/core";
import { useFullscreenElement } from "@mantine/hooks";

interface PortfolioImageProps {
  image: string;
}

function PortfolioImage({ image }: PortfolioImageProps) {
  const { ref, toggle } = useFullscreenElement();

  return (
    <Image
      bdrs="sm"
      ref={ref}
      src={image}
      onClick={toggle}
      style={{ cursor: "pointer" }}
    />
  );
}

export default PortfolioImage;
