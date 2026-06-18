import { useMemo, useState } from "react";
import { useLocation } from "react-router";

import {
  Text,
  Stack,
  Divider,
  Accordion,
  Button,
  Flex,
  ActionIcon,
} from "@mantine/core";

import PageLayout from "./PageLayout";
import StepButtons from "../components/ContactForm/StepButtons";
import AccordianItem from "../components/ContactForm/AccordionItem";
import ContactInfo from "../components/ContactForm/ContactInfo";
import InquiryDetails from "../components/ContactForm/InquiryDetails";
import Inspiration from "../components/ContactForm/Inspiration";
import Summary from "../components/ContactForm/Summary";

import contactImage from "../assets/images/contact.jpg";
import InfoCircleIcon from "../assets/icons/InfoCircleIcon";
import MailIcon from "../assets/icons/MailIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

import { PreferredContactMethod } from "../helpers/contact";
import { PreferredPackage } from "../helpers/contact";

import type { ContactFormType } from "../helpers/contact";

function Contact() {
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const preferredPackage = useMemo(() => {
    if (pathname.includes("man")) return "DIGITAL";
    if (pathname.includes("myth")) return "FILM";
    if (pathname.includes("legend")) return "COMPLETE";
    if (pathname.includes("custom")) return "CUSTOM";
  }, [pathname]);

  const [accordionState, setAccordionState] = useState<string | null>("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);

  const [contactForm, setContactForm] = useState<ContactFormType>({
    name: "",
    preferredContactMethod: PreferredContactMethod.email,
    message: "",
    preferredPackage:
      (preferredPackage as PreferredPackage) || PreferredPackage.unknown,
    customPackage: {
      duration: "2 Hours",
      edits: "10 Edits",
      video: 0,
      film: 0,
      raws: false,
      rate: 0,
    },
  });

  const handleContactFormSubmission = async () => {
    setIsSubmitting(true);

    const formData = new FormData();

    formData.append("access_key", "cd0c7928-bc7b-4c05-a40f-a0afa619602d");

    formData.append("name", contactForm.name);
    formData.append(
      "preferredContactMethod",
      contactForm.preferredContactMethod,
    );

    if (contactForm.email) formData.append("email", contactForm.email);
    if (contactForm.phone) formData.append("phone", contactForm.phone);
    if (contactForm.instagram)
      formData.append("instagram", contactForm.instagram);

    if (contactForm.addOns?.length && contactForm.addOns?.length > 0)
      formData.append("instagram", contactForm.addOns.join(", "));

    formData.append("preferredPackage", contactForm.preferredPackage);
    formData.append("message", contactForm.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSuccessfulSubmission(true);
    } else {
      setShowError(true);
    }

    setIsSubmitting(false);
  };

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

  const onSetAccordionState = (index: string | null) => {
    if (isSubmitting) return;
    setAccordionState(index);
  };

  return (
    <PageLayout label="Get in touch" image={contactImage}>
      <Flex gap="md">
        <Text size="xl">
          Choose your package, send through your inspiration (either visually or
          written) and then let’s discuss how to best bring your ideas to life
          either over the phone or in person.
        </Text>

        <Stack gap="5px">
          <ActionIcon
            component="a"
            color="steelblue"
            variant="transparent"
            href="mailto:melbourneartnude@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MailIcon />
          </ActionIcon>

          <ActionIcon
            component="a"
            color="steelblue"
            variant="transparent"
            href="https://www.instagram.com/melbourneartnatural"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </ActionIcon>

          <ActionIcon
            component="a"
            color="steelblue"
            variant="transparent"
            href="https://www.twitter.com/melbourneartnatural"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </ActionIcon>
        </Stack>
      </Flex>

      <Stack gap="0">
        <Divider color="#b44655" />

        {!successfulSubmission ? (
          <Accordion
            w="100%"
            value={accordionState}
            onChange={onSetAccordionState}
            styles={{ item: { borderColor: "#b44655" } }}
          >
            <AccordianItem
              panelNum="1"
              label="Contact Info"
              setAccordionState={onSetAccordionState}
            >
              <ContactInfo
                contactForm={contactForm}
                setContactForm={setContactForm}
              />
            </AccordianItem>

            <AccordianItem
              panelNum="2"
              label="Inquiry Details"
              setAccordionState={onSetAccordionState}
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
              setAccordionState={onSetAccordionState}
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
              setAccordionState={onSetAccordionState}
              isAccordionItemClickable={includesAllRequiredDetails}
            >
              <Summary
                contactForm={contactForm}
                setContactForm={setContactForm}
              />
            </AccordianItem>
          </Accordion>
        ) : (
          <>
            <Text py="sm" size="xl" ta="center">
              Your inquiry has been sent. I'll be in touch soon.
            </Text>

            <Divider color="#b44655" />
          </>
        )}
      </Stack>

      <Flex justify="space-between" align="center">
        <Button
          size="sm"
          variant="outline"
          component="a"
          leftSection={<InfoCircleIcon />}
          href={isSecret ? "/secret/faq" : "/faq"}
        >
          BOOKING POLICY
        </Button>

        {!successfulSubmission && (
          <StepButtons
            isSubmitting={isSubmitting}
            accordionState={accordionState}
            setAccordionState={onSetAccordionState}
            onSubmit={handleContactFormSubmission}
            isNextButtonDisabled={isNextButtonDisabled}
          />
        )}
      </Flex>

      {showError && (
        <Flex c="crimson">
          An error occured. Please get in touch at
          <Text
            pl="3px"
            c="crimson"
            td="underline"
            component="a"
            href={"mailto:melbourneartnude@gmail.com"}
          >
            melbourneartnude@gmail.com
          </Text>
          .
        </Flex>
      )}
    </PageLayout>
  );
}

export default Contact;
