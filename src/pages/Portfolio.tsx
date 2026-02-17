import { Divider, Stack, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

import PageLayout from "./PageLayout";
import GalleryModal from "../components/GalleryModal";

import { portfolio } from "../helpers/portfolio";
import type { GalleryType } from "../helpers/portfolio";

function Portfolio() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const [focusedGallery, setFocusedGallery] = useState<GalleryType | undefined>(
    portfolio[0],
  );
  const [showGalleryModal, setShowGalleryModal] = useState(
    pathname.includes("portfolio/"),
  );

  const [selectedGallery, setSelectedGallery] = useState(
    portfolio.find((galleryItem) => {
      return pathname.includes(galleryItem.pathname);
    }),
  );

  const onSelectGallery = (gallery: GalleryType) => {
    setSelectedGallery(gallery);
    setShowGalleryModal(true);
    navigate(`${isSecret ? "/secret" : ""}/portfolio${gallery.pathname}`);
  };

  const onCloseGallery = () => {
    setShowGalleryModal(false);
    navigate(`${isSecret ? "/secret" : ""}/portfolio`);
  };

  return (
    <PageLayout label="Explore My Work" image={focusedGallery?.images[0]}>
      <Stack>
        {portfolio.map((portfolioGallery, index) => {
          return (
            <>
              {index !== 0 && <Divider />}
              <Stack
                pt="3px"
                key={portfolioGallery.pathname}
                onMouseEnter={() => setFocusedGallery(portfolioGallery)}
                onClick={() => onSelectGallery(portfolioGallery)}
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
                <Text
                  style={{
                    maxHeight:
                      portfolioGallery === focusedGallery ? "500px" : 0,
                    transition:
                      portfolioGallery === focusedGallery
                        ? "max-height 0.35s ease-in"
                        : "max-height 0.15s ease-out",
                    overflow: "hidden",
                  }}
                >
                  {portfolioGallery.description}
                </Text>
              </Stack>
            </>
          );
        })}
      </Stack>

      {selectedGallery && (
        <GalleryModal
          isOpen={showGalleryModal}
          onClose={onCloseGallery}
          gallery={selectedGallery}
        />
      )}
    </PageLayout>
  );
}

export default Portfolio;
