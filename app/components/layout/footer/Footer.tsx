import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import Logo from "../../ui/Logo";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <footer className="bg-White px-6 py-8 md:px-8">
      <Wrapper className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
        <Logo />
        <div className="flex gap-4 text-3xl text-DarkGrayishBlue">
          <a
            href="https://pl.linkedin.com/in/loniewski02"
            target="blank"
            aria-label="Linkedin"
            className="transition hover:text-Primary"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Loniewski02"
            target="blank"
            aria-label="Github"
            className="transition hover:text-Primary"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.facebook.com/loniewski09/"
            target="blank"
            aria-label="facebook"
            className="transition hover:text-Primary"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.instagram.com/czarnianpotasu"
            target="blank"
            aria-label="instagram"
            className="transition hover:text-Primary"
          >
            <AiFillInstagram />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
