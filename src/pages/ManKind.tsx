import { useDisclosure, useOrientation } from "@mantine/hooks";
import Countdown from "react-countdown";

import {
  Text,
  Flex,
  Stack,
  Button,
  Center,
  BackgroundImage,
  TextInput,
} from "@mantine/core";

import image from "../assets/images/m.a.n.png";
import { useState } from "react";

const landscapeImages = [image];
const portraitImages = [image];
const taglines = ["Is this the end for M.A.N-Kind?", "M.A.N-Kind evolved"];

const randomLandscapeImageNumber = Math.floor(
  Math.random() * landscapeImages.length,
);
const randomPortraitImageNumber = Math.floor(
  Math.random() * landscapeImages.length,
);
const randomTaglineNumber = Math.floor(Math.random() * taglines.length);

const countdownDate = new Date("2026-05-06T18:00:00");

function ManKind() {
  const portraitImage = portraitImages[randomPortraitImageNumber];
  const landscapeImage = landscapeImages[randomLandscapeImageNumber];
  const tagline = taglines[randomTaglineNumber];

  const [
    showMailingListModal,
    { open: openMailingListModal, close: closeMailingListModal },
  ] = useDisclosure(false);

  const { type } = useOrientation();

  const [email, setEmail] = useState<string>();

  const onCloseJoinMailingList = () => {
    setEmail(undefined);
    closeMailingListModal();
  };

  const onJoinMailingList = () => {
    onCloseJoinMailingList();
  };

  return (
    <Center h="100vh" c="floralwhite">
      <BackgroundImage
        h="100vh"
        src={type.includes("landscape") ? landscapeImage : portraitImage}
      >
        <Stack align="center" p="9em" gap="4em">
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

          {showMailingListModal ? (
            <Flex gap="sm">
              <TextInput
                px="md"
                bdrs="md"
                size="md"
                value={email}
                variant="unstyled"
                bd="1px solid floralwhite"
                placeholder="YOUR EMAIL"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button
                size="md"
                radius="md"
                variant="outline"
                color="floralwhite"
                onClick={onJoinMailingList}
              >
                SIGN UP
              </Button>
            </Flex>
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
