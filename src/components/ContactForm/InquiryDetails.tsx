import {
  Text,
  Stack,
  Textarea,
  MultiSelect,
  SegmentedControl,
} from "@mantine/core";

import CustomPackage from "./CustomPackage";

import { PreferredPackage } from "../../helpers/contact";

import type { AddOn, ContactFormType } from "../../helpers/contact";

interface InquiryDetailsProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function InquiryDetails(props: InquiryDetailsProps) {
  const { contactForm, setContactForm } = props;

  const preferredPackages: PreferredPackage[] = [
    PreferredPackage.unknown,
    PreferredPackage.digital,
    PreferredPackage.film,
    PreferredPackage.complete,
    // PreferredPackage.custom,
  ];

  const addOns = [
    "ALL RAWS",
    "ROLL OF FILM",
    "30 MINS EXTENSION",
    "ADDITIONAL EDITS",
    "SOCIALS VIDEO",
  ];

  return (
    <Stack gap="sm" py="sm">
      <Stack gap="0">
        <Text>PREFERRED PACKAGES</Text>

        <SegmentedControl
          size="sm"
          fullWidth
          radius="md"
          color="steelblue"
          data={preferredPackages}
          value={contactForm.preferredPackage}
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

        {contactForm.preferredPackage !== PreferredPackage.unknown &&
          contactForm.preferredPackage !== PreferredPackage.custom && (
            <Text fs="italic">
              Includes:{" "}
              {contactForm.preferredPackage === PreferredPackage.digital &&
                "1.5 hours, digital photography & 20 edits"}
              {contactForm.preferredPackage === PreferredPackage.film &&
                "2 hours, 35mm film photography & socials reel"}
              {contactForm.preferredPackage === PreferredPackage.complete &&
                "4 hours, digital photography, 20 edits, 2 socials reels & additional 20 edits OR 35mm film"}
            </Text>
          )}
      </Stack>

      {contactForm.preferredPackage === PreferredPackage.custom ? (
        <CustomPackage
          contactForm={contactForm}
          setContactForm={setContactForm}
        />
      ) : (
        contactForm.preferredPackage !== PreferredPackage.unknown && (
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
        placeholder="eg. inspiration, vibe, add-ons, etc."
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
