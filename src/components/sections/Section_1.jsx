import postImg from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-create-post.webp";
import aiContent from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-ai-content.webp";

const Section_1 = () => {
    return (
        <>
            <section className=" md:flex lg:flex lg:flex-col mb-4 text-center md:text-left md:mb-0 mx-4 md:mr-4 lg:mr-0 md:ml-4 gap-4 order-2 md:order-2 lg::order-1 ">
                <section className="bg-yellow-bento-100 rounded-lg basis-1/2 order-2 mb-4 md:mb-0 md:order-1 shadow-xl md:cursor-pointer md:hover:scale-105 ">
                    <h1 className="mx-2 my-4 font-semibold text-3xl mb-10">
                        Create and schedule content <em className="text-purple-500">quicker.</em>
                    </h1>
                    <img src={postImg} alt="" className="mx-auto w-[140px] md:w-[250px] lg:w-[170px]" />
                </section>
                <section className="bg-yellow-bento-500 rounded-lg basis-1/2 order-1 md:order-2 shadow-xl md:cursor-pointer md:hover:scale-105 ">
                    <h1 className="mx-4 my-4 font-semibold text-3xl mb-10 ">
                        Write your content using AI.
                    </h1>
                    <img src={aiContent} alt="" className="w-[190px] mx-auto mb-5" />
                </section>
            </section>
        </>
    )
}
export default Section_1;