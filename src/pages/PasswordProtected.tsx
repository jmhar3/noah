import Cookies from "js-cookie";
import { Navigate } from "react-router";

import type { PropsWithChildren } from "react";

function PasswordProtected({ children }: PropsWithChildren) {
  const correctPassword = "secret-password";

  const secretPassword = Cookies.get("secretPassword");

  return secretPassword === correctPassword ? (
    children
  ) : (
    <Navigate to="/secret" replace />
  );
}

export default PasswordProtected;
