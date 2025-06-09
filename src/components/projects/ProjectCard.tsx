import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ProjectTechButton from "./ProjectTechButton";
import { ProjectDataType } from "../../helpers/project";
import LanguageContext from "../../context/LanguageContext";


function ProjectCard({ id,github, link, title, description, image, technologies }:ProjectDataType) {
    const { themeLight } = useContext(ThemeContext)
    const {english,languageDictionary}=useContext(LanguageContext)
    const {title:titulo,description:descripcion}=languageDictionary.projects.cards[id as keyof typeof languageDictionary.projects.cards]
    return (
        <section className={themeLight ? "hover-img-light" : "hover-img-dark"} id="project-card">
            <img src={image ? image : "https://dummyimage.com/600x480/000/fff"} alt={title} />
            <section id="project-card_description">
                <div id="project-card_description_links">
                    <a href={github} target="_blank"><FontAwesomeIcon size="2x" icon={faSquareGithub}  /></a>
                    <a href={link} target="_blank"><FontAwesomeIcon size="2x" icon={faLink} /></a>
                </div>
                <div id="project-card_description_information">
                    <h5>{english ?titulo:title}</h5>
                    <p>{english?descripcion:description}</p>
                    <ul id="project-card_description_information_techs">
                        {technologies.map(el => <ProjectTechButton key={el.id} text={el.text} />)}
                    </ul>
                </div>

            </section>
        </section>
    );
}

export default ProjectCard;