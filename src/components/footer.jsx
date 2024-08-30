import React, { useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import '../css/footer.css'


const Footer = (props) => {

  const navigate = useNavigate()

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
    <div id='footer' ref={props.footerRef} className={` bg-black position-relative w-100 my-4 ${props.isFooterVisible ? 'visibility' : ''}`} >
      <div className="footer w-100 d-flex flex-wrap ">

        <div className="services footerChild px-2 py-1 mt-3">
          <div className="ourServies" id="title"> All Services</div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/blog/title")}}> Blog Title </div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/blog/content")}}> Blog Content</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/blog/summary")}}> Blog summary</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/social/post")}}> Social Post</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/promotion")}}> Promotional Advertisement</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/youtube/desc")}}> Video Description</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/youtube/title")}}> Video Title</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/text/formate")}}> Text Formate</div></div>
          <div className="ourServies cursor-pointer"><div onClick={()=>{navigate("/features/jobrole")}}> Job Decsription</div></div>
        </div>

        <div className="keyFeatures footerChild px-2 py-1 mt-3">
          <div className="keys" id="title"> Features</div>
          <div className="keys"><div> AI-Powered Content Generation</div></div>
          <div className="keys"><div> Completely Free and Accessible</div></div>
          <div className="keys"><div> Streamlined User Experience</div></div>
        </div>

        <div className="support footerChild px-2 py-1 mt-3">
          <div className="supportItem" id="title"> Support</div>
          <div className="supportItem cursor-pointer"> <Link className=' text-decoration-none' to="/"> <div> Home</div></Link></div>
          <div className="supportItem cursor-pointer"> <Link className=' text-decoration-none' to="/about"> <div> About</div></Link></div>
          <div className="supportItem cursor-pointer"> <Link className=' text-decoration-none' to="/contact"> <div> Contact</div></Link></div>
          {/* <div className="supportItem cursor-pointer"> <Link className=' text-decoration-none' to="/requestFeature"> <div> Request a new feature</div></Link></div> */}
        </div>

      </div>
    </div>
  )
}

export default Footer