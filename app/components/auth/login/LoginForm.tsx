"use client";
import Link from "next/link";

import { LOGIN_INPUTS } from "@/app/utils/constant";

import FormBox from "../FormBox";
import Submit from "../Submit";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {LOGIN_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <Link href={"/auth?mode=reset"} className="self-end text-13 text-primary underline">
        {"Forgot your password?"}
      </Link>
      <div>
        <Submit>Login</Submit>
      </div>
      <p className="text-center text-13 text-textSec">
        {"Don't have an account? "}
        <Link href={"/auth?mode=register"} className="text-primary underline">
          {"Sign up."}
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
