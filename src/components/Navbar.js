import React from 'react';

function Navbar() {
    

    return (
        <>
            <nav class="bg-black opacity-80 border-gray-200">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="dff" class="flex items-center">
                        <img src="https://i.ibb.co/khYQh2K/icons8-chatgpt-64.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AICodex</span>
                    </a>
                    <div class="flex items-center">
                        <a href="sf" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login/SignUp</a>
                    </div>
                </div>
            </nav>
           
        </>
    );
}

export default Navbar;
