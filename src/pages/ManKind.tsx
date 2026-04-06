import {
  useDisclosure,
  useMediaQuery,
  useOrientation,
  useTimeout,
} from "@mantine/hooks";
import Countdown from "react-countdown";

import {
  Text,
  Flex,
  Stack,
  Button,
  Center,
  BackgroundImage,
  TextInput,
  em,
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
const taglines = ["Is this the end for M.A.N-Kind?", "M.A.N-Kind evolved"];

const randomImageNumber = Math.floor(Math.random() * images.length);
const randomTaglineNumber = Math.floor(Math.random() * taglines.length);

const countdownDate = new Date("2026-05-06T18:00:00");

function ManKind() {
  const { type } = useOrientation();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const tagline = taglines[randomTaglineNumber];
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
    <Center h={window.innerHeight} c="floralwhite">
      <BackgroundImage
        h={window.innerHeight}
        src={type.includes("landscape") ? landscapeImage : portraitImage}
      >
        <Stack
          w="100%"
          gap="3em"
          top="3.3em"
          pos="fixed"
          align="center"
          justify="center"
        >
          <Flex align="center">
            <Text lh="0" size="4em" ff="Cormorant Infant">
              M.A.N-
            </Text>
            <Text lh="0" pt=".2em" size="4.8em" ff="Kapakana">
              Kind
            </Text>
          </Flex>

          <Text lh="0" size="1.8em" fs="italic">
            {tagline}
          </Text>
        </Stack>

        <Stack
          w="100%"
          gap="2.4em"
          pos="fixed"
          bottom="2.7em"
          align="center"
          justify="center"
        >
          <Text size="2.4em" lh="0">
            <Countdown date={countdownDate} />
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
      </BackgroundImage>
    </Center>
  ) : (
    <Center h="100vh" c="floralwhite">
      <BackgroundImage
        h="100vh"
        src={type.includes("landscape") ? landscapeImage : portraitImage}
      >
        <Stack align="center" py="9em" gap="4em">
          <Flex align="center">
            <Text lh="0" size="8em" ff="Cormorant Infant">
              M.A.N-
            </Text>
            <Text lh="0" pt=".2em" size="9em" ff="Kapakana">
              Kind
            </Text>
          </Flex>

          <Text lh="1" size="2.1em" fs="italic">
            {tagline}
          </Text>
        </Stack>

        <Stack align="center" p="6em" gap="3em">
          <Text size="3em" lh="0">
            <Countdown date={countdownDate} />
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
              variant="outline"
              color="floralwhite"
              onClick={openMailingListModal}
            >
              JOIN MAILING LIST
            </Button>
          )}
        </Stack>
      </BackgroundImage>
    </Center>
  );
}

export default ManKind;
