let boutton = document.querySelector(".btn")


boutton.addEventListener("click",()=>{
    // let table = JSON.parse(localStorage.getItem("userList")) ||[]
    let table = JSON.parse(localStorage.getItem("useList")) || []
    let nom= document.querySelector(".nom").value
    let prenom = document.querySelector(".prenom").value
    let mail = document.querySelector(".email")
    let motDepass = document.querySelector(".motDePass").value
    let expresiReMot = new RegExp( '?=.{8,})')
     if(nom ===""){
         alert("aucun champs ne doit etre vide")
     }
     if(mail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
        alert("email valid!")
     }else{
        alert("email invalid")
     }

     if(expresiReMot.value){
        alert("mot de pass valid")
     }else{
        alert("mot de pass invalid")
     }
    let user ={
        nom:nom,
        prenom:prenom,
        mail:mail,
        motDepass:motDepass

    }
    
    table.push(user)
    localStorage.setItem("userList",JSON.stringify(table))
})