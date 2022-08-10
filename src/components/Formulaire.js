import React, { useState } from "react";
import axios from "axios";
import Icon from "react-hero-icon";
import {Helmet} from "react-helmet"
import $ from "jquery";








const api = axios.create({
    baseURL: `http://localhost:4000/api/v1/`
})
//const Path = "./static/images/is_dev.jpg";

const Formulaire = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setCheck] = useState(1);
    const [image, setFile] = useState("");
    const [activeText, setText] = useState("activer a la creation");
    
    let apikey;
    let apisecret;
    const hanldleChangeName = (e) =>{
        setName(e.target.value)
    }
    const hanldleChangeDescription = (e) =>{
        setDescription(e.target.value)
    }
    
    const hanldleChangeCheck = (e) =>{
        if(e.target.checked){
            setCheck(0);
            setText('desactiver a la creation');
        }
        else{
            setCheck(1);
            setText('activer a la creation');
        }
      
    }
    $('#file').on('change', function(e){
       
        setFile('./static/images/'+e.target.files[0].name);
    })
    
    const addApplication = async() =>{
        if(name==""||description==""){
            alert('veuillez remplir les champs correctement svp!!!');
        }
        else{
            if(status!=0){
                apikey = "null";
                apisecret = "null";
            }
            else{
                apikey = "feklgh09";
                apisecret = "feklgh09";
                
            }
            let res = await api.post('/applications', {name, description, image, status, apikey, apisecret})
            console.log(res);
        }

        
    }

    return (
        <div class="flex flex-col justify-evenly items-center w-[30%] h-[90%] bg-white shadow-xl  shadow-black/10 p-4 rounded-md dark:bg-gray-900/70 dark:text-white">
                    <span class=" text-[#808cff] w-full flex items-center justify-evenly capitalize text-center text-lg 2xl:text-xl font-semibold"><Icon icon="plus" type="solid" className="text-base"/>&nbsp; nouvelle application</span>
                    <div class=" flex flex-col w-full justify-center items-start space-y-3">
                        <div class="w-full">
                            <span class=" text-xs font-semibold">Nom de l'application</span>
                            <input type="text" onChange={hanldleChangeName} value={name} class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" key="nomApp"/>
                        </div>
                        <div class="w-full">
                            <span class=" text-xs font-semibold">Description</span>
                            <textarea name="" value={description} onChange={hanldleChangeDescription} class="bg-[#f2f2f2] w-[100%] h-[60px] 2xl:h-[120px] text-sm text-black/75 p-2" id="descriptionApp"></textarea>
                        </div>
                        <div class="flex w-full  justify-between items-start">
                            <span class="text-xs">{activeText}</span>
                            <label for="switch" class="switch">
                                <input type="checkbox"  onChange={hanldleChangeCheck} name=""  class="checkbox" />
                                <span class="switchBtn"></span>
                            </label>
                        </div>
                        <div class=" relative text-[#b96ff1] cursor-pointer w-full h-[80px] justify-center border-dotted border-2 border-[#b96ff1] flex items-center flex-col 2xl:h-[100px]">
                            <input type="file" accept="image/*" class="absolute z-20 text-transparent  w-full py-7 opacity-0 cursor-pointer" id="file"  />
                            <Icon icon="upload"  className="text-base"/>
                            <span class="text-xs font-bold">Charger l'icone de l'application</span>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center text-white text-sm">
                        <input type="submit" class="bg-green-600 w-full p-1 2xl:text-base cursor-pointer" onClick={addApplication} value={`Ajouter ${name} au manager`} />
                    </div>
                
        </div> 
       
                
                
     );
}
 
export default Formulaire;