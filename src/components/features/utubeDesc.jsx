import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projectContext";
import Navbar from "../navbar.jsx";
// import '../../css/features/blogTitle.css'
import demoImg1 from "/download (1).jpeg";
import Footer from "../footer.jsx";
import axios from "axios";
import Loadingui from "./Loadingui.jsx";

const UtubeDesc = () => {

  const value = useContext(ProjectContext)

  
  const [prompt, setprompt] = useState("");
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  // after retriving the id from local then set that id into useris

  const fetch_data = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      const response = await axios.post(
        `${value.backendURL}/data/api/v1/kol/Blogtitle`,
        {
          userId,
          prompt,
        }
      );
      setData(response.data.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
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

  return (
    <>
      <Navbar />
      <div className="bg-black" id="blogTitle">
        <div className="introduction mt-28 ">
          <div
            className="title text-center text-4xl font-[800] uppercase py-3"
            style={textBackground}
          >
            Blog outcome
          </div>
          <div className="relatedText text-center text-lg px-8 py-3 text-amber-100">
            Provide a blog, and AI will generate a quick note for you
          </div>
        </div>

        <div className="inputSection flex justify-center  items-center px-8 my-6">
          <div className="inputArea w-9/12 p-4 m-3 bg-zinc-900 rounded-xl">
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

        {data && <div id="output" className="text-orange-600 flex justify-center  items-center ">
          <div className=" w-9/12 p-4 ml-6 bg-zinc-900 rounded-xl">
            {Loading ? <Loadingui /> : <strong>{data}</strong>}
          </div>
        </div>}

        <div className="otherBlogFeatures">
          <div
            className="title text-center text-2xl font-[600]"
            style={textBackground}
          >
            Check out other blog features
          </div>
          <div className="otherBlogsFeature">
            <div className="feature1 flex justify-center items-center p-6">
              <div className="content w-7/12 p-4">
                <div className="heading text-2xl font-[700] text-orange-50 my-4">
                  Blog quickoutcome
                </div>
                <div className="relatedContent text-base font-[400] text-neutral-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur itaque illum amet inventore aliquam deleniti deserunt
                  quis repellendus. Tempore sed accusantium esse provident
                  blanditiis perspiciatis consequuntur ratione quae molestiae
                  veniam! Voluptatibus deserunt ipsam ducimus sapiente
                  excepturi? Quos et cum ad placeat id neque doloribus soluta
                  aliquid facilis assumenda officia, consectetur vero mollitia
                  esse architecto rem. Perferendis obcaecati reiciendis rerum
                  odit?
                </div>
              </div>
              <div className="image w-5/12 p-4">
                <img className=" rounded-md w-full" src={demoImg1} />
              </div>
            </div>
            <div className="feature2 flex justify-center items-center p-6">
              <div className="image w-5/12 p-4">
                <img className=" rounded-md w-full" src={demoImg1} />
              </div>
              <div className="content w-7/12 p-4">
                <div className="heading text-2xl font-[700] text-orange-50 my-4">
                  Blog summary
                </div>
                <div className="relatedContent text-base font-[400] text-neutral-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur itaque illum amet inventore aliquam deleniti deserunt
                  quis repellendus. Tempore sed accusantium esse provident
                  blanditiis perspiciatis consequuntur ratione quae molestiae
                  veniam! Voluptatibus deserunt ipsam ducimus sapiente
                  excepturi? Quos et cum ad placeat id neque doloribus soluta
                  aliquid facilis assumenda officia, consectetur vero mollitia
                  esse architecto rem. Perferendis obcaecati reiciendis rerum
                  odit?
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

export default UtubeDesc;
