import { BackgroundImage, Button, Flex, Title } from "@mantine/core";
import PageLayout from "./PageLayout";
import { portfolio } from "../helpers/portfolio";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";

function Portfolio() {
  const [focusedSlide, setFocusedSlide] = useState(0);

  return (
    <PageLayout>
      <Title pt="1.5em" size="4.5em">
        Explore My Work
      </Title>

      <Carousel
        pos="fixed"
        left="-6em"
        bottom="6em"
        slideGap="lg"
        slideSize="28%"
        withIndicators
        withControls={false}
        onSlideChange={(slideIndex) => setFocusedSlide(slideIndex)}
        emblaOptions={{
          loop: true,
          startIndex: 0,
          align: "start",
        }}
      >
        {portfolio.map((gallery, index) => (
          <Carousel.Slide key={gallery.pathname}>
            <Flex align="flex-end" justify="flex-end" h="80vh">
              <BackgroundImage radius="sm" src={gallery.images[0]}>
                <Button
                  component="a"
                  variant="transparent"
                  href={`/portfolio${gallery.pathname}`}
                  h={focusedSlide + 2 === index ? "80vh" : "50vh"}
                  style={{ transition: "height 0.3s ease-in-out" }}
                >
                  <Flex h="100%" align="flex-end" justify="flex-end">
                    <Title size="3em">{gallery.label}</Title>
                  </Flex>
                </Button>
              </BackgroundImage>
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
    </PageLayout>
  );
}

export default Portfolio;
