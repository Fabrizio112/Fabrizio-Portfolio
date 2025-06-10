import { useContext } from "react";
import { experience } from "../../helpers/experience";
import ExperienceCard from "./ExperienceCard";
import LanguageContext from "../../context/LanguageContext";

function Experience() {
    const{english,languageDictionary}=useContext(LanguageContext)
    return ( 
    <section id="experience">
        <h4>{english?languageDictionary.experience.title:"Experiencia"}</h4>
        <section id="experience-container">
            {experience.map(exp => <ExperienceCard key={exp.id} id={exp.id} title={exp.title} date={exp.date} description={exp.description} goals={exp.goals} technologies={exp.technologies} />)}
        </section>
    </section> );
}

export default Experience;