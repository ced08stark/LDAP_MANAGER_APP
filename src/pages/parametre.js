import React from 'react';
import Icon from "react-hero-icon";
import $ from "jquery";
import ColorMode from '../layout/colorMode';
import Sidebar from '../layout/sideBar';




const ParametrePage = () => {

    
    const handleCloseParam = () =>{
        const nav = document.querySelector('#param');
       // $('#param').toggle(500);
        nav.classList.remove('right-0');
        nav.classList.add('-right-full');
    }
    



    return ( 
        <>
            <nav className="fixed flex dark:bg-gray-800 bottom-0 -right-full w-full h-[85%] bg-gray-300 transition-all duration-200 z-30" id="param">
                <Icon icon="x" onClick={handleCloseParam} id="close" className="dark:text-gray-500 text-[#b96ff1] absolute top-2 left-2  cursor-pointer text-lg"/>
                <Sidebar  />
                

            </nav>
        </>
     );
}
 
export default ParametrePage;