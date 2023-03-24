function ResetBtn(props){
    let setResponse = props.setResponse;
    let setResetbuttn = props.setResetbuttn;
    function handleReset() {
        setResponse("");
        setResetbuttn(false);
      }
      

    return(
        <button onClick={handleReset} type="reset" className="inline-flex items-center px-4 py-2 bg-slate-200 border border-gray-300 rounded-md font-semibold text-sm text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-500 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
        <img className="w-[1rem] mr-2" src="https://i.postimg.cc/tJTRMk2y/icons8-synchronize-48.png" alt="" />

  Reset
</button>

    )
}


export default ResetBtn;