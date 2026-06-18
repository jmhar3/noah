import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Stack, Divider } from "@mantine/core";
import { isMobile } from "react-device-detect";

import PageLayout from "./PageLayout";
import Package from "../components/Package";
import LinkButton from "../components/LinkButton";

import type { PackageType } from "../components/Package";

import image from "../assets/images/packages.jpg";
import manImage from "../assets/images/lake_portrait.webp";
import mythImage from "../assets/images/myth.jpg";
import legendImage from "../assets/images/legend.jpg";

import CameraIcon from "../assets/icons/CameraIcon.tsx";
import ClockIcon from "../assets/icons/ClockIcon.tsx";
import FilmIcon from "../assets/icons/FilmIcon.tsx";
import PlusIcon from "../assets/icons/PlusIcon.tsx";

const man = {
  label: "Man",
  image: manImage,
  title: "Digital Photography",
  subtitle: "My best seller",
  description:
    "This package is for you if you need some high quality portraits looking your absolute best. Good for content creators, people wanting their first ever photoshoot, a fun and different present for your partner or just something to celebrate how amazing you look!",
  inclusions: [
    { icon: <ClockIcon />, label: "1.5 hours", description: "" },
    {
      icon: <CameraIcon />,
      label: "Digital Photography",
      description: "25 high resolution photos edits",
    },
  ],
  rate: 500,
};

const myth = {
  label: "Myth",
  image: mythImage,
  title: "35mm Film + Social Reel",
  subtitle: "My personal favourite",
  description:
    "This package is my absolute favourite. It might take a little longer for you to receive your content, but isn’t the antici…pation half the fun? This package blends classical 35mm photography (the film stock will be tailored to you and your vision) with high quality 4k video to make something really special for you to cherish.",
  inclusions: [
    {
      icon: <ClockIcon />,
      label: "2 hours",
      description: "Enough time for a 2 - 3 outfits",
    },
    {
      icon: <CameraIcon />,
      label: "Film Photography",
      description: "includes 20 high res film scans",
    },
    {
      icon: <FilmIcon />,
      label: "Social Reel",
      description: "1 x 10-20 second 4k reel for social media",
    },
  ],
  rate: 650,
};

const legend = {
  label: "Legend",
  image: legendImage,
  title: "Complete package",
  subtitle: "The ultimate treat yourself moment",
  description:
    "This package is half a day worth of shooting for you, and extra time dedicated to you in post production by me. This package has all the bells and whistles. The classical and almost impossible to replicate look and feel of 35mm film, combined with digital images for the more immediate and flexible purposes with a splash of video thrown in for good measure.",
  inclusions: [
    {
      icon: <ClockIcon />,
      label: "4 hours",
      description: "Plenty of time for an outdoor shoot",
    },
    {
      icon: <CameraIcon />,
      label: "Digital Photography",
      description: "20 high resolution photos edits",
    },
    {
      icon: <PlusIcon />,
      label: "Additional Images",
      description:
        "Your choice of an additional 20 digital edits or 35mm film scans",
    },
    {
      icon: <FilmIcon />,
      label: "Social Reels",
      description: "2 x 10-30 second 4k reels for social media",
    },
  ],
  rate: 1200,
};

const packages: PackageType[] = [{ ...man }, { ...myth }, { ...legend }];

function Packages() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isNotFocused =
    pathname === "/packages" || pathname === "/secret/packages";

  const [highlightedPackage, setHighlightedPackage] =
    useState<PackageType | null>(null);

  if (pathname.includes("man") && highlightedPackage !== man)
    setHighlightedPackage(man);
  if (pathname.includes("myth") && highlightedPackage !== myth)
    setHighlightedPackage(myth);
  if (pathname.includes("legend") && highlightedPackage !== legend)
    setHighlightedPackage(legend);

  return (
    <PageLayout
      label={isNotFocused ? "Packages*" : "Packages"}
      image={isMobile ? undefined : highlightedPackage?.image || image}
    >
      <Stack h="calc(100vh - 8em)" justify="space-between">
        {packages.map((rate, index) => (
          <>
            {index !== 0 && isNotFocused && (
              <Divider w="100%" color="#b44655" />
            )}

            <Package
              key={rate.title}
              {...rate}
              setHighlightedPackage={setHighlightedPackage}
            />
          </>
        ))}

        {isNotFocused && (
          <LinkButton
            size="xl"
            onClick={() => navigate("/contact")}
            label="* Custom packages also available. Inquire for more info."
          />
        )}
      </Stack>
    </PageLayout>
  );
}

export default Packages;
