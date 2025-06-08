import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";
import {usePortfolioStore} from "../../store/store"


function NavBar() {    
    const handleMenuClick=usePortfolioStore(state=>state.handleMenuClick)
    
    const { english, languageDictionary } = useContext(LanguageContext)
    const { button1, button2, button3, button4 } = languageDictionary.nav
    const { themeLight } = useContext(ThemeContext)

    return (<nav>
        <section className={themeLight ? "light" : ""}>
            <a href="" id="logo" style={themeLight ? { color: "black" } : { color: "white" }}>&lt;fabri.dev/&gt;</a>
            <ul>
                <li><a href="#">{english ? button1 : "Inicio"}</a></li>
                <li><a href="#projects">{english ? button2 : "Proyectos"}</a></li>
                <li><a href="#tech-stack">{english ? button3 : "Habilidades"}</a></li>
                <li><a href="#contact">{english ? button4 : "Contacto"}</a></li>
                <li className="icon-nav"><ChangeLanguage /></li>
                <li className="icon-nav"><ChangeTheme /></li>
            </ul>
            <FontAwesomeIcon size="2x" onClick={handleMenuClick} className="menu" icon={faBars} style={themeLight ? { color: "black" } : { color: "white" }} />
        </section>

    </nav>);
}

export default NavBar;
