import Footer from "./footer/Footer";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import TechStack from "./skills/TechStack"
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import MenuDesplegable from "./navbar/MenuDesplegable";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import ModalMessage from "./ModalMessage";

function Portfolio() {
    const { menuClick } = useContext(PortfolioContext)
    return (<>
        <ModalMessage />
        <div className="container">
            <NavBar />
            {menuClick && <MenuDesplegable />}
            <Header />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
        </div>

    </>);
}

export default Portfolio;