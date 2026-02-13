import { Button, Stack, Text, Title } from "@mantine/core";
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
    <Stack align="center">
      <Title size="6em">Melbourne Art Natural</Title>

      <Text size="xl" fw="500">
        PROFESSIONAL PORTRAIT PHOTOGRAPHER
      </Text>

      {isSecret && secretPassword !== correctPassword ? (
        <>
          <PasswordInput />

          <Button
            variant="transparent"
            w="fit-content"
            justify="center"
            onClick={() =>
              navigate(isSecret ? "/secret/about-me" : "/about-me")
            }
          >
            BACK TO MAIN
          </Button>
        </>
      ) : (
        <Button
          w="fit-content"
          justify="center"
          rightSection={<RightArrowIcon />}
          onClick={() => navigate(isSecret ? "/secret/about-me" : "/about-me")}
        >
          ENTER
        </Button>
      )}
    </Stack>
  );
}

export default Home;
