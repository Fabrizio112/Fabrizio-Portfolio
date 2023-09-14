import { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioContext from "../../context/PortfolioContext";
import LanguageContext from "../../context/LanguageContext";

function Projects() {
    const { Projects, projectsData } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title } = languageDictionary.projects
    const [tamanio, setTamanio] = useState("desktop")
    window.addEventListener("resize", (e) => {
        if (window.innerWidth < 1116 && window.innerWidth > 768) {
            setTamanio("tablets")
        } else if (window.innerWidth < 768) {
            setTamanio("mobile")
        } else {
            setTamanio("desktop")
        }
    })
    return (
        <section id="projects" ref={Projects} >
            <h4>{english ? title : "Mis Proyectos"}</h4>
            <section id="projects-container">
                <ProjectCard github={projectsData[1].github} link={projectsData[1].link} title={english ? languageDictionary.projects.cards[1].title : projectsData[1].title} description={english ? languageDictionary.projects.cards[1].description : projectsData[1].description} image={tamanio === "desktop" ? projectsData[1].imageD : tamanio === "tablets" ? projectsData[1].imageT : projectsData[1].imageM} technologies={projectsData[1].technologies} />
                <ProjectCard github={projectsData[2].github} link={projectsData[2].link} title={english ? languageDictionary.projects.cards[2].title : projectsData[2].title} description={english ? languageDictionary.projects.cards[2].description : projectsData[2].description} image={tamanio === "desktop" ? projectsData[2].imageD : tamanio === "tablets" ? projectsData[2].imageT : projectsData[2].imageM} technologies={projectsData[2].technologies} />
                <ProjectCard github={projectsData[3].github} link={projectsData[3].link} title={english ? languageDictionary.projects.cards[3].title : projectsData[3].title} description={english ? languageDictionary.projects.cards[3].description : projectsData[3].description} image={tamanio === "desktop" ? projectsData[3].imageD : tamanio === "tablets" ? projectsData[3].imageT : projectsData[3].imageM} technologies={projectsData[3].technologies} />
                <ProjectCard github={projectsData[4].github} link={projectsData[4].link} title={english ? languageDictionary.projects.cards[4].title : projectsData[4].title} description={english ? languageDictionary.projects.cards[4].description : projectsData[4].description} image={tamanio === "desktop" ? projectsData[4].imageD : tamanio === "tablets" ? projectsData[4].imageT : projectsData[4].imageM} technologies={projectsData[4].technologies} />
            </section>
        </section>);
}

export default Projects;