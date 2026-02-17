import { Stack, Text } from "@mantine/core";

import type { ContactFormType } from "../../helpers/contact";

interface SummaryProps {
  contactForm: ContactFormType;
}

function Summary(props: SummaryProps) {
  const { contactForm } = props;

  return (
    <Stack gap="sm" py="sm">
      <Text>
        Name: <Text fw="700">{contactForm.name}</Text>
      </Text>
    </Stack>
  );
}

export default Summary;
