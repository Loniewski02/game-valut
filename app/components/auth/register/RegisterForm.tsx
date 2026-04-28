"use client";
import Link from "next/link";
import Submit from "../Submit";
import FormBox from "../FormBox";

import { REGISTER_INPUTS } from "@/app/utils/constant";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {REGISTER_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <p className="text-13  text-textSec">The password must be at least 8 characters long.</p>
      <Submit>Create account</Submit>
      <p className="text-center text-13 text-textSec">
        Do you already have an account?{" "}
        <Link href={"/auth?mode=login"} className="text-primary underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
