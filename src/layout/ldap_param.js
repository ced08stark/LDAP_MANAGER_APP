import React, { useState } from "react";
import Icon from "react-hero-icon";
import $ from "jquery";

const Param_ldap = () => {
   const [show, setShow] = useState(0)
   const handleAdvancParam = ()=> {
        
   }
   
   const handleClickAdvanced = ()=> {
        if(show==0){
            const ad = document.querySelector('#advanced');
            const remove = document.querySelectorAll('#show');
            remove.forEach(element => {
                element.classList.remove('scale-0')
                element.classList.remove('hidden')
            });
            const container = document.querySelector('#containerLdap')
            container.classList.remove('w-[40%]')
            container.classList.add('w-[80%]')
            setShow(1)
        }
        else{
            const ad = document.querySelector('#advanced');
            const remove = document.querySelectorAll('#show');
            remove.forEach(element => {
                element.classList.remove('flex')
                element.classList.add('scale-0')
                element.classList.add('hidden')
            });
            const container = document.querySelector('#containerLdap')
            container.classList.remove('w-[80%]')
            container.classList.add('w-[40%]')
            setShow(0)
        }
       
        //ad.classList.add('show')

       

    }

    const handlerIcon = ()=> {
        if(show==0){
            return <Icon icon="arrow-circle-right" />
        }
        else{
            return <Icon icon="arrow-circle-left" />
        }
    }
  
   
   

    return ( 
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex transition-all justify-center h-[80%] flex-col space-y-2 items-center w-[40%]  bg-white shadow-xl  shadow-black/10  rounded-md dark:bg-gray-900/70 dark:text-white" id="containerLdap">
                    <div className=" mb-6 h-[10%]  w-[80%] border-b flex items-center justify-center font-semibold text-[#808cff]">
                        parametre ldap
                    </div>
                    <div class="w-[80%] flex justify-between space-x-3">
                        <div class="w-[100%]">
                            <span class="text-black/75 dark:text-white text-xs font-semibold">ldap port: &nbsp;&nbsp;<span className="text-[#aaaaaa] font-light">par defaut 389</span></span>
                            <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="votre port" key="nomApp"/>
                        </div>
                        <div className=" flex-wrap w-[100%] scale-0 hidden" id="show">
                            <span class="text-black/75 dark:text-white text-xs font-semibold">Search Base</span>
                            <div className="flex justify-between items-start flex-wrap w-[100%]">
                            <input type="text" class=" bg-[#f2f2f2] w-1/4 h-[40px] text-sm text-black/75 pl-2" placeholder="Ou" key="nomApp"/>
                            <input type="text" class=" bg-[#f2f2f2] w-1/4 h-[40px] text-sm text-black/75 pl-2" placeholder="Dn" key="nomApp"/>
                            <input type="text" class=" bg-[#f2f2f2] w-1/4 h-[40px] text-sm text-black/75 pl-2" placeholder="Ce" key="nomApp"/>
                        </div>
                    </div>
                    
                </div>
                <div class="w-[80%] flex justify-between space-x-3">
                        <div class="w-[100%]">
                            <span class="text-black/75 dark:text-white text-xs font-semibold">username</span>
                            <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="votre nom" key="nomApp"/>
                        </div>
                        <div class="w-[100%] scale-0 hidden" id="show">
                            <span class="text-black/75 dark:text-white text-xs font-semibold ">filter authenticate</span>
                            
                            <div className="relative">
                            <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="choose your filter authenticate" key="nomApp"/>
                                <Icon icon="arrow-circle-down" className="absolute top-2 right-0 text-[#aaaaaa] cursor-pointer" />
                            </div>
                        </div>
                </div>
                <div class="w-[80%] flex justify-between space-x-3">
                    <div class="w-[100%]">
                        <span class="text-black/75 dark:text-white text-xs font-semibold">password</span>
                        <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="votre mot de passe" key="nomApp"/>
                    </div>
                    <div class="w-[100%] scale-0 hidden" id="show">
                        <span class="text-black/75 dark:text-white text-xs font-semibold ">filter authenticate</span>
                        
                        <div className="relative">
                            <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="choose your filter user" key="nomApp"/>
                            <Icon icon="arrow-circle-down" className="absolute top-2 right-0 text-[#aaaaaa] cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div class="w-[80%] flex justify-between space-x-3">
                    <div class="w-[100%]">
                        <span class="text-black/75 dark:text-white text-xs font-semibold">password confirm</span>
                        <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="confirmer le mot de passe" key="nomApp"/>
                    </div>
                    <div class="w-[100%] scale-0  hidden" id="show">
                        <span class="text-black/75 dark:text-white text-xs font-semibold  ">filter attribute</span>
                        <div className="relative">
                            <input type="text" class=" bg-[#f2f2f2] w-[100%] h-[40px] text-sm text-black/75 pl-2" placeholder="choose your attribute"  key="nomApp"/>
                            <Icon icon="arrow-circle-down" className="absolute top-2 right-0 text-[#aaaaaa] cursor-pointer" />
                        </div>
                        
                    </div>
                </div>
                <div className="w-[80%] pt-6 flex justify-between  items-center">
                    <button>Enregistrer</button>
                    <button className="flex" id="advanced" onClick={handleClickAdvanced}>Parametre avance {handlerIcon()} </button>
                </div>

            </div>

        </div>
        
     );
     

}
 
export default Param_ldap;