import React from "react";
import logoLDAMin from "../assets/images/LDAP.png";
import Icon from "react-hero-icon";
import $ from "jquery";
import ParametrePage from "../pages/parametre";



const NavBar = () => {


const handleClickProfil = () =>{

        $('#onglet').toggle(500);

}

const handleClickParam = () =>{
    $('#onglet').toggle();
    const nav = document.querySelector('#param');
   // $('#param').toggle(500);
    nav.classList.remove('-right-full');
    nav.classList.add('right-0');

}
    
    return ( 
        <>
        <div class="relative h-[15%] 2xl:h-[10%] bg-white dark:bg-gray-900">
            <header class=" flex items-center justify-between h-full px-6 shadow-lg shadow-black/5">
                <div class=" flex items-center justify-center space-x-3">
                    <img src={logoLDAMin} />
                    <span class=" text-[#b96ff1] font-bold text-xl">LDAP Access Manager</span>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex flex-col items-center justify-center ">
                        <span class=" text-lg text-[#b96ff1] capitalize">@cedric.Kaze</span>
                        <span class="text-xs block px-[4px] py-[1px] rounded-md bg-green-300 dark:text-gray-900 text-black/80">administrateur</span>
                    </div>
                    <div class="flex items-center justify-center rounded-full w-[45px] h-[45px] text-gray-700 bg-black/10 dark:bg-gray-700 cursor-pointer"  onClick={handleClickProfil}>
                        <Icon icon="user" type="solid" className="text-white"/>
                    </div>
                </div>
            </header>
            <div class="hidden absolute z-20  w-[15%] h-[90px]  bg-white dark:bg-gray-800 dark:border-gray-900  mr-2 border right-0" id="onglet">
                <div class="text-center cursor-pointer flex  flex-col items-center" >
                    <span class="flex items-center justify-center p-2 border-b w-[80%] dark:text-white"  onClick={handleClickParam}><Icon icon="cog" type="solid" className="text-[#aaaaaa]"/>&nbsp;&nbsp; Parametre</span>
                    <span class="flex items-center justify-center p-2 text-red-600"><Icon icon="logout" className="text-[#aaaaaa]"/>&nbsp;&nbsp; deconnexion</span>
                </div>
            </div>
            <ParametrePage />
    </div>
    </>
     );
}
 
export default NavBar;