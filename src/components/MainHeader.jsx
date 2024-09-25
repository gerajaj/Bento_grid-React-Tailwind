import { useGlobal } from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/context/useGlobal";

import { useContext } from "react";

/* 
{theme === "light" ? "dark" : "light"} 
onClick={handleChangeTheme}
*/

const MainHeader = () => {
    const { handleChangeTheme } = useContext(useGlobal);
    const { theme } = useContext(useGlobal);
    return (
        <>
            <header className="dark:bg-slate-950 dark:text-white flex h-full md:max-w-[885px] lg:max-w-[980px] mx-auto">
                <a href="https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj" /* className="flex mx-auto justify-center font-bold bg-purple-bento-100 text-black duration-1000 hover:ease-in-out hover:bg-gradient-to-b hover:bg-yellow-bento-500 hover:duration-1000 hover:text-purple-bento-500 min-w-[100%] py-2" */
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
                <button className={` ml-4 mt-4 hover:font-bold mr-4 rounded-full w-7 ${theme === "light" ? "bg-purple-bento-500 text-purple-bento-100 md:hover:text-yellow-bento-500  hover:text-purple-bento-100" : "bg-purple-bento-100 text-purple-bento-500 md:hover:-scale-105  hover:bg-yellow-bento-500"}`} title="Click to change mode">
                    <p className="font-bold text-lg dark:font-bold" onClick={handleChangeTheme}>
                        O
                    </p>

                </button>
            </header>
            <hr className="md:max-w-[885px] lg:max-w-[980px] mx-auto mt-2" />
        </>
    )
}
export default MainHeader;