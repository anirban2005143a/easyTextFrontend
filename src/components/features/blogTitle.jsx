import React, { useContext, useState, useRef } from "react";
import ProjectContext from "../../context/projectContext";
import Navbar from "../navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Part2 from "../home/part2";
import Footer from "../footer";
import axios from "axios";
import Loadingui from "../Loadingui.jsx";

const blogTitle = () => {
  const value = useContext(ProjectContext);
  const part2Ref = useRef()

  const [prompt, setprompt] = useState("");
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  // after retriving the id from local then set that id into useris

  const fetch_data = async (e) => {
    const currentTarget = e.currentTarget;
    currentTarget.disabled = true;
    setLoading(true);
    toast.success("Generation is in progress");
    try {
      const userId = import.meta.env.VITE_REACT_USERID;
      const response = await axios.post(
        `${value.backendURL}/data/api/v1/kol/Blogtitle`,
        {
          userId,
          prompt,
        }
      );
      currentTarget.disabled = false;
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      currentTarget.disabled = false;
      toast.error(
        "Hacing some issue in Gemini API server or the model is overloaded , try again later"
      );
      setLoading(false);
      setData(error.response.statusText);
    }
  };

  const textBackground = {
    backgroundImage:
      "linear-gradient(45deg,aqua ,#952bff, #ff669e , #952bff , aqua)",
    backgroundSize: "400%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    animation: "textBackground 30s linear 0s infinite",
  };
  return (
    <>
      <Navbar />
      <div className="bg-black" id="blogTitle">
        <div className="introduction mt-28 ">
          <div
            className="title text-center text-3xl font-[800] uppercase py-3"
            style={textBackground}
          >
            blog title
          </div>
          <div className="relatedText text-center text-lg px-8 py-3 text-amber-100">
            Generate engaging blog titles effortlessly with our tool. Input your
            content, and we’ll suggest compelling titles that capture your
            audience's attention.
          </div>
        </div>

        <div className="inputSection flex justify-center  items-center  my-6">
          <div className="inputArea md:w-9/12 sm:w-11/12 w-full md:p-4 p-2 m-3 bg-zinc-900 rounded-xl">
            <div className="textArea mt-2">
              <textarea
                value={prompt}
                onChange={(e) => setprompt(e.target.value)}
                placeholder="Enter Your Blog Here"
                className="text-base p-2 outline-none text-white rounded-md placeholder-zinc-200 bg-gray-700 w-full min-h-28 max-h-80"
              />
            </div>

            <div className="generateBtn flex justify-center my-6">
              <button
                onClick={fetch_data}
                className="relative px-6 py-2.5 rounded-lg overflow-hidden group bg-gradient-to-r hover:to-black text-zinc-200 hover:bg-gradient-to-r hover:from-blue-700  from-blue-700 to-rose-800 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                <span className="relative text-xl font-semibold">Generate</span>
              </button>
            </div>
          </div>
        </div>

        {Loading && (
          <div className="loadng">
            <Loadingui />
          </div>
        )}

        {data && (
          <div
            id="output"
            className=" flex justify-center  items-center "
            style={{ color: "rgb(255 250 226)" }}
          >
            <div className=" md:w-9/12 sm:w-11/12 w-full md:p-4 p-2 bg-zinc-900 rounded-xl">
              <pre className=" whitespace-pre-wrap break-words">{data}</pre>
            </div>
          </div>
        )}


      </div>
      <Part2 part2Ref={part2Ref} isPart2Visible={true} />
      <Footer isFooterVisible={true} />
      <ToastContainer />
    </>
  );
};

export default blogTitle;
