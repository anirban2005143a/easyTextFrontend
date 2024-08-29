import React, { useEffect, useState , useRef } from 'react'
import ExploreServices from './explore/exploreServices'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'

const Explore = () => {
    
    const footerRef = useRef()

    const [isPart2Visible, setisPart2Visible] = useState(false)
    const [isFooterVisible, setisFooterVisible] = useState(false)

    useEffect(() => {
        const options = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.3 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                     if(footerRef.current.contains(entry.target)){
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
        <div className=' position-relative w-100 h-100 bg-black'>
            <Navbar />
            <ExploreServices/>
            <Footer footerRef={footerRef} isFooterVisible={isFooterVisible} />
        </div>
    )
}

export default Explore