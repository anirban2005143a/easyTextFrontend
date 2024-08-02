import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/home.css'
import img from '/download (1).jpeg'

const part3 = (props) => {

    return (
        <>
            <div ref={props.part3Ref} className={`homePart3`}>
                {props.isPart3Visible && <div className={`content ${props.isPart3Visible ? 'visibility' : ''}`}>
                    <div className="textContent">
                        <div className="heading">Blog quickoutcome</div>
                        <div className="relatedContent">Generate engaging blog content effortlessly with our AI-powered tool. Input your ideas, and watch as our advanced AI transforms them into well-crafted, compelling blog posts tailored to your needs.</div>
                    </div>
                    <div className="imageContent">
                        <img className='h-100 w-100 object-cover' src={img} alt="fgfrg" />
                    </div>
                </div>}
            </div>
        </>
    )
}

export default part3