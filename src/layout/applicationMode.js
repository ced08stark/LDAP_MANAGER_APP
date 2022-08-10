import React from "react";
import {useState, useEffect} from 'react'
import Icon from "react-hero-icon";
import axios from "axios";
import Lightbox from "../components/lightbox";
import App from '../App';
import $ from "jquery";


const api = axios.create({
    baseURL: `http://localhost:4000/api/v1/`
})




const Application = () => {
    const [activeText, setText] = useState("activer acces");
    const [applications, setApplication] = useState([])
    const [currentApp, setCurrent] = useState({});
    const [status, setStatut] = useState(1);
   
    
    const handleLightbox = (e) =>{
        const lightbox = document.querySelector('#lightbox');
        const idName = e.target.getAttribute('id');
        if(idName === 'lightbox'){
            lightbox.classList.remove('scale-100');
            lightbox.classList.add('scale-0');
            setCurrent({})
        }
        
                
    }
    const handleLoad = async()=>{
        await api.get('/applications').then(res=>{
             setApplication(res.data);
        })
    }
    const handleClickSave = async(id, val)=>{
        console.log('click')
        await api.patch(`/applications/${id}`, {status : val});
        alert('modification enregistrer avec success');
        const lightbox = document.querySelector('#lightbox');
        lightbox.classList.remove('scale-100');
        lightbox.classList.add('scale-0');
    }
    const handleClickDelete = (e)=>{
        const lightbox = document.querySelector('#lightbox');
       var vart = window.confirm(`voulez vous vraiment supprimer ${e.name}`);
       if(vart){
            let data = api.delete('/applications/'+e.application_id)
            handleLoad()
            lightbox.classList.remove('scale-100');
            lightbox.classList.add('scale-0');
       }
    
    }
    const handleClickItem =(application)=>{
        setCurrent(application);
        const switchBtn = document.querySelector('#switchBtn2');
        const check = document.querySelector('#checkbox2');
        if(application.status!=0){
            switchBtn.classList.remove('isCheck')
            switchBtn.classList.remove('isCheck::before')
            setText('activer l acces')
            check.checked = false
            setStatut(1)
           

        }
        else{
            switchBtn.classList.add('isCheck')
            switchBtn.classList.add('isCheck::before')
            setText('desactiver l acces')
            check.checked = true
            setStatut(0)
           
        }
        /*setCheck(application.status)
        if(application.status!=0){
            setCheck(0);
            setText('desactiver acces');
        }
        else{
            setCheck(1);
            setText('activer acces');
        }*/
        const lightbox = document.querySelector('#lightbox');
        lightbox.classList.remove('scale-0');
        lightbox.classList.add('scale-100');
        //console.log(<Lightbox className="scale-100" application={application} />);
      
                   
    }
    
    const overflowText = (application, maxlength) =>{
        if(application.description.length > maxlength){
            return application.description.slice(0, maxlength) + '...'
        }
        else{
            return application.description
        }
    }
    
    const hanldleChangeCheck = () =>{
       
       const check = document.querySelector('#checkbox2');
       const switchBtn = document.querySelector('#switchBtn2');
       alert(check.checked)
        if(check.checked==false){
            switchBtn.classList.remove('isCheck')
            switchBtn.classList.remove('isCheck::before')
            setText('activer l\'acces')
            setStatut(1)
            //setApplication({application_id:currentApp.application_id, name:currentApp.name, description: currentApp.description, image: currentApp.image, status: 1, apikey:currentApp.apikey, apisecret:currentApp.apisecret})
        }
        else
        {
            switchBtn.classList.add('isCheck')
            switchBtn.classList.add('isCheck::before')
            setText('desactiver l\'acces')
            setStatut(0)
            //setApplication({application_id:currentApp.application_id, name:currentApp.name, description: currentApp.description, image: currentApp.image, status: 0, apikey:currentApp.apikey, apisecret:currentApp.apisecret})
        }
       
    }

    const checkStatus = (application) =>{
        if(application.status != 0){
            return <Icon icon="x-circle" type="solid" className="text-base text-red-500"/>
        }
        else{
            return <Icon icon="check-circle" type="solid" className="text-base text-green-500"/>
        }
    }

    
    handleLoad()
   
    
    return (
        <>
        <div className="flex flex-wrap justify-start items-center z-20">
                {
                    applications.map((application)=>
                        <div className='flex w-[32%] m-1 space-x-2 px-1 cursor-pointer rounded-lg justify-around items-center border-2 dark:border-gray-900' key={application.application_id} id="item" onClick={()=>handleClickItem(application)}>
                            <img src={`http://localhost:4000/${application.image}`} className="w-[35px] h-[35px] rounded-sm" />
                            <div className='flex flex-col' >
                                <span className="font-semibold w-full flex items-center dark:text-white text-black/80" >{application.name} {checkStatus(application)}</span>
                                <p className="text-[9px]" >{overflowText(application, 85)}</p>
                            </div>
                            <div>
                                <Icon icon="pencil-alt" type="solid" className="text-[#808cff]"/>
                            </div>
                            
                        </div>
                    )
                   
                }
                
        </div>
        <section  class="fixed z-20 inset-0 w-full h-full dark:text-white bg-black/50 flex items-center justify-center transition-all duration-300 scale-0" onClick={handleLightbox} id="lightbox">
                <div class="flex-col space-y-3 p-6 flex rounded-md bg-white dark:bg-gray-800 w-[600px] h-auto  overflow-hidden  sm:p-0" id="lightbox-body">
                    <div class="flex flex-row justify-between items-center p-5 space-x-1">
                        <button class="border-2 flex py-1 px-4 rounded-md text-base border-red-500 text-red-500" onClick={()=>handleClickDelete(currentApp)}  id="delete">supprimer du manager &nbsp;&nbsp;<Icon icon="trash"  /> </button>
                        <div class="flex space-x-2 items-center">
                            <span class="font-semibold dark:text-white text-black/80" id="nomApplication">{currentApp.name}</span>
                            <img src={`http://localhost:4000/${currentApp.image}`} class=" w-[60px] b-[60px] object-cover" id="imageApplication"/>
                        </div>
                    </div>
                    <div class="w-full px-6 flex flex-col space-y-3">
                        <label for="apikey">API key &nbsp;&nbsp;&nbsp;<input  type="text" value={currentApp.apikey} disabled id="apikey" class="px-2 w-[87%] bg-[#f2f2f2] text-black/70 text-sm"/></label>
                        <label for="apisecret">API secret<input type="text" value={currentApp.apisecret} disabled id="apisecret" class="px-2 w-[83%] ml-4 bg-[#f2f2f2] text-black/70 text-sm"/></label>
                        <textarea name="" id="detail"  disabled class=" w-[100%] mr-5 min-h-[150px] p-2 bg-[#f2f2f2] text-black/70 text-sm" value={currentApp.description} placeholder="detail"></textarea>
                    </div>
                    <div class="flex flex-row justify-between items-center space-x-1 px-6 pb-3">
                        <div class="flex space-x-3">
                           <span class="text-xs w-[110px]" id="activeText">{activeText}</span>
                            <label for="switch" class="switch">
                            <input type="checkbox" className="z-10 absolute w-full opacity-0"  onChange={()=>hanldleChangeCheck()} id="checkbox2"/>
                                <span className="absolute w-full h-[20px] bg-[#cccc] cursor-pointer inset-0 before:duration-[.3s] rounded-full before:absolute before:w-[15px] before:h-[15px] before:left-[3px] before:top-[2px] before:bottom-[3px]  before:bg-[#808cff] before:rounded-full dark:bg-white" id="switchBtn2"></span>
                            </label>
                        </div>
                        <button class="px-4 py-1 text-base mr-5 rounded-sm border-none text-white bg-green-700" onClick={()=>handleClickSave(currentApp.application_id, status)}  id="saveEdit">Enregistrer les modifications</button>
                    </div>  
                </div>
            </section>
        
        </> 
       
            
);
        
}


 
export default Application;
