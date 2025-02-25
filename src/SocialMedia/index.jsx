import "./index.css";
import { BiLogoInstagram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul class="example-2">
      <li class="icon-content">
        <a
          href="https://linkedin.com/"
          aria-label="LinkedIn"
          data-social="linkedin"
        >
          <div class="filled"></div>
          <FaLinkedin className="icons"/>
        </a>
        <div class="tooltip">LinkedIn</div>
      </li>
      <li class="icon-content">
        <a
          href="https://www.github.com/"
          aria-label="GitHub"
          data-social="github"
        >
          <div class="filled"></div>
          <FaGithub className="icons"/>
        </a>
        <div class="tooltip">GitHub</div>
      </li>
      <li class="icon-content">
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          data-social="instagram"
        >
          <div class="filled"></div>
            <BiLogoInstagram className="icons"/>
        </a>
        <div class="tooltip">Instagram</div>
      </li>
      <li class="icon-content">
        <a
          href="https://youtube.com/"
          aria-label="Youtube"
          data-social="youtube"
        >
          <div class="filled"></div>
          <FaYoutube className="icons" />
        </a>
        <div class="tooltip">Youtube</div>
      </li>
    </ul>
  );
};
export default SocialMedia