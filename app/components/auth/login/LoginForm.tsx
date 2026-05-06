import TextLink from "../../ui/TextLink";
import FormBox from "../../ui/FormBox";
import Submit from "../Submit";

import { LOGIN_INPUTS } from "@/app/utils/constant";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {LOGIN_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <TextLink href="/auth?mode=reset">Forgot your password?</TextLink>
      <Submit>Login</Submit>
      <TextLink href="/auth?mode=register" text="Don't have an account?">
        Sign up.
      </TextLink>
    </form>
  );
};

export default LoginForm;
