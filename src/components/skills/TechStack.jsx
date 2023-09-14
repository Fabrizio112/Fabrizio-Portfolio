import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import TechCard from "./TechCard";
import { useContext } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import LanguageContext from "../../context/LanguageContext";
import routerlight from "../../assets/images/icons/reactrouterlight.svg"
import routerdark from "../../assets/images/icons/reactrouterdark.svg"
import reduxlight from "../../assets/images/icons/reduxlight.svg"
import reduxdark from "../../assets/images/icons/reduxdark.svg"
import querylight from "../../assets/images/icons/querylight.svg"
import querydark from "../../assets/images/icons/querydark.svg"
import styledlight from "../../assets/images/icons/styledlight.svg"
import styleddark from "../../assets/images/icons/styleddark.svg"
import ThemeContext from "../../context/ThemeContext";

function TechStack() {
    const { Skill } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title } = languageDictionary.tech
    const { themeLight } = useContext(ThemeContext)
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
                <TechCard imagen={themeLight ? styleddark : styledlight} text="Styled Components" />
                <TechCard component={faSass} text="Sass" />
                <TechCard component={faPython} text="Python" />
                <TechCard imagen={themeLight ? routerdark : routerlight} text="React Router" />
                <TechCard imagen={themeLight ? reduxdark : reduxlight} text="Redux" />
                <TechCard imagen={themeLight ? querydark : querylight} text="React Query" />
            </section>
        </section>);
}

export default TechStack;