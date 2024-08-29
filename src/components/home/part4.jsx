import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/home.css'
import img from '/download (1).jpeg'

const part3 = (props) => {

    return (
        <>
            <div ref={props.part4Ref} className={`homePart4`}>
                <div className={` content `}>
                    <div className="imageContent">
                        <svg id="visual" viewBox="0 0 900 600"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                            <rect x="0" y="0" width="900" height="600" fill="#000000"></rect>
                            <g transform="translate(411.6823518591588 315.78008071674276)">
                                <path d="M151.5 -153.7C199.4 -103.7 243.2 -51.9 246.7 3.5C250.3 58.9 213.5 117.9 165.7 159.2C117.9 200.5 58.9 224.3 -3.3 227.6C-65.5 230.9 -131.1 213.7 -156.1 172.4C-181.1 131.1 -165.5 65.5 -165.5 0C-165.5 -65.5 -181.1 -131.1 -156.1 -181.1C-131.1 -231.1 -65.5 -265.5 -6.8 -258.7C51.9 -251.9 103.7 -203.7 151.5 -153.7" fill="#3f125f">
                                </path></g></svg>                    </div>
                    <div className={`textContent transition-all duration-500 ease-in ${props.isPart4Visible ? 'opacity-100 translate-x-0' : ' opacity-0 translate-x-20'}`}>
                        <div className="heading">Blog quickoutcome</div>
                        <div className="relatedContent">Generate engaging blog content effortlessly with our AI-powered tool. Input your ideas, and watch as our advanced AI transforms them into well-crafted, compelling blog posts tailored to your needs.</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default part3