import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

function ChangeLanguage() {
    const { handleLanguage } = useContext(LanguageContext)
    return (<FontAwesomeIcon onClick={handleLanguage} className="hover icon-nav" size="2x" icon={faGlobe} />);
}

export default ChangeLanguage;