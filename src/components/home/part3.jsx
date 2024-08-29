import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/home.css'
import img from '/download (1).jpeg'

const part3 = (props) => {

    return (
        <>
            <div ref={props.part3Ref} className={`homePart3`}>
                 <div className={` content `}>
                    <div className={`textContent transition-all duration-500 ease-in ${props.isPart3Visible ? 'opacity-100 translate-x-0' : "opacity-0 -translate-x-20"}`}>
                        <div className="heading">Blog quickoutcome</div>
                        <div className="relatedContent">Generate engaging blog content effortlessly with our AI-powered tool. Input your ideas, and watch as our advanced AI transforms them into well-crafted, compelling blog posts tailored to your needs.</div>
                    </div>
                    <div className="imageContent">
                        <svg id="visual" viewBox="0 0 900 600"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                            <rect x="0" y="0" width="900" height="600" fill="#000000"></rect>
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