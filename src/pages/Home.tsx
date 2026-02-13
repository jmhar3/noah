import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";

import RightArrowIcon from "../assets/icons/RightArrowIcon";
import PasswordInput from "../components/PasswordInput";

function Home() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSecret = pathname.includes("secret");

  const correctPassword = "secret-password";
  const secretPassword = isSecret && Cookies.get("secretPassword");

  return (
    <Box>
      <Stack>
        <Title>Melbourne Art Natural</Title>
        <Text>PROFESSIONAL PORTRAIT PHOTOGRAPHER</Text>
        {isSecret && secretPassword !== correctPassword ? (
          <PasswordInput />
        ) : (
          <Button
            justify="center"
            rightSection={<RightArrowIcon />}
            onClick={() =>
              navigate(isSecret ? "/secret/about-me" : "/about-me")
            }
          >
            Enter
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Home;
