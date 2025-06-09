import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

type ProjectTechButtonType={
    text:string
}

function ProjectTechButton({ text }:ProjectTechButtonType) {
    const { themeLight } = useContext(ThemeContext)
    return (<button className="btn-project">{text}</button>);
}

export default ProjectTechButton;