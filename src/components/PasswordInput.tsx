import { Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import Cookies from "js-cookie";

function PasswordInput() {
  const [passwordInput, setPasswordInput] = useState("");

  const secretPassword = Cookies.get("secretPassword");

  return (
    <Stack>
      <Text>Input the password to enter</Text>
      <Flex>
        <Stack>
          <TextInput
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          {secretPassword && <Text c="red">Password incorrect</Text>}
        </Stack>
        <Button onClick={() => Cookies.set("secretPassword", passwordInput)}>
          Submit
        </Button>
      </Flex>
    </Stack>
  );
}

export default PasswordInput;
