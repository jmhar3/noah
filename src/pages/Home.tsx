import { useEffect, useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router";
import { isMobile } from "react-device-detect";
import Cookies from "js-cookie";

import {
  Box,
  Text,
  Stack,
  Title,
  Button,
  Center,
  BackgroundImage,
} from "@mantine/core";

import MenuModal from "../components/MenuModal";
import PasswordInput from "../components/PasswordInput";

import lakeLandscape from "../assets/images/lake_landscape.webp";
import lakePortrait from "../assets/images/lake_portrait.webp";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}

function Home() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");
  const [opened, { open }] = useDisclosure(false);
  const isNarrow = useMediaQuery("(max-width: 576px)");
  const { x, y } = useMousePosition();

  const correctPassword = "secret-password";
  const secretPassword = isSecret && Cookies.get("secretPassword");

  const letters = Array.from(" ✦ TO ✦ ENTER ✦ CLICK");

  return (
    <BackgroundImage src={isMobile ? lakePortrait : lakeLandscape}>
      <MenuModal isOpen={opened} />

      {!opened && !isMobile && (
        <Box
          pos="fixed"
          style={{
            zIndex: "9999",
            pointerEvents: "none",
            transform: `translate3d(${x - 10}px, ${y - 10}px, 0)`,
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

      <Center
        py="6em"
        h="100vh"
        w="100vw"
        c="floralwhite"
        onClick={open}
        style={{
          cursor: "none",
        }}
      >
        <Stack h="100%" align="center" justify="space-between">
          <Stack align="center" gap="0" pt={isMobile ? ".6vh" : "0"}>
            <Title size="calc(1rem + 9vw)">Melbourne Art Natural</Title>

            <Text
              size={isNarrow ? "calc(.3rem + 3vw)" : "calc(.1rem + 2vw)"}
              fw="500"
            >
              PROFESSIONAL PORTRAIT PHOTOGRAPHER
            </Text>

            {isMobile && <Text py="xl">✦ TAP TO ENTER ✦</Text>}
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
