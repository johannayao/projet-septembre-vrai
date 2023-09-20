let envoyer = document.querySelector(".all")


envoyer.addEventListener("click" , (e)=>{
    const date = document.querySelector("#date")
    const deux = document.querySelector("#deux")
    const trois = document.querySelector("#trois")
    const quatre = document.querySelector("#quatre")
    const eppargne = document.querySelector("#eppargne")

    let information = {
        "date": date.value,
        "deux": deux.value,
        "trois": trois.value,
        "quatre": quatre.value,
        "eppargne": eppargne.value
    }

    if(localStorage.getItem("personne")){
        let global = localStorage.getItem("moi")
        let convertion = JSON.parse(global)

        let chaque = convertion.length
    information.chaque = chaque+1
    convertion.push(information)
    localStorage.setItem("personne".JSON.stringify(convertion))
    }else{
        let tableau =[];
        information.id=1
        tableau.push(info)
        localStorage.setItem("personne",JSON.stringify(tableau))
    }
    

})
