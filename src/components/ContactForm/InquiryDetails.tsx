import { useLocation } from "react-router";

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
import { useMemo } from "react";

interface InquiryDetailsProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function InquiryDetails(props: InquiryDetailsProps) {
  const { contactForm, setContactForm } = props;
  const { pathname } = useLocation();

  const preferredPackage = useMemo(() => {
    if (pathname.includes("man")) return "DIGITAL";
    if (pathname.includes("myth")) return "FILM";
    if (pathname.includes("legend")) return "COMPLETE";
    if (pathname.includes("custom")) return "CUSTOM";
  }, [pathname]);

  const preferredPackages = ["DIGITAL", "FILM", "COMPLETE", "CUSTOM"];

  const addOns = [
    "ALL RAWS",
    "ROLL OF FILM",
    "30 MINS EXTENSION",
    "ADDITIONAL EDITS",
    "20-30 SECOND VIDEO",
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
          value={preferredPackage || contactForm.preferredPackage}
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
    </Stack>
  );
}

export default InquiryDetails;
