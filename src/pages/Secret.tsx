import { useNavigate } from "react-router";
import { Button, Divider, Flex, Stack, Text } from "@mantine/core";

import PageLayout from "./PageLayout";

import image from "../assets/images/contact.jpg";

function Secret() {
  const navigate = useNavigate();

  const inclusions = [
    {
      label: "Camera Man",
      icon: "",
      description: "Filming, editing, production, etc.",
    },
    {
      label: "Stunt-cock",
      icon: "",
      description: "Optional appendages available for hire",
    },
  ];

  return (
    <PageLayout label="Secret" image={image}>
      <Stack>
        <Text>This is some text about my secret stunt cock work.</Text>

        <Divider w="100%" color="#b44655" />

        <Stack justify="space-between" h="100%" w="100%" align="center">
          <Stack gap="xs" justify="flex-start">
            {inclusions.map((inclusion) => (
              <Flex key={inclusion.label} align="center" gap="md">
                {inclusion.icon}

                <Stack gap="0">
                  <Text size="1.2em" fs="italic" c="#386890">
                    {inclusion.label}
                  </Text>

                  <Text size=".8em">{inclusion.description}</Text>
                </Stack>
              </Flex>
            ))}
          </Stack>

          <Button
            w="11em"
            fw="bold"
            onClick={() => navigate("/contact/secret")}
          >
            BOOK PACKAGE
          </Button>
        </Stack>

        <Text>Here are some examples of my filmography work</Text>
        <Text>
          Get in touch if you'd like a free trial to my OF to see more of what I
          can offer.
        </Text>

        <Text>Testimonials</Text>
        <Text>
          Please feel free to get in touch with some of the people I've worked
          with previously. These people have volunteered to vouch for me but I
          fully support you doing your own research.
        </Text>
      </Stack>
    </PageLayout>
  );
}

export default Secret;
