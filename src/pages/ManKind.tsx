import { useMediaQuery } from "@mantine/hooks";

import {
  em,
  Box,
  List,
  Text,
  Flex,
  Stack,
  Button,
  Center,
  BackgroundImage,
} from "@mantine/core";

import beachLandscape from "../assets/images/beach_landscape.webp";
import forestLandscape from "../assets/images/forest_landscape.webp";
import lakeLandscape from "../assets/images/lake_landscape.webp";
import beachPortrait from "../assets/images/beach_portrait.webp";
import forestPortrait from "../assets/images/forest_portrait.webp";
import lakePortrait from "../assets/images/lake_portrait.webp";

const images = [
  {
    landscape: beachLandscape,
    portrait: beachPortrait,
  },
  {
    landscape: forestLandscape,
    portrait: forestPortrait,
  },
  {
    landscape: lakeLandscape,
    portrait: lakePortrait,
  },
];

const randomImageNumber = Math.floor(Math.random() * images.length);

function ManKind() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const { portrait: portraitImage, landscape: landscapeImage } =
    images[randomImageNumber];

  if (isMobile)
    return (
      <Box
        c="floralwhite"
        h={window.innerHeight}
        style={{ overflow: "scroll" }}
      >
        <BackgroundImage
          h={window.innerHeight}
          src={portraitImage}
          style={{ overflow: "scroll" }}
        >
          <Stack
            w="100%"
            gap="9em"
            pt="4em"
            align="center"
            justify="center"
            bg="rgba(0, 0, 0, .l2)"
          >
            <Stack gap="3em">
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
            </Stack>

            <Stack>
              <Text ta="center" lh="1.1" size="1.8em" fs="italic">
                Friday June 20th
                <br />
                7pm onwards
              </Text>

              <Button
                size="md"
                radius="md"
                variant="outline"
                color="floralwhite"
                href="https://events.humanitix.com/man-kind"
                target="_blank"
                component="a"
              >
                BUY TICKETS HERE
              </Button>
            </Stack>

            <Stack
              px="md"
              pb="xl"
              w="100%"
              gap="1.8em"
              align="flex-start"
              justify="center"
            >
              <Text lh="1" size="1.8em">
                What is M.A.N-Kind?
              </Text>

              <Text size="xl" lh="xs">
                Other than a question that has intrigued and haunted us all
                across the eras since man was first conceived, M.AN.-Kind is
                Noah Snell (Melbourne Art Natural)’s debut solo photography
                exhibition.
              </Text>

              <Text size="xl" lh="xs">
                With an interrogative lense, Noah holds space for looming,
                esoteric questions whilst gently freezing time in a devout-like
                admiration of authentic people in their true element. These
                moments are captured and printed in beautiful realism, which in
                a digital age serves as a poignant reminder: It’s Better
                Printed.
              </Text>

              <Text size="xl" lh="xs">
                Notably, every image displayed at this exhibition has at some
                point been forcibly removed from online platforms for “breaching
                terms of service”.
              </Text>

              <Text size="xl" lh="xs">
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

              <Text size="xl" lh="xs">
                As a true representation of the AI- rebellion, no images in this
                exhibition have used software such as AI editing tools, Facetune
                or the like to alter someone's skin texture, body shape or size.
                Every image shown is a real depiction of who the subjects are,
                ultimately serving as an honoured reverence of real people in
                real identities.
              </Text>

              <Text size="xl" lh="xs">
                This Winter Solstice, where ritual often lies and reflection is
                encouraged, we invite you to join us at XI XI Studio (Fitzroy)
                in a celebration of human nature and the intricacies of the
                modern art revolution.
              </Text>

              <Text size="xl" lh="xs">
                Ticket includes entry, a raffle ticket and drink on arrival. All
                additional proceeds from ticket, raffle & bar sales on the night
                go to furthering the M.A.N.Kind social movement where everyone
                is invited to participate in connection through tangible art via
                community-building workshops and events.
              </Text>

              <Text size="xl" lh="xs">
                In essence, “M.A.N Kind” is an ongoing Anti AI campaign designed
                to get us off our couches, out of digital-only third spaces and
                into our communities to create tangible art we can touch, feel
                and share with our loved ones.
              </Text>
            </Stack>
          </Stack>
        </BackgroundImage>
      </Box>
    );

  if (!isMobile)
    return (
      <Box
        c="floralwhite"
        h={window.innerHeight}
        style={{ overflow: "scroll" }}
      >
        <BackgroundImage
          h={window.innerHeight}
          src={landscapeImage}
          style={{ overflow: "scroll" }}
        >
          <Center bg="rgba(0, 0, 0, .2)">
            <Stack align="center" maw="1240px" gap="4.5em" py="9em">
              <Stack align="center" gap="3em">
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

              <Stack align="center" p="6em" gap="xl">
                <Text ta="center" lh="1" size="2.1em" fs="italic">
                  Friday June 20th
                  <br />
                  7pm onwards
                </Text>

                <Button
                  size="md"
                  radius="md"
                  variant="outline"
                  color="floralwhite"
                  href="https://events.humanitix.com/man-kind"
                  target="_blank"
                  component="a"
                >
                  GET TICKETS
                </Button>
              </Stack>

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
                  esoteric questions whilst gently freezing time in a
                  devout-like admiration of authentic people in their true
                  element. These moments are captured and printed in beautiful
                  realism, which in a digital age serves as a poignant reminder:
                  It’s Better Printed.
                </Text>

                <Text size="xl">
                  Notably, every image displayed at this exhibition has at some
                  point been forcibly removed from online platforms for
                  “breaching terms of service”.
                </Text>

                <Text size="xl">
                  As a result this exhibition stands as an essay of and
                  statement to the developing moral and value systems behind
                  Noah and M.A.N.-Kind’s social movement, focusing in particular
                  on two of society’s developing core issues rapidly stemming as
                  result of severe digital integration:
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
                  As a true representation of the AI- rebellion, no images in
                  this exhibition have used software such as AI editing tools,
                  Facetune or the like to alter someone's skin texture, body
                  shape or size. Every image shown is a real depiction of who
                  the subjects are, ultimately serving as an honoured reverence
                  of real people in real identities.
                </Text>

                <Text size="xl">
                  This Winter Solstice, where ritual often lies and reflection
                  is encouraged, we invite you to join us at XI XI Studio
                  (Fitzroy) in a celebration of human nature and the intricacies
                  of the modern art revolution.
                </Text>

                <Text size="xl">
                  Ticket includes entry, a raffle ticket and drink on arrival.
                  All additional proceeds from ticket, raffle & bar sales on the
                  night go to furthering the M.A.N.Kind social movement where
                  everyone is invited to participate in connection through
                  tangible art via community-building workshops and events.
                </Text>

                <Text size="xl">
                  In essence, “M.A.N Kind” is an ongoing Anti AI campaign
                  designed to get us off our couches, out of digital-only third
                  spaces and into our communities to create tangible art we can
                  touch, feel and share with our loved ones.
                </Text>
              </Stack>
            </Stack>
          </Center>
        </BackgroundImage>
      </Box>
    );
}

export default ManKind;
