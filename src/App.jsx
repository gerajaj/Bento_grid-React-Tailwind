/* import postImg from "./assets/design/images/illustration-create-post.webp";
import aiContent from "./assets/design/images/illustration-ai-content.webp";

import FiveStars from "./assets/design/images/illustration-five-stars.webp";
import multPlatform from "./assets/design/images/illustration-multiple-platforms.webp";
import schedule from "./assets/design/images/illustration-consistent-schedule.webp";
import schedulePosts from "./assets/design/images/illustration-schedule-posts.webp";
import audienceGrowth from "./assets/design/images/illustration-audience-growth.webp";
import growFollowers from "./assets/design/images/illustration-grow-followers.webp"; */

import MainHeader from "./components/MainHeader.jsx";
import Section_1 from "./components/sections/Section_1.jsx";
import Section_2 from "./components/sections/Section_2.jsx";

import { motion } from 'framer-motion';
import UseGlobalProvider from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/context/useGlobal";


const APP = () => {
    return (
        /*<div className="h-screen flex font-bold items-center justify-center">
            <h1>Prueba</h1>
        </div>*/
        <>
            <UseGlobalProvider>
                <MainHeader />
                <motion.section className="grid grid-cols-[1fr] lg:grid lg:grid-cols-[1fr_3fr] mt-6 md:gap-4 max-h-[screen] md:grid md:grid-cols-1 md:max-h-[50%] md:mx-auto md:max-w-[920px] lg:min-w-[1010px] font-500 text-xl mb-4 lg:mx-auto dark:bg-slate-950"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                >
                    <Section_1 />
                    <Section_2 />
                </motion.section>
                {/* <div className="mx-auto grid justify-center items-center md:ml-2 text-center md:text-left">
                            </div> */}
            </UseGlobalProvider>
        </>
    )
}
export default APP;