import { Image, Modal, Stack, Title } from "@mantine/core";

import type { GalleryType } from "../helpers/portfolio";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  gallery: GalleryType;
}

function GalleryModal(props: GalleryModalProps) {
  const { isOpen, onClose, gallery } = props;

  return (
    <Modal opened={isOpen} onClose={onClose} size="100%">
      <Stack>
        <Title>{gallery.label}</Title>
        <Image src={gallery.images[0]} />
      </Stack>
    </Modal>
  );
}

export default GalleryModal;
