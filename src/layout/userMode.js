import React from "react";
import {useState, useEffect} from 'react'
import Icon from "react-hero-icon";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:4000/api/v1/`
})



const User = () => {
    const [applications, setApplication] = useState([])
    useEffect(() =>{
       api.get('/applications').then(res=>{
            setApplication(res.data);
       })
    },[])
    
    const [app, setApp] = useState('http://localhost:4000/static/images/whatsapp.jpg')
    const [users, setUser] = useState([])
    useEffect(() =>{
       api.get('/users').then(res=>{
            setUser(res.data);
       })
    },[])
   
    return ( 
        <div className="w-full h-full relative scroll-smooth overflow-y-scroll whitespace-nowrap">
            <div className=" borber rounded-lg  ">
                <table className="w-full ">
                <thead>
                    <tr class=" text-gray-600 bg-white dark:bg-gray-900 dark:text-white">
                        <th class="p-4 uppercase text-xs font-bold ">user id</th>
                        <th class="p-4 uppercase text-xs font-bold ">profile</th>
                        <th class="p-4 uppercase text-xs font-bold ">account createDAt</th>
                        <th class="p-4 uppercase text-xs font-bold ">application using</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user)=>(
                    <tr class="dark:even:bg-gray-900 even:bg-white text-center ">
                    <td class="p-4 text-sm dark:text-white text-gray-600 font-medium">{user.user_id}</td>
                    <td class="p-4 text-sm dark:text-white text-gray-600 flex">
                        
                        <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img src={`http://localhost:4000/${user.picture}`} class="w-full h-full object-contain" alt="" />
                        </div>
                        <div class="ml-2.5">
                            <span class="block text-sm dark:text-[#808cff]  font-semibold text-black capitalize">{user.username}</span>
                            <span class="block text-xs dark:text-white text-gray-500 font-medium">{user.password}</span>
                        </div>
                    </td>
                    <td class="p-4  font-medium dark:text-white text-gray-700 text-sm">{user.createdat}</td>
                    
                    <td class="p-4 flex items-center justify-center  font-medium text-center dark:text-white text-xs capitalize text-gray-500">
                        <div class="w-[40px] h-[40px]  rounded-full overflow-hidden">
                            <img src={`http://localhost:4000/${applications[2].image}`} class="w-full h-full object-contain" alt="" />
                        </div>
                    </td>
                    
                </tr>
                    )
                    
                )
                }
                </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default User;