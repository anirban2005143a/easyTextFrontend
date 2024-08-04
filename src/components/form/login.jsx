import React from 'react'
import '../../css/form.css'
import Navbar from '../navbar'

const login = () => {
    return (
        <>
        <Navbar search={()=>{}}/>
            <div id='loginForm' className='my-16 py-6 bg-black'>
                <div className="formContainer">
                    <form className="form p-10 " action="">
                        <p className="title font-[500]">Welcome</p>
                        <input placeholder="Enter email" className="username input w-full" />
                        <input placeholder="Password" className="password input w-full" type="password" />
                        <button className="btn font-[700]" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default login