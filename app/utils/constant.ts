export const emailReg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGISTER_INPUTS = [
  {
    id: "name",
    name: "username",
    placeholder: "Nazwa użytkownika",
    type: "text",
    label: "Nazwa użytkownika",
  },
  {
    id: "email",
    name: "email",
    placeholder: "e.g. alex@test.com",
    type: "email",
    label: "Emails Address",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
  {
    id: "password2",
    name: "password2",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
];

export const LOGIN_INPUTS = [
  {
    id: "email",
    name: "email",
    placeholder: "Email lub nazwa użytkownika",
    type: "email",
    label: "Email Address",
    validity: (val: string) => emailReg.test(val),
  },
  {
    id: "password",
    name: "password",
    placeholder: "Hasło",
    type: "password",
    label: "Password",
    validity: (val: string) => val.trim().length > 8,
  },
];

export const RESET_INPUT = {
  id: "email",
  name: "email",
  placeholder: "Email",
  type: "email",
  label: "Email Address",
  validity: (val: string) => emailReg.test(val),
};
