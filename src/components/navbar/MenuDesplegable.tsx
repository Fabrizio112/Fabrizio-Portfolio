import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";
import { usePortfolioStore } from "../../store/store";

function MenuDesplegable() {
    const handleMenuClick=usePortfolioStore(state=>state.handleMenuClick)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { button1, button2, button3, button4 } = languageDictionary.nav
    const { themeLight } = useContext(ThemeContext)

    return (<section id="menu" className={themeLight ? "menu-light" :"menu-black"}>
        <ul>
            <li onClick={handleMenuClick} className="menu-hover" > <a href="#">{english ? button1 : "Inicio"}</a></li>
            <li onClick={handleMenuClick} className="menu-hover"><a href="#projects">{english ? button2 : "Proyectos"}</a></li>
            <li onClick={handleMenuClick} className="menu-hover"><a href="#experience">{english ? button3 : "Experiencia"}</a></li>
            <li onClick={handleMenuClick} className="menu-hover"><a href="#contacto">{english ? button4 : "Contacto"}</a></li>
            <div id="menu-icons">
                <div> <ChangeLanguage /></div>
                <div><ChangeTheme /></div>

            </div>
        </ul>
    </section >);
}

export default MenuDesplegable;