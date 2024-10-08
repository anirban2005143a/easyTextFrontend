import React, { useState, useEffect, useRef, useContext } from 'react'
import Navbar from '../navbar.jsx'
import Footer from '../footer.jsx'
import '../../css/support.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadingui from '../Loadingui.jsx';
import ProjectContext from '../../context/projectContext.js';

const Contact = () => {

    const value = useContext(ProjectContext)

    const footerRef = useRef()
    const [isFooterVisible, setisFooterVisible] = useState(false)
    const [Loading, setLoading] = useState(false)

    const sendmail = async (e) => {
        setLoading(true)
        const btn = e.currentTarget.querySelector("button")
        btn.disabled = true
        const email = document.querySelector("#userMail").value
        const subject = document.querySelector("#mailSubject").value
        const content = document.querySelector("#mailingText").value
        toast.success("Generation is in progress")
        const res = await fetch(`${value.backendURL}/user/contact`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    content: `Subject is - ${subject} \n\nContent is - ${content}`
                })
            }
        )
        const data = await res.json()
        console.log(data)
        btn.disabled = false;
        document.querySelector("#userMail").value = ""
        document.querySelector("#mailSubject").value = ""
        document.querySelector("#mailingText").value = ""
        setLoading(false)
        if (!data.error) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }

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
                    <div className="heading font-serif py-4 text-4xl font-bold ">Contact Us</div>
                    <div className="relatedContent">Your experience is our priority, and we're committed to ensuring you get the most out of our AI-powered content generation tools. Thank you for connecting with us!</div>
                    <div className="contactForm rounded-4 overflow-hidden ">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            sendmail(e)
                        }} className='w-100 p-2 z-1 position-relative bg-black rounded-4 py-4 px-2'>
                            <div className=' mx-auto formContent' >
                                <div className="enterGmail w-100 my-1">
                                    <label htmlFor="userMail">Enter email</label><br />
                                    <input type="email" id='userMail' placeholder='Enter email' className='placeholder:text-gray-900' />
                                </div>
                                <div className="mailSubject w-100 my-1">
                                    <label htmlFor="mailSubject">Write Subject</label><br />
                                    <input type="text" id='mailSubject' placeholder='Write Subject' className='placeholder:text-gray-900' />
                                </div>
                                <div className="mailContent w-100 my-1">
                                    <label htmlFor="mailingText">Write Content</label><br />
                                    <textarea className='placeholder:text-gray-900' name="mailingText" id="mailingText" placeholder='Write content for your mail...'></textarea>
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
                {Loading && (
                    <div className="loadng">
                        <Loadingui />
                    </div>
                )}
                <Footer footerRef={footerRef} isFooterVisible={isFooterVisible} />
            </div>
            <ToastContainer />
        </>

    )
}

export default Contact