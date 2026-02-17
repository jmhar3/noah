import { Group, SegmentedControl, Stack, Text, TextInput } from "@mantine/core";

import AtIcon from "../../assets/icons/AtIcon";
import type {
  ContactFormType,
  PreferredContactMethod,
} from "../../helpers/contact";

interface ContactInfoProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function ContactInfo(props: ContactInfoProps) {
  const { contactForm, setContactForm } = props;

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

        <TextInput
          radius="md"
          label="INSTAGRAM"
          leftSection={<AtIcon />}
          value={contactForm.instagram}
          withAsterisk={contactForm.preferredContactMethod === "INSTAGRAM"}
          onChange={(event) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              instagram: event.target.value,
            }))
          }
        />
      </Group>

      <TextInput
        radius="md"
        label="EMAIL"
        value={contactForm.email}
        withAsterisk={contactForm.preferredContactMethod === "EMAIL"}
        onChange={(event) =>
          setContactForm((prevForm) => ({
            ...prevForm,
            email: event.target.value,
          }))
        }
      />

      <TextInput
        radius="md"
        label="PHONE"
        value={contactForm.phone}
        withAsterisk={
          contactForm.preferredContactMethod === "TEXT" ||
          contactForm.preferredContactMethod === "CALL"
        }
        onChange={(event) =>
          setContactForm((prevForm) => ({
            ...prevForm,
            phone: event.target.value,
          }))
        }
      />

      <Stack gap="0">
        <Text>PREFERRED CONTACT METHOD</Text>
        <SegmentedControl
          fullWidth
          radius="md"
          value={contactForm.preferredContactMethod}
          data={["EMAIL", "TEXT", "CALL", "INSTAGRAM"]}
          onChange={(value) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              preferredContactMethod: value as PreferredContactMethod,
            }))
          }
        />
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
