import { useState } from "react";

import {
  Text,
  Flex,
  Button,
  Accordion,
  TextInput,
  Stack,
  Textarea,
  Group,
  Title,
  SegmentedControl,
  MultiSelect,
  Divider,
} from "@mantine/core";

import PageLayout from "./PageLayout";

import contactImage from "../assets/images/m.a.n.png";
import AtIcon from "../assets/icons/AtIcon";
import { ImageDropzone } from "../components/ImageDropzone";
import type { FileWithPath } from "@mantine/dropzone";
import { useLocation } from "react-router";
import InfoCircleIcon from "../assets/icons/InfoCircleIcon";
import MailFastIcon from "../assets/icons/MailFastIcon";

function Contact() {
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const [accordiantState, setAccordiantState] = useState<string | null>("1");

  const [files, setFiles] = useState<FileWithPath[]>([]);

  const handleContactFormSubmission = () => {};

  return (
    <PageLayout label="Get in touch" image={contactImage}>
      <Text size="lg">
        Choose your package, send through your inspiration (either visually or
        written) and then let’s discuss how to best bring your ideas to life
        either over the phone or in person.
      </Text>

      <Stack gap="0">
        <Divider />
        <Accordion
          w="100%"
          value={accordiantState}
          onChange={setAccordiantState}
        >
          <Accordion.Item value="1" w="100%">
            <Title>Contact Info</Title>

            <Accordion.Panel>
              <Stack gap="sm" py="sm">
                <Group gap="sm" grow>
                  <TextInput
                    size="md"
                    radius="md"
                    label="PREFERRED NAME"
                    withAsterisk
                  />
                  <TextInput
                    size="md"
                    radius="md"
                    label="INSTAGRAM"
                    leftSection={<AtIcon />}
                  />
                </Group>

                <TextInput size="md" radius="md" label="EMAIL" withAsterisk />
                <TextInput size="md" radius="md" label="PHONE" />

                <Stack gap="0">
                  <Text>PREFERRED CONTACT METHOD</Text>
                  <SegmentedControl
                    size="md"
                    fullWidth
                    radius="md"
                    data={["EMAIL", "TEXT", "CALL", "INSTAGRAM"]}
                  />
                </Stack>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="2">
            <Title>Inquiry Details</Title>

            <Accordion.Panel>
              <Stack gap="sm" py="sm">
                <Stack gap="0">
                  <Text>PREFERRED PACKAGES</Text>
                  <SegmentedControl
                    size="md"
                    fullWidth
                    radius="md"
                    data={["DIGITAL", "FILM", "COMPLETE"]}
                  />
                </Stack>

                <MultiSelect
                  size="md"
                  radius="md"
                  label="ADD-ONS"
                  variant="filled"
                  data={[
                    "ALL RAWS",
                    "ROLL OF FILM",
                    "30 MINS EXTENSION",
                    "ADDITIONAL EDITS",
                    "SOCIAL MEDIA VIDEO",
                  ]}
                />

                <Textarea size="md" radius="md" label="MESSAGE" withAsterisk />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="3">
            <Title>Inspiration</Title>

            <Accordion.Panel>
              <Stack gap="sm" py="sm">
                <TextInput
                  size="md"
                  radius="md"
                  label="MOOD BOARD"
                  placeholder="eg. www.pinterest.com/moodboard"
                />

                <ImageDropzone files={files} onDrop={setFiles} />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
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

        <Flex gap="sm">
          {accordiantState !== "1" && (
            <Button
              size="sm"
              onClick={() =>
                setAccordiantState(accordiantState === "2" ? "1" : "2")
              }
            >
              PREV
            </Button>
          )}
          {accordiantState !== "3" && (
            <Button
              size="sm"
              onClick={() =>
                setAccordiantState(accordiantState === "2" ? "3" : "2")
              }
            >
              NEXT
            </Button>
          )}
          {accordiantState === "3" && (
            <Button
              size="sm"
              leftSection={<MailFastIcon />}
              onClick={handleContactFormSubmission}
            >
              SEND INQUIRY
            </Button>
          )}
        </Flex>
      </Flex>
    </PageLayout>
  );
}

export default Contact;
