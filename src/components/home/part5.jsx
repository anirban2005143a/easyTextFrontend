import React from 'react'
import '../../css/home.css'

const Part5 = (props) => {

    return (
        <>
            <div ref={props.part5Ref} className={`homePart4 py-10 ${window.innerWidth > 500 ? "px-7" : "px-2"}`}>
                <div className={` content flex md:flex-row flex-col-reverse justify-center items-center ${window.innerWidth > 500 ? "px-7" : "px-2"}`}>
                    <div className={`textContent md:w-7/12 transition-all duration-500 ease-in ${props.isPart5Visible ? 'opacity-100 translate-x-0' : "opacity-0 -translate-x-20"}`}>
                        <div className="heading text-2xl font-bold">Streamlined User Experience</div>
                        <div className="relatedContent text-base font-normal">
                            We focus on providing a seamless experience, allowing you to transform your ideas into polished content quickly and easily. The interface is intuitive, requiring minimal input from you while delivering maximum output. Whether you're generating content for a blog, crafting a social media post, or exploring creative ideas, the process is designed to be smooth, efficient, and enjoyable.                    </div>
                    </div>
                    <div className="imageContent">
                        <svg className={` w-full mx-auto pb-2`} id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                            <rect x="0" y="0" fill="#000000"></rect>
                            <g transform="translate(505.2967866790469 313.66650818793005)">
                                <path d="M81 -95.7C109 -53 138.5 -26.5 144.6 6.1C150.7 38.7 133.3 77.3 105.3 115.3C77.3 153.3 38.7 190.7 -4 194.7C-46.7 198.7 -93.3 169.3 -143.3 131.3C-193.3 93.3 -246.7 46.7 -255.2 -8.5C-263.6 -63.6 -227.3 -127.3 -177.3 -169.9C-127.3 -212.6 -63.6 -234.3 -18.6 -215.7C26.5 -197.2 53 -138.4 81 -95.7" fill="#3f125f">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part5