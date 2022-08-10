import React from "react"


const Lightbox = ({application}) => {
    return ( 
        <section  class="fixed z-20 inset-0 w-full h-full dark:text-white bg-black/50 flex items-center justify-center transition-all duration-300 scale-0" className="lightbox">
                <div class="flex-col space-y-3 p-6 flex rounded-md bg-white dark:bg-gray-800 w-[600px] h-auto  overflow-hidden  sm:p-0" id="lightbox-body">
                    <div class="flex flex-row justify-between items-center p-5 space-x-1">
                        <button class="border-2 px-4 rounded-md text-base border-red-500 text-red-500" id="delete">supprimer du manager &nbsp;&nbsp;<i class="bi bi-trash"></i> </button>
                        <div class="flex space-x-2 items-center">
                            <i class="bi bi-check-circle text-green-600" id="activeIcon"></i>
                            <span class="font-semibold dark:text-white text-black/80" id="nomApplication">{application.name}</span>
                            <img src={`http://localhost:4000/${application.image}`} class=" w-[60px] b-[60px] rounded-full object-cover" id="imageApplication" />
                        </div>
                    </div>
                    <div class="w-full px-6 flex flex-col space-y-3">
                        <label for="apikey">API key &nbsp;&nbsp;&nbsp;<input type="text" disabled id="apikey" class="px-2 w-[86%] bg-[#f2f2f2] text-black/70 text-sm" />{application.apikey}</label>
                        <label for="apisecret">API secret&nbsp;&nbsp;<input type="text" disabled id="apisecret" class="px-2 w-[82%] ml-4 bg-[#f2f2f2] text-black/70 text-sm" />{application.apisecret}</label>
                        <textarea name="" id="detail" disabled class=" w-[100%] mr-5 min-h-[150px] p-2 bg-[#f2f2f2] text-black/70 text-sm" placeholder="detail">{application.description}</textarea>
                    </div>
                    <div class="flex flex-row justify-between items-center space-x-1 px-6 pb-3">
                        <div class="flex space-x-3">
                            <span class="text-xs w-[110px]" id="activeText">Activer l'acces</span>
                            <label for="switch" class="switch">
                                <input type="checkbox" name="" id="checkBox2" class="checkbox" />
                                <span class="switchBtn"></span>
                            </label>
                        </div>
                        <button class="px-4 py-1 text-base mr-5 rounded-sm border-none text-white bg-green-700" id="saveEdit">Enregistrer les modifications</button>
                    </div>  
                </div>
            </section>
    );
}
 
export default Lightbox;