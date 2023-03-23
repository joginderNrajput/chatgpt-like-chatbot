import axios from "axios";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://chatgpt-like-chatbot.onrender.com/chat", { prompt })
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setResponse("Internal server error");
      });
  };

  return (
    <div>
      <div className="App bg-pink-50 min-h-screen">
        <img
          src="https://i.ibb.co/khYQh2K/icons8-chatgpt-64.png"
          class="h-16 pt-5 pl-7 fixed"
          alt="Flowbite Logo"
        />
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
                  className="bg-gray-50 border border-green-300 text-black-900 text-md font-serif rounded-lg focus:ring-pink-500 focus:border-green-500 block w-full pl-10 p-2.5  "
                  placeholder="Search Anything, Discover Something new......."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            <div className="btn my-10 flex flex-row justify-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-tr from-blue-400 via-pink-500 to-pink-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  shadow-lg shadow-white-200/50 font-medium rounded-lg text-md px-9 py-2.5 text-center mr-2 mb-2 font-serif"
              >
                Search
              </button>
            </div>
          </form>
          <div className="w-full items-center mt-4 bg-white rounded-lg border border-blue-200 h-auto m-2">
            <div className="font-semibold">
              <pre
                className="text-sm font
-mono bg-white rounded-md p-2 max-h-max overflow-auto"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {response}
              </pre>
            </div>
          </div>
        </div>

        <footer class="bg-transparent rounded-lg ">
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 sticky bottom-0 left-0 pb-5 right-0">
            ©2023 <span class="">AIapplication™</span>. All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
