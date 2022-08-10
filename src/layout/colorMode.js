
import React from 'react'
import Icon from "react-hero-icon";
import $ from "jquery";


const ColorMode = () => {
    const handleCloseParam = () =>{
        const nav = document.querySelector('#param');
       // $('#param').toggle(500);
        nav.classList.remove('right-0');
        nav.classList.add('-right-full');
    }
    
    
    
    const handleClickSun = () =>{
        const nav = document.querySelector('#param');
        // $('#param').toggle(500);
         nav.classList.remove('right-0');
         nav.classList.add('-right-full');
         const nav2 = document.querySelector('#container');
        nav2.classList.remove('dark')
        localStorage.removeItem('dark')
    }
    
    const handleClickMoon = () =>{
        const nav = document.querySelector('#param');
        // $('#param').toggle(500);
         nav.classList.remove('right-0');
         nav.classList.add('-right-full');
         const nav2 = document.querySelector('#container');
        nav2.classList.add('dark')
        localStorage.addItem('dark')
    }
    return ( 
        <>
            <div class="absolute top-0 bottom-0 right-0 w-[80%] h-full flex flex-col items-center">
                <div className="flex items-center justify-center mt-9 text-4xl font-bold dark:bg-gray-900 text-[#808cff] w-[80%] bg-white">
                    Parametre theme
                </div>
                <div class="w-full h-full flex items-center justify-center">
                    <div onClick={handleClickMoon} className=" cursor-pointer w-[40%] h-[50%] border-0 shadow shadow-black/20 text-center flex justify-center items-center flex-col  hover:bg-gray-900 hover:text-white  transition-all hover:text-4xl"><span className="flex flex-col justify-center items-center">theme sombre<Icon icon="moon"  id="close" /></span> </div>
                    <div onClick={handleClickSun} className="cursor-pointer w-[40%] h-[50%] text-white border-0 shadow shadow-black/20 text-center flex justify-center items-center flex-col  hover:bg-white hover:text-gray-900  transition-all hover:text-4xl z-30"><span className="flex flex-col justify-center items-center">theme clair<Icon icon="sun"  id="close" /></span> </div>
                </div>
            </div>
        </>
     );
}
 
export default ColorMode;