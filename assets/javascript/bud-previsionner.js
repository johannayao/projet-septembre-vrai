

//  const formulaire = document.getElementById('formulaire')
 const bouton = document.querySelector("#lo");
//  formulaire.addEventListener("submit",(e)=>{
//      e.preventDefault();


//  })

/*  form = document.querySelector("form");
 form.addEventListener("submit", (e)=>{
     e.preventDefault
   
     console.log(egale);
 }) */
 bouton.addEventListener("click" , (e)=>{
   e.preventDefault();
  
   const prixAchat = document.querySelector("#prixAchat");
   const  perte= document.querySelector("#perte");
   const prixProduit = document.querySelector("#prixProduit");
   const date = document.querySelector("#date");
  
   const eppargne = document.querySelector("#eppargne");
   const renduJournee = document.querySelector("#renduJournee");
  
   let information ={
     date:(date.value),
     prixAchat: parseInt(prixAchat.value),
     perte : parseInt(perte.value),
     prixProduit: parseInt(prixProduit.value),
     eppargne: parseInt(eppargne.value),
     renduJournee : parseInt(renduJournee.value)
   }
   console.log(information);

    let upBoutique = localStorage.getItem("boutique")
    console.log(upBoutique)

  if(upBoutique == null){
    upBoutique = []
    //  information.id = upBoutique.length+1
     upBoutique.push(information)
      localStorage.setItem("boutique",JSON.stringify(upBoutique))
      console.log("le if");
    window.location.reload();
     }
     else{
         upBoutique = JSON.parse(upBoutique);
        //  information.id = upBoutique.length+1
         upBoutique.push(information)
         localStorage.setItem("boutique", JSON.stringify(upBoutique))
         console.log("le else");
        window.location.reload();
        // console.log(allboutique);
     } 
 })



 function recupBoutique (){
    let allboutique=JSON.parse(localStorage.getItem("boutique"));
     let tbody = document.querySelector(".tbody");
     console.log(allboutique);
     let tout = "";
     allboutique.forEach((boutique, index) => {
      
         console.log(boutique);
         tout += `<tr id="${boutique.index}">
         <td data-title="prixAchat">${boutique.prixAchat} ${"Fcfa"}</td>
              <td data-title="benefice">${boutique.renduJournee} ${"Fcfa"}</td>
              <td data-title="eppargne"> ${boutique.eppargne}${"Fcfa"}</td>
             <td data-title="prixProduit">${boutique.prixProduit}  ${"Fcfa"}</td>
             <td data-title="date">${boutique.date}</td>
              <td data-title="renduJournee">${boutique.renduJournee} ${"Fcfa"}</td>
              <td data-title="MODIFICATION" ><div class="chance"><i class="edite" id="delete-${boutique.index}"></i><i class="delete" onclick="deleteItem(${boutique.index})">Supprimer</i></div></td>
         </tr>`;  
        
     });
    tbody.innerHTML = tout;
 }
window.onload = recupBoutique();

 function deleteItem(index){
    let allboutique=JSON.parse(localStorage.getItem("boutique"));

    allboutique.splice(index,1);
    localStorage.setItem("boutique", JSON.stringify(allboutique))
    window.location.reload();
 }   









// function affichTout (){
//   let boutique = JSON.parse(localStorage.getItem("boutique"))
//   let tbody = document.querySelector(".tbody")
//  console.log(boutique);
//   tbody.innerHTML ="";
//   boutique.forEach((element) => {
//         const row = document.createElement("tr")
//         row.className = "formulaire";

//         row.innerHTML = `
//         <td>${element.benefice}</td>
//         <td>${element.eppargne}</td>
//         <td>${element.Depense}</td>
//         <td>${element.Perte}</td>
//         <td>${element.date}</td>
//         <td>${element.date}</td>

//         <td>
        
//          <div class="chance" <a><span class="editer" onclick="modifier" (${element.id})">Modifier</span><a/>
//          <a><span class="delete" onclick="supprimer" (${element.id})">supprimer</span><a/> <div/>

//         </td>
//         `
        
//         tbody.appendChild(row)
//   });
// }

// function supprimer (id){
//     let data = JSON.parse(localStorage.getItem("boutique"));
//     data = data.filter((rec) => rec.id !==id)
//     localStorage.setItem("boutique",JSON.stringify(data))
//     affichTout()
// }

// function modifier (id){
//     let boutique = JSON.parse(localStorage.getItem("boutique"))
//     let element = boutique.find((rec) => rec.id ===id)



//     if(element){
//         document.getElementById("prixAchat").value = element.prixAchat
//         document.getElementById("renduJournee").value = element.prixAchat
//         document.getElementById("perte").value = element.prixAchat
//         document.getElementById("prixProduit").value = element.prixAchat
//         document.getElementById("date").value = element.prixAchat
//         document.getElementById("eppargne").value = element.prixAchat
    
    
//         const formulaire = document.getElementById("formulaire")
//         formulaire.onsubmit = function(e){
//            e.preventDefault()
//            element.prixAchat = document.getElementById("prixAchat").value
//            element.renduJournee = document.getElementById("renduJournee").value
//            element.perte = document.getElementById("perte").value
//            element.prixProduit = document.getElementById("prixProduit").value
//            element.date = document.getElementById("date").value
//            element.eppargne = document.getElementById("eppargne").value
    
//            localStorage.setItem("boutique",JSON.stringify(boutique))
//         }
        
//     }
// }

// affichTout()
