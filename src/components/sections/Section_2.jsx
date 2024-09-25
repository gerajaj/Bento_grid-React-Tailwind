import fiveStars from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-five-stars.webp";
import multPlatform from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-multiple-platforms.webp";
import schedule from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-consistent-schedule.webp";
import schedulePosts from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-schedule-posts.webp";
import audienceGrowth from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-audience-growth.webp";
import growFollowers from "C:/Users/javi/Desktop/Proyectos/Bento_grid/src/assets/design/images/illustration-grow-followers.webp";

const Section_2 = () => {
    return (
        <section className="ml-4 md:ml-4 lg:ml-0 md:order-1 lg:order-2 text-center">
            <section className="">
                <section className="md:flex md:flex-col-2">
                    <section className=" md:basis-2/3">
                        <section className="bg-purple-bento-500 flex-2 rounded-lg py-[40px] md:py-[50px] mr-4 md:mr-0 order-1 md:order-3 items-center justify-center shadow-xl md:cursor-pointer md:hover:scale-110">
                            <h1 className="md:mt-1 mx-4 font-semibold mb-10 text-white text-5xl ">
                                Social Media <span className="emphasis text-yellow-500">10x</span> <em>Faster</em> than AI
                            </h1>
                            <img src={fiveStars} alt="" className="w-[170px] mx-auto mb-5 md:mb-2 md:mt-10" />
                            <p className="mx-2 mt-2 text-white text-lg font-thin"><em>Over 4,000 5-star reviews</em></p>
                        </section>
                        <section className="grid md:flex my-4 gap-4">
                            <section className="bg-white py-[5px] rounded-lg mr-4 md:mr-0 order-2 md:basis-1/2 md:order-4 shadow-xl md:cursor-pointer md:hover:scale-110">
                                <img src={multPlatform} alt="" />
                                <h1 className="ml-2 font-semibold text-2xl mt-6 md:text-left mb-4 md:mb-0"> Manage multiple accounts and platforms.
                                </h1>
                            </section>
                            <section className="bg-yellow-bento-500 rounded-lg py-[5px] md:basis-1/2 order-3 md:order-5 mr-4 md:mr-0 shadow-xl overflow-hidden md:cursor-pointer md:hover:scale-110">
                                <h1 className="mx-5 md:text-left font-semibold text-2xl mb-6 leading-none mt-4">
                                    Maintain a consistent posting schedule.
                                </h1>
                                <img src={schedule} alt="" className="mx-auto w-[400px] md:w-[180px] md:h-[120px] md:-mb-10 " />
                            </section>
                        </section>
                    </section>
                    <section className="rounded-lg md:flex-2 md:basis-1/3 bg-purple-bento-100 md:ml-4 mb-4 mr-4 order-4 md:order-6 shadow-xl md:cursor-pointer md:hover:scale-105">
                        <h1 className=" font-semibold text-3xl md:mt-4  md:text-left leading-none mb-5 md:mx-5 lg:mx-5"><br />Schedule to social media</h1>
                        <img src={schedulePosts} alt="" className="md:w-[200px] mx-auto h-[250px] w-[250px] mb-5" />
                        <p className="ml-2 md:text-left font-light md:text-sm mx-6 md:mx-4 lg:text-justify lg:mx-8">
                            Optimize post timings to publish content at the perfect time for your audience.
                        </p>
                    </section>
                </section>
                <section></section>
            </section>

            <section className="grid md:flex">
                <section className="flex-1 bg-white rounded-lg mr-4 mb-4 md:mb-0 order-2  md:basis-[calc(33.33%-12px)] md:order-7 shadow-xl h-[350px] md:h-[250px] items-center justify-center md:cursor-pointer md:hover:scale-110">
                    <h1 className="text-5xl font-semibold mt-10">{`>56%`}</h1>
                    <p className="text-lg my-4">faster audience growth</p>
                    <img src={audienceGrowth} alt="" className="mx-auto max-w-[180px]" />
                </section>
                <section className="flex-2 bg-purple-bento-500 rounded-lg md:basis-2/3 py-[35px] mr-4 mb-4 md:mb-0 order-1 md:order-8 shadow-xl md:grid md:grid-cols-[2fr_3fr] md:items-center md:cursor-pointer md:hover:scale-105">
                    <img src={growFollowers} alt="" className="mx-auto md:ml-4 max-w-[200px] md:mr-4 " />
                    <h1 className="text-white font-semibold text-4xl md:tracking-wider">Grow Followers with non-stop content.</h1>
                </section>
            </section>
        </section>)
}
export default Section_2;