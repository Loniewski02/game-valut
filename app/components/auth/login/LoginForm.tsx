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
      <Link href={"/auth?mode=reset"} className="text-13 self-end text-primary underline">
        Nie pamiętasz hasła?
      </Link>
      <div>
        <Submit>Login</Submit>
      </div>
      <p className="text-13 text-center text-textSec">
        Nie masz konta?{" "}
        <Link href={"/auth?mode=register"} className="text-primary underline">
          Zarejestruj się.
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
