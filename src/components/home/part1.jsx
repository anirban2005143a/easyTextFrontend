import React, { useEffect } from 'react'
import BackgroundDesign from '../backgroundDesign'
import { Link } from 'react-router-dom'
import '../../css/home.css'
import Navbar from '../navbar'

const Part1 = (props) => {

  const resizePart1MainContent = () => {
    const homePart1 = document.querySelector('.homePart1')
    if (homePart1) {
      window.innerWidth >= 950 ? homePart1.querySelector('.contentBox').style.width = '50%' : ''
      800 <= window.innerWidth && window.innerWidth < 950 ? homePart1.querySelector('.contentBox').style.width = '65%' : ''
      600 <= window.innerWidth && window.innerWidth < 800 ? homePart1.querySelector('.contentBox').style.width = '80%' : ''
      window.innerWidth < 600 ? homePart1.querySelector('.contentBox').style.width = '95%' : ''
    }

  }

  window.addEventListener('resize', () => {
    resizePart1MainContent()
  })


  useEffect(() => {
    resizePart1MainContent()
  }, [])


  return (
    <div ref={props.part1Ref} className='homePart1  w-100 align-items-center justify-content-center overflow-y-visible' >
      <Navbar/>
      {window.innerWidth >500 &&<BackgroundDesign />}

      <div className="mainContent d-flex pt-24"  >
        <div className="contentBox position-relative rounded-4 overflow-hidden mx-auto" style={{ height: "60%", padding: '1px' }}>
          <div className="homecontents rounded-4 p-4">
            <div className="title">Text Generator</div>
            <div className="headline  my-3 font-thin" style={{letterSpacing:"0px"}}>
            Welcome to our AI-powered content generation platform! Whether you're starting with text or an image, our advanced AI models help you create compelling, high-quality content in just a few clicks. Perfect for blogs, social media, and beyond—let AI turn your ideas into powerful words effortlessly!
            </div>
            <div className="gettingStart d-flex justify-content-center">
              <a href="#explore" >
                <button className=' px-3 py-1 rounded-3 my-3'>
                  <span className=' w-100 h-100 position-relative z-1'>Explore</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="endingWave relative top-full z-20 " style={{width:"200%"}}>
        <div className="svg ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="dualGradient" x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop offset="0%" stopColor="#003790" />
                <stop offset="50%" stopColor="#540183" />
                <stop offset="100%" stopColor="#a1023b" />
              </linearGradient>
              <linearGradient id="dualGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="black" />
              </linearGradient>
            </defs>

            <path fill="url(#dualGradient)" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>

            <path fill="url(#dualGradient1)" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>

          </svg>

        </div>
      </div> */}
    </div>
  )
}

export default Part1