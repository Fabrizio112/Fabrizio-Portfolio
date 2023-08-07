import { createContext, useRef, useState } from "react";
import food from "../assets/images/food-page.png"
import pokedex from "../assets/images/pokedex.png"
import weather from "../assets/images/weather-app-one.png"
import translate from "../assets/images/Translate-app.png"
console.log(food)
const PortfolioContext = createContext()

const PortfolioProvider = ({ children }) => {
    const Home = useRef()
    const Projects = useRef()
    const Skill = useRef()
    const Contact = useRef()

    const NavBar = useRef()
    const projectsData = {
        1: {
            title: "Aplicación de Comida",
            description: "Aplicación de comida que posee diferentes categories y dentro de cada categoria hay variedad de alimentos . Se puede ver la diferente información de cada alimento",
            github: "https://github.com/Fabrizio112/Meal-project",
            link: "https://meal-app-f.netlify.app",
            image: food,
            technologies: [
                {
                    text: "HTML",
                    id: 0
                },
                {
                    text: "CSS",
                    id: 1
                },
                {
                    text: "JavaScript",
                    id: 2
                },
                {
                    text: "React",
                    id: 3
                },
                {
                    text: "Sass",
                    id: 4
                },
                {
                    text: "Bootstrap",
                    id: 5
                },
                {
                    text: "Context Api",
                    id: 6
                },
                {
                    text: "React Router",
                    id: 7
                }
            ]
        },
        2: {
            title: "Pokedex React",
            description: "Pokedex en donde los pokemones estan categorizados por generaciones  y se puede ver la información de cada pokemons",
            github: "https://github.com/Fabrizio112/Pokedex-React",
            link: "https://fabrizio-pokedex.netlify.app/",
            image: pokedex,
            technologies: [
                {
                    text: "HTML",
                    id: 0
                },
                {
                    text: "CSS",
                    id: 1
                },
                {
                    text: "JavaScript",
                    id: 2
                },
                {
                    text: "React",
                    id: 3
                },
                {
                    text: "Sass",
                    id: 4
                },
                {
                    text: "Context Api",
                    id: 5
                },
                {
                    text: "React Router",
                    id: 6
                }
            ]
        },
        3: {
            title: "Aplicacion del Clima",
            description: "Aplicacion del clima en la cual se puede buscar cualquier lugar del mundo y ver su clima",
            github: "https://github.com/Fabrizio112/Weather-React",
            link: "https://weather-app-fabri.netlify.app/",
            image: weather,
            technologies: [
                {
                    text: "HTML",
                    id: 0
                },
                {
                    text: "CSS",
                    id: 1
                },
                {
                    text: "JavaScript",
                    id: 2
                },
                {
                    text: "React",
                    id: 3
                },
                {
                    text: "Sass",
                    id: 4
                }
            ]
        },
        4: {
            title: "Traductor",
            description: "Traductor en el cual se elige el lenguage a traducir y el lenguage al cual se quiere realizar la traduccion , luego se escribe lo que se quiere traducir y automaticamente se traduce",
            github: "https://github.com/Fabrizio112/translate-react",
            link: "https://translate-app-fabri.netlify.app/",
            image: translate,
            technologies: [
                {
                    text: "HTML",
                    id: 0
                },
                {
                    text: "CSS",
                    id: 1
                },
                {
                    text: "JavaScript",
                    id: 2
                },
                {
                    text: "React",
                    id: 3
                },
                {
                    text: "Sass",
                    id: 4
                },
                {
                    text: "Context Api",
                    id: 5
                }
            ]
        }
    }
    const handleClick = (distancia) => {
        window.scrollTo(0, distancia)
    }

    const [menuClick, setMenuClick] = useState(false)
    const handleMenuClick = () => {
        if (menuClick === true) {
            setMenuClick(false)
            document.querySelector("body").style.overflow = ""
        } else {
            setMenuClick(true)
            document.querySelector("body").style.overflow = "hidden"
        }
    }
    const data = { Home, Projects, Skill, Contact, NavBar, projectsData, handleClick, menuClick, handleMenuClick }
    return (<PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>)
}

export default PortfolioContext;
export { PortfolioProvider }