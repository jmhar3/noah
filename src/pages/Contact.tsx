import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import { Text, Stack, Divider, Accordion, Button, Flex } from "@mantine/core";

import PageLayout from "./PageLayout";
import StepButtons from "../components/ContactForm/StepButtons";
import AccordianItem from "../components/ContactForm/AccordionItem";
import ContactInfo from "../components/ContactForm/ContactInfo";
import InquiryDetails from "../components/ContactForm/InquiryDetails";
import Inspiration from "../components/ContactForm/Inspiration";
import Summary from "../components/ContactForm/Summary";

import contactImage from "../assets/images/m.a.n.png";
import InfoCircleIcon from "../assets/icons/InfoCircleIcon";

import { PreferredContactMethod } from "../helpers/contact";

import type { ContactFormType } from "../helpers/contact";

function Contact() {
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const [accordionState, setAccordionState] = useState<string | null>("1");

  const [contactForm, setContactForm] = useState<ContactFormType>({
    name: "",
    preferredContactMethod: PreferredContactMethod.email,
    message: "",
    customPackage: {
      duration: "2 Hours",
      edits: "10 Edits",
      video: 0,
      film: 0,
      raws: false,
      rate: 0,
    },
  });

  const handleContactFormSubmission = () => {};

  const includesPreferredContactMethod = () => {
    switch (contactForm.preferredContactMethod) {
      case "EMAIL":
        return !!contactForm.email && contactForm.email.length > 0;
      case "TEXT":
        return !!contactForm.phone && contactForm.phone.length > 0;
      case "CALL":
        return !!contactForm.phone && contactForm.phone.length > 0;
      case "INSTAGRAM":
        return !!contactForm.instagram && contactForm.instagram.length > 0;
      default:
        return false;
    }
  };

  const includesContactDetails =
    contactForm.name.length > 0 && includesPreferredContactMethod();

  const includesAllRequiredDetails =
    includesContactDetails && contactForm.message.length > 0;

  const isNextButtonDisabled = useMemo(() => {
    if (accordionState === "1" && !includesContactDetails) return true;
    if (accordionState !== "1" && !includesAllRequiredDetails) return true;
  }, [accordionState, includesContactDetails, includesAllRequiredDetails]);

  return (
    <PageLayout label="Get in touch" image={contactImage}>
      <Text size="lg">
        Choose your package, send through your inspiration (either visually or
        written) and then let’s discuss how to best bring your ideas to life
        either over the phone or in person.
      </Text>

      <Stack gap="0">
        <Divider />

        <Accordion w="100%" value={accordionState} onChange={setAccordionState}>
          <AccordianItem
            panelNum="1"
            label="Contact Info"
            setAccordionState={setAccordionState}
          >
            <ContactInfo
              contactForm={contactForm}
              setContactForm={setContactForm}
            />
          </AccordianItem>

          <AccordianItem
            panelNum="2"
            label="Inquiry Details"
            setAccordionState={setAccordionState}
            isAccordionItemClickable={includesContactDetails}
          >
            <InquiryDetails
              contactForm={contactForm}
              setContactForm={setContactForm}
            />
          </AccordianItem>

          <AccordianItem
            panelNum="3"
            label="Inspiration"
            setAccordionState={setAccordionState}
            isAccordionItemClickable={includesAllRequiredDetails}
          >
            <Inspiration
              contactForm={contactForm}
              setContactForm={setContactForm}
            />
          </AccordianItem>

          <AccordianItem
            panelNum="4"
            label="Summary"
            setAccordionState={setAccordionState}
            isAccordionItemClickable={includesAllRequiredDetails}
          >
            <Summary contactForm={contactForm} />
          </AccordianItem>
        </Accordion>
      </Stack>

      <Flex justify="space-between">
        <Button
          size="sm"
          variant="outline"
          component="a"
          leftSection={<InfoCircleIcon />}
          href={isSecret ? "/secret/faq" : "/faq"}
        >
          BOOKING POLICY
        </Button>

        <StepButtons
          accordionState={accordionState}
          setAccordionState={setAccordionState}
          onSubmit={handleContactFormSubmission}
          isNextButtonDisabled={isNextButtonDisabled}
        />
      </Flex>
    </PageLayout>
  );
}

export default Contact;
