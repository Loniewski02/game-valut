import AuthSection from "../AuthSection";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <AuthSection txtBig="Utwórz konto" txt="Dołącz do społeczności graczy">
      <RegisterForm />
    </AuthSection>
  );
};

export default Register;
