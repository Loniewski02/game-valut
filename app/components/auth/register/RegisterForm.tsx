"use client";
import Link from "next/link";

import Submit from "../Submit";
import FormBox from "../FormBox";

import { REGISTER_INPUTS } from "@/app/utils/constant";
import TextLink from "../../ui/TextLink";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {REGISTER_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <p className="text-13  text-GrayishBlue">{"The password must be at least 8 characters long."}</p>
      <Submit>Create account</Submit>
      <TextLink href="/auth?mode=login" text="Do you already have an account?">
        Sign in.
      </TextLink>
    </form>
  );
};

export default RegisterForm;
