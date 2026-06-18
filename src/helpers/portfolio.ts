import digitalImage1 from "../assets/images/faqs.jpg";
import digitalImage2 from "../assets/images/legend.jpg";
import digitalImage3 from "../assets/images/digital1.jpg";
import digitalImage4 from "../assets/images/digital2.jpg";
import digitalImage5 from "../assets/images/digital3.jpg";
import digitalImage6 from "../assets/images/digital4.jpg";
import digitalImage7 from "../assets/images/digital5.jpg";
import digitalImage8 from "../assets/images/digital6.jpg";
import digitalImage9 from "../assets/images/digital7.jpg";
import digitalImage10 from "../assets/images/digital8.jpg";

import filmImage1 from "../assets/images/myth.jpg";
import filmImage2 from "../assets/images/film1.jpg";
import filmImage3 from "../assets/images/film2.jpg";
import filmImage4 from "../assets/images/film3.jpg";
import filmImage5 from "../assets/images/film4.jpg";
import filmImage6 from "../assets/images/film5.jpg";
import filmImage7 from "../assets/images/film6.jpg";
import filmImage8 from "../assets/images/film7.jpg";
import filmImage9 from "../assets/images/film8.jpg";
import filmImage10 from "../assets/images/film9.jpg";

import kinkImage1 from "../assets/images/forest_landscape.webp";
import kinkImage2 from "../assets/images/kink1.jpg";
import kinkImage3 from "../assets/images/kink2.jpg";
import kinkImage4 from "../assets/images/kink3.jpg";
import kinkImage5 from "../assets/images/kink4.jpg";
import kinkImage6 from "../assets/images/kink5.jpg";
import kinkImage7 from "../assets/images/kink6.jpg";
import kinkImage8 from "../assets/images/kink7.jpg";
import kinkImage9 from "../assets/images/kink8.jpg";
import kinkImage10 from "../assets/images/kink9.jpg";

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
    images: [
      digitalImage4,
      digitalImage1,
      digitalImage2,
      digitalImage3,
      digitalImage5,
      digitalImage6,
      digitalImage7,
      digitalImage8,
      digitalImage9,
      digitalImage10,
    ],
  },
  {
    pathname: "/film",
    label: "Film",
    description:
      "A beautiful but not yet forgotten medium. This format taught me the foundational skills I needed to become the artist I am today.",
    images: [
      filmImage3,
      filmImage1,
      filmImage2,
      filmImage4,
      filmImage5,
      filmImage6,
      filmImage7,
      filmImage8,
      filmImage9,
      filmImage10,
    ],
  },
  {
    pathname: "/over18",
    label: "Shibari / Kink / 18+",
    description:
      "My drive to photograph and document real authentic human beings continues to fuel my eagerness to capture the people and lifestyle that surrounds BDSM, Kink and Shibari. These are just some of my favourites.",

    images: [
      kinkImage2,
      kinkImage1,
      kinkImage3,
      kinkImage4,
      kinkImage5,
      kinkImage6,
      kinkImage7,
      kinkImage8,
      kinkImage9,
      kinkImage10,
    ],
  },
];
