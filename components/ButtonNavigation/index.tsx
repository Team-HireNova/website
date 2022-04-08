import Button, { ButtonProps } from "components/Button";
import { auth } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Wrapper = styled(Button)`
  background: unset;
  font-family: Montserrat;
  font-weight: 500;
  text-align: unset;
  height: unset;
  :hover {
    background: unset;
  }
  :focus {
    box-shadow: unset;
  }
`;

export type DisplayConditionId = "logged_in" | "not_logged_in" | "always";

export interface ButtonNavigationProps extends ButtonProps {
  displayConditionId: DisplayConditionId;
}

const ButtonNavigation = ({
  className,
  children,
  redirect,
  displayConditionId,
  ...props
}: ButtonNavigationProps) => {
  const [user] = useAuthState(auth);

  const display =
    displayConditionId == "always" ||
    (user && displayConditionId == "logged_in") ||
    (!user && displayConditionId == "not_logged_in");

  return (
    <Wrapper
      className={className}
      redirect={redirect}
      // current={
      //   redirect?.pathname &&
      //   (redirect.pathname === "/"
      //     ? router.pathname === redirect.pathname
      //     : router.pathname.startsWith(redirect.pathname))
      // }
      display={display ? "unset" : "none"}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default ButtonNavigation;