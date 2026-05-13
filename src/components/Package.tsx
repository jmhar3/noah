import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  Flex,
  Text,
  Stack,
  Title,
  Button,
  Divider,
  Accordion,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import AtIcon from "../assets/icons/AtIcon";

export interface Inclusion {
  icon: string;
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
        w="100%"
        align="center"
        c={hovered && isNotFocused ? "#B44655" : "steelblue"}
        onMouseEnter={() => props.setHighlightedPackage(props)}
        onClick={() => onSelectPackage(props.label.toLowerCase())}
        style={{ cursor: "pointer" }}
        ref={ref}
      >
        {title}

        <Text size="1.4em">
          {props.title} | {props.subtitle}
        </Text>
      </Stack>
    );
  }

  if (isFocused) {
    return (
      <Stack justify="space-around" h="100%" w="100%" align="center">
        <Stack>
          <Flex w="100%" align="center">
            {props.label === "Man" && (
              <Button w="fit-content" onClick={() => onSelectPackage("legend")}>
                Legend
              </Button>
            )}
            {props.label === "Myth" && (
              <Button onClick={() => onSelectPackage("man")}>Man</Button>
            )}
            {props.label === "Legend" && (
              <Button onClick={() => onSelectPackage("myth")}>Myth</Button>
            )}

            {title}

            {props.label === "Man" && (
              <Button onClick={() => onSelectPackage("myth")}>Myth</Button>
            )}
            {props.label === "Myth" && (
              <Button onClick={() => onSelectPackage("legend")}>Legend</Button>
            )}
            {props.label === "Legend" && (
              <Button onClick={() => onSelectPackage("man")}>Man</Button>
            )}
          </Flex>

          <Divider w="100%" />

          <Text size="1.4em" ta="center">
            {props.description}
          </Text>
        </Stack>

        <Stack align="center" w="100%">
          <Stack gap="sm" align="center" w="100%">
            <Text size="1.4em" fs="italic">
              Choose this package is you want:
            </Text>

            <Stack gap="xs">
              {props.inclusions.map((inclusion) => (
                <Flex key={inclusion.label} align="center" gap="md">
                  <AtIcon />

                  <Stack gap="0">
                    <Text size="1.2em" c="#386890">
                      {inclusion.label}
                    </Text>

                    <Text size=".9em">{inclusion.description}</Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>
          </Stack>

          <Stack gap="0" w="100%">
            <Divider w="100%" />

            <Accordion
              w="100%"
              color="steelblue"
              variant="unstyled"
              chevronIconSize={15}
              chevronPosition="left"
            >
              <Accordion.Item value="add-ons">
                <Accordion.Control>Optional Add-ons</Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    {addOns.map((addOn) => (
                      <Flex key={addOn.label} w="100%" justify="space-between">
                        <Text>{addOn.label}</Text>
                        <Text>{addOn.price}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Divider w="100%" />
          </Stack>

          <Title>${props.rate}</Title>
        </Stack>
      </Stack>
    );
  }
}

export default Package;
