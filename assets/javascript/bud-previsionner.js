

const formulaire = document.getElementById('formulaire')
const bouton = document.querySelector(".lo")

formulaire.addEventListener("submit",(e)=>{
    e.preventDefault();
})

form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault
    // let egale= renduJournee.value+perte.value
    console.log(egale);
})
bouton.addEventListener("click" , (e)=>{
  e.preventDefault();
  
  const prixAchat = document.querySelector("#prixAchat");
  const  perte= document.querySelector("#perte");
  const prixProduit = document.querySelector("#prixProduit");
  const date = document.querySelector("#date");
  

  //const benefice = document.querySelector("#benefice");
  const eppargne = document.querySelector("#eppargne");
  const renduJournee = document.querySelector("#renduJournee");
  
   
  let information ={
    date:parseInt(date.value),
    prixAchat: parseInt(prixAchat.value),
    perte : parseInt(perte.value),
    prixProduit: parseInt(prixProduit.value),
    
    
    // benefice:  parseInt(benefice.value),
    eppargne: parseInt(eppargne.value),
    renduJournee : parseInt(renduJournee.value)
  }

  console.log(information);

     let upBoutique = localStorage.getItem("boutique")
    upBoutique = JSON.parse(upBoutique)
    console.log(upBoutique)

 if(upBoutique == null){
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



function recupBoutique (table){
    let tbody = document.querySelector(".tbody");
    table.forEach(boutique => {
        // console.log( (boutique.prixAchat - (boutique.renduJournee + boutique.perte)) );
        console.log(boutique);
        let tout = `<tr id="${boutique.id}">
            
             
        <td data-title="prixAchat">${boutique.prixAchat} ${"Fcfa"}</td>
            
          
             <td data-title="benefice">${boutique.eppargne} ${"Fcfa"}</td>
            
             <td data-title="eppargne"> ${boutique.benefice}</td>
            <td data-title="prixProduit">${boutique.prixProduit}  ${"Fcfa"}</td>
            <td data-title="date">${boutique.date}</td>
             <td data-title="renduJournee">${boutique.renduJournee} ${"Fcfa"}</td>
             <td data-title="MODIFICATION" ><div class="chance"><i class="edite" id="delete-${boutique.id}">Modifier</i> <i class="delete" onclick="deleteItem(event)" id="delete-${boutique.id}">Supprimer</i></div></td>
        </tr>`;
        tbody.innerHTML += tout;
        // console.log(prixProduit);
    });
}

let allboutique=JSON.parse(localStorage.getItem("boutique"))
console.log(allboutique)
recupBoutique(allboutique, allboutique?.length)

function deleteItem(e){
   let id = e.target.getAttribute("id");


   let idSplit =id.split("-")[1]
   let bouti = localStorage.getItem('boutique')
   bouti = JSON.parse(bouti)|| []
   let filt = bouti.filter(e=> e.id != parseInt(idSplit))
   localStorage.setItem('boutique',JSON.stringify(filt))
   window.location.reload();
}   
console.log(allboutique);



function modifier (id){
  
}
