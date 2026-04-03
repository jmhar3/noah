import {
  Stack,
  Button,
  Center,
  TextInput,
  CopyButton,
  Text,
} from "@mantine/core";

import { useEffect, useState } from "react";

import { supabase } from "../supabase";

const correctPassword = import.meta.env.VITE_PORTAL_PASSWORD;

function Portal() {
  const [passwordInput, setPasswordInput] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [mailingList, setMailingList] = useState<string[] | undefined>();

  const validatePassword = () => {
    if (passwordInput === correctPassword) setIsValidated(true);
  };

  useEffect(() => {
    const fetchMailingList = async () => {
      try {
        const { data, error } = await supabase.from("mailing_list").select();
        if (data) {
          setMailingList(data.map(({ email }: { email: string }) => email));
        }
        if (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (isValidated && !mailingList) {
      fetchMailingList();
    }
  }, [isValidated, mailingList]);

  console.log("isValidated", isValidated);
  console.log("passwordInput", passwordInput);
  console.log("correctPassword", correctPassword);

  return (
    <Center h="100vh">
      {isValidated ? (
        mailingList && (
          <Stack>
            <Text>You have {mailingList?.length} subscribers</Text>
            <CopyButton value={mailingList?.join(", ")}>
              {({ copied, copy }) => (
                <Button
                  size="md"
                  radius="md"
                  variant="outline"
                  color={copied ? "cadetblue" : "darkslategray"}
                  onClick={copy}
                >
                  {copied ? "Copied" : "Copy Mailing List"}
                </Button>
              )}
            </CopyButton>
          </Stack>
        )
      ) : (
        <Stack gap="sm">
          <TextInput
            bdrs="md"
            size="md"
            value={passwordInput}
            variant="unstyled"
            placeholder="INPUT PASSKEY"
            bd="1px solid darkslategray"
            onChange={(event) => setPasswordInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                validatePassword();
              }
            }}
            styles={{
              input: {
                paddingLeft: "12px",
                paddingRight: "12px",
                color: "darkslategray",
                backgroundColor: "none",
              },
            }}
          />
          <Button
            size="md"
            radius="md"
            variant="outline"
            color="darkslategray"
            onClick={validatePassword}
          >
            UNLOCK
          </Button>
        </Stack>
      )}
    </Center>
  );
}

export default Portal;
