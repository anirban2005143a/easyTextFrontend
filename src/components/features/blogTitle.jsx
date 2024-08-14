import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projectContext";
import Navbar from "../navbar";
// import '../../css/features/blogTitle.css'
import demoImg1 from "/download (1).jpeg";
import Footer from "../footer";
import axios from "axios";
import Loadingui from "../Loadingui.jsx";

const blogTitle = () => {

  const value = useContext(ProjectContext)

  const [prompt, setprompt] = useState("");
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  // after retriving the id from local then set that id into useris

  const fetch_data = async (e) => {
    const currentTarget = e.currentTarget
    currentTarget.disabled = true
    setLoading(true);
    try {
      console.log("aaagyuae")
      const userId = localStorage.getItem("userId");
      const response = await axios.post(`${value.backendURL}/data/api/v1/kol/Blogtitle`,
        {
          userId,
          prompt,
        }
      );
      console.log(response);
      currentTarget.disabled = true
      setData(response.data.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error.response.data.message);
      setData(error.response.data.message);
    }
  };

  const textBackground = {
    backgroundImage:
      "linear-gradient(45deg,aqua ,#952bff, #ff669e , #952bff , aqua)",
    backgroundSize: "400%",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    animation: "textBackground 30s linear 0s infinite",
  };
  console.log(Loading)
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
          Generate engaging blog titles effortlessly with our tool. Input your content, and we’ll suggest compelling titles that capture your audience's attention.
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

        {Loading && <div className="loadng">
          <Loadingui />
        </div>}

        {data && <div id="output" className=" flex justify-center  items-center " style={{color:"rgb(255 250 226)"}}>
          <div className=" md:w-9/12 sm:w-11/12 w-full md:p-4 p-2 bg-zinc-900 rounded-xl">
            <pre className=" whitespace-pre-wrap break-words">{data}</pre>
          </div>
        </div>}

        <div className="otherBlogFeatures mt-16">
          <div
            className="title text-center text-2xl font-[600]"
            style={textBackground}
          >
            Check out other blog features
          </div>
          <div className="otherBlogsFeature">
            <div className="feature1 flex sm:flex-row flex-col-reverse justify-center items-center md:p-6 sm:p-4 p-2">
              <div className="content sm:w-7/12 w-full p-4">
                <div className="heading text-2xl font-[700] text-orange-50 my-4">
                  Blog Content
                </div>
                <div className="relatedContent text-base font-[400] text-neutral-500">
                Our intuitive text-to-blog feature lets you effortlessly convert your raw text into polished, engaging blog content. Whether you’re jotting down thoughts or drafting outlines, simply input your text, and our tool will help you refine it into a structured and captivating blog post. Enjoy easy formatting options, seamless integration with your existing content, and a user-friendly interface designed to enhance your blogging experience.
                </div>
              </div>
              <div className="image sm:w-5/12 w-10/12 p-4">
                <img className=" rounded-md w-full" src={demoImg1} />
              </div>
            </div>
            <div className="feature2 flex sm:flex-row flex-col justify-center items-center md:p-6 sm:p-4 p-2">
              <div className="image sm:w-5/12 w-10/12 p-4">
                <img className=" rounded-md w-full" src={demoImg1} />
              </div>
              <div className="content sm:w-7/12 w-full p-4">
                <div className="heading text-2xl font-[700] text-orange-50 my-4">
                  Blog summary
                </div>
                <div className="relatedContent text-base font-[400] text-neutral-500">
                Summarizing your blog posts has never been easier. Our tool takes your full-length content and generates a clear, engaging summary that captures the essence of your blog. Ideal for providing readers with quick insights or enhancing your content’s SEO, this feature ensures that every post has a compelling summary that drives engagement and encourages readers to dive deeper into your content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer isFooterVisible={true} />
    </>
  );
};

export default blogTitle;
