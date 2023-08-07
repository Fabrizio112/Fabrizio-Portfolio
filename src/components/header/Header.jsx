import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioContext from "../../context/PortfolioContext";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import fabri from "../../assets/images/fabri-r.jpg"
import cv from "../../assets/files/curriculumFabri.pdf"

function Header() {
    const { Home } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { themeLight, handleTheme } = useContext(ThemeContext)
    const { button, description, subtitle, title } = languageDictionary.header
    const descripcion = `El esfuerzo y la dedicación son mis 2 fortalezas.<br/>
    Desarrollador autodidacta que esta buscando oportunidades para ganar experiencia en el desarrollo de software. Dispuesto siempre a enfrentar desafíos y retos. Disfruto desafiar mis limites y aprender nuevas tecnologías. La curiosidad y la versatilidad son el combustible para día a día aprenda más y más.<br/>
        Mis 2 pasiones: La Tecnología y el Deporte. Amo el Fútbol`;

    return (
        <header id="header" ref={Home}>
            <div>
                <img className="rounded " src={fabri} alt="" />
            </div>
            <main id="header-container" className="">
                <h1>{english ? title : "Hola, soy"} <span id="span-title"> Fabrizio 👋</span></h1>
                <h2>{english ? subtitle : "Desarrollador Frontend Trainee"}</h2>
                <p className={themeLight === true ? "color-parrafo-light" : "color-parrafo-dark"} dangerouslySetInnerHTML={{ __html: english ? description : descripcion }} />
                <section id="header-social_media" className="">
                    <a href="https://www.github.com/fabrizio112" target="_blank"><FontAwesomeIcon size="2x" icon={faGithub} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
                    <a href="https://www.linkedin.com/in/fabri-avila/" target="_blank"><FontAwesomeIcon size="2x" icon={faLinkedin} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
                </section>
                <section id="header-buttons" >
                    <a target="_blank" href={cv} download="Curriculum Vitae- Fabrizio Avila" className={themeLight ? "button-light" : "button-dark"}>{english ? button : "Descargar Curriculum"}</a>
                </section>
            </main >
        </header >);
}

export default Header;