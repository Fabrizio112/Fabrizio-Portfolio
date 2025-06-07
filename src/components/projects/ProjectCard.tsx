import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ProjectTechButton from "./ProjectTechButton";

type ProjectCardProps={
    github:string
    link:string
    title:string
    description:string
    image:string
    technologies:{text:string,id:number}[]
}

function ProjectCard({ github, link, title, description, image, technologies }:ProjectCardProps) {
    const { themeLight } = useContext(ThemeContext)
    return (
        <section className={themeLight ? "hover-img-light" : "hover-img-dark"} id="project-card">
            <img src={image ? image : "https://dummyimage.com/600x480/000/fff"} alt={title} />
            <section id="project-card_description">
                <div id="project-card_description_links">
                    <a href={github} target="_blank"><FontAwesomeIcon size="2x" icon={faSquareGithub} style={themeLight ? { color: "black" } : { color: "#ffffff" }} /></a>
                    <a href={link} target="_blank"><FontAwesomeIcon size="2x" icon={faLink} style={themeLight ? { color: "black" } : { color: "#ffffff" }} /></a>
                </div>
                <div id="project-card_description_information">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <ul id="project-card_description_information_techs">
                        {technologies.map(el => <ProjectTechButton key={el.id} text={el.text} />)}
                    </ul>
                </div>

            </section>
        </section>
    );
}

export default ProjectCard;