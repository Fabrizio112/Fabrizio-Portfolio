import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function TechCard({ component, text }) {
    const { themeLight } = useContext(ThemeContext)
    return (<section id={themeLight ? "tech-card-light" : "tech-card-dark"}>
        <FontAwesomeIcon size="3x" icon={component} style={themeLight ? { color: "black" } : { color: "#ffffff", }} />
        <span>{text}</span>
    </section>);
}

export default TechCard;