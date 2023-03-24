import axios from "axios";
import { useState } from "react";
import "./App.css";
import ResetBtn from "./components/ResetBtn";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";

function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetbuttn, setResetbuttn] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
        setIsLoading(false);
        setResetbuttn(true);
      })
      .catch((err) => {
        console.log(err);
        setResponse("Internal server error");
      });
  };

  const animationSpeed = response.length > 600 ? 0.007 : 0.06;

  return (
    <div>
      <div className="App bg-pink-50 min-h-screen">
        <div className="Navbar">
         <Navbar></Navbar>
          
        </div>
        <div className="container">
          <div className="container mx-auto py-24 px-4 md:px-0 max-w-[720px]">
            <form action="" className="text-center" onSubmit={handleSubmit}>
              <div className="mb-6 flex justify-center items-center">
                <label
                  htmlFor="inline-full-name"
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                >
                  Just say/ask Anything :
                </label>
              </div>

              <div className="flex items-center">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-green-300 text-black-900 text-md font-serif rounded-lg focus:ring-pink-500 focus:border-green-500 block w-full pl-10 p-2.5  placeholder-gray-500 placeholder-opacity-50"
                    placeholder="Search Anything, Discover Something new......."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="btn my-10 flex flex-row justify-center">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  shadow-lg shadow-white-200/50 font-medium rounded-lg text-md px-9 py-2.5 text-center mr-2 mb-2 font-serif"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="w-full items-center mt-4 rounded-lg outline-none m-2">
              <div className="font-semibold">
                <div className="w-full items-center mt-4 bg-white rounded-lg border border-blue-200 h-auto p-4 md:p-4 ml-[-0.5rem]">
                  {isLoading ? (
                    <div className="text-base md:text-lg font-mono rounded-md p-2 max-h-max overflow-auto">
                      Generating response{" "}
                      <span className="w-3 h-3 md:w-5 md:h-5 rounded-full animate-ping">......</span>
                    </div>
                  ) : response ? (
                    <pre
                      className="text-base md:text-lg font-mono rounded-md p-2 max-h-max overflow-auto"
                      style={{ whiteSpace: "pre-wrap", minHeight: "200px" }}
                    >
                      {response.split("").map((char, index) => (
                        <span
                          key={index}
                          style={{ animationDelay: `${index * animationSpeed}s` }}
                          className="inline-block"
                        >
                          {char}
                        </span>
                      ))}
                    </pre>
                   
                  ) : (
                    <div className="text-base md:text-lg font-mono rounded-md p-2 max-h-max overflow-auto">
                      No response generated yet
                      <span className="w-3 h-3 md:w-5 md:h-5 rounded-full animate-ping">.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>


        {
          resetbuttn ? (
            <div className="Reset-Btn mb-[2.5rem] mt-0">
          <ResetBtn setResponse={setResponse} setResetbuttn = {setResetbuttn}></ResetBtn>
        </div>
          ) : ("")
        }
        <div className="footer">
          <footer className="bg-transparent rounded-lg ">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 sticky bottom-0 left-0 pb-5 right-0">
              ©2023 <span className="">AIapplication™</span>. All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;


