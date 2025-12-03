import React from "react";
import logoImg from "../assets/logo.png";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-primary ">
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
          <img className="w-[50px] h-[50px]" src={logoImg} alt="logo" />
          <p className="font-bold ">
            <span className="text-xl">SkillVerse Ltd.</span>
            <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/nuhath-khan-lahif/">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/lahifkhan">
              <FaGithub size={20} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookF size={20} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
