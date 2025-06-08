import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import fabri from "../../assets/images/fabri-portfolio.jpg"
import cv from "../../assets/files/CurriculumVitae-FabrizioAvila.pdf"
import cvEnglish from "../../assets/files/Resume-FabrizioAvila.pdf"

function Header() {
    const { english, languageDictionary } = useContext(LanguageContext)
    const { themeLight } = useContext(ThemeContext)
    const { button, description, subtitle, title } = languageDictionary.header
    const descripcion = `El esfuerzo y la dedicación son mis 2 fortalezas.<br/>
    Estudiante de la Tecnicatura en Desarrollo de Sofware y desarrollador autodidacta que esta buscando oportunidades para ganar experiencia y desarrollar mis habilidades/capacidades tanto tecnicas como blandas. Dispuesto siempre a enfrentar desafíos y retos. Disfruto desafiar mis limites y aprender nuevas tecnologías. La curiosidad y la versatilidad son el combustible para día a día aprenda más y más.<br/>
        Mis 2 pasiones: La Tecnología y el Deporte.<br/> Amo el Fútbol`;

    return (
        <header id="header">
            <div >
                <img  className={themeLight === true ?"imagen-portfolio-light":"imagen-portfolio-dark"} src={fabri} alt=""  />
            </div>
            <main id="header-container" className="">
                <h1>{english ? title : "Hola, soy"} <span id="span-title"> Fabrizio 👋</span></h1>
                <h2>{english ? subtitle : "Desarrollador FullStack "}</h2>
                <p className={themeLight === true ? "color-parrafo-light" : "color-parrafo-dark"} dangerouslySetInnerHTML={{ __html: english ? description : descripcion }} />
                <section id="header-social_media" className="">
                    <a href="https://www.github.com/fabrizio112" target="_blank" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faGithub} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
                    <a href="https://www.linkedin.com/in/fabri-avila/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faLinkedin} style={themeLight ? { color: "#00000082" } : { color: "#ffffff5e" }} className={themeLight ? "hover-light" : "hover-dark"} /></a>
                </section>
                <section id="header-buttons" >
                    <a target="_blank" href={english ? cvEnglish:cv } download={english?"Resume-Fabrizio Avila":"Curriculum Vitae- Fabrizio Avila"} className={themeLight ? "button-light" : "button-dark"} rel="noreferrer">{english ? button : "Descargar Curriculum"}</a>
                </section>
            </main >
        </header >);
}

export default Header;