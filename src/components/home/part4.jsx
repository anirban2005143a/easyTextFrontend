import React from 'react'
import '../../css/home.css'

const part4 = (props) => {

    return (
        <>
            <div ref={props.part4Ref} className={`homePart4 py-10 ${window.innerWidth > 500 ? "px-7" : "px-2"}`}>
                <div className={` content flex md:flex-row flex-col justify-center items-center ${window.innerWidth > 500 ? "px-7" : "px-2"}`}>
                    <div className="imageContent">
                        <svg className={` w-full  mx-auto pb-2`} id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                            <rect x="0" y="0"  fill="#000000"></rect>
                            <g transform="translate(411.6823518591588 315.78008071674276)">
                                <path d="M151.5 -153.7C199.4 -103.7 243.2 -51.9 246.7 3.5C250.3 58.9 213.5 117.9 165.7 159.2C117.9 200.5 58.9 224.3 -3.3 227.6C-65.5 230.9 -131.1 213.7 -156.1 172.4C-181.1 131.1 -165.5 65.5 -165.5 0C-165.5 -65.5 -181.1 -131.1 -156.1 -181.1C-131.1 -231.1 -65.5 -265.5 -6.8 -258.7C51.9 -251.9 103.7 -203.7 151.5 -153.7" fill="#3f125f">
                                </path></g></svg>                    </div>
                    <div className={`textContent md:w-7/12 transition-all duration-500 ease-in ${props.isPart4Visible ? 'opacity-100 translate-x-0' : ' opacity-0 translate-x-20'}`}>
                        <div className="heading text-3xl font-medium">Completely Free and Accessible</div>
                        <div className="relatedContent text-base font-normal">
                            Our platform is designed to be as user-friendly as possible. You don't need to sign up or subscribe—simply access the site and start creating. We're committed to making powerful AI tools available to everyone, completely free of charge. Whether you're a frequent user or just need a one-time solution, you can take full advantage of our services without any hidden costs.                            </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default part4