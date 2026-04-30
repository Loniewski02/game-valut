"use client";
import Link from "next/link";

import FormBox from "../FormBox";
import Submit from "../Submit";

import { LOGIN_INPUTS } from "@/app/utils/constant";
import TextLink from "../../ui/TextLink";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {LOGIN_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <Link
        href={"/auth?mode=reset"}
        className="self-end text-13 text-Primary underline transition hover:text-PrimaryHover"
      >
        {"Forgot your password?"}
      </Link>
      <Submit>Login</Submit>
      <TextLink href="/auth?mode=register" text="Don't have an account?">
        Sign up.
      </TextLink>
    </form>
  );
};

export default LoginForm;
