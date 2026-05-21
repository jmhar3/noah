import { useDisclosure, useMediaQuery, useTimeout } from "@mantine/hooks";

import {
  em,
  List,
  Text,
  Flex,
  Stack,
  Button,
  Center,
  TextInput,
  BackgroundImage,
} from "@mantine/core";

import { useState } from "react";
import { supabase } from "../supabase";

const images = [
  {
    landscape:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/landscape1.webp",
    portrait:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait1.webp",
  },
  {
    landscape:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/landscape2.webp",
    portrait:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait2.webp",
  },
  {
    landscape:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/landscape3.webp",
    portrait:
      "https://fmntylmftjjngcjtjbfa.supabase.co/storage/v1/object/public/images/portrait3.webp",
  },
];

const randomImageNumber = Math.floor(Math.random() * images.length);

function ManKind() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const { portrait: portraitImage, landscape: landscapeImage } =
    images[randomImageNumber];

  const [
    showMailingListModal,
    { open: openMailingListModal, close: closeMailingListModal },
  ] = useDisclosure(false);

  const [email, setEmail] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    "Successfully signed up to mailing list.",
  );
  const { start: showSuccessMessage } = useTimeout(
    () => setSuccessMessage(undefined),
    6000,
  );

  const onCloseJoinMailingList = () => {
    setEmail(undefined);
    closeMailingListModal();
  };

  const onJoinMailingList = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && emailRegex.test(email)) {
      try {
        const { status, error } = await supabase
          .from("mailing_list")
          .insert({ email: email });

        if (status === 201 || status === 409) {
          showSuccessMessage();
          setSubmissionSuccess(true);
          onCloseJoinMailingList();
        }

        if (status === 400) {
          console.error(error);
          setSubmissionSuccess(false);
          setErrorMessage(error?.message || "An error occured");
        }
      } catch (error) {
        console.error(error);
        setSubmissionSuccess(false);
        setErrorMessage("An error occured");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrorMessage("Invalid Email");
    }
  };

  return isMobile ? (
    <Center
      c="floralwhite"
      h={window.innerHeight}
      style={{ overflow: "scroll" }}
    >
      <BackgroundImage
        h={window.innerHeight}
        src={portraitImage}
        style={{ overflow: "scroll" }}
      >
        <Stack w="100%" gap="3em" pt="3.3em" align="center" justify="center">
          <Text lh="0" size="1.8em" fs="italic">
            Melbourne Art Natural presents:
          </Text>

          <Flex align="center">
            <Text lh="0" size="4em" ff="Cormorant Infant">
              M.A.N-
            </Text>
            <Text lh="0" pt=".2em" size="4.8em" ff="Kapakana">
              Kind
            </Text>
          </Flex>

          <Stack>
            <Text ta="center" lh="1.1" size="1.8em" fs="italic">
              Friday June 20th
              <br />
              7pm onwards
            </Text>

            {submissionSuccess ? (
              successMessage && <Text pl="13px">{successMessage}</Text>
            ) : showMailingListModal ? (
              <Stack gap="3" align="center">
                <Flex gap="sm" direction="column">
                  <TextInput
                    bdrs="md"
                    size="md"
                    type="email"
                    value={email}
                    variant="unstyled"
                    placeholder="YOUR EMAIL"
                    bd="1px solid floralwhite"
                    onChange={(event) => setEmail(event.target.value)}
                    styles={{
                      input: {
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        color: "floralwhite",
                        backgroundColor: "none",
                      },
                    }}
                  />

                  <Button
                    size="md"
                    radius="md"
                    variant="outline"
                    color="floralwhite"
                    onClick={onJoinMailingList}
                    loading={isSubmitting}
                  >
                    SIGN UP
                  </Button>
                </Flex>

                <Text pl="13px" c="red">
                  {errorMessage}
                </Text>
              </Stack>
            ) : (
              <Button
                size="md"
                radius="md"
                variant="outline"
                color="floralwhite"
                onClick={openMailingListModal}
              >
                JOIN MAILING LIST
              </Button>
            )}
          </Stack>
        </Stack>

        <Stack w="100%" gap="1.8em" py="2.7em" align="center" justify="center">
          <Stack px="md">
            <Text lh="1" size="1.8em">
              What is M.A.N-Kind?
            </Text>

            <Text size="xl" lh="xs">
              Other than a question that has intrigued and haunted us all across
              the eras since man was first conceived, M.AN.-Kind is Noah Snell
              (Melbourne Art Natural)’s debut solo photography exhibition.
            </Text>

            <Text size="xl" lh="xs">
              With an interrogative lense, Noah holds space for looming,
              esoteric questions whilst gently freezing time in a devout-like
              admiration of authentic people in their true element. These
              moments are captured and printed in beautiful realism, which in a
              digital age serves as a poignant reminder: It’s Better Printed.
            </Text>

            <Text size="xl" lh="xs">
              Notably, every image displayed at this exhibition has at some
              point been forcibly removed from online platforms for “breaching
              terms of service”.
            </Text>

            <Text size="xl" lh="xs">
              As a result this exhibition stands as an essay of and statement to
              the developing moral and value systems behind Noah and
              M.A.N.-Kind’s social movement, focusing in particular on two of
              society’s developing core issues rapidly stemming as result of
              severe digital integration:
            </Text>

            <List type="ordered" withPadding size="xl">
              <List.Item>
                Excessive censorship of online spaces, namely social media
                empires such as Meta, and how they dictate what is shown or who
                can be successful in today’s economic climate
              </List.Item>
              <List.Item>
                Ethicality surrounding the use of AI and body-altering software
                in art depicting real people
              </List.Item>
            </List>

            <Text size="xl" lh="xs">
              As a true representation of the AI- rebellion, no images in this
              exhibition have used software such as AI editing tools, Facetune
              or the like to alter someone's skin texture, body shape or size.
              Every image shown is a real depiction of who the subjects are,
              ultimately serving as an honoured reverence of real people in real
              identities.
            </Text>

            <Text size="xl" lh="xs">
              This Winter Solstice, where ritual often lies and reflection is
              encouraged, we invite you to join us at XI XI Studio (Fitzroy) in
              a celebration of human nature and the intricacies of the modern
              art revolution.
            </Text>

            <Text size="xl" lh="xs">
              Ticket includes entry, a raffle ticket and drink on arrival. All
              additional proceeds from ticket, raffle & bar sales on the night
              go to furthering the M.A.N.Kind social movement where everyone is
              invited to participate in connection through tangible art via
              community-building workshops and events.
            </Text>

            <Text size="xl" lh="xs">
              In essence, “M.A.N Kind” is an ongoing Anti AI campaign designed
              to get us off our couches, out of digital-only third spaces and
              into our communities to create tangible art we can touch, feel and
              share with our loved ones.
            </Text>
          </Stack>
        </Stack>
      </BackgroundImage>
    </Center>
  ) : (
    <Center
      c="floralwhite"
      h={window.innerHeight}
      style={{ overflow: "scroll" }}
    >
      <BackgroundImage
        h={window.innerHeight}
        src={landscapeImage}
        style={{ overflow: "scroll" }}
      >
        <Stack align="center">
          <Stack align="center" py="9em" gap="4em">
            <Text lh="1" size="2.1em" fs="italic">
              Melbourne Art Natural presents:
            </Text>

            <Flex align="center">
              <Text lh="0" size="8em" ff="Cormorant Infant">
                M.A.N-
              </Text>
              <Text lh="0" pt=".2em" size="9em" ff="Kapakana">
                Kind
              </Text>
            </Flex>
          </Stack>

          <Stack align="center" p="6em" gap="xl" maw="1240px">
            <Text ta="center" lh="1" size="2.1em" fs="italic">
              Friday June 20th
              <br />
              7pm onwards
            </Text>

            {submissionSuccess ? (
              successMessage && <Text pl="13px">{successMessage}</Text>
            ) : showMailingListModal ? (
              <Stack gap="3" align="center">
                <Flex gap="sm" direction="row">
                  <TextInput
                    bdrs="md"
                    size="md"
                    type="email"
                    value={email}
                    variant="unstyled"
                    placeholder="YOUR EMAIL"
                    bd="1px solid floralwhite"
                    onChange={(event) => setEmail(event.target.value)}
                    styles={{
                      input: {
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        color: "floralwhite",
                        backgroundColor: "none",
                      },
                    }}
                  />

                  <Button
                    size="md"
                    radius="md"
                    variant="outline"
                    color="floralwhite"
                    onClick={onJoinMailingList}
                    loading={isSubmitting}
                  >
                    SIGN UP
                  </Button>
                </Flex>

                <Text pl="13px" c="red">
                  {errorMessage}
                </Text>
              </Stack>
            ) : (
              <Button
                size="md"
                radius="md"
                w="fit-content"
                variant="outline"
                color="floralwhite"
                onClick={openMailingListModal}
              >
                JOIN MAILING LIST
              </Button>
            )}

            <Stack>
              <Text lh="1" size="1.8em">
                What is M.A.N-Kind?
              </Text>

              <Text size="xl">
                Other than a question that has intrigued and haunted us all
                across the eras since man was first conceived, M.AN.-Kind is
                Noah Snell (Melbourne Art Natural)’s debut solo photography
                exhibition.
              </Text>

              <Text size="xl">
                With an interrogative lense, Noah holds space for looming,
                esoteric questions whilst gently freezing time in a devout-like
                admiration of authentic people in their true element. These
                moments are captured and printed in beautiful realism, which in
                a digital age serves as a poignant reminder: It’s Better
                Printed.
              </Text>

              <Text size="xl">
                Notably, every image displayed at this exhibition has at some
                point been forcibly removed from online platforms for “breaching
                terms of service”.
              </Text>

              <Text size="xl">
                As a result this exhibition stands as an essay of and statement
                to the developing moral and value systems behind Noah and
                M.A.N.-Kind’s social movement, focusing in particular on two of
                society’s developing core issues rapidly stemming as result of
                severe digital integration:
              </Text>

              <List type="ordered" withPadding size="xl">
                <List.Item>
                  Excessive censorship of online spaces, namely social media
                  empires such as Meta, and how they dictate what is shown or
                  who can be successful in today’s economic climate
                </List.Item>
                <List.Item>
                  Ethicality surrounding the use of AI and body-altering
                  software in art depicting real people
                </List.Item>
              </List>

              <Text size="xl">
                As a true representation of the AI- rebellion, no images in this
                exhibition have used software such as AI editing tools, Facetune
                or the like to alter someone's skin texture, body shape or size.
                Every image shown is a real depiction of who the subjects are,
                ultimately serving as an honoured reverence of real people in
                real identities.
              </Text>

              <Text size="xl">
                This Winter Solstice, where ritual often lies and reflection is
                encouraged, we invite you to join us at XI XI Studio (Fitzroy)
                in a celebration of human nature and the intricacies of the
                modern art revolution.
              </Text>

              <Text size="xl">
                Ticket includes entry, a raffle ticket and drink on arrival. All
                additional proceeds from ticket, raffle & bar sales on the night
                go to furthering the M.A.N.Kind social movement where everyone
                is invited to participate in connection through tangible art via
                community-building workshops and events.
              </Text>

              <Text size="xl">
                In essence, “M.A.N Kind” is an ongoing Anti AI campaign designed
                to get us off our couches, out of digital-only third spaces and
                into our communities to create tangible art we can touch, feel
                and share with our loved ones.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </BackgroundImage>
    </Center>
  );
}

export default ManKind;
