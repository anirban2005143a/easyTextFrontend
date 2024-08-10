import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'


const Footer = (props) => {

  const resize = () => {
    const footer = document.querySelector('.footer')
    const footerChildArr = Array.from(document.querySelectorAll('.footer .footerChild'))
    const width = footer.clientWidth

    width >= 700 ? footerChildArr.forEach((child, index) => {
      child.style.width = `${width / 3 - 10}px`
    }) : ''

    550 < width && width < 700 ? footerChildArr.forEach((child, index) => {
      index === 2 ? child.style.width = `${width * 1.0 - 10}px` : child.style.width = `${width * 0.5 - 10}px`
    }) : ''

    350 <= width && width <= 550 ? footerChildArr.forEach((child, index) => {
      child.style.width = `${width * 1 - 10}px`
    }) : ''
  }

  window.addEventListener('resize', () => {
    resize()
  })

  useEffect(() => {
    resize()
  }, [])


  return (
    <div id='footer' ref={props.footerRef} className={` bg-black position-relative w-100 mb-4 ${props.isFooterVisible ? 'visibility' : ''}`} >
      <div className="footer w-100 d-flex flex-wrap ">

        <div className="services footerChild px-2 py-1 mt-3">
          <div className="ourServies" id="title"> All Services</div>
          <div className="ourServies"><div> Blog </div></div>
          <div className="ourServies"><div> Advertisment</div></div>
          <div className="ourServies"><div> Email Writing</div></div>
          <div className="ourServies"><div> Youtube Video Content</div></div>
          <div className="ourServies"><div> Text Edit</div></div>
          <div className="ourServies"><div> Summarize and Extend</div></div>
          <div className="ourServies"><div> Analyze Images</div></div>
          <div className="ourServies"><div> Analyze Audio</div></div>
          <div className="ourServies"><div> Get and Execute Python</div></div>
          <div className="ourServies"><div> Get json Object</div></div>
        </div>

        <div className="keyFeatures footerChild px-2 py-1 mt-3">
          <div className="keys" id="title"> Features</div>
          <div className="keys"><div> Image Analyzation</div></div>
          <div className="keys"><div> Audio Analyzation</div></div>
          <div className="keys"><div> Code Execution</div></div>
          <div className="keys"><div> Json Object</div></div>
        </div>

        <div className="support footerChild px-2 py-1 mt-3">
          <div className="supportItem" id="title"> Support</div>
          <div className="supportItem"> <Link className=' text-decoration-none' to="/"> <div> Home</div></Link></div>
          <div className="supportItem"> <Link className=' text-decoration-none' to="/about"> <div> About</div></Link></div>
          <div className="supportItem"> <Link className=' text-decoration-none' to="/contact"> <div> Contact</div></Link></div>
          <div className="supportItem"> <Link className=' text-decoration-none' to="/requestFeature"> <div> Request a new feature</div></Link></div>
        </div>

      </div>
    </div>
  )
}

export default Footer