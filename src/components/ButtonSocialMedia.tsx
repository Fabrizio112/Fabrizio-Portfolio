import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonSocialMedia() {
    const{themeLight}=useContext(ThemeContext)

    return (
    <section id="header-social_media" className="">
        <a href="https://www.github.com/fabrizio112" target="_blank" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faGithub} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
        <a href="https://www.linkedin.com/in/fabri-avila/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faLinkedin} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
    </section>
);
}

export default ButtonSocialMedia;