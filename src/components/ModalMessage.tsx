import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageContext from "../context/LanguageContext";
import { usePortfolioStore } from "../store/store";

function ModalMessage() {
    const messageForm=usePortfolioStore(state=> state.messageForm)

    const isModalOpen=usePortfolioStore(state=>state.isModalOpen)
    const changeModalOpen=usePortfolioStore(state=>state.changeModalOpen)

    const { themeLight } = useContext(ThemeContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    return (<section className={`modal  ${isModalOpen === true && "is-open"} ${themeLight === true ? "modal-light" : "modal-dark"}`}>
        <div className={`modal_container`}>
            <FontAwesomeIcon className="close-modal" size="2x" onClick={changeModalOpen} icon={faXmark} />
            <FontAwesomeIcon icon={faCheck} size="2x" style={{ color: "#11ff00", }} />
            <p>{(messageForm && !english) ? "El formulario se envio exitosamente" : english ? languageDictionary.send.success : ""}</p>
        </div>
    </section>);
}

export default ModalMessage;