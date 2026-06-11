import digitalImage1 from "../assets/images/beach_landscape.webp";
import digitalImage2 from "../assets/images/forest_portrait.webp";
import digitalImage3 from "../assets/images/lake_landscape.webp";

import filmImage1 from "../assets/images/beach_landscape.webp";
import filmImage2 from "../assets/images/forest_portrait.webp";
import filmImage3 from "../assets/images/lake_landscape.webp";

import groupImage1 from "../assets/images/beach_landscape.webp";
import groupImage2 from "../assets/images/forest_portrait.webp";
import groupImage3 from "../assets/images/lake_landscape.webp";

import insideImage1 from "../assets/images/beach_landscape.webp";
import insideImage2 from "../assets/images/forest_portrait.webp";
import insideImage3 from "../assets/images/lake_landscape.webp";

import outdoorsImage1 from "../assets/images/beach_landscape.webp";
import outdoorsImage2 from "../assets/images/forest_portrait.webp";
import outdoorsImage3 from "../assets/images/lake_landscape.webp";

import mascImage1 from "../assets/images/beach_landscape.webp";
import mascImage2 from "../assets/images/forest_portrait.webp";
import mascImage3 from "../assets/images/lake_landscape.webp";

import productImage1 from "../assets/images/beach_landscape.webp";
import productImage2 from "../assets/images/forest_portrait.webp";
import productImage3 from "../assets/images/lake_landscape.webp";

import eroticImage1 from "../assets/images/beach_landscape.webp";
import eroticImage2 from "../assets/images/forest_portrait.webp";
import eroticImage3 from "../assets/images/lake_landscape.webp";

import kinkImage1 from "../assets/images/beach_landscape.webp";
import kinkImage2 from "../assets/images/forest_portrait.webp";
import kinkImage3 from "../assets/images/lake_landscape.webp";

import themedImage1 from "../assets/images/beach_landscape.webp";
import themedImage2 from "../assets/images/forest_portrait.webp";
import themedImage3 from "../assets/images/lake_landscape.webp";

import travelImage1 from "../assets/images/beach_landscape.webp";
import travelImage2 from "../assets/images/forest_portrait.webp";
import travelImage3 from "../assets/images/lake_landscape.webp";

import video1 from "../assets/images/beach_landscape.webp";
import video2 from "../assets/images/forest_portrait.webp";
import video3 from "../assets/images/lake_landscape.webp";

export interface GalleryType {
  pathname: string;
  label: string;
  description?: string;
  images: string[];
  isSecret?: boolean;
}

export const portfolio: GalleryType[] = [
  {
    pathname: "/digital",
    label: "Digital",
    description:
      "A showcase of some of my favourite images shot on digital medium across a range of Nikon camera bodies dating back to circa 2019.",
    images: [digitalImage1, digitalImage2, digitalImage3],
  },
  {
    pathname: "/film",
    label: "Film",
    description:
      "A beautiful but not yet forgotten medium. This format taught me the foundational skills I needed to become the artist I am today, and these images date back as far as 2017.",
    images: [filmImage1, filmImage2, filmImage3],
  },
  {
    pathname: "/group",
    label: "Group / Couples",
    description: "",
    images: [groupImage1, groupImage2, groupImage3],
  },
  {
    pathname: "/inside",
    label: "Inside",
    description:
      "A collection of images from studios, subjects homes, my own home studios and other miscellaneous indoor locations.",
    images: [insideImage1, insideImage2, insideImage3],
  },
  {
    pathname: "/outdoors",
    label: "Outdoors",
    description:
      "Where I really found my vision and refined my skills and my aesthetic as Melbourne Art Natural. I began this journey as Melbourne Art Nude because I wanted to take mostly Fine Art and Art Nude images in nature. My repertoire has expanded since its conception, but this is still a fine collection of images taken in the wider world.",
    images: [outdoorsImage1, outdoorsImage2, outdoorsImage3],
  },
  {
    pathname: "/masc",
    label: "Masc",
    images: [mascImage1, mascImage2, mascImage3],
  },
  {
    pathname: "/product",
    label: "Product / Brand",
    images: [productImage1, productImage2, productImage3],
  },
  {
    pathname: "/erotic",
    label: "Erotic",
    images: [eroticImage1, eroticImage2, eroticImage3],
    isSecret: true,
  },
  {
    pathname: "/over18",
    label: "Shibari / Kink / 18+",
    description:
      "My drive to photograph and document real authentic human beings continues to fuel my eagerness to capture the people and lifestyle that surrounds BDSM, Kink and Shibari. These are just some of my favourites.",

    images: [kinkImage1, kinkImage2, kinkImage3],
  },
  {
    pathname: "/themed",
    label: "Themed / Holiday",
    images: [themedImage1, themedImage2, themedImage3],
  },
  {
    pathname: "/travel",
    label: "Travel / Street",
    images: [travelImage1, travelImage2, travelImage3],
  },
  {
    pathname: "/video",
    label: "Video",
    images: [video1, video2, video3],
  },
];
