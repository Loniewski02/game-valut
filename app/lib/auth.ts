import { signIn } from "next-auth/react";
import { Session } from "next-auth";

export async function FormRegisterAction(prevState: any, formData: FormData) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: formData,
  });

  return res.json();
}

export async function FormLoginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: formData,
  });

  const response = await res.json();

  if (!res.ok) {
    return response;
  }

  const signInResponse = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (signInResponse?.error) {
    return {
      message: "Failed to login",
      status: 401,
    };
  }

  return response;
}

export function requireAuth(session: Session | null, setNewMessage: (status: number, message: string) => void) {
  if (!session) {
    setNewMessage(401, "You must be logged in");

    return false;
  }

  return true;
}
