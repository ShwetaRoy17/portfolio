import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactLinks,profile } from "../../data/data";

const ICON_MAP = {
  github: faGithub,
  linkedin: faLinkedin,
  leetcode: faCode,
  envelope: faEnvelope,
};


export default function Footer() {
  return (
    <footer>
      <div className="f-logo">{profile.name}</div>
      <div className="f-copy">Built with precision · © 2026</div>

     <div className="f-links">
  {contactLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      aria-label={link.label}
    >
       <FontAwesomeIcon icon={ICON_MAP[link.icon]} />

    </a>
  ))}
</div>

    </footer>
  );
}
