const sessionRegistPlus = sessionStorage.getItem("sessionRegistPlus");
if(!sessionRegistPlus) window.location.href="../../corporates/connexion.html";
const userEmail = JSON.parse(sessionRegistPlus).email;

let dataLocalstorageRegistPlus = localStorage.getItem("userList");
let globalData = JSON.parse(dataLocalstorageRegistPlus);
const user = globalData.find(item=>item.email===userEmail);

const formulaire= document.querySelector("#formulaire");
formulaire.nom.value =user.nom;
formulaire.prenom.value =user.prenom;
formulaire.email.value =user.email;
formulaire.motDePass.value =user.motDePass;



const modifier=event=>{
    event.preventDefault();
    const nom= event.target.nom.value
    const prenom=event.target.prenom.value
    const email = event.target.email.value
    const motDePass = event.target.motDePass.value
    const photo = event.target.photo.value ? event.target.photo.files[0] : "";

    const indiceUser = globalData.indexOf(user);
    if(photo){
        let fichierModif = new FileReader();
        fichierModif.readAsDataURL(photo);
        fichierModif.addEventListener("load", () => {
            user.photo = fichierModif.result;
        });
    }

    setTimeout(() => {
        user.nom=nom;
        user.prenom=prenom;
        user.email=email
        user.motDePass=motDePass;
        globalData[indiceUser] = user;
        localStorage.setItem("userList", JSON.stringify(globalData));
        window.location.href="./profil.html";
    }, 1000);
}

formulaire.addEventListener("submit",modifier)