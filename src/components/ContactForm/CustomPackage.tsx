import { Group, NumberInput, Select, Stack } from "@mantine/core";
import type { ContactFormType, Inclusion } from "../../helpers/contact";

interface CustomPackageProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

function CustomPackage(props: CustomPackageProps) {
  const { contactForm, setContactForm } = props;

  const duration: Inclusion[] = [
    { name: "2 Hours", rate: 200 },
    { name: "3 Hours", rate: 200 },
    { name: "4 Hours", rate: 200 },
  ];

  const edits: Inclusion[] = [
    { name: "10 EDITS", rate: 200 },
    { name: "20 EDITS", rate: 200 },
    { name: "30 EDITS", rate: 200 },
    { name: "40 EDITS", rate: 200 },
    { name: "50 EDITS", rate: 200 },
  ];

  // const inclusions: Inclusion[] = [
  //   ...duration,
  //   ...edits,
  //   { name: "RAWS", rate: 200 },
  //   { name: "20-30 SECOND VIDEO", rate: 200 },
  //   { name: "ROLL OF FILM", rate: 200 },
  // ];

  return (
    <Stack>
      <Select
        size="sm"
        radius="md"
        label="DURATION"
        variant="filled"
        withAsterisk
        value={contactForm.customPackage.duration}
        data={duration.map(({ name }) => name)}
      />
      <Select
        size="sm"
        radius="md"
        label="EDITS"
        variant="filled"
        withAsterisk
        value={contactForm.customPackage.edits}
        data={edits.map(({ name }) => name)}
        // onChange={(value) =>
        //   setContactForm((prevForm) => ({
        //     ...prevForm,
        //     customPackage: {
        //       ...prevForm.customPackage,
        //       rate: 300,
        //       edits: value
        //     },
        //   }))
        // }
      />
      <Group grow>
        <NumberInput
          size="sm"
          radius="md"
          variant="filled"
          label="20-30 SECOND VIDEO"
          value={contactForm.customPackage.video}
        />
        <NumberInput
          size="sm"
          radius="md"
          variant="filled"
          label="ROLLS OF FILM"
          value={contactForm.customPackage.film}
        />
      </Group>
    </Stack>
  );
}

export default CustomPackage;
