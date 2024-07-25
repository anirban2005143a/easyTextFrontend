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
            <div id="title" className=' d-flex justify-content-center'><span >My Name Is Anirban Das</span> </div>
            <div id="aboutContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque numquam itaque maiores quibusdam accusamus repudiandae ducimus voluptatem minus magni dicta dolor, quo nobis eveniet delectus voluptas nam alias! Temporibus!</div>
            <div className="allservices">
                <div className="serviceList w-100">
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>
                    <div className="serviceItem"><div className="serviceName">our service item</div><div className="relatedAbout">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam delectus aliquam, nam </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default exploreServices