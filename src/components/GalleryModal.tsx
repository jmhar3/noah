import { Image, Modal } from "@mantine/core";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

function GalleryModal(props: GalleryModalProps) {
  const { isOpen, onClose, image } = props;

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      fullScreen
      radius="0"
      styles={{
        header: { background: "black" },
        content: { background: "black" },
      }}
    >
      <Image src={image} mah="85vh" fit="contain" />
    </Modal>
  );
}

export default GalleryModal;
