//var applicationLDAP = []
window.alert('yoyo')
/*

fetch("http://localhost:4000/api/v1/applications")
.then((response)=>(response.json()))
.then((data)=>(
    data.map((function(application){
        const divApplication = document.createElement('div');
        const divColApplication = document.createElement('div');
        const imgApplication = document.createElement('img');
        const title = document.createElement('span');
        const pencil = document.createElement('i');
        const check = document.createElement('i');
        const description = document.createElement('p');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('divFooterLeft');
        
        title.appendChild(check);
        divApplication.classList.add('containerApplication');
        description.classList.add('description');
        title.classList.add('title');
        imgApplication.classList.add('imgApplication');
        divColApplication.classList.add('divColApplication');
        pencil.classList.add('bi');
        pencil.classList.add('bi-pencil');
        pencil.classList.add('i');
        
        titleDiv.appendChild(title)
        titleDiv.appendChild(check);
        divColApplication.appendChild(titleDiv);
        divColApplication.appendChild(description);
        divApplication.appendChild(imgApplication);
        divApplication.appendChild(divColApplication);
        divApplication.appendChild(pencil);
        
        if(application.statut){
            check.classList.add('bi');
            check.classList.add('bi-check-circle');
            check.classList.add('text-green-600');
        }
        else{
            check.classList.add('bi');
            check.classList.add('bi-x-circle');
            check.classList.add('text-red-600');
        }

        let descript="";
       
        for(var i=0; i<application.description.length; i++){
            if(i<70){
                descript += application.description[i];
            }
            else{
                descript += "...";
                break;
            }
        }
        
        
        
        imgApplication.src = `http://localhost:4000/`+application.image;
        title.innerText = application.name;
        description.innerText = descript;
        divApplication.id = application.application_id;
        
        container.appendChild(divApplication);
       
        
    
        }))
));





console.log(applicationLDAP);



var applications = [
    {id: 1, title: 'Facebook', description: 'facebook est une application de post photo et video developper depuis 2009 par Mark zugeberg', image: './images/facebook.jpg', statut: true, ApiKey: 'fksjko45mkc'},
    {id: 2, title: 'Twitter', description: 'twitter est une application de post blog et reste la plus utiliser par les hautes personnalite', image: './images/twitter-logo.jpg', statut: true, ApiKey: 'fksjko45mkc'},
    {id: 3, title: 'Tiktok', description: 'tiktok est une application de fun video ayant un tres grand nombreux d\'utilisateur actif de par le monde par c\'est post drole', image: './images/tiktok.jpg', statut: false, ApiKey: null},
    {id: 4, title: 'Nucleus', description: 'nucleus est une application de chez hooli s\'inspirant du projet pied pipper dans la magnifique serie sylicon valley', image: './images/react.png', statut: true, ApiKey: 'fksjko45mkc'},
    {id: 5, title: 'Is dev app', description: 'Is dev app est une application en cour de produit par les developpeur de la start-up is dev expert pour mieux encadrer leur stagiaire', image: './images/is_dev.jpg', statut: false, ApiKey: null},
    {id: 6, title: 'Google chrome', description: 'google chrome est un navigateur de la grande firme google', image: './images/google.png', statut: true, ApiKey: 'fksjko45mkc'},

   
]

const lightbox = document.querySelector('#lightbox');
const lightboxbody = document.querySelector('#lightbox-body');
const container = document.querySelector('#container');
const btnAdd = document.querySelector('#add');
const testCheck = document.querySelector('.checkbox');
const text = document.querySelector('#active');
//let currentCheck = false;




    
testCheck.addEventListener('change', function(){
    if(testCheck.checked){
        text.textContent = 'desactiver a la creation';
    }
    else{
        text.textContent = 'activer a la creation'
    }
})


    applications.map(function(application){
        const divApplication = document.createElement('div');
        const divColApplication = document.createElement('div');
        const imgApplication = document.createElement('img');
        const title = document.createElement('span');
        const pencil = document.createElement('i');
        const check = document.createElement('i');
        const description = document.createElement('p');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('divFooterLeft');
        
        title.appendChild(check);
        divApplication.classList.add('containerApplication');
        description.classList.add('description');
        title.classList.add('title');
        imgApplication.classList.add('imgApplication');
        divColApplication.classList.add('divColApplication');
        pencil.classList.add('bi');
        pencil.classList.add('bi-pencil');
        pencil.classList.add('i');
        
        titleDiv.appendChild(title)
        titleDiv.appendChild(check);
        divColApplication.appendChild(titleDiv);
        divColApplication.appendChild(description);
        divApplication.appendChild(imgApplication);
        divApplication.appendChild(divColApplication);
        divApplication.appendChild(pencil);
        
        if(application.statut){
            check.classList.add('bi');
            check.classList.add('bi-check-circle');
            check.classList.add('text-green-600');
        }
        else{
            check.classList.add('bi');
            check.classList.add('bi-x-circle');
            check.classList.add('text-red-600');
        }

        let descript="";
       
        for(var i=0; i<application.description.length; i++){
            if(i<70){
                descript += application.description[i];
            }
            else{
                descript += "...";
                break;
            }
        }
        
        
        
        imgApplication.src = application.image;
        title.innerText = application.title;
        description.innerText = descript;
        divApplication.id = application.id;
        
        container.appendChild(divApplication);
       
        
    
        })



    


/*const items2 = document.querySelectorAll('.containerApplication');

items2.forEach(item => {
    item.addEventListener('click', function(){
        item.addEventListener('click', function(){
            lightbox.classList.remove('scale-0');
            lightbox.classList.add('scale-100');
            const img = document.createElement('img');
            const divHeader = document.createElement('div');
            const divHeaderRight = document.createElement('div');
            divHeaderRight.classList.add('divHeaderRight');
            const btnDelete = document.createElement('button');
            const span = document.createElement('span');
            const i = document.createElement('i');
            const labelKey = document.createElement('span');
            const labelSecret = document.createElement('span');
            const inputKey = document.createElement('input');
            const inputSecret = document.createElement('input');
            const divBody = document.createElement('div');
            const divDetail = document.createElement('div');
            const divFooter = document.createElement('div');
            const label = document.createElement('label');
            const switchBtn = document.createElement('input');
            const spanSwitch = document.createElement('span');
            const textSwitch = document.createElement('span');
            const divFooterLeft = document.createElement('div');
            const btnAdd = document.createElement('button');
            label.appendChild(spanSwitch);
            label.appendChild(switchBtn);
            label.classList.add('switch');
            switchBtn.classList.add('hidden');
            spanSwitch.classList.add('switchBtn');
            textSwitch.classList.add('text-base');
            divFooterLeft.classList.add('divFooterLeft');
           // textSwitch.classList.add('');
            textSwitch.textContent = 'Suspendre l\'acces';
            inputKey.type = 'text'
            inputSecret.type = 'text'
            inputSecret.innerText = 'text'
            inputKey.placeholder = 'text'
            labelKey.innerText = 'API Key';
            labelSecret.innerText = 'API Secret';
            inputKey.classList.add('inputKey');
            inputSecret.classList.add('inputSecret');
            labelKey.appendChild(inputKey);
            labelSecret.appendChild(inputSecret);
            divBody.classList.add('divBody');
            divBody.appendChild(labelKey);
            divBody.appendChild(labelSecret);
            btnAdd.classList.add('btnAdd');
            btnAdd.textContent = 'Enregistrer les modifications';
        
            divDetail.classList.add('detail');
            divDetail.textContent = 'detail...';
            divFooter.classList.add('divFooter');
    
            i.classList.add('bi');
            i.classList.add('bi-trash');
            i.classList.add('ml-4');
            btnDelete.innerText = 'supprimer du manager';
            btnDelete.classList.add('btnDelete');
            img.src = './images/tiktok.jpg';
            img.classList.add('w-[30px]');
            img.classList.add('h-[30px]');
            img.classList.add('rounded-full');
            img.classList.add('object-cover');
            span.innerText = "tiktok";
            btnDelete.appendChild(i);
            divHeader.classList.add('divHeader')
            divHeaderRight.appendChild(span);
            divHeaderRight.appendChild(img);
            divHeader.appendChild(divHeaderRight);
            divHeader.appendChild(btnDelete);
            divFooterLeft.appendChild(textSwitch);
            divFooterLeft.appendChild(label);
            divFooterLeft.classList.add('m-6');
            divFooter.appendChild(divFooterLeft);
            divFooter.appendChild(btnAdd);
           
            if(lightboxbody.children.length > 0){
                lightboxbody.removeChild(lightboxbody.children);
            }
            lightboxbody.appendChild(divHeader);
            lightboxbody.appendChild(divBody);
            lightboxbody.appendChild(divDetail);
            lightboxbody.appendChild(divFooter);
            
           
        })
    })
});*/
/*
let Path = './images/';
const nomApp = document.querySelector('#nomApp');

nomApp.addEventListener('change', function(){
    btnAdd.textContent = 'Ajouter '+ nomApp.value +' au manager';
    
})

btnAdd.textContent = 'Ajouter '+ nomApp.value +' au manager';


btnAdd.addEventListener('click', function() {
    const divApplication = document.createElement('div');
    const divColApplication = document.createElement('div');
    const imgApplication = document.createElement('img');
    const title = document.createElement('span');
    const pencil = document.createElement('i');
    const check = document.createElement('i');
    const description = document.createElement('p');
    const titleDiv = document.createElement('div');
   
    const imageUpload = document.querySelector('#file');
    const descriptionApp = document.querySelector('#descriptionApp');


    
    if(testCheck.checked){
        check.classList.add('bi');
        check.classList.add('bi-check-circle');
        check.classList.add('text-green-600');
    }
    else{
        check.classList.add('bi');
        check.classList.add('bi-x-circle');
        check.classList.add('text-red-600');
    }

    titleDiv.classList.add('divFooterLeft');
    title.appendChild(check);
    divApplication.classList.add('containerApplication');
    description.classList.add('description');
    title.classList.add('title');
    imgApplication.classList.add('imgApplication');
    divColApplication.classList.add('divColApplication');
    pencil.classList.add('bi');
    pencil.classList.add('bi-pencil');
    pencil.classList.add('i');
    
    titleDiv.appendChild(title)
    titleDiv.appendChild(check);
    divColApplication.appendChild(titleDiv);
    divColApplication.appendChild(description);
    divApplication.appendChild(imgApplication);
    divApplication.appendChild(divColApplication);
    divApplication.appendChild(pencil);
   
    imgApplication.src = Path;
    
    title.innerText = nomApp.value;
    description.textContent = descriptionApp.value;
    if(title.textContent.length > 0 && description.textContent.length>0){
       
        if(Path == './images/'){
            alert('veuillez attribuer une icone a l\'application');
        }
        else{
            applications.push({title: title.value, description: description.textContent, image: Path, statut: true, ApiKey: 'kgj569fjk4'});
            container.appendChild(divApplication);
            nomApp.value = '';
            descriptionApp.value = '';
            Path = './images/';
            testCheck.checked = false;
        }
  

        
    }
    else{
        alert('veuillez remplir correctement les champs svp');
    }
    

})






$('#profil').click(function(){ 
    $('#onglet').toggle(500);
})

$(function(){
    $('#file').on('change', function(e){
       
        Path += e.target.files[0].name;
       
    })
})





lightbox.addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id'));
    const idName = e.target.getAttribute('id');
    if(idName === 'lightbox'){
        lightbox.classList.remove('scale-100');
        lightbox.classList.add('scale-0');
    }
    
})


/*let items = document.querySelectorAll('.containerApplication');


let application;
const img = document.createElement('img');
const divHeader = document.createElement('div');
const divHeaderRight = document.createElement('div');
divHeaderRight.classList.add('divHeaderRight');
const btnDelete = document.createElement('button');
const span = document.createElement('span');
const i = document.createElement('i');
const labelKey = document.createElement('span');
const labelSecret = document.createElement('span');
const inputKey = document.createElement('input');
const inputSecret = document.createElement('input');
const divBody = document.createElement('div');
const divDetail = document.createElement('div');
const divFooter = document.createElement('div');
const label = document.createElement('label');
const switchBtn = document.createElement('input');
const spanSwitch = document.createElement('span');
const textSwitch = document.createElement('span');
const divFooterLeft = document.createElement('div');
const btnSave = document.createElement('button');
items.forEach(function(item){
    item.addEventListener('click', function(){
                application = applications[item.id-1];
                lightbox.classList.remove('scale-0');
                lightbox.classList.add('scale-100');
              /*  switchBtn.type = 'checkbox';
                switchBtn.id = 'checkbox';
                label.appendChild(switchBtn);
                label.appendChild(spanSwitch);
                label.classList.add('switch');
                switchBtn.classList.add('checkbox');
                
                spanSwitch.classList.add('switchBtn');
                textSwitch.classList.add('text-base');
                divFooterLeft.classList.add('divFooterLeft');
               // textSwitch.classList.add('');
                textSwitch.textContent = 'Suspendre l\'acces';
                inputKey.type = 'text'
                inputSecret.type = 'text'
                inputKey.value = application.ApiKey;
                inputSecret.value = application.ApiKey;
                labelKey.innerText = 'API Key'
                labelSecret.innerText = 'API Secret';
                inputKey.classList.add('inputKey');
                inputSecret.classList.add('inputSecret');
                labelKey.appendChild(inputKey);
                labelSecret.appendChild(inputSecret);
                divBody.classList.add('divBody');
                divBody.appendChild(labelKey);
                divBody.appendChild(labelSecret);
                btnSave.classList.add('btnSave');
                btnSave.textContent = 'Enregistrer les modifications';

                divDetail.classList.add('detail');
                divDetail.textContent = application.description;
                divFooter.classList.add('divFooter');

                i.classList.add('bi');
                i.classList.add('bi-trash');
                i.classList.add('ml-4');
                btnDelete.innerText = 'supprimer du manager';
                btnDelete.classList.add('btnDelete');
                img.src = application.image;
                img.classList.add('w-[60px]');
                img.classList.add('h-[60px]');
                img.classList.add('rounded-full');
                img.classList.add('object-cover');
                span.innerText = application.title;
                btnDelete.appendChild(i);
                divHeader.classList.add('divHeader')
                divHeaderRight.appendChild(span);
                divHeaderRight.appendChild(img);
                divHeader.appendChild(divHeaderRight);
                divHeader.appendChild(btnDelete);
                divFooterLeft.appendChild(textSwitch);
                divFooterLeft.appendChild(label);
                divFooterLeft.classList.add('m-6');
                divFooter.appendChild(divFooterLeft);
                divFooter.appendChild(btnSave);


                if(lightboxbody.children.length > 0){
                    lightboxbody.removeChild(lightboxbody.children);
                }
                lightboxbody.appendChild(divHeader);
                lightboxbody.appendChild(divBody);
                lightboxbody.appendChild(divDetail);
                lightboxbody.appendChild(divFooter);
                
                
       
    })
})*/


