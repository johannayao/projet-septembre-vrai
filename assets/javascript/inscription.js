let butIns = document.querySelector('.btn')

butIns.addEventListener('click', () =>{
   let tabUser = JSON.parse(localStorage.getItem("userList")) || []
   let nom= document.querySelector(".nom").value;
   let prenom = document.querySelector(".prenom").value;
   let email = document.querySelector(".email").value;
   let motDePass = document.querySelector(".motDePass").value;

   if(nom ==="" && prenom==="" && motDePass===""){
      alert("aucun champs ne doit etre vide")
      return
  }
  

  if(!verifyPassword(motDePass)){
      alert("mot de pass doit pas cntenire d'espace\ndoit etre au moin 4 caractères\n au plus 8 caractère")
      return true
  }
  
  if(!verifyEmail(email)){
      alert("email invalid")
      return;
  }



   let user = {
      nom : nom,
      prenom : prenom,
      email : email,
      motDePass : motDePass 
   }
   
   const isUser= tabUser.find(user=>user.email===email);
   if(isUser) return alert("ce compte est dejà inscrit");

   tabUser.push(user)
   // window.location.reload()
   
   localStorage.setItem('userList', JSON.stringify(tabUser))
   window.location.href="../../corporates/connexion.html"
})



