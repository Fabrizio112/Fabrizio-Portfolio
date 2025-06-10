import Footer from "./footer/Footer";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import MenuDesplegable from "./navbar/MenuDesplegable";
import ModalMessage from "./ModalMessage";
import { usePortfolioStore } from "../store/store";
import Experience from "./experience/Experience";

function Portfolio() {
    const menuClick=usePortfolioStore(state=>state.menuClick)
    return (<>
        <ModalMessage />
        <div className="container">
            <NavBar />
            {menuClick && <MenuDesplegable />}
            <Header />
            <Projects />
            <Experience/>            
            <Contact />
            <Footer />
        </div>

    </>);
}

export default Portfolio;