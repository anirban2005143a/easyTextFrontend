import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'


const footer = (props) => {

  const resize = () => {
    const footer = document.querySelector('.footer')
    const footerChildArr = Array.from(document.querySelectorAll('.footer .footerChild'))
    const width = footer.clientWidth

    width >= 700 ? footerChildArr.forEach((child, index) => {
      index !== 2 ? child.style.width = `${width * 0.333 - 50}px` : child.style.width = `${width * 0.2 + 50}px`
    }) : ''

    550 < width && width <= 700 ? footerChildArr.forEach((child, index) => {
      index !== 2 ? child.style.width = `${width * 0.5 - 50}px` : child.style.width = `${width * 1.0}px`
    }) : ''

    350 < width && width <= 550 ? footerChildArr.forEach((child, index) => {
      child.style.width = `${width * 1 - 30}px`
    }) : ''
  }

  window.addEventListener('resize', () => {
    resize()
  })

  useEffect(() => {
    resize()
  }, [])


  return (
    <div id='footer' ref={props.footerRef} className={`position-relative w-100 mb-4 ${props.isFooterVisible ? 'visibility' : ''}`} >
      <div className="footer w-100 d-flex flex-wrap justify-content-around text-center">

        <div className="services footerChild px-2 py-1 mt-3">
          <div className="ourServies" id="title"> All Services</div>
          <div className="ourServies"><span> Blog </span></div>
          <div className="ourServies"><span> Advertisment</span></div>
          <div className="ourServies"><span> Email Writing</span></div>
          <div className="ourServies"><span> Youtube Video Content</span></div>
          <div className="ourServies"><span> Text Edit</span></div>
          <div className="ourServies"><span> Summarize and Extend</span></div>
          <div className="ourServies"><span> Analyze Images</span></div>
          <div className="ourServies"><span> Analyze Audio</span></div>
          <div className="ourServies"><span> Get and Execute Python</span></div>
          <div className="ourServies"><span> Get json Object</span></div>
        </div>

        <div className="keyFeatures footerChild px-2 py-1 mt-3">
          <div className="keys" id="title"> Features</div>
          <div className="keys"><span> Image Analyzation</span></div>
          <div className="keys"><span> Audio Analyzation</span></div>
          <div className="keys"><span> Code Execution</span></div>
          <div className="keys"><span> Json Object</span></div>
        </div>

        <div className="support footerChild px-2 py-1 mt-3 ">
          <div className="supportItem" id="title"> Support</div>
          <Link className=' text-decoration-none' to="/"> <div className="supportItem"><span> Home</span></div></Link>
          <Link className=' text-decoration-none' to="/about"> <div className="supportItem"><span> About</span></div></Link>
          <Link className=' text-decoration-none' to="/contact"> <div className="supportItem"><span> Contact</span></div></Link>
          <Link className=' text-decoration-none' to="/requestFeature"> <div className="supportItem"><span> Request a new feature</span></div></Link>
        </div>

      </div>
    </div>
  )
}

export default footer