import { useContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import LanguageContext from "../../context/LanguageContext";
import { projectsData } from "../../helpers/project";

function Projects() {
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title } = languageDictionary.projects
    return (
        <section id="projects" >
            <h4>{english ? title : "Mis Proyectos"}</h4>
            <section id="projects-container">
                {projectsData.map( project =><ProjectCard key={project.id} id={project.id} github={project.github} link={project.link} title={project.title} description={project.description} image={project.image} technologies={project.technologies} />)} 
            </section>
        </section>);
}

export default Projects;