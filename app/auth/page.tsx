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
    <main className="min-h-[100dvh] w-full justify-center md:place-content-center">
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isReset && <Reset />}
    </main>
  );
};

export default AuthPage;
