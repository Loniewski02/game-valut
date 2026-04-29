import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import Wrapper from "../layout/Wrapper";
import Logo from "../ui/Logo";


const Footer = () => {
  return (
    <footer className="bg-card px-6 py-8 md:px-8 md:py-10">
      <Wrapper className="flex justify-between">
        <Logo ico="text-4xl" font="text-xl" />
        <div className="hocer:text-primary flex gap-2 text-3xl text-text">
          <a href="#" target="blank" className="transition hover:text-primary">
            <AiFillLinkedin />
          </a>
          <a href="#" target="blank" className="transition hover:text-primary">
            <AiFillGithub />
          </a>
          <a href="#" target="blank" className="transition hover:text-primary">
            <AiFillFacebook />
          </a>
          <a href="#" target="blank" className="transition hover:text-primary">
            <AiFillInstagram />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
