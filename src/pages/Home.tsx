import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";

import {
  Text,
  Stack,
  Title,
  Button,
  Center,
  BackgroundImage,
  Box,
} from "@mantine/core";

import PasswordInput from "../components/PasswordInput";

import lakeLandscape from "../assets/images/lake_landscape.webp";
import MenuModal from "../components/MenuModal";
import { useDisclosure } from "@mantine/hooks";

function Home() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");
  const [opened, { open }] = useDisclosure(false);

  const correctPassword = "secret-password";
  const secretPassword = isSecret && Cookies.get("secretPassword");

  const textFollower = document.getElementById("cursor-text");

  document.addEventListener("mousemove", (e) => {
    if (textFollower) {
      textFollower.style.left = `${e.clientX}px`;
      textFollower.style.top = `${e.clientY}px`;
    }
  });

  const letters = Array.from(" ✦ TO ✦ ENTER ✦ CLICK");

  return (
    <BackgroundImage src={lakeLandscape}>
      <MenuModal isOpen={opened} />

      {!opened && (
        <Box
          pos="fixed"
          id="cursor-text"
          style={{
            zIndex: "9999",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }}
          className="circular-text"
        >
          {letters.map((letter, index) => {
            const rotationDeg = (360 / letters.length) * index;
            const factor = Math.PI / letters.length;
            const x = factor * index;
            const y = factor * index;
            const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

            return (
              <span
                key={index}
                style={{ transform, WebkitTransform: transform }}
              >
                {letter}
              </span>
            );
          })}
        </Box>
      )}

      <Center py="8.5em" h="100vh" w="100vw" c="floralwhite" onClick={open}>
        <Stack h="100%" align="center" justify="space-between">
          <Stack align="center" gap="3em">
            <Title size="9em" h=".6em">
              Melbourne Art Natural
            </Title>

            <Text size="xl" fw="500">
              PROFESSIONAL PORTRAIT PHOTOGRAPHER
            </Text>
          </Stack>

          {isSecret && secretPassword !== correctPassword && (
            <>
              <PasswordInput />

              <Button
                w="fit-content"
                justify="center"
                variant="transparent"
                onClick={() =>
                  navigate(isSecret ? "/secret/about-me" : "/about-me")
                }
              >
                BACK TO MAIN
              </Button>
            </>
          )}
        </Stack>
      </Center>
    </BackgroundImage>
  );
}

export default Home;
