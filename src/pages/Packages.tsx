import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Stack, Divider, UnstyledButton } from "@mantine/core";
import { preload } from "react-dom";

import PageLayout from "./PageLayout";
import Package from "../components/Package";

import type { PackageType } from "../components/Package";

import image from "../assets/images/m.a.n.png";

const man = {
  label: "Man",
  image:
    "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait1.webp",
  title: "Digital Photography",
  subtitle: "My best seller",
  description:
    "This package is for you if you need some high quality portraits looking your absolute best. Good for content creators, people wanting their first ever photoshoot, a fun and different present for your partner or just something to celebrate how amazing you look!",
  inclusions: [
    { icon: "", label: "1.5 hours", description: "" },
    {
      icon: "",
      label: "Digital Photography",
      description: "25 high resolution photos edits",
    },
  ],
  rate: 500,
};

const myth = {
  label: "Myth",
  image:
    "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait2.webp",
  title: "35mm Film + Social Reel",
  subtitle: "My personal favourite",
  description:
    "This package is my absolute favourite. It might take a little longer for you to receive your content, but isn’t the antici…pation half the fun? This package blends classical 35mm photography (the film stock will be tailored to you and your vision) with high quality 4k video to make something really special for you to cherish.",
  inclusions: [
    {
      icon: "",
      label: "2 hours",
      description: "Enough time for a 2 - 3 outfits",
    },
    {
      icon: "",
      label: "Film Photography",
      description: "includes 20 high res film scans",
    },
    {
      icon: "",
      label: "Social Reel",
      description: "1 x 10-20 second 4k reel for social media",
    },
  ],
  rate: 650,
};

const legend = {
  label: "Legend",
  image:
    "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait3.webp",
  title: "Complete package",
  subtitle: "The ultimate treat yourself moment",
  description:
    "This package is half a day worth of shooting for you, and extra time dedicated to you in post production by me. This package has all the bells and whistles. The classical and almost impossible to replicate look and feel of 35mm film, combined with digital images for the more immediate and flexible purposes with a splash of video thrown in for good measure.",
  inclusions: [
    {
      icon: "",
      label: "4 hours",
      description: "Plenty of time for an outdoor shoot",
    },
    {
      icon: "",
      label: "Digital Photography",
      description: "20 high resolution photos edits",
    },
    {
      icon: "",
      label: "Additional Images",
      description:
        "Your choice of either 20 digital edits or 20 35mm film scans",
    },
    {
      icon: "",
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

  preload("https://example.com", { as: "image" });

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

  useEffect(() => {
    preload(
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait1.webp",
      { as: "image" },
    );
    preload(
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait2.webp",
      { as: "image" },
    );
    preload(
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait3.webp",
      { as: "image" },
    );
  }, []);

  return (
    <PageLayout
      label={isNotFocused ? "Packages*" : "Packages"}
      image={highlightedPackage?.image || image}
    >
      <Stack h="calc(100vh - 8em)" justify="space-between">
        {packages.map((rate, index) => (
          <>
            {index !== 0 && isNotFocused && <Divider w="100%" />}

            <Package
              key={rate.title}
              {...rate}
              setHighlightedPackage={setHighlightedPackage}
            />
          </>
        ))}

        {isNotFocused && (
          <UnstyledButton onClick={() => navigate("/contact")} td="underline">
            * Custom packages also available. Inquire for more info.
          </UnstyledButton>
        )}
      </Stack>
    </PageLayout>
  );
}

export default Packages;
