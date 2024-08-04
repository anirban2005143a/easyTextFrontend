import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import demoImg1 from '/download (1).jpeg'

const blogSummary = () => {

    const textBackground = {
        backgroundImage: "linear-gradient(45deg,aqua ,#952bff, #ff669e , #952bff , aqua)",
        backgroundSize: "400%",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        animation: "textBackground 30s linear 0s infinite",
    }

    return (
        <>
            <Navbar />
            <div className='bg-black' id="blogSummary">

                <div className="introduction mt-28 ">
                    <div className="title text-center text-4xl font-[800] uppercase py-3" style={textBackground} >blog summary</div>
                    <div className="relatedText text-center text-lg px-8 py-3 text-amber-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, corporis! Dolores rem nam explicabo nesciunt consequuntur architecto, nobis cupiditate mollitia. Commodi reiciendis ab, numquam tenetur cupiditate vel optio omnis vitae.
                    </div>
                </div>

                <div className="inputSection flex justify-center  items-center px-8 my-6">
                    <div className="inputArea w-9/12 p-4 m-3 bg-zinc-900 rounded-xl">

                        <div className="content text-zinc-200 text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet nesciunt eos quos accusamus nobis quis ad, illo incidunt iusto reiciendis natus culpa eius excepturi error molestiae, voluptatum placeat atque.
                        </div>

                        <div className="textArea mt-10">
                            <textarea name="textArea" id="blogTitleTextArea" className=' text-base p-2 outline-none text-gray-800 rounded-md placeholder-zinc-200 bg-neutral-700 w-full min-h-28 max-h-80'
                                placeholder="Enter Your Blog Here">
                            </textarea>
                        </div>

                        <div className="generateBtn flex justify-center my-6">
                            <button
                                className="relative px-6 py-2.5 rounded-lg overflow-hidden group bg-gradient-to-r hover:to-black text-zinc-200 hover:bg-gradient-to-r hover:from-blue-700  from-blue-700 to-rose-800 transition-all ease-out duration-300"
                            >
                                <span
                                    className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"
                                ></span>
                                <span className="relative text-xl font-semibold">Generate</span>
                            </button>
                        </div>
                    </div>
                    <div className="animationArea w-3/12 bg-slate-700">
                        <img className='w-full object-cover' src={demoImg1} />
                    </div>
                </div>

                <div id="output">

                </div>

                <div className="otherBlogFeatures">
                    <div className="title text-center text-2xl font-[600]" style={textBackground}>Check out other blog features</div>
                    <div className="otherBlogsFeature">
                        <div className="feature1 flex justify-center items-center p-6">
                            <div className="content w-7/12 p-4">
                                <div className="heading text-2xl font-[700] text-orange-50 my-4">Blog quickoutcome</div>
                                <div className="relatedContent text-base font-[400] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur itaque illum amet inventore aliquam deleniti deserunt quis repellendus. Tempore sed accusantium esse provident blanditiis perspiciatis consequuntur ratione quae molestiae veniam!
                                    Voluptatibus deserunt ipsam ducimus sapiente excepturi? Quos et cum ad placeat id neque doloribus soluta aliquid facilis assumenda officia, consectetur vero mollitia esse architecto rem. Perferendis obcaecati reiciendis rerum odit?
                                </div>
                            </div>
                            <div className="image w-5/12 p-4">
                                <img className=' rounded-md w-full' src={demoImg1} />
                            </div>
                        </div>
                        <div className="feature2 flex justify-center items-center p-6">
                            <div className="image w-5/12 p-4">
                                <img className=' rounded-md w-full' src={demoImg1} />
                            </div>
                            <div className="content w-7/12 p-4">
                                <div className="heading text-2xl font-[700] text-orange-50 my-4">Blog Title</div>
                                <div className="relatedContent text-base font-[400] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur itaque illum amet inventore aliquam deleniti deserunt quis repellendus. Tempore sed accusantium esse provident blanditiis perspiciatis consequuntur ratione quae molestiae veniam!
                                    Voluptatibus deserunt ipsam ducimus sapiente excepturi? Quos et cum ad placeat id neque doloribus soluta aliquid facilis assumenda officia, consectetur vero mollitia esse architecto rem. Perferendis obcaecati reiciendis rerum odit?
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer isFooterVisible={true}/>
        </>
    )
}

export default blogSummary