import { createContext, useEffect, useState } from "react";

export const useGlobal = createContext();

export default (props) => {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

            return "dark"
        }
        return "light"
    })
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark")

        } else {
            document.querySelector("html").classList.remove("dark")

        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <useGlobal.Provider value={{ theme, setTheme, handleChangeTheme }}>
            {props.children}
        </useGlobal.Provider>
    );

};