/*
const imageApplication = document.querySelector('#imageApplication');
const nomApplication = document.querySelector('#nomApplication');
const iconActive = document.querySelector('#activeIcon');
const apikey = document.querySelector('#apikey');
const apisecret = document.querySelector('#apisecret');
const detail = document.querySelector('#detail');
const activeText = document.querySelector('#activeText');
const saveEdit = document.querySelector('#saveEdit');
const deleteManager = document.querySelector('#delete');
const checkBox = document.querySelector('#checkBox2');
let items = document.querySelectorAll('.containerApplication');
let application;
items.forEach(function(item){
    item.addEventListener('click', function(){
                application = applications[item.id-1];
                
               
                lightbox.classList.remove('scale-0');
                lightbox.classList.add('scale-100');
                imageApplication.src = application.image;
                nomApplication.textContent = application.title;
                apikey.value = application.ApiKey;
                apisecret.value = application.ApiKey;
                detail.textContent =application.description;
                if(application.statut){
                    checkBox.checked = true;
                    iconActive.classList.add('bi-check-circle');
                    iconActive.classList.add('text-green-600');
                    iconActive.classList.remove('bi-x-circle');
                    iconActive.classList.remove('text-red-600');
                    activeText.textContent = 'Desactiver l\'acces';
                    
                    
                }
                else{
                    checkBox.checked = false;
                    iconActive.classList.remove('bi-check-circle');
                    iconActive.classList.remove('text-green-600');
                    iconActive.classList.add('bi-x-circle');
                    iconActive.classList.add('text-red-600');
                    activeText.textContent = 'Activer l\'acces';
                    
                }
                checkBox.addEventListener('change', function(){
                   
                    if(checkBox.checked){
                        application.statut = true;
                        iconActive.classList.remove('bi-x-circle');
                        iconActive.classList.remove('text-red-600');
                        iconActive.classList.add('bi-check-circle');
                        iconActive.classList.add('text-green-600');
                        activeText.textContent = 'Desactiver l\'acces';
                    }
                    else{
                        application.statut = false;
                        iconActive.classList.remove('bi-check-circle');
                        iconActive.classList.remove('text-green-600');
                        iconActive.classList.add('bi-x-circle')
                        iconActive.classList.add('text-red-600');
                        activeText.textContent = 'Activer l\'acces';
                    }
                })


                
                
                
       
    })
})

deleteManager.addEventListener('click', function(){
    var question = confirm('voulez vous vraiment supprimer '+application.title+' du manager ???');
    if(question){
        lightbox.classList.remove('scale-100');
        lightbox.classList.add('scale-0');
        applications.remove(application);
        
    }
    
})

saveEdit.addEventListener('click', function(){
    lightbox.classList.remove('scale-100');
    lightbox.classList.add('scale-0')
    alert('modification enregistrer avec succes !!!');
    
})


const circle_menu = document.querySelector('#circle-menu');
const btnCircle = document.querySelector('#btnCircle');


btnCircle.addEventListener('click', function(){
    circle_menu.classList.toggle('circle-anim');

})







*/