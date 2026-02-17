import {
  Text,
  Stack,
  Textarea,
  MultiSelect,
  SegmentedControl,
} from "@mantine/core";

import {
  PreferredPackage,
  type AddOn,
  type ContactFormType,
} from "../../helpers/contact";
import CustomPackage from "./CustomPackage";

interface InquiryDetailsProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function InquiryDetails(props: InquiryDetailsProps) {
  const { contactForm, setContactForm } = props;

  const preferredPackages = ["DIGITAL", "FILM", "COMPLETE", "CUSTOM"];

  const addOns = [
    "ALL RAWS",
    "ROLL OF FILM",
    "30 MINS EXTENSION",
    "ADDITIONAL EDITS",
    "SOCIAL MEDIA VIDEO",
  ];

  return (
    <Stack gap="sm" py="sm">
      <Stack gap="0">
        <Text>PREFERRED PACKAGES</Text>
        <SegmentedControl
          size="sm"
          fullWidth
          radius="md"
          value={contactForm.preferredPackage}
          data={preferredPackages}
          onChange={(value) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              preferredPackage: value as PreferredPackage,
            }))
          }
        />
      </Stack>

      {contactForm.preferredPackage === PreferredPackage.custom ? (
        <CustomPackage
          contactForm={contactForm}
          setContactForm={setContactForm}
        />
      ) : (
        <MultiSelect
          size="sm"
          radius="md"
          label="ADD-ONS"
          variant="filled"
          value={contactForm.addOns}
          data={addOns}
          onChange={(value) =>
            setContactForm((prevForm) => ({
              ...prevForm,
              addOns: value as AddOn[],
            }))
          }
        />
      )}

      <Textarea
        size="sm"
        radius="md"
        withAsterisk
        label="MESSAGE"
        value={contactForm.message}
        onChange={(event) =>
          setContactForm((prevForm) => ({
            ...prevForm,
            message: event.target.value,
          }))
        }
      />
    </Stack>
  );
}

export default InquiryDetails;
