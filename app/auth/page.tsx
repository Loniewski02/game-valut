import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import Reset from "../components/auth/reset/Reset";

const AuthPage = async ({ searchParams }: { searchParams: { mode: string } }) => {
  const mode = searchParams.mode;
  const defaultMode = !mode || mode === "" ? "login" : mode;
  const isLogin = defaultMode === "login";
  const isRegister = defaultMode === "register";
  const isReset = defaultMode === "reset";

  return (
    <>
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isReset && <Reset />}
    </>
  );
};

export default AuthPage;
