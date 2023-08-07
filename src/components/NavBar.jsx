import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";


function NavBar() {
    const { handleClick, handleMenuClick, NavBar } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { button1, button2, button3, button4 } = languageDictionary.nav
    const { themeLight } = useContext(ThemeContext)

    return (<nav>
        <section ref={NavBar} className={themeLight ? "light" : ""}>
            <a href="" style={themeLight ? { color: "black" } : { color: "white" }}>&lt;fabri.dev/&gt;</a>
            <ul>
                <li><a onClick={() => handleClick(0)}>{english ? button1 : "Inicio"}</a></li>
                <li><a onClick={() => handleClick(600)}>{english ? button2 : "Proyectos"}</a></li>
                <li><a onClick={() => handleClick(1600)}>{english ? button3 : "Habilidades"}</a></li>
                <li><a onClick={() => handleClick(2100)}>{english ? button4 : "Contacto"}</a></li>
                <li className="icon-nav"><ChangeLanguage /></li>
                <li className="icon-nav"><ChangeTheme /></li>
            </ul>
            <FontAwesomeIcon size="2x" onClick={handleMenuClick} className="menu" icon={faBars} style={themeLight ? { color: "black" } : { color: "white" }} />
        </section>

    </nav>);
}

export default NavBar;

// Agregar 2 botones de switch ,uno para cambiar el idioma y otro para cambiar el modo oscuro