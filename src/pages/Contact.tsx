import { Accordion, Button, Stack, Text, TextInput } from "@mantine/core";

import PageLayout from "./PageLayout";

import contactImage from "../assets/images/m.a.n.png";
import { useState } from "react";

function Contact() {
  const [value, setValue] = useState<string | null>("panel-1");

  return (
    <PageLayout label="Get in touch" image={contactImage}>
      <Stack w="100%">
        <Accordion w="100%" value={value} onChange={setValue}>
          <Accordion.Item value="panel-1">
            <Text>Contact Info</Text>

            <Accordion.Panel>
              <TextInput />
              <Button onClick={() => setValue("panel-2")}>Next</Button>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="panel-2">
            <Text>Inquiry Details</Text>

            <Accordion.Panel>
              <TextInput />
              <Button onClick={() => setValue("panel-1")}>Prev</Button>
              <Button onClick={() => setValue("panel-3")}>Next</Button>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="panel-3">
            <Text>Inspiration</Text>

            <Accordion.Panel>
              <TextInput />
              <Button onClick={() => setValue("panel-2")}>Prev</Button>
              <Button onClick={() => setValue("panel-3")}>Next</Button>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </PageLayout>
  );
}

export default Contact;
