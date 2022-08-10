import React from "react";
import Icon from "react-hero-icon";
import {useEffect, useState} from "react";
import ColorMode from "./colorMode";
import Param_ldap from "./ldap_param";
import ParamTheme from "../assets/images/param_theme.png"
import ParamLdap from "../assets/images/param_ldap.png"
import ParamSmtp from "../assets/images/param_smtp.png"
import ParamAdmin from "../assets/images/admin.png"


const Sidebar = () => {
    const [currentMode, setCurrent] = useState(0)

    const handleMode = () =>{
        if(currentMode==0){
            return <Param_ldap />
        }
        else if(currentMode==1){
            return <></>
        }
        else if(currentMode==2){
            return <></>
        }
        else{
            return <ColorMode />
        }
    }

    const hanldleClick1 = () =>{
        setCurrent(0)
    }
    const hanldleClick2 = () =>{
        setCurrent(1)
    }
    const hanldleClick3 = () =>{
        setCurrent(2)
    }
    const hanldleClick4 = () =>{
        setCurrent(3)
    }
    


    return ( 
        <>
            <div className="w-[20%] h-full border-white bg-white dark:bg-gray-900 dark:border-gray-800  ">
                <div className="h-[10%] flex justify-center items-center border-b dark:border-b-gray-800">
                    <span className="flex justify-center items-center dark:text-white text-black/90  font-bold text-xl" >Parametre<Icon icon="cog" type="solid"/></span>

                </div>
                <div className=" flex flex-col items-center text-[#808cff]">
                    <div onClick={hanldleClick1}  className=" cursor-pointer dark:border-b-gray-800 flex w-full space-x-5 p-4 border-b justify-center items-center  hover:pl-20 transition-all duration-300">
                        <img src={ParamLdap} className="w-10 h-10 object-cover"/>
                        <a href="#" className=" font-bold text-lg">LDAP</a>
                    </div>
                    <div onClick={hanldleClick2} className=" cursor-pointer dark:border-b-gray-800 flex w-full space-x-5 p-4 border-b justify-center items-center hover:pl-20 transition-all duration-300">
                        <img src={ParamSmtp} className="w-10 h-10 object-cover" />
                        <a href="#" className=" font-bold text-lg">SMTP</a>
                    </div>
                    <div onClick={hanldleClick3} className=" cursor-pointer dark:border-b-gray-800 flex w-full space-x-5 p-4 border-b justify-center items-center hover:pl-20 transition-all duration-500">
                        <img src={ParamAdmin} className="w-10 h-10 object-cover" />
                        <a href="#" className=" font-bold text-lg">Admin</a>
                    </div>
                    <div onClick={hanldleClick4} className=" cursor-pointer dark:border-b-gray-800 flex w-full space-x-5 p-4 border-b justify-center items-center hover:pl-20 transition-all duration-500">
                        <img src={ParamTheme} className="w-10 h-10 object-cover" />
                        <a href="#" className=" font-bold text-lg">Theme</a>
                    </div>
                   
                </div>  
            </div>
            <div className='w-[80%] h-full'>
                {handleMode()}
            </div>
        </>
     );
}
 
export default Sidebar;