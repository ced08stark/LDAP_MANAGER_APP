import React from "react";
import { useEffect, useState } from "react";

import ImageExit from "../assets/images/icons/exit_64px.png"
import ImageSearch from "../assets/images/icons/user_64px.png"
import ImageUser from "../assets/images/icons/user_64px.png"
import ImageApp from "../assets/images/icons/app_store_64px.png"
import ImageLogo from "../assets/images/LDAP.png"
import axios from "axios";

import $ from "jquery";
import ApplicationMode from '../layout/applicationMode'
import User from '../layout/userMode'

const handleClickOption = () =>{

        const circle_menu = document.querySelector('#circle-menu');
        circle_menu.classList.toggle('circle-anim');

}
const menu = document.querySelectorAll('#menu');









const api = axios.create({
    baseURL: `http://localhost:4000/api/v1/`
})

const Dashboard = () => {

    const [currentModeImage, setImage] = useState(ImageApp)
    

    const handleClickSearch= () =>{
        
        setImage(ImageSearch)
        const circle_menu = document.querySelector('#circle-menu');
        circle_menu.classList.toggle('circle-anim');
        
        
    }
    
    const handleClickUser= () =>{
        setImage(ImageExit)
        const circle_menu = document.querySelector('#circle-menu');
        circle_menu.classList.toggle('circle-anim');
        
    
    }
    
    const handleClickApp= () =>{
        setImage(ImageApp)
        const circle_menu = document.querySelector('#circle-menu');
        circle_menu.classList.toggle('circle-anim');
        
    
    }

    const displayLayout = () =>{
        if(currentModeImage == ImageApp){
            return <ApplicationMode />
        }
        else if(currentModeImage == ImageSearch){
            return <User />
        } 
    }

    
    return ( 
        <div class="relative w-[80%] z-0 h-[90%] shadow-xl p-3  bg-white/50 border-4 shadow-black/10  rounded-lg dark:text-white overflow-hidden dark:border-gray-900  dark:bg-gray-800/50 dark:shadow-lg dark:shadow-[#b96ff1]/10 ">
           {displayLayout()}
            <div class="w-[250px]  transition-all duration-500 ease-in-out border-black/5 bg-white border scale-0 absolute -bottom-40 -right-40  cursor-pointer  h-[250px] flex items-center justify-center rounded-full dark:bg-gray-900" id="circle-menu">
                        <a href="#" id="menuApp" onClick={ handleClickApp } class="links-circle dark:bg-gray-800 dark:hover:bg-gray-900/20">
                            <img src={ImageApp} class="w-[30px]" alt="" />
                        </a>
                        <a href="#" id="menuSearch" onClick={ handleClickSearch } class="links-circle dark:bg-gray-800 dark:hover:bg-gray-900/20">
                            <img src={ImageSearch} class="w-[30px]" alt="" />
                        </a>
                        <a href="#" id="menuExit" onClick={ handleClickUser } class="links-circle dark:bg-gray-800 dark:hover:bg-gray-900/20">
                            <img src={ImageExit} class="w-[30px]" alt="" />
                        </a>
            </div>
            <div class=" absolute bottom-4 opacity-90 right-6" id="btnCircle" onClick={handleClickOption}>
                <div class=" w-[50px]  cursor-pointer shadow-xl dark:bg-gray-900 shadow-[#b96ff1]/50  h-[50px] flex items-center justify-center border border-[#b96ff1]/30 rounded-full">
                    <a href="#">
                        <img src={currentModeImage} class="w-[30px] " alt="" />
                    </a>
                </div>
            </div>
            <div class="background">
            </div>
            
             
        </div>

     );
}

 
export default Dashboard;