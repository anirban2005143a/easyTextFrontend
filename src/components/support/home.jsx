import React, { useEffect , useRef , useState } from 'react'
import Part1 from '../home/part1'
import Navbar from '../Navbar'
import Part2 from '../home/part2'
import Footer from '../Footer'

const home = () => {
    
    const navbarRef = useRef()
    const part1Ref = useRef()
    const part2Ref = useRef()
    const footerRef = useRef()

    const [isPart2Visible, setisPart2Visible] = useState(false)
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
                    if(part2Ref.current.contains(entry.target)){
                        setisPart2Visible(true)
                    }
                    else if(footerRef.current.contains(entry.target)){
                        setisFooterVisible(true)
                    }
                }
            });
        }, options);

        if (part1Ref.current) observer.observe(part1Ref.current);
        if (part2Ref.current) observer.observe(part2Ref.current);
        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (part1Ref.current) observer.unobserve(part1Ref.current);
            if (part2Ref.current) observer.unobserve(part2Ref.current);
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);


    return (
        <>
            <div className="homepage w-100 h-100 overflow-x-hidden bg-black">
                <Navbar navbarRef={navbarRef} />
                <Part1 part1Ref={part1Ref} />
                <Part2 part2Ref={part2Ref} isPart2Visible={isPart2Visible} />
                <Footer footerRef={footerRef} isFooterVisible={isFooterVisible} />
            </div>
        </>
    )
}

export default home