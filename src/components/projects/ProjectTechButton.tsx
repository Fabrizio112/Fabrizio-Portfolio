import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

type ProjectTechButtonType={
    text:string
}

function ProjectTechButton({ text }:ProjectTechButtonType) {
    const { themeLight } = useContext(ThemeContext)
    return (<button className="btn-project" style={themeLight ? { backgroundColor: "#00000082", color: "black" } : { backgroundColor: "#ffffff5e", color: "white" }}>{text}</button>);
}

export default ProjectTechButton;