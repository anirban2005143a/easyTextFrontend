import React from 'react'
import '../../css/home.css'

const part3 = (props) => {

    return (
        <>
            <div ref={props.part3Ref} className={`homePart3 py-10 ${window.innerWidth > 500 ? "px-7" : "px-2"}`}>
                <div className={` content flex md:flex-row flex-col-reverse justify-center items-center ${window.innerWidth > 500 ? "px-7" : "px-2"} `}>
                    <div className={`textContent md:w-7/12 w-full transition-all duration-500 ease-in ${props.isPart3Visible ? 'opacity-100 translate-x-0' : "opacity-0 -translate-x-20"}`}>
                        <div className="heading text-3xl font-medium">AI-Powered Content Generation</div>
                        <div className="relatedContent text-base font-normal">
                            Leverage cutting-edge AI technology to create a wide variety of content, from blogs to social media posts, with just a few clicks. Whether you're a content creator, marketer, or someone looking to express ideas, our platform helps you generate high-quality text tailored to your needs. The AI models are designed to understand your input and produce engaging and relevant content, saving you time and effort
                        </div>
                    </div>
                    <div className="imageContent">
                        <svg className={` w-full mx-auto pb-2`} id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                            <rect x="0" y="0"  fill="#000000"></rect>
                            <g transform="translate(402.9103817276363 280.0477592458563)">
                                <path d="M184.1 -174.9C232.4 -135.8 261.2 -67.9 255.7 -5.5C250.1 56.8 210.3 113.6 161.9 163.6C113.6 213.6 56.8 256.8 -1.9 258.7C-60.6 260.6 -121.2 221.2 -146.2 171.2C-171.2 121.2 -160.6 60.6 -155.9 4.7C-151.2 -51.1 -152.3 -102.3 -127.3 -141.5C-102.3 -180.6 -51.1 -207.8 8.4 -216.2C67.9 -224.5 135.8 -214.1 184.1 -174.9" fill="#3f125f">
                                </path></g></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default part3