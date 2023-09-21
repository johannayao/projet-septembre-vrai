// const formulaire = document.getElementById("formulaire");
// const saving = (event) => {
//   event.preventDefault();
//   const prixAchat = document.querySelector("#prixAchat");
//   const perte = document.querySelector("#perte");
//   const prixProduit = document.querySelector("#prixProduit");
//   const benefice = document.querySelector("#benefice");
//   const eppargne = document.querySelector("#eppargne");
//   const renduJournee = document.querySelector("#renduJournee");
//   let information = {};
//     if (prixAchat.value != "") {
//       if (perte.value != "") {
//         if (prixProduit.value != "") {
//           if (benefice.value != "") {
//             if (eppargne.value != "") {
//               information = {
//                 prixAchat:Number(prixAchat.value),
//                 renduJournee:Number(renduJournee),
//                 perte: this.benefice<0 ? ,
//                 prixProduit: Number(prixProduit),
//                 benefice: this.prixAchat -this.renduJournee,
//                 eppargne: Number(eppargne),
//                 date:new Date().toDateString()
//               };
//               console.log(information)
//             }else{
//                 eppargne.focus()
//             }
//           }else{
//             benefice.focus()
//         }
//         }else{
//             prixProduit.focus()
//         }
//       }else{
//         perte.focus()
//     }
//     }else{
//         prixAchat.focus()
//     }


// };
// formulaire.addEventListener("submit", saving);


// let prixAchat = document.querySelector("prixAchat")



// let selectedRow = null
// function onFormSubmit(e){
//     event.preventDefault()
//     let formData = readFormData()
//     if(selectedRow === null){
//         insertNewRecord(formData)
//     }else{

//     }

// }

// let boutton = document.querySelector("#boutton")

// boutton.onclick = ()=>{
//     localStorage.setItem("personne",perte.value)
//     localStorage.setItem("personne",prixAchat.value)
//     localStorage.setItem("personne",renduJournee.value)
//     localStorage.setItem("personne",benefice.value)
// }



// function readFormData(){
//     let formData ={}
//    formData["prixAchat"]=document.getElementById("prixAchat").value
//    formData["renduJournee"]=document.getElementById("renduJournee").value
//    formData["perte"]=document.getElementById("perte").value
//    formData["prixProduit"]=document.getElementById("prixProduit").value
//    formData["benefice"]=document.getElementById("benefice").value
//    formData["eppargne"]=document.getElementById("eppargne").value
//     return formData;
// }

// function inserertNewRecord(data){
//     let table = document.getElementById("storelis").getElementsByTagName('tbody')[0]
//     let newRow = table.insertRow(table.length)

//     let cell1 = newRow.insertCell(0)
//     cell1.innerHTML = data.prixAchat

//     let cell2 =newRow.insertCell(1)
//     cell2.innerHTML =  data.renduJournee

//     let cell3 =newRow.insertCell(2)
//     cell3.innerHTML = data.perte

//     let cell4 =newRow.insertCell(3)
//     cell4.innerHTML = data.prixProduit

//     let cell5 =newRow.insertCell(4)
//     cell5.innerHTML = data.benefice

//     let cell6 =newRow.insertCell(5)
//     cell6.innerHTML = data.eppargne

//     let cell7 =newRow.insertCell(6)
//     cell7.innerHTML = `<button>Edit</button> <button>Delete</button>`
    
// }


const formulaire = document.getElementById('formulaire')
const bouton = document.querySelector(".lo")

formulaire.addEventListener("submit",(e)=>{
    e.preventDefault();
})

form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault
    let egale= renduJournee.value+perte.value
    console.log(egale);
})
bouton.addEventListener("click" , (e)=>{
  const prixAchat = document.querySelector("#prixAchat");
  const  perte= document.querySelector("#perte");
  const prixProduit = document.querySelector("#prixProduit");
  const benefice = document.querySelector("#benefice");
  const eppargne = document.querySelector("#eppargne");
  const renduJournee = document.querySelector("#renduJournee");
  
   
  let information ={
    prixAchat: parseInt(prixAchat.value),
    perte : parseInt(perte.value),
    prixProduit: parseInt(prixProduit.value),
    benefice:  parseInt(benefice.value),
    eppargne: eppargne.value,
    renduJournee : parseInt(renduJournee.value)
  }
    let upBoutique = localStorage.getItem("boutique")
    upBoutique = JSON.parse(upBoutique)
  

  if(upBoutique != null){
    information.id = upBoutique.length+1
    upBoutique.push( information)
     localStorage.setItem ("boutique",JSON.stringify(upBoutique))
        window.location.reload();
    }
    else{
        upBoutique = [];
        information.id = upBoutique.length+1
        upBoutique.push(information)
        localStorage.setItem("boutique", JSON.stringify(upBoutique))
        window.location.reload();
    }
})



function recupBoutique (table, len){
    let tbody = document.querySelector(".tbody");
    table.forEach(boutique => {
        let tout = `<tr id="${boutique.id}">
            <td data-title="prixAchat">${boutique.prixAchat}</td>
            <td data-title="perte">${boutique.perte}</td>
            <td data-title="prixProduit">${boutique.prixProduit}</td>
            <td data-title="benefice">${boutique.benefice}</td>
            <td data-title="eppargne">${boutique.eppargne}</td>
            <td data-title="renduJournee">${boutique.renduJournee}</td>
            <td data-title="MODIFICATION" ><div class="chance"><i class="edite" id="delete-${boutique.id}">Modifier</i> <i class="delete" onclick="deleteItem(event)" id="delete-${boutique.id}">Supprimer</i></div></td>
        </tr>`;
        tbody.innerHTML += tout;
    });
}

let allboutique=JSON.parse(localStorage.getItem("boutique"))
console.log(allboutique)
recupBoutique(allboutique, allboutique.length)

function deleteItem(e){
   let id = e.target.getAttribute("id");
   let idSplit =id.split("-")[1]
   let bouti = localStorage.getItem('boutique')
   bouti = JSON.parse(bouti)
   let filt = bouti.filter(e=> e.id != parseInt(idSplit))
   localStorage.setItem('boutique',JSON.stringify(filt))
   window.location.reload();
}   








