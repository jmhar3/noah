import {
  Text,
  Group,
  Image,
  Stack,
  Textarea,
  TextInput,
  MultiSelect,
  SegmentedControl,
} from "@mantine/core";

import CustomPackage from "./CustomPackage";
import { PreferredPackage } from "../../helpers/contact";

import AtIcon from "../../assets/icons/AtIcon";

import type { AddOn } from "../../helpers/contact";
import type { ContactFormType } from "../../helpers/contact";
import type { Dispatch, SetStateAction } from "react";

interface SummaryProps {
  contactForm: ContactFormType;
  setContactForm: Dispatch<SetStateAction<ContactFormType>>;
}

function Summary(props: SummaryProps) {
  const { contactForm, setContactForm } = props;

  const addOns = [
    "ALL RAWS",
    "ROLL OF FILM",
    "30 MINS EXTENSION",
    "ADDITIONAL EDITS",
    "20-30 SECOND VIDEO",
  ];

  const preferredPackages = ["DIGITAL", "FILM", "COMPLETE", "CUSTOM"];

  const previews = contactForm.moodboardImages?.map((file) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={file.path}
        mah="9em"
        maw="9em"
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Stack gap="sm" py="sm">
      <Group gap="sm" grow>
        <TextInput
          radius="md"
          withAsterisk
          label="PREFERRED NAME"
          value={contactForm.name}
          onChange={(event) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              name: event.target.value,
            }))
          }
        />

        {contactForm.preferredContactMethod === "EMAIL" && (
          <TextInput
            radius="md"
            withAsterisk
            label="EMAIL"
            value={contactForm.email}
            onChange={(event) =>
              setContactForm((prevForm) => ({
                ...prevForm,
                name: event.target.value,
              }))
            }
          />
        )}

        {(contactForm.preferredContactMethod === "TEXT" ||
          contactForm.preferredContactMethod === "CALL") && (
          <TextInput
            radius="md"
            label="PHONE"
            value={contactForm.phone}
            withAsterisk
            onChange={(event) =>
              setContactForm((prevForm) => ({
                ...prevForm,
                phone: event.target.value,
              }))
            }
          />
        )}

        {contactForm.preferredContactMethod === "INSTAGRAM" && (
          <TextInput
            radius="md"
            label="INSTAGRAM"
            leftSection={<AtIcon />}
            value={contactForm.instagram}
            withAsterisk
            onChange={(event) =>
              setContactForm((prevForm) => ({
                ...prevForm,
                instagram: event.target.value,
              }))
            }
          />
        )}
      </Group>

      <Stack gap="0">
        <Text>PREFERRED PACKAGES</Text>
        <SegmentedControl
          size="sm"
          fullWidth
          radius="md"
          color="steelblue"
          value={contactForm.preferredPackage}
          data={preferredPackages}
          onChange={(value) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              preferredPackage: value as PreferredPackage,
            }))
          }
          styles={{
            root: {
              background: "white",
              border: "solid 1px lightsteelblue",
            },
          }}
        />
      </Stack>

      {contactForm.preferredPackage === PreferredPackage.custom ? (
        <CustomPackage
          contactForm={contactForm}
          setContactForm={setContactForm}
        />
      ) : (
        contactForm.addOns && (
          <MultiSelect
            size="sm"
            radius="md"
            label="ADD-ONS"
            value={contactForm.addOns}
            data={addOns}
            onChange={(value) =>
              setContactForm((prevForm) => ({
                ...prevForm,
                addOns: value as AddOn[],
              }))
            }
          />
        )
      )}

      <Textarea
        size="sm"
        radius="md"
        withAsterisk
        label="MESSAGE"
        c="steelblue"
        value={contactForm.message}
        onChange={(event) =>
          setContactForm((prevForm) => ({
            ...prevForm,
            message: event.target.value,
          }))
        }
      />

      {contactForm.moodboardLink && (
        <TextInput
          size="md"
          radius="md"
          label="MOOD BOARD"
          value={contactForm.moodboardLink}
          placeholder="eg. www.pinterest.com/moodboard"
        />
      )}

      {previews}
    </Stack>
  );
}

export default Summary;
