import AuthSection from "../AuthSection";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthSection txtBig="Witaj z powrotem!" txt="Zaloguj się, aby kontynuować.">
      <LoginForm />
    </AuthSection>
  );
};

export default Login;
