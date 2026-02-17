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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/film",
    label: "Film",
    description:
      "A beautiful but not yet forgotten medium. This format taught me the foundational skills I needed to become the artist I am today, and these images date back as far as 2017.",
    images: [
      "https://i.sstatic.net/3xDTD.jpg",
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/group",
    label: "Group / Couples",
    description: "",
    images: [
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/inside",
    label: "Inside",
    description:
      "A collection of images from studios, subjects homes, my own home studios and other miscellaneous indoor locations.",
    images: [
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/outdoors",
    label: "Outdoors",
    description:
      "Where I really found my vision and refined my skills and my aesthetic as Melbourne Art Natural. I began this journey as Melbourne Art Nude because I wanted to take mostly Fine Art and Art Nude images in nature. My repertoire has expanded since its conception, but this is still a fine collection of images taken in the wider world.",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/masc",
    label: "Masc",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/product",
    label: "Product / Brand",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/erotic",
    label: "Erotic",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
    isSecret: true,
  },
  {
    pathname: "/over18",
    label: "Shibari / Kink / 18+",
    description:
      "My drive to photograph and document real authentic human beings continues to fuel my eagerness to capture the people and lifestyle that surrounds BDSM, Kink and Shibari. These are just some of my favourites.",

    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/themed",
    label: "Themed / Holiday",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/travel",
    label: "Travel / Street",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
  {
    pathname: "/video",
    label: "Video",
    images: [
      "https://www.adobe.com/la/creativecloud/file-types/image/raster/media_13f659e708c031c519b546ba716f2cdc0d34c90ec.jpeg?width=1200&format=pjpg&optimize=medium",
      "https://kenchris.github.io/wasm-webp/test3.webp",
      "https://www.widerangegalleries.com/images/xl/20191028-Giau-Glow.jpg",
      "https://i.sstatic.net/3xDTD.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0gIztuV_7sysh9m6dHnt5gmbyTwBPqxJQ&s",
    ],
  },
];
