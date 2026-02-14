import { useLocation, Navigate } from "react-router";
import { Image, Text } from "@mantine/core";

import PageLayout from "./PageLayout";

import { portfolio, type GalleryType } from "../helpers/portfolio";
import { useState } from "react";

function Gallery() {
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const gallery = portfolio.find((galleryItem) => {
    return pathname.includes(galleryItem.pathname);
  });

  return gallery ? (
    <View gallery={gallery} />
  ) : (
    <Navigate to={isSecret ? "/secret/portfolio" : "/portfolio"} />
  );
}

export default Gallery;

function View({ gallery }: { gallery: GalleryType }) {
  const { label, description, images } = gallery;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [displayedImages, setDisplayedImages] = useState(
    gallery.images.slice(1),
  );

  const onSelectImage = (selectedImage: string) => {
    setSelectedImage(selectedImage);
    setDisplayedImages(images.filter((image) => image !== selectedImage));
  };

  return (
    <PageLayout label={label} image={selectedImage}>
      <Text size="lg">{description}</Text>
      {displayedImages.map((image) => (
        <Image
          key={image}
          src={image}
          loading="lazy"
          decoding="async"
          onClick={() => onSelectImage(image)}
        />
      ))}
    </PageLayout>
  );
}
