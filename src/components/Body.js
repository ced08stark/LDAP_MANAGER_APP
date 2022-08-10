import React from "react";
import ImageExit from "../assets/images/icons/exit_64px.png"
import ImageSearch from "../assets/images/icons/search_64px.png"
import ImageUser from "../assets/images/icons/user_64px.png"
import ImageApp from "../assets/images/icons/app_store_64px.png"
import ImageLogo from "../assets/images/LDAP.png"
import Formulaire from "./Formulaire";
import Dashboard from "./Dashboard";
import App from '../App';





const Body = () => {
    
    return ( 
        <>
            <div class="w-[100%] h-[85%] 2xl:h-[90%] bg-[#808dff18] dark:bg-gray-800">
            <div class="flex m-auto w-[80%] items-center h-full space-x-3 -z-10">
                <Formulaire />
                <Dashboard />
            </div>
           
        </div>
        
        </>
     );
}
 
export default Body;