import { Divider, Stack, Text, Title } from "@mantine/core";
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

  const [focusedGallery, setFocusedGallery] = useState<
    GalleryType | undefined
  >();
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
                key={portfolioGallery.pathname}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setFocusedGallery(portfolioGallery)}
                onClick={() => onSelectGallery(portfolioGallery)}
              >
                <Title>{portfolioGallery.label}</Title>
                {portfolioGallery && focusedGallery === portfolioGallery && (
                  <Text
                    h={focusedGallery === portfolioGallery ? "auto" : "0px"}
                    style={{ transition: "ease-out height 3s" }}
                  >
                    {portfolioGallery.description}
                  </Text>
                )}
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
