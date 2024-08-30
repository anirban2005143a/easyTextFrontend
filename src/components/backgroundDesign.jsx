import React, { useEffect } from 'react'
import '../css/backgroundDesign.css'

const backgroundDesign = () => {

  const animateBorder = () => {
    const arr = Array.from(document.querySelectorAll('.backgroundDesign .rotatingDiv'))
    arr.forEach((item, index) => {
      const width = item.parentElement.clientWidth
      const height = item.parentElement.clientHeight
      const len = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
      item.style.height = `${Math.min(height, width) * 0.5}px`
      item.style.width = `${len * 1.5}px`
      item.style.top = `${Math.min(height, width) * 0.25}px`
      item.style.left = `-${((len * 1.5) - width) / 2}px`
      index % 2 === 0 ? item.style.animationDirection = 'reverse' : ''
    })
  }


  useEffect(() => {
    animateBorder()
  }, [])


  window.addEventListener('resize', () => {
    if (document.querySelector('.backgroundDesign .rotatingDisk')) {
      animateBorder()
    }
  })

  return (
    <div className="backgroundDesign w-100 h-full position-absolute overflow-y-visible">
      <div className="box1 overflow-hidden position-relative rounded-3" >
        <div className="innerDiv w-100 h-100 bg-black rounded-3"></div>
        <div className="rotatingDiv position-absolute bg-body-secondary " style={{ zIndex: -1 }}></div>
      </div>

      {/* <div className="box2 overflow-hidden position-absolute rounded-3" >
        <div className="innerDiv w-100 h-100 bg-black rounded-3"></div>
        <div className="rotatingDiv position-absolute bg-body-secondary" style={{ zIndex: -1 }}></div>
      </div> */}

      <div className="box3 overflow-hidden position-absolute rounded-3" >
        <div className="innerDiv w-100 h-100 bg-black rounded-3"></div>
        <div className="rotatingDiv position-absolute bg-body-secondary " style={{ zIndex: -1 }}></div>
      </div>

      <div className="box4 overflow-hidden position-absolute rounded-3" >
        <div className="innerDiv w-100 h-100 bg-black rounded-3"></div>
        <div className="rotatingDiv position-absolute bg-body-secondary " style={{ zIndex: -1 }}></div>
      </div>
    </div>
  )
}

export default backgroundDesign