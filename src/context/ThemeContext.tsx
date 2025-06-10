import { createContext, ReactNode, useState } from "react";

type ThemeContextProps={
    themeLight:boolean
    handleTheme:()=>void
}

const ThemeContext = createContext<ThemeContextProps>(null!)

type ThemeProviderProps={
    children:ReactNode
}

const ThemeProvider = ({ children }:ThemeProviderProps) => {
    const [themeLight, setThemeLight] = useState(false)

    themeLight === true ? document.querySelector("#root")!.classList.add("light") : document.querySelector("#root")!.classList.remove("light")
    const handleTheme = () => {
        if (themeLight === true) {
            setThemeLight(false)
        } else {
            setThemeLight(true)
        }
    }
    const data = { themeLight, handleTheme }
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContext
export { ThemeProvider }