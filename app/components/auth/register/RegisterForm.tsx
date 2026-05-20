"use client";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { MessagesContext } from "../../_providers/MessagesContext";

import { FormRegisterAction } from "@/app/lib/auth";
import { REGISTER_INPUTS } from "@/app/lib/constant";

import FormBox from "../../shared/ui/FormBox";
import TextLink from "../../shared/ui/TextLink";
import Submit from "../../shared/ui/Submit";

const initialState = {
  message: null,
  status: null,
  data: { username: "", email: "", password: "", password2: "" },
};

const RegisterForm = () => {
  const { replace, refresh } = useRouter();

  const [state, action] = useFormState(FormRegisterAction, initialState);
  const { setNewMessage } = useContext(MessagesContext);
  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);
    }
  }, [state]);

  useEffect(() => {
    if (state.status === 200) {
      replace("/auth");
      refresh();
    }
  }, [state.status, replace]);

  return (
    <form action={action} className="flex flex-col gap-6">
      {REGISTER_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <Submit>Create account</Submit>
      <TextLink href="/auth?mode=login" text="Do you already have an account?">
        Sign in.
      </TextLink>
    </form>
  );
};

export default RegisterForm;
