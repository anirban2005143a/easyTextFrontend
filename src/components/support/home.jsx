import React, { useEffect, useRef, useState } from 'react'
import Part1 from '../home/part1.jsx'
import Part2 from '../home/part2.jsx'
import Part3 from '../home/part3.jsx'
import Part4 from '../home/part4.jsx'
import Navbar from '../navbar.jsx'
import Footer from '../footer.jsx'

const Home = () => {

    const navbarRef = useRef()
    const part1Ref = useRef()
    const part2Ref = useRef()
    const part3Ref = useRef()
    const part4Ref = useRef()
    const footerRef = useRef()

    const [isPart2Visible, setisPart2Visible] = useState(false)
    const [isPart3Visible, setisPart3Visible] = useState(false)
    const [isPart4Visible, setisPart4Visible] = useState(false)
    const [isFooterVisible, setisFooterVisible] = useState(false)

    const scrollWithAnimation = (scrollHeight) => {
        const part1Height = part1Ref.current.clientHeight
        const part2Height = part2Ref.current.clientHeight
        const part3Height = part3Ref.current.clientHeight
        const part4Height = part4Ref.current.clientHeight

        !isPart3Visible && scrollHeight >= (part1Height * 0.7 ) ? setisPart3Visible(true) : ''
        !isPart4Visible && scrollHeight >= (part1Height + part3Height *0.6 ) ? setisPart4Visible(true) : ''
        !isPart2Visible && scrollHeight >= (part1Height + part3Height + (part4Height * 0.6)) ? setisPart2Visible(true) : ''
        !isFooterVisible && scrollHeight >= (part1Height + part2Height + part3Height + (part4Height * 0.5)) ? setisFooterVisible(true) : ''

    }

    window.addEventListener('scroll', () => {
        (part1Ref.current &&
            part2Ref.current &&
            part3Ref.current &&
            part4Ref.current &&
            footerRef.current
        ) ? scrollWithAnimation(window.scrollY) : ''
    })

    useEffect(() => {
        (part1Ref.current &&
            part2Ref.current &&
            part3Ref.current &&
            part4Ref.current &&
            footerRef.current
        ) ? scrollWithAnimation(window.scrollY) : ''
    }, [])


    return (
        <>
            <div className="homepage w-100 h-100 overflow-x-hidden bg-black">
                <Navbar navbarRef={navbarRef} />
                <Part1 part1Ref={part1Ref} />
                <Part3 part3Ref={part3Ref} isPart3Visible={isPart3Visible} />
                <Part4 part4Ref={part4Ref} isPart4Visible={isPart4Visible} />
                <Part2 part2Ref={part2Ref} isPart2Visible={isPart2Visible} />
                <Footer footerRef={footerRef} isFooterVisible={isFooterVisible} />
            </div>
        </>
    )
}

export default Home