import { useState } from "react";
import { Text, Flex, Stack, Image, Accordion, ScrollArea } from "@mantine/core";

import PageLayout from "./PageLayout";
import GalleryModal from "../components/GalleryModal";

import { portfolio } from "../helpers/portfolio";

function Portfolio() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [focusedImage, setFocusedImage] = useState<string | undefined>();
  const [accordionState, setAccordionState] = useState<string>("0");

  const onFocusImage = (image: string) => {
    setShowGalleryModal(true);
    setFocusedImage(image);
  };

  const onCloseGallery = () => {
    setShowGalleryModal(false);
    setFocusedImage(undefined);
  };

  return (
    <PageLayout
      label="Explore My Work"
      image={portfolio[Number(accordionState)].images[0]}
    >
      <Accordion
        value={accordionState}
        onChange={(index) => setAccordionState(index || "0")}
        styles={{ item: { borderColor: "#b44655" } }}
      >
        {portfolio.map((portfolioGallery, index) => {
          return (
            <Accordion.Item
              w="100%"
              value={index.toString()}
              key={portfolioGallery.pathname}
            >
              <Text
                py="md"
                size="1.4em"
                style={{ cursor: "pointer" }}
                onClick={() => setAccordionState(index.toString())}
              >
                {portfolioGallery.label.toUpperCase()}
              </Text>
              <Accordion.Panel>
                <Stack>
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
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>

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
