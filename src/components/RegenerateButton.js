import React from "react";

function RegenerateButton({ onClick }) {
  return (
    <button
      className="text-white bg-gradient-to-tr from-blue-400 via-pink-500 to-pink-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  shadow-lg shadow-white-200/50 font-medium rounded-lg text-md px-9 py-2.5 text-center mr-2 mb-2 font-serif"
      onClick={onClick}
    >
      Regenerate
    </button>
  );
}

export default RegenerateButton;
