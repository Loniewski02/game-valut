import FormBox from "../../shared/ui/FormBox";
import TextLink from "../../shared/ui/TextLink";
import Submit from "../../shared/ui/Submit";

import { LOGIN_INPUTS } from "@/app/lib/constant";

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
