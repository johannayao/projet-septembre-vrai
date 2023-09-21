let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let table = JSON.parse(localStorage.getItem("userList"))
    let result;
    table.forEach(element => {
        if(element.email=== document.querySelector(".email").value &&
         element.motPass===document.querySelector(".motPass").value){
            result = element
         }
    });
    
    if(typeof result !="undefined"){
        alert("connecter avec succès")
        // window.location.href = "../javascript/login.js"
        window.location.href = "../corporates/index.html"
    }else{
        alert("incorrecte")
        window.location.reload()
    }
})