import { useContext } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";

function MenuDesplegable() {
    const { handleClick, handleMenuClick } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { button1, button2, button3, button4 } = languageDictionary.nav
    const { themeLight } = useContext(ThemeContext)

    return (<section id="menu" style={themeLight ? { backgroundColor: "white" } : { backgroundColor: "#0c1022" }}>
        <ul>
            <li className={themeLight ? "menu-hover-dark" : "menu-hover-light"} > <a onClick={() => { handleClick(0), handleMenuClick() }}>{english ? button1 : "Inicio"}</a></li>
            <li className={themeLight ? "menu-hover-dark" : "menu-hover-light"}><a onClick={() => { handleClick(700), handleMenuClick() }}>{english ? button2 : "Proyectos"}</a></li>
            <li className={themeLight ? "menu-hover-dark" : "menu-hover-light"}><a onClick={() => { handleClick(2800), handleMenuClick() }}>{english ? button3 : "Habilidades"}</a></li>
            <li className={themeLight ? "menu-hover-dark" : "menu-hover-light"}><a onClick={() => { handleClick(3450), handleMenuClick() }}>{english ? button4 : "Contacto"}</a></li>
            <div>
                <div> <ChangeLanguage /></div>
                <div><ChangeTheme /></div>

            </div>
        </ul>
    </section >);
}

export default MenuDesplegable;