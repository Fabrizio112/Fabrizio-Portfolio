import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type TechCardType={
    component?:IconDefinition
    text:string
    imagen?:string
}

function TechCard({ component, text, imagen }:TechCardType) {
    const { themeLight } = useContext(ThemeContext)
    return (<section id={themeLight ? "tech-card-light" : "tech-card-dark"}>
        {component && <FontAwesomeIcon size="3x" icon={component} style={themeLight ? { color: "black" } : { color: "#ffffff", }} />}
        {imagen && <img src={imagen} />}
        <span>{text}</span>
    </section>);
}

export default TechCard;