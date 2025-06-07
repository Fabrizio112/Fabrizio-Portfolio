import { createContext, ReactNode, useState } from "react";
import { languageDictionaryType,languageDictionary } from "../helpers/language";

type LanguageContextProps={
    languageDictionary: languageDictionaryType
    english:boolean
    handleLanguage:()=> void
}

const LanguageContext = createContext<LanguageContextProps>(null!)

type LanguageProviderProps={
    children:ReactNode
}


const LanguageProvider = ({ children }:LanguageProviderProps) => {

    const [english, setEnglish] = useState(false)
    const handleLanguage = () => {
        english ? setEnglish(false) : setEnglish(true)
    }
    

    return (
        <LanguageContext.Provider value={{
            languageDictionary,handleLanguage,english
        }}>{children}</LanguageContext.Provider>
    )
}
export default LanguageContext
export { LanguageProvider }