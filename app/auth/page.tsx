import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";

type Props = { searchParams: { mode: string } };

const AuthPage = async ({ searchParams }: Props) => {
  const mode = searchParams.mode;
  const defaultMode = !mode || mode === "" ? "login" : mode;
  const isLogin = defaultMode === "login";
  const isRegister = defaultMode === "register";

  return (
    <>
      {isLogin && <Login />}
      {isRegister && <Register />}
    </>
  );
};

export default AuthPage;
