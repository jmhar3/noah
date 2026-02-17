import { Stack, TextInput } from "@mantine/core";

import ImageDropzone from "../ImageDropzone";

import type { FileWithPath } from "@mantine/dropzone";
import type { ContactFormType } from "../../helpers/contact";

interface InspirationProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function Inspiration(props: InspirationProps) {
  const { contactForm, setContactForm } = props;

  const setFiles = (files: FileWithPath[]) => {
    setContactForm((prevForm: ContactFormType) => ({
      ...prevForm,
      moodboardImages: files,
    }));
  };

  return (
    <Stack gap="sm" py="sm">
      <TextInput
        size="md"
        radius="md"
        label="MOOD BOARD"
        value={contactForm.moodboardLink}
        placeholder="eg. www.pinterest.com/moodboard"
      />

      <ImageDropzone
        files={contactForm.moodboardImages || []}
        onDrop={setFiles}
      />
    </Stack>
  );
}

export default Inspiration;
