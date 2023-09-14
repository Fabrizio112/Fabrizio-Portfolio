import { createContext, useRef, useState } from "react";
import foodD from "../assets/images/project1/foodD.png"
import foodT from "../assets/images/project1/foodT.png"
import foodM from "../assets/images/project1/foodM.png"

import gamesD from "../assets/images/project2/gamesD.png"
import gamesT from "../assets/images/project2/gamesT.png"
import gamesM from "../assets/images/project2/gamesM.png"


import ecommerceD from "../assets/images/project3/ecommerceD.png"
import ecommerceT from "../assets/images/project3/ecommerceT.png"
import ecommerceM from "../assets/images/project3/ecommerceM.png"

import divisasD from "../assets/images/project4/divisasD.png"
import divisasT from "../assets/images/project4/divisasT.png"
import divisasM from "../assets/images/project4/divisasM.png"

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
            imageD: foodD,
            imageT: foodT,
            imageM: foodM,
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
            title: "Fabri Juegos",
            description: "Pagina donde se encuentran diferentes juegos realizados por mi ",
            github: "https://github.com/Fabrizio112/Games",
            link: "https://fabri-games.netlify.app/",
            imageD: gamesD,
            imageT: gamesT,
            imageM: gamesM,
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
                    text: "React Router",
                    id: 5
                }
            ]
        },
        3: {
            title: "Smart Shopping",
            description: "Ecommerce de Productos Variados",
            github: "https://github.com/Fabrizio112/smart-shopping",
            link: "https://smart-shopping-dev.netlify.app",
            imageD: ecommerceD,
            imageT: ecommerceT,
            imageM: ecommerceM,
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
                    text: "React Router",
                    id: 5
                }
            ]
        },
        4: {
            title: "Calcular y Comparar Divisas",
            description: "Aplicacion la cual se pueden comparar divisas y calcularlas",
            github: "https://github.com/Fabrizio112/Divisas",
            link: "https://divisas-currencies.netlify.app/",
            imageD: divisasD,
            imageT: divisasT,
            imageM: divisasM,
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
                    text: "React Router",
                    id: 5
                },
                {
                    text: "React Redux",
                    id: 6
                },
                {
                    text: "React Query",
                    id: 7
                },
                {
                    text: "Bootstrap",
                    id: 8
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
    const [messageForm, setMessageForm] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    isModalOpen === true ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible"
    const data = { Home, Projects, Skill, Contact, NavBar, projectsData, handleClick, menuClick, handleMenuClick, messageForm, setMessageForm, isModalOpen, setIsModalOpen }
    return (<PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>)
}

export default PortfolioContext;
export { PortfolioProvider }