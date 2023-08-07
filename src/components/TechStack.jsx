import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import TechCard from "./TechCard";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

function TechStack() {
    const { Skill } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title } = languageDictionary.tech
    return (
        <section id="tech-stack" ref={Skill} >
            <h3>{english ? title : "Habilidades"}</h3>
            <section id="tech-stack_technologies" className="col">
                <TechCard component={faHtml5} text="HTML" />
                <TechCard component={faCss3Alt} text="CSS" />
                <TechCard component={faJs} text="JavaScript" />
                <TechCard component={faReact} text="React" />
                <TechCard component={faGitAlt} text="Git" />
                <TechCard component={faGithub} text="GitHub" />
                <TechCard component={faBootstrap} text="Bootstrap" />
                <TechCard component={faSass} text="Sass" />
                <TechCard component={faPython} text="Python" />
            </section>
        </section>);
}

export default TechStack;