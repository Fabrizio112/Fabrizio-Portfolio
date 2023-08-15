import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";


function Contact() {
    const { Contact, setMessageForm, messageForm, setIsModalOpen } = useContext(PortfolioContext)
    const { english, languageDictionary } = useContext(LanguageContext)
    const { title, title2, subtitle, email, location, phone, inputName, inputEmail, inputMessage, inputAffair, button, errorName, errorEmail, errorAffair, errorComments } = languageDictionary.contact
    const { themeLight } = useContext(ThemeContext)
    const initialForm = {
    }
    const initialError = {
        name: "",
        email: "",
        affair: "",
        comments: ""
    }
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState(initialError)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleErrors = (e) => {
        let regExpName = new RegExp(/^[a-zA-Z ]+$/)
        let regExpEmail = new RegExp(/^[a-z0-9.-]{1,30}@([a-z]{1,20}\.)[a-z]{2,3}$/)
        let regExpAffair = new RegExp(/^[a-zA-Z0-9 ]+$/)
        let regExpComments = new RegExp(/^[a-zA-Z0-9 ,.-]{1,255}$/)
        if (e.target) {
            if (e.target.value != "") {
                switch (e.target.name) {
                    case "name":
                        if (regExpName.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                            e.target.classList.add("error-input")
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                            e.target.classList.remove("error-input")
                        }

                        break;
                    case "email":

                        if (regExpEmail.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                            e.target.classList.add("error-input")
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                            e.target.classList.remove("error-input")
                        }
                        break;
                    case "affair":

                        if (regExpAffair.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                            e.target.classList.add("error-input")
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                            e.target.classList.remove("error-input")
                        }

                        break;
                    case "comments":

                        if (regExpComments.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                            e.target.classList.add("error-input")
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                        }

                        break;
                }
            } else {
                setError({
                    ...error,
                    [e.target.name]: ""
                })
                e.target.classList.remove("error-input")
            }
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (error.name || error.affair || error.comments || error.email) {
            return
        } else {
            fetch("https://formsubmit.co/ajax/fabri.avila3@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    affair: form.affair,
                    comments: form.comments
                })
            })
                .then(response => response.json())
                .then(data => {
                    setMessageForm(data.message)
                    setIsModalOpen(true)
                    setTimeout(() => {
                        setForm(initialError)
                        setIsModalOpen(false)
                    }, 3000);

                })
                .catch(error => console.error(error));
        }




    }
    return (
        <section id="contact" ref={Contact}>
            <div id="contact-title">
                <h5>{english ? title : "Contacto"} <span id="contact-title">{english && title2}</span></h5>
                <span>{english ? subtitle : "Nos mantengamos en contacto !!"}</span>
            </div>
            <div id="contact-container">
                <section id="contact-information">
                    <div id="contact-information_elements">
                        <FontAwesomeIcon size="2x" icon={faEnvelope} style={themeLight ? { color: "black" } : { color: "#ffffff" }} />
                        <div>
                            <span>{english ? email : "Correo Electrónico"}</span>
                            <p>fabri.avila3@gmail.com</p>
                        </div>
                    </div>
                    <div id="contact-information_elements">
                        <FontAwesomeIcon size="2x" icon={faPhone} style={themeLight ? { color: "black" } : { color: "#ffffff" }} />
                        <div>
                            <span>{english ? phone : "Teléfono"}</span>
                            <p>+54 3518015488</p>
                        </div>
                    </div>
                    <div id="contact-information_elements">
                        <FontAwesomeIcon size="2x" icon={faLocationDot} style={themeLight ? { color: "black" } : { color: "#ffffff" }} />
                        <div>
                            <span>{english ? location : "Ubicación"}</span>
                            <p>Córdoba , Argentina</p>
                        </div>
                    </div>
                </section>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder={english ? inputName : "Nombre"} name="name" className={themeLight ? "inputs-light" : "inputs-dark"} onKeyUp={handleErrors} onChange={handleChange} value={form.name} required />
                    {error.name === true && <p className="error"><FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />  {english ? errorName : "Este campo solo admite letras"}</p>}
                    <input type="email" placeholder={english ? inputEmail : "Correo Electrónico"} name="email" className={themeLight ? "inputs-light" : "inputs-dark"} onKeyUp={handleErrors} onChange={handleChange} value={form.email} required />
                    {error.email === true && <p className="error"><FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} /> {english ? errorEmail : "Ingrese un email valido"}</p>}
                    <input type="text" placeholder={english ? inputAffair : "Asunto"} name="affair" className={themeLight ? "inputs-light" : "inputs-dark"} onKeyUp={handleErrors} onChange={handleChange} value={form.affair} required />
                    {error.affair === true && <p className="error"><FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} /> {english ? errorAffair : "Ingrese un Asunto Valido"}</p>}
                    <textarea cols="30" rows="10" name="comments" placeholder={english ? inputMessage : "Mensaje"} className={themeLight ? "inputs-light" : "inputs-dark"} onKeyUp={handleErrors} onChange={handleChange} value={form.comments} required></textarea>
                    {error.comments === true && <p className="error"><FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} /> {english ? errorComments : "El comentario no puede tener mas de 255 caracteres"}</p>}
                    <button className={themeLight ? "button-light" : "button-dark"} type="submit"> {english ? button : "Enviar"}</button>
                </form>
            </div>

        </section >);
}

export default Contact;