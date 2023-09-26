let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(localStorage.getItem("userList")&&JSON.parse(localStorage.getItem("userList")).length>0){
        let email = document.querySelector(".email").value;
        let password =document.querySelector(".motPass").value;
        let table = JSON.parse(localStorage.getItem("userList"));
        
        const isUser= table.find(user=>user.email===email&&user.motDePass===password);
        if(!isUser) return alert("email ou mot de pass incorrect");
        let dataSession = {
            email:email
           
        }
        sessionStorage.setItem("sessionRegistPlus", JSON.stringify(dataSession))
        window.location.href="https:/https:/johannayao.github.io/projet-septembre-vrai/";
        //   window.location.href="../../corporates/page2.html";
        
        console.log(isUser);
        












        
    }
    
})