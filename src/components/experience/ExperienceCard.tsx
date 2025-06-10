import { useContext } from "react";
import { experienceType } from "../../helpers/experience";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

function ExperienceCard({id,title,date,description,goals,technologies} :experienceType) {

    const{themeLight}=useContext(ThemeContext)
    const{english,languageDictionary}=useContext(LanguageContext)
    const {title:titulo,date:fecha,description:descripcion,goals:metas,technologies:tecnologias}=languageDictionary.experience.cards[id - 1]
    return ( 
    <section className={`experience-card ${themeLight?"card-light":"card-black"}`}>
        <div className="experience-card-top">
            <div>
                <h3>{english?titulo:title}</h3>
                <span>{english?fecha:date}</span>
            </div>
            <p>{english?descripcion:description}</p>
        </div>
        <div className="experience-card-middle">
            <h5>{english?languageDictionary.experience.logros:"Logros Destacados"}:</h5>
            <ul>
                {english?
                    metas.map(m=> <li>{m.point}</li>)
                    :goals.map(g => <li>{g.point}</li>)
                }
            </ul>
        </div>
        <div className="experience-card-bottom">
            <p>{english?languageDictionary.experience.tecnologias:"Tecnologias Utilizadas"} :</p>
            <div>
                {english?
                tecnologias.map((t,index)=> <span key={index}>{t.tech}</span>)
                :
                technologies.map((t,index)=> <span key={index}>{t.tech}</span>)}
            </div>
        </div>
    </section> );
}

export default ExperienceCard;