import { createContext, useState } from "react";

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {

    const [english, setEnglish] = useState(false)
    const handleLanguage = () => {
        english ? setEnglish(false) : setEnglish(true)
    }
    const languageDictionary = {
        nav: {
            button1: "Home",
            button2: "Projects",
            button3: "Skills",
            button4: "Contact"
        },
        header: {
            title: "Hello, I´m",
            subtitle: "Frontend Developer Trainee",
            description: `Effort and Consistency are my strengths <br /> Self taught developer that is looking for an opportunity to gain experience in the software development . Always  willing to face challenges and proofs. Enjoy facing my limits and learn new technologies. Curiosity and versatility are the fuel for learning more day to day <br /> My two passions : Technology and Sports . I love Football. 
            `,
            button: "Download Resume"
        },
        projects: {
            title: "My Projects",
            cards: {
                1: {
                    title: "Meal App",
                    description: "Food app that contains diferent categories and into that categories ,have different foods also can see information about each food",
                },
                2: {
                    title: "Pokedex React",
                    description: "Pokedex where the pokemons was categorized by generations or Regions also can see information about each Pokemon",
                },
                3: {
                    title: "Weather App",
                    description: "Weather app that when user searchs anywhere in the world can be know it weather",
                },
                4: {
                    title: "Translate App",
                    description: "Translate app that user selects language source and language target ,writes the text that wants translate and automatic text will translate",
                }
            }
        },
        tech: {
            title: "Skills"
        },
        contact: {
            title: "Contact",
            title2: "Me",
            subtitle: "Get in touch",
            phone: "Phone",
            email: "Email",
            location: "Location",
            inputName: "Name",
            inputEmail: "Email",
            inputAffair: "Affair",
            inputMessage: "Message",
            button: "Send",
            errorName: "This field can only contains letters",
            errorEmail: "Enter a valid email",
            errorAffair: "Enter a valid affair",
            errorComments: "Comments haven´t contain more than 255 characters"
        }

    }

    const data = { languageDictionary, handleLanguage, english }
    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}
export default LanguageContext
export { LanguageProvider }