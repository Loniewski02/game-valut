import AuthSection from "../AuthSection";
import LoginForm from "./LoginForm";


const Login = () => {
  return (
    <AuthSection txtBig="Welcome back!" txt="Please log in to continue.">
      <LoginForm />
    </AuthSection>
  );
};

export default Login;
