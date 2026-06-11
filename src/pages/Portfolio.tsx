import { Divider, Flex, Image, ScrollArea, Stack, Text } from "@mantine/core";
import { useLocation } from "react-router";
import { useState } from "react";

import PageLayout from "./PageLayout";
import GalleryModal from "../components/GalleryModal";

import { portfolio } from "../helpers/portfolio";

import defaultImage from "../assets/images/beach_portrait.webp";

import type { GalleryType } from "../helpers/portfolio";

function Portfolio() {
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");
  console.log(isSecret);

  const [previewImage, setPreviewImage] = useState<string>(defaultImage);
  const [focusedGallery, setFocusedGallery] = useState<
    GalleryType | undefined
  >();
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [focusedImage, setFocusedImage] = useState<string | undefined>();

  const onFocusImage = (image: string) => {
    setShowGalleryModal(true);
    setFocusedImage(image);
  };

  const onCloseGallery = () => {
    setShowGalleryModal(false);
    setFocusedImage(undefined);
  };

  return (
    <PageLayout label="Explore My Work" image={previewImage}>
      <Stack gap="0">
        {portfolio.map((portfolioGallery, index) => {
          return (
            <Stack
              pb="sm"
              gap="xs"
              key={portfolioGallery.pathname}
              onMouseEnter={() => setPreviewImage(portfolioGallery.images[0])}
              onMouseLeave={() =>
                setPreviewImage(focusedGallery?.images[0] || defaultImage)
              }
              onClick={() => setFocusedGallery(portfolioGallery)}
              style={{
                cursor: "pointer",
                gap:
                  portfolioGallery === focusedGallery &&
                  portfolioGallery.description
                    ? undefined
                    : 0,
                transition:
                  portfolioGallery === focusedGallery
                    ? "gap 0.15s ease-in"
                    : "gap 0.15s ease-out",
              }}
            >
              <Stack gap="sm">
                {index !== 0 && <Divider color="#b44655" />}

                <Text
                  size="1.4em"
                  c={
                    portfolioGallery === focusedGallery
                      ? "firebrick"
                      : undefined
                  }
                >
                  {portfolioGallery.label.toUpperCase()}
                </Text>
              </Stack>

              <Stack
                style={{
                  maxHeight: portfolioGallery === focusedGallery ? "500px" : 0,
                  transition:
                    portfolioGallery === focusedGallery
                      ? "max-height 0.5s ease-in"
                      : "max-height 0.35s ease-out",
                  overflow: "hidden",
                }}
              >
                <Text size="xl">{portfolioGallery.description}</Text>

                <ScrollArea type="scroll" offsetScrollbars>
                  <Flex gap="sm">
                    {portfolioGallery.images.map((image) => (
                      <Image
                        mah="9em"
                        key={image}
                        src={image}
                        bdrs="sm"
                        style={{ cursor: "pointer" }}
                        onClick={() => onFocusImage(image)}
                      />
                    ))}
                  </Flex>
                </ScrollArea>
              </Stack>
            </Stack>
          );
        })}
      </Stack>

      {focusedImage && (
        <GalleryModal
          isOpen={showGalleryModal}
          onClose={onCloseGallery}
          image={focusedImage}
        />
      )}
    </PageLayout>
  );
}

export default Portfolio;
