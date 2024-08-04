import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../navbar.jsx'
import Footer from '../footer.jsx'
import '../../css/support.css'

const Contact = () => {

    const footerRef = useRef()
    const [isFooterVisible, setisFooterVisible] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (footerRef.current.contains(entry.target)) {
                        setisFooterVisible(true)
                    }
                }
            });
        }, options);

        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);
    return (
        <>
            <div className=' w-100 h-100 bg-black'>
                <Navbar />

                <div className=" w-100 h-100 bg-black d-flex flex-column align-items-center mb-4" id="contact">
                    <div className="heading">Contact Us</div>
                    <div className="contactForm rounded-4 overflow-hidden ">
                        <form className='w-100 p-2 z-1 position-relative bg-black rounded-4 py-4 px-2'>
                            <div className=' mx-auto formContent' >
                                <div className="enterGmail w-100 my-1">
                                    <label htmlFor="userMail">Enter email</label><br />
                                    <input type="email" id='userMail' placeholder='Enter email' />
                                </div>
                                <div className="mailSubject w-100 my-1">
                                    <label htmlFor="userMail">Write Subject</label><br />
                                    <input type="email" id='userMail' placeholder='Write Subject' />
                                </div>
                                <div className="mailContent w-100 my-1">
                                    <label htmlFor="mailingText">Write Content</label><br />
                                    <textarea name="mailingText" id="mailingText" placeholder='Write content for your mail...'></textarea>
                                </div>
                            </div>
                            <div className="submitBtn d-flex justify-content-center ">
                                <button type='submit' className='mx-auto rounded-3 overflow-hidden px-2 py-1 my-3'>
                                    <div className=" w-100 h-100 position-relative z-1 rounded-3">Contact</div>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <Footer footerRef={footerRef} isFooterVisible={isFooterVisible} />

            </div>

        </>

    )
}

export default Contact