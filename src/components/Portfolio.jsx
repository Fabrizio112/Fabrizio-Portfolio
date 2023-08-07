import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import TechStack from "./TechStack"
import Projects from "./Projects";
import Contact from "./Contact";
import MenuDesplegable from "./MenuDesplegable";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";

function Portfolio() {
    const { menuClick } = useContext(PortfolioContext)
    return (
        <div className="container">
            <NavBar />
            {menuClick && <MenuDesplegable />}
            <Header />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
        </div>);
}

export default Portfolio;