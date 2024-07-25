import React, { useEffect, useState } from 'react'
import '../../css/home.css'

const part2 = (props) => {

  const resizeServiceItem = () => {
    const serviceList = document.querySelector('.homepart2 .serviceList')
    const serciceItemArr = Array.from(document.querySelectorAll('.homepart2 .serciceItem'))
    const width = serviceList.clientWidth

    width >= 850 ? serciceItemArr.forEach((item) => { item.style.width = `${width * 0.25 - 30}px` }) : ''
    600 <= width && width < 850 ? serciceItemArr.forEach((item) => { item.style.width = `${width * 0.33 - 30}px` }) : ""
    450 <= width && width < 600 ? serciceItemArr.forEach((item) => { item.style.width = `${width * 0.5 - 50}px` }) : ""
    width < 450 ? serciceItemArr.forEach((item) => { item.style.width = `${width * 1.0 -10}px` }) : ""
  }

  const makeRandomAnimation = () => {
    const serciceItemArr = Array.from(document.querySelectorAll('.homepart2 .serciceItem'))
    serciceItemArr.forEach((item, index) => {
      const randomAngle = Math.floor(Math.random() * 90) + Math.floor(Math.random() * 45)
      item.style.setProperty('--angle', Math.max(randomAngle, 10) + 'deg')
      index % 2 === 0 ? item.style.setProperty('--animation-direction', 'reverse') : ''
      index % 3 === 0 ? item.style.setProperty('--animation-direction', 'alternate') : ''
      index % 5 === 0 ? item.style.setProperty('--animation-direction', 'alternate-reverse') : ''
    })
  }

  window.addEventListener('resize', () => {
    resizeServiceItem()
  })

  useEffect(() => {
    resizeServiceItem()
    makeRandomAnimation()
  }, [])


  return (
    <div ref={props.part2Ref} className={`homepart2 w-100 bg-black ${props.isPart2Visible ? 'visibility' : ''}`} style={{}}>
      <div className="serviceSection w-100 h-auto">
        <div className="title d-flex justify-content-center">
          <div id="title" className=' h1 fw-bold'>Explore More</div>
        </div>
        <div className="allservices w-100 h-auto">
          <div className="serviceList mx-md-4 mx-2 my-3 px-md-2 px-1 pt-2 d-flex flex-wrap justify-content-center align-items-center">
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Blog Title</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Blog Introduction</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Blog Content</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Blog Post</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Paragraph</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Social Media Post</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Promotional Advertisement</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Professional Email</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Youtube Video Description</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Youtube Video Tags</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Youtube Video Title</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Text Formate</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Sentence Expender</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Job Decsription</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Change Text Tone</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Photo Caption</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Image to Sumarize Content</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Image to Question-Answer</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Transcription of Audio</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Describe Audio</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Sumarize Audio</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Audio to Question-Answer</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Get Python Code</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Execute Python Code</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
            <div className="serciceItem mx-2 my-2 position-relative rounded-3 overflow-hidden text-center text-white">
              <div className='serviceName rounded-top-3 position-relative z-1 bg-black px-md-3 px-2 pt-md-3 pt-sm-2 pt-3 fs-4 fw-bold' > Get json Object</div>
              <div className='relatedContent rounded-bottom-3 bg-black position-relative z-1 fw-light text-center px-2 pb-4 pt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos dolorum rerum maiores qui </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default part2