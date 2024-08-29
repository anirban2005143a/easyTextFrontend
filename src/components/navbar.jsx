import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar/navbar.css'
import '../css/navbar/importedCss.css'

const Navbar = (props) => {

    const navigate = useNavigate()



    return (
        <div ref={props.navbarRef} className='navbar position-absolute top-0 start-0 w-100  '>
            <div className="navbarGroup w-100 pt-2 d-flex align-items-center position-relative">
                <div className="siteName mx-3 mb-2 fw-bolder ">
                    <div className="name " onClick={()=>{navigate("/")}} >Easy Text</div>
                </div>

                <div className="menubar ms-md-3 ms-sm-2 mt-1 pb-1 position-relative d-flex justify-content-between align-items-center" >
                    <Link to='/'> <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 '>Home</div></Link>
                    <Link to='/about'> <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 '>About</div></Link>
                    {/* <div className=' py-2 mx-md-3 mx-sm-2 mx-1 px-md-2 px-1 services' clicked="false">Services</div> */}
                </div>

                {/* <div className="authentication">
                    <button className=' signup' onClick={() => { navigate("/signup") }}>
                        Sign-up
                    </button>
                    <button className=' login' onClick={() => { navigate("/login") }}>
                        Log-in
                    </button>
                </div> */}

             
            </div>





            {/* <div className="profile">
                <div className="profileImg"></div>
            </div> */}
        </div>
    )
}

export default Navbar