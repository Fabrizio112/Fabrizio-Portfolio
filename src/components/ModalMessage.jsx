import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import ThemeContext from "../context/ThemeContext";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageContext from "../context/LanguageContext";

function ModalMessage() {
    const { isModalOpen, setIsModalOpen, messageForm } = useContext(PortfolioContext)
    const { themeLight } = useContext(ThemeContext)
    const { english } = useContext(LanguageContext)
    console.log(messageForm)
    return (<section className={`modal  ${isModalOpen === true && "is-open"} ${themeLight === true ? "modal-light" : "modal-dark"}`}>
        <div className={`modal_container`}>
            <FontAwesomeIcon className="close-modal" size="2x" onClick={() => setIsModalOpen(false)} icon={faXmark} />
            <FontAwesomeIcon icon={faCheck} size="2x" style={{ color: "#11ff00", }} />
            <p>{(messageForm && !english) ? "El formulario se envio exitosamente" : english ? messageForm : ""}</p>
        </div>
    </section>);
}

export default ModalMessage;