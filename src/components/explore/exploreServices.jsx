import React, { useEffect } from 'react'
import '../../css/explore.css'

const exploreServices = () => {

    const resize = () => {
        const arr = Array.from(document.querySelectorAll('.exploreServices .allservices .serviceItem'))
        const width = document.querySelector('.exploreServices .allservices  .serviceList').clientWidth
        arr.forEach((item) => {
            width > 680 ? item.style.width = `${width * 0.5 - 50}px` : item.style.width = `${width * 1.0 - 50}px`
        })
    }

    window.addEventListener('resize', () => {
        resize()
    })

    useEffect(() => {
        resize()
    }, [])


    return (
        <div className='exploreServices bg-black'>
            <div id="title" className=' d-flex justify-content-center'><span >Become A Game Changer With Ai Tools</span> </div>
            <div id="aboutContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque numquam itaque maiores quibusdam accusamus repudiandae ducimus voluptatem minus magni dicta dolor, quo nobis eveniet delectus voluptas nam alias! Temporibus!</div>
            <div className="allservices">
                <div className="serviceList w-100">
                    <div className="serviceItem">
                        <div className="serviceName">Blog Title</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Blog Introduction</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Blog Content</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Blog Post</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Paragraph</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Social Media Post</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Promotional Advertisement</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Professional Email</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Youtube Video Description</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Youtube Video Tags</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Youtube Video Title</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Text Formate</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Sentence Expender</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Job Decsription</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Change Text Tone</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Photo Caption</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Image to Sumarize Content</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Image to Question-Answer</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Transcription of Audio</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Describe Audio</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Sumarize Audio</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Audio to Question-Answer</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Get Python Code</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Execute Python Code</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem">
                        <div className="serviceName">Get json Object</div>
                        <div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default exploreServices