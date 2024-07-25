import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import '../../css/support.css'

const contact = () => {
    return (
        <>

            <Navbar />

            <div className=" w-100 h-100 bg-black d-flex flex-column align-items-center" id="contact">
                <div className="heading">Contact Us</div>
                <div className="contactForm w-50 rounded-3 overflow-hidden ">
                    <form className='w-100 p-2 z-1 position-relative bg-black rounded-3 py-4 px-2'>
                        <div className=' mx-auto ' style={{width:"70%"}}>
                            <div className="enterGmail w-100">
                                <label htmlFor="userMail">Enter email</label><br />
                                <input type="email" id='userMail' placeholder='Enter email' />
                            </div>
                            <div className="mailSubject w-100">
                                <label htmlFor="userMail">Write Subject</label><br />
                                <input type="email" id='userMail' placeholder='Write Subject' />
                            </div>
                            <div className="mailContent w-100">
                                <label htmlFor="mailingText">Write Content</label><br />
                                <textarea name="mailingText" id="mailingText" placeholder='Write content for your mail...'></textarea>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default contact