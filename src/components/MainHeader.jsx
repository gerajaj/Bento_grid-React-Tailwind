
import MoonIcon from "C:/Users/javi/Desktop/Proyectos/2_Bento_grid/src/components/icons/icons8-moon-50.png";
import SunIcon from "C:/Users/javi/Desktop/Proyectos/2_Bento_grid/src/components/icons/icons8-sun-50.png";

import { useGlobal } from "C:/Users/javi/Desktop/Proyectos/2_Bento_grid/src/context/useGlobal";

import { useContext } from "react";



const MainHeader = () => {
    const { handleChangeTheme } = useContext(useGlobal);
    const { theme } = useContext(useGlobal);
    return (
        <>
            <header className="dark:bg-slate-950 dark:text-white flex h-full md:max-w-[885px] lg:max-w-[980px] mx-auto">
                <a href="https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj"
                    className="mt-4 font-bold hover:scale-110 ml-4"
                    target="_blank"
                    title="Front-end Mentor's Challenge"
                >Bento_Grid</a>
                <a href="https://github.com/gerajaj/Bento_grid-React-Tailwind" className="ml-auto mr-4 hover:font-bold hover:scale-105 mt-4"
                    target="_blank"
                >Repo</a>
                <a href="https://github.com/gerajaj?tab=repositories"
                    className="ml-0 hover:font-bold hover:scale-105 mt-4" target="_blank"

                >About</a>
                <button className={` ml-4 mt-4  mr-4 rounded-full w-6 ${theme === "light" ? "hover:bg-gray-300" : ""}`} title="Click to change mode" onClick={handleChangeTheme}>

                    {theme === "dark" ? (<img src={SunIcon} className="h-6 mx-auto fill-bold rounded-full hover:border hover:border-blue-300" />) : (<img src={MoonIcon} className="h-5 mx-auto fill-bold" />)}


                </button>
            </header>
            <hr className="md:max-w-[885px] lg:max-w-[980px] mx-auto mt-2" />
        </>
    )
}
export default MainHeader;