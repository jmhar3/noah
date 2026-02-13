import { Button, Flex, Stack, TextInput } from "@mantine/core";
import { useNavigate } from "react-router";
import { useState } from "react";
import Cookies from "js-cookie";

function PasswordInput() {
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState<string | undefined>();

  const secretPassword = Cookies.get("secretPassword");

  const correctPassword = "secret-password";

  const onSubmit = () => {
    if (passwordInput) Cookies.set("secretPassword", passwordInput);
    if (passwordInput === correctPassword) navigate("/secret/about-me");
  };

  return (
    <Stack gap="sm">
      <Flex gap="sm">
        <Stack>
          <TextInput
            value={passwordInput}
            placeholder="INPUT PASSWORD"
            error={secretPassword !== correctPassword && "Incorrect password"}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
        </Stack>
        <Button onClick={onSubmit}>ENTER</Button>
      </Flex>
    </Stack>
  );
}

export default PasswordInput;
