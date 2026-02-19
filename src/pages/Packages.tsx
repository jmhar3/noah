import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import {
  Flex,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Transition,
  BackgroundImage,
} from "@mantine/core";

import PageLayout from "./PageLayout";

interface Package {
  rate: number;
  image: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  inclusions: string[];
}

const man = {
  label: "Man",
  image: "https://i.sstatic.net/3xDTD.jpg",
  title: "Digital Photography",
  subtitle: "My best seller",
  description:
    "This package is for you if you need some high quality portraits looking your absolute best. Good for content creators, people wanting their first ever photoshoot, a fun and different present for your partner or just something to celebrate how amazing you look!",
  inclusions: ["1.5 hours", "25 high resolution edits"],
  rate: 500,
};

const myth = {
  label: "Myth",
  image:
    "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
  title: "35mm Film + Social Reel",
  subtitle: "My personal favourite",
  description:
    "This package is my absolute favourite. It might take a little longer for you to receive your content, but isn’t the antici…pation half the fun? This package blends classical 35mm photography(the film stock will be tailored to you and your vision) with high quality 4k video to make something really special for you to cherish.",
  inclusions: [
    "2 hours",
    "20 high res film scans",
    "1 x 10-20 second 4k reel for social media",
  ],
  rate: 650,
};

const legend = {
  label: "Legend",
  image: "https://kenchris.github.io/wasm-webp/test3.webp",
  title: "Complete package",
  subtitle:
    "The ultimate brand booster or a really special treat yourself moment",
  description:
    "This package is half a day worth of shooting for you, and extra time dedicated to you in post production for me. This package has all the bells and whistles, the classical and almost impossible to replicate look and feel of 35mm film if you want it combined with digital images for the more immediate and flexible purposes with a splash of video thrown in for good measure.",
  inclusions: [
    "4 hours",
    "20 high resolution digital edits",
    "+ 20 digital edits OR 20 35mm film scans",
    "2 x 10-30 second 4k reels for social media",
  ],
  rate: 1200,
};

const packages: Package[] = [{ ...man }, { ...myth }, { ...legend }];

function Packages() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const findPackage = packages.find((rate) =>
    pathname.includes(rate.label.toLowerCase()),
  );

  const [focusedPackage, setFocusedPackage] = useState(findPackage);

  const [expandPackage, setExpandPackage] = useState(!!findPackage);

  const onSelectPackage = (rate: Package) => {
    setFocusedPackage(rate);
    setExpandPackage(true);
    navigate(
      `${isSecret ? "/secret" : ""}/packages/${rate.label.toLowerCase()}`,
    );
  };

  const PackageNavButton = ({ rate }: { rate: Package }) => {
    return <Button onClick={() => onSelectPackage(rate)}>{rate.label}</Button>;
  };

  return (
    <PageLayout label="Packages">
      <Group grow w="100%" gap="0" h="100vh" pos="fixed" top="0" left="0">
        {packages.map((rate) => (
          <BackgroundImage
            h="100%"
            src={rate.image}
            key={rate.label}
            style={{
              cursor: expandPackage ? undefined : "pointer",
              maxWidth: expandPackage
                ? focusedPackage === rate
                  ? "100vw"
                  : 0
                : "auto",
              transition: expandPackage
                ? focusedPackage === rate
                  ? "max-width 0.2s ease-in"
                  : "max-width 0.2s ease-out"
                : "max-width 0.2s ease-out",
              overflow: "hidden",
            }}
          >
            <Stack
              h="100%"
              py="4em"
              align="center"
              justify="flex-start"
              onClick={() => !expandPackage && onSelectPackage(rate)}
              onMouseOver={() => setFocusedPackage(rate)}
            >
              <Title size="4em">{rate.label}</Title>

              <Transition
                mounted={focusedPackage === rate}
                transition="fade"
                duration={400}
                timingFunction="ease"
              >
                {(styles) => (
                  <Stack gap="0" align="center" style={styles}>
                    <Text size="1.6em">{rate.title}</Text>
                    <Text size="1.4em" fs="italic">
                      {rate.subtitle}
                    </Text>
                  </Stack>
                )}
              </Transition>

              {expandPackage && focusedPackage && (
                <Stack justify="space-around" h="100%" px="6em">
                  <Text size="1.4em" ta="center">
                    {focusedPackage.description}
                  </Text>

                  <Stack gap="0" align="center">
                    <Text size="1.4em" fs="italic">
                      Choose this package is you want:
                    </Text>
                    {focusedPackage.inclusions.map((inclusion) => (
                      <Text key={inclusion} size="1.4em">
                        {inclusion}
                      </Text>
                    ))}
                  </Stack>

                  <Flex w="100%" justify="space-between">
                    {rate.label === "Man" && <PackageNavButton rate={legend} />}
                    {rate.label === "Myth" && <PackageNavButton rate={man} />}
                    {rate.label === "Legend" && (
                      <PackageNavButton rate={myth} />
                    )}

                    <Title>${focusedPackage.rate}</Title>

                    {rate.label === "Man" && <PackageNavButton rate={myth} />}
                    {rate.label === "Myth" && (
                      <PackageNavButton rate={legend} />
                    )}
                    {rate.label === "Legend" && <PackageNavButton rate={man} />}
                  </Flex>
                </Stack>
              )}
            </Stack>
          </BackgroundImage>
        ))}
      </Group>
    </PageLayout>
  );
}

export default Packages;
