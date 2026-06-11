import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useHover } from "@mantine/hooks";

import {
  Flex,
  Text,
  Stack,
  Title,
  Button,
  Divider,
  Accordion,
} from "@mantine/core";

import type { JSX } from "react";

export interface Inclusion {
  icon: JSX.Element;
  label: string;
  description: string;
}

export interface PackageType {
  rate: number;
  image: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  inclusions: Inclusion[];
}

export interface PackageProps extends PackageType {
  setHighlightedPackage: (packageProps: PackageProps) => void;
}

function Package(props: PackageProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { hovered, ref } = useHover();

  const addOns = [
    { label: "High resolution RAWs", price: "$250" },
    { label: "35mm film", price: "$50 per roll" },
    { label: "Additional edits", price: "$30 per edit" },
    { label: "Additional time", price: "$50 per 30 mins" },
    { label: "Socials video", price: "$50 per 20-30 sec video" },
    {
      label: "Travel time greater than 1 hour from CBD",
      price: "$50 per hour",
    },
    { label: "CBD parking if not provided", price: "~TBC~" },
  ];

  const isSecret = pathname.includes("secret");

  const isNotFocused =
    pathname === "/packages" || pathname === "/secret/packages";

  const isFocused = useMemo(
    () => pathname.includes(props.label.toLowerCase()),
    [props.label, pathname],
  );

  const onSelectPackage = (path: string) => {
    navigate(`${isSecret ? "/secret" : ""}/packages/${path}`);
  };

  const navButtons = useMemo(() => {
    switch (props.label) {
      case "Man":
        return { prev: "Legend", next: "Myth" };
      case "Myth":
        return { prev: "Man", next: "Legend" };
      case "Legend":
        return { prev: "Myth", next: "Man" };
      default:
        return { prev: "Legend", next: "Myth" };
    }
  }, [props]);

  const title = (
    <Stack
      w="100%"
      align="center"
      c={hovered && isNotFocused ? "#B44655" : "steelblue"}
    >
      <Title h="0" pr="1.2em" size="2em">
        The
      </Title>
      <Title h=".1em" pl=".3em" pb="1.2em" size="4em">
        {props.label}
      </Title>
    </Stack>
  );

  if (isNotFocused) {
    return (
      <Stack
        gap="5px"
        w="100%"
        align="center"
        c={hovered && isNotFocused ? "#B44655" : "steelblue"}
        onMouseEnter={() => props.setHighlightedPackage(props)}
        onClick={() => onSelectPackage(props.label.toLowerCase())}
        style={{ cursor: "pointer" }}
        ref={ref}
      >
        {title}

        <Stack gap="0" align="center">
          <Text size="xl">{props.title}</Text>
          <Text size="xl" fs="italic">
            {props.subtitle}
          </Text>
        </Stack>
      </Stack>
    );
  }

  if (isFocused) {
    return (
      <Stack justify="space-between" h="100%" w="100%" align="center">
        <Stack>
          <Flex w="100%" align="center">
            <Button
              w="9em"
              fw="bold"
              justify="center"
              onClick={() => onSelectPackage(navButtons.prev)}
            >
              LEGEND
            </Button>

            {title}

            <Button
              w="9em"
              fw="bold"
              onClick={() => onSelectPackage(navButtons.next)}
            >
              MYTH
            </Button>
          </Flex>

          <Divider w="100%" color="#b44655" />

          <Text size="1.4em" ta="center">
            {props.description}
          </Text>

          <Stack gap="sm" align="center" w="100%">
            <Text size="1.4em" fs="italic">
              Choose this package is you want:
            </Text>

            <Stack gap="xs">
              {props.inclusions.map((inclusion) => (
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
          </Stack>
        </Stack>

        <Stack align="center" w="100%">
          <Stack gap="0" w="100%">
            <Divider w="100%" color="#b44655" />

            <Accordion
              w="100%"
              c="steelblue"
              color="steelblue"
              variant="unstyled"
              chevronIconSize={15}
              chevronPosition="left"
              // styles={{
              //   control: { color: "steelblue", background: "floralwhite" },
              // }}
            >
              <Accordion.Item value="add-ons">
                <Accordion.Control className="add-on">
                  Optional Add-ons
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    {addOns.map((addOn) => (
                      <Flex key={addOn.label} w="100%" justify="space-between">
                        <Text>{addOn.label}</Text>
                        <Text fs="italic">{addOn.price}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Divider w="100%" color="#b44655" />
          </Stack>

          <Flex
            w="100%"
            align="center"
            justify="space-between"
            px="3px"
            pb="xl"
          >
            <Button
              w="11em"
              fw="bold"
              onClick={() => navigate(`/contact/${props.label.toLowerCase()}`)}
            >
              BOOK PACKAGE
            </Button>

            <Title>${props.rate}</Title>
          </Flex>
        </Stack>
      </Stack>
    );
  }
}

export default Package;
