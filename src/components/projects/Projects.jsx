import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioContext from "../../context/PortfolioContext";
import LanguageContext from "../../context/LanguageContext";

function Projects() {
    const { Projects, projectsData } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title } = languageDictionary.projects
    return (
        <section id="projects" ref={Projects}>
            <h4>{english ? title : "Mis Proyectos"}</h4>
            <section id="projects-container">
                <ProjectCard github={projectsData[1].github} link={projectsData[1].link} title={english ? languageDictionary.projects.cards[1].title : projectsData[1].title} description={english ? languageDictionary.projects.cards[1].description : projectsData[1].description} image={projectsData[1].image} technologies={projectsData[1].technologies} />
                <ProjectCard github={projectsData[2].github} link={projectsData[2].link} title={english ? languageDictionary.projects.cards[2].title : projectsData[2].title} description={english ? languageDictionary.projects.cards[2].description : projectsData[2].description} image={projectsData[2].image} technologies={projectsData[2].technologies} />
                <ProjectCard github={projectsData[3].github} link={projectsData[3].link} title={english ? languageDictionary.projects.cards[3].title : projectsData[3].title} description={english ? languageDictionary.projects.cards[3].description : projectsData[3].description} image={projectsData[3].image} technologies={projectsData[3].technologies} />
                <ProjectCard github={projectsData[4].github} link={projectsData[4].link} title={english ? languageDictionary.projects.cards[4].title : projectsData[4].title} description={english ? languageDictionary.projects.cards[4].description : projectsData[4].description} image={projectsData[4].image} technologies={projectsData[4].technologies} />
            </section>
        </section>);
}

export default Projects;