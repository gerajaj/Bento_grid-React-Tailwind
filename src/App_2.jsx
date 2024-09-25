const APP = () => {
    return (
        <>
            <header className="h-full max-w-full group">
                <button className="flex mx-auto justify-center font-bold bg-purple-300 text-yellow-700 duration-1000 hover:bg-gradient-to-b hover:bg-yellow-300 hover:text-purple-900 py-2 w-full">
                    Bento_Grid
                </button>
            </header>
            <section className="md:grid md:grid-cols-[1fr_3fr] mt-4 gap-4 font-semibold text-xl mr-4">
                <div className="flex flex-col ml-4">
                    <div className="bg-pink-200 mb-4 flex-1">
                        <h1 className="mx-2">Create and schedule content quicker.</h1>
                        <img src="" alt="" className="w-full" />
                    </div>
                    <div className="bg-pink-200 flex-1">
                        <h1 className="mx-2">Write your content using AI</h1>
                        <img src="" alt="" className="w-full" />
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div className="flex-2 basis-2/3">
                            <div className="bg-pink-200 pb-24">
                                <h1 className="ml-2">Social Media 10x faster than AI</h1>
                                <img src="" alt="" className="w-full" />
                                <p className="mx-2 my-2">over 4 thousand 5-star reviews</p>
                            </div>
                            <div className="flex my-4">
                                <div className="bg-pink-200 flex-1 mr-4 py-16">
                                    <h1 className="ml-2">Manage multiple accounts and platforms.</h1>
                                </div>
                                <div className="bg-pink-200 flex-1 py-16">
                                    <h1 className="ml-2">Maintain a consistent posting schedule.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex-2 basis-1/3 bg-pink-200 ml-4 mb-4">
                            <h1 className="ml-2">Schedule to social media</h1>
                            <img src="" alt="" className="w-full" />
                            <p className="ml-2">Optimize post timings to publish content at the perfect time for your audience.</p>
                        </div>
                    </div>

                    <div className="flex mx-auto">
                        <div className="flex-1 bg-pink-200 py-14 basis-[calc(33.33%-12px)] mr-4">
                            <div className="ml-2">
                                <h1>{`>56%`}</h1>
                                <p>faster audience growth</p>
                                <img src="" alt="" className="w-full" />
                            </div>
                        </div>
                        <div className="flex-1 bg-pink-200 py-14 basis-2/3">
                            <img src="" alt="" className="w-full" />
                            <h1 className="ml-2">Grow Followers with non-stop content.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default APP;
