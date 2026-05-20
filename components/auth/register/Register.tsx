import AuthSection from "../AuthSection";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <AuthSection txtBig="Create an account!" txt="Join the gaming community.">
      <RegisterForm />
    </AuthSection>
  );
};

export default Register;
