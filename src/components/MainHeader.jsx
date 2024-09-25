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
                <button /* className="flex mx-auto justify-center font-bold bg-purple-bento-100 text-black duration-1000 hover:ease-in-out hover:bg-gradient-to-b hover:bg-yellow-bento-500 hover:duration-1000 hover:text-purple-bento-500 min-w-[100%] py-2" */
                    className="mt-4 font-bold hover:scale-110 ml-4"
                >Bento_Grid</button>
                <a href="https://github.com/gerajaj?tab=repositories"
                    className="ml-auto hover:font-bold hover:scale-105 mt-4" target="_blank"

                >About</a>
                <button className="ml-4 mt-4 hover:font-bold mr-4" >
                    <p onClick={handleChangeTheme}>
                        {theme === "light" ? "dark" : "light"}
                    </p>
                </button>
            </header>
            <hr className="md:max-w-[885px] lg:max-w-[980px] mx-auto mt-2" />
        </>
    )
}
export default MainHeader;