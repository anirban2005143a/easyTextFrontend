import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const navbar = (props) => {

    const setSizeOfServicesList = () => {
    }

    const setWidthOfServiceItem = () => {
        const serviceItem = Array.from(document.querySelectorAll('.navbar .serviceItem'))
        const servicesList = document.querySelector('.navbar .servicesList')
        if (servicesList.clientWidth >= 750) {
            const width = (servicesList.clientWidth * 0.2) - 20
            serviceItem.forEach((item) => {
                item.style.width = `${width}px`
            })
        }
        else if (600 < servicesList.clientWidth && servicesList.clientWidth < 750) {
            const width = (servicesList.clientWidth * 0.25) - 20
            serviceItem.forEach((item) => {
                item.style.width = `${width}px`
            })
        }
        else if (350 < servicesList.clientWidth && servicesList.clientWidth < 600) {
            const width = (servicesList.clientWidth * 0.3333) - 20
            serviceItem.forEach((item) => {
                item.style.width = `${width}px`
            })
        }
    }

    const hoveringServiceMenu = (target, pointer) => {
        const allservices = document.querySelector('.navbar .allservices')
        const menubar = document.querySelector('.navbar .menubar')
        const homeMenu = menubar.querySelectorAll('div')[0]
        const aboutMenu = menubar.querySelectorAll('div')[1]
        target.contains(pointer) ? allservices.classList.remove('hidden') : ''

        if (target.getAttribute('clicked') === "false") {
            if (!target.contains(pointer) && !allservices.querySelector('.servicesList').contains(pointer) && !menubar.contains(pointer)) {
                allservices.classList.add('hidden')

            }
            else if (allservices.querySelector('.servicesList').contains(pointer)) {
                allservices.classList.remove('hidden')

            }
            else if (menubar.contains(pointer) && allservices.querySelector('.servicesList').contains(pointer)) {
                allservices.classList.remove('hidden')

            }
            else if (homeMenu.contains(pointer) || aboutMenu.contains(pointer)) {
                allservices.classList.add('hidden')
            }
        }
    }

    const clickingServiceMenu = (e) => {
        e.preventDefault()
        const currentTarget = e.currentTarget
        const allservices = document.querySelector('.navbar .allservices')
        if (allservices.classList.contains('hidden')) {
            currentTarget.setAttribute('clicked', "true")
            allservices.classList.remove('hidden')
        } else {
            currentTarget.setAttribute('clicked', "false")
            allservices.classList.add('hidden')
        }
    }


    window.addEventListener('resize', () => {
        setSizeOfServicesList()
        setWidthOfServiceItem()
    })

    useEffect(() => {
        setSizeOfServicesList()
        setWidthOfServiceItem()
    }, [])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const serviceMenu = document.querySelector('.navbar .menubar .services')
            const allservices = document.querySelector('.navbar .allservices')
            !allservices.querySelector('.servicesList').contains(e.target) && !serviceMenu.contains(e.target) ? allservices.classList.add('hidden') : ''
        })
        document.addEventListener('mouseover', (e) => {
            const serviceMenu = document.querySelector('.navbar .services')
            hoveringServiceMenu(serviceMenu, e.target)
        })
    }, [])


    return (
        <div ref={props.navbarRef} className='navbar position-fixed top-0 start-0 w-100  '>
            <div className="navbarGroup w-100 pt-2 d-flex align-items-center ">
                <div className="siteName mx-3 mb-2 fw-bolder ">
                    <div className="name " >Easy Text</div>
                </div>

                <div className="menubar ms-md-3 ms-sm-2 mt-1 pb-1 position-relative d-flex justify-content-between align-items-center" >
                    <Link to='/'> <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 '>Home</div></Link>
                    <Link to='/about'> <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 '>About</div></Link>
                    <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 services' clicked="false" onClick={clickingServiceMenu} >Services</div>
                </div>
            </div>

            <div className="allservices w-100 position-relative hidden ">
                <div className='servicesList start-0 p-1 d-flex flex-wrap align-items-center rounded-2 ' style={{ marginLeft: '15%', marginRight: "15%", backgroundImage: 'linear-gradient(74deg, rgb(66 133 244 / 25%), rgb(155 114 203 / 25%), rgb(217 101 112 / 25%))' }}>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Blog</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                    <div className='serviceItem position-relative rounded-2 m-2 overflow-hidden'>
                        <div className=' position-relative '> <p className='fs-4 px-2 fw-semibold rounded-2 m-0 bg-body-secondary'>Services</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar