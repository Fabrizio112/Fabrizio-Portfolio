import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function ChangeTheme() {
    const { themeLight, handleTheme } = useContext(ThemeContext)
    return (<>
        {themeLight ? <FontAwesomeIcon onClick={handleTheme} className="hover icon-nav" style={{ color: "black" }} size="2x" icon={faMoon} /> : <FontAwesomeIcon onClick={handleTheme} style={{ color: "white" }} className="hover" size="2x" icon={faSun} />}
    </>);
}

export default ChangeTheme;