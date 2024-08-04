import React from 'react'
import '../../css/form.css'
import Navbar from '../navbar'

const signup = () => {
    return (
        <>
            <Navbar search={() => { }} />
            <div id='signupForm' className='my-16 py-6 bg-black'>
                <div className="formContainer">
                    <form className="form p-10 " action="">
                        <p className="title font-[500]">Create Account</p>
                        <input type='email' placeholder="Enter email" className="username input w-full" />
                        <input type="password" placeholder="Password" className="password input w-full" />
                        <button className="btn font-[700]" type="submit">Create</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default signup