import React, { useRef, useState, useEffect, useContext } from 'react'
import ProjectContext from '../../context/projectContext'
import Navbar from '../navbar'
import Footer from '../footer'
import '../../css/TextToCode/execution.css'
import '../../css/TextToCode/importedCss.css'
import '../../css/common.css'

const pythonExecution = () => {

    const value = useContext(ProjectContext)
    console.log(value)
    const footerRef = useRef()

    const [isGenerating, setisGenerating] = useState(false)
    const [generateText, setgenerateText] = useState('Response will show here')

    //function to call api and get response
    const textToCode = async (prompt) => {
        const res = await fetch(`${value.backendURL}/python/texttocode`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authToken: `${value.authtoken}`,
            },
            body: JSON.stringify({
                prompt
            })
        })
        console.log(res)
        const data = await res.text()
        console.log(data)
        setisGenerating(false)
        setgenerateText(data)
    }

    return (
        <>
            <div className=' w-100 h-100 bg-black'>
                <Navbar />

                <div className=" w-100 h-100 bg-black d-flex flex-column align-items-center mb-4" id="pythonExecution">
                    <div className="FeatureHeading">Execute Python Code</div>
                    <div className="FeatureRelatedAbout">Run your Python code directly on here with real-time execution. Simply input your code, and receive instant results and outputs, making it easy to test and debug Python scripts on the fly.</div>

                    <div className="FeatureInputSection w-100">
                        <form className='w-100' onSubmit={(e) => {
                            e.preventDefault()
                            const prompt = e.currentTarget.querySelector('input').value
                            textToCode(prompt)
                            console.log("submit")
                            setisGenerating(true)
                        }}>
                            <div className="formcontrol mx-auto">
                                <input required type="value" />
                                <label>
                                    <span style={{ transitionDelay: "350ms" }}>T</span>
                                    <span style={{ transitionDelay: "300ms" }}>E</span>
                                    <span style={{ transitionDelay: "250ms" }}>X</span>
                                    <span style={{ transitionDelay: "200ms" }}>T</span>
                                </label>
                            </div>
                            {!isGenerating && <div className="TextSubmit w-100 d-flex justify-content-center">
                                <button type="submit" className=" mx-auto">
                                    Convert
                                </button>
                            </div>}
                            {isGenerating && <div className="LoadResponse">
                                <div className="wrapper mx-auto my-3">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                </div>
                            </div>}
                        </form>
                    </div>

                    <div className="FeatureOutput rounded-2 mx-auto position-relative p-3">
                        <div className="copyOutput p-2 mt-2 me-2 z-1 rounded-2 top-0 end-0" >
                            <div className="svgIcon me-2" style={{ width: "18px" }}>
                                <svg className=' w-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill='grey' d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                                </svg>
                            </div>
                            <div className="copyText" style={{ color: "gray" }}>copy</div>
                        </div>
                        <div className="generatedText ">
                            <pre>{generateText}</pre>
                        </div>
                    </div>
                </div>



                <Footer footerRef={footerRef} isFooterVisible={true} />

            </div>

        </>
    )
}

export default pythonExecution