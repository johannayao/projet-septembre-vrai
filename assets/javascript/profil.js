const sessionRegistPlus = sessionStorage.getItem("sessionRegistPlus");
if(!sessionRegistPlus) window.location.href="../../corporates/connexion.html";
const userEmail = JSON.parse(sessionRegistPlus).email;

let dataLocalstorageRegistPlus = localStorage.getItem("userList");
let globalData = JSON.parse(dataLocalstorageRegistPlus);
const user = globalData.find(item=>item.email===userEmail);
console.log(user);

const userNom= document.querySelector("#userNom");
const userPrenom= document.querySelector("#userPrenom");
const useEmail= document.querySelector("#userEmail");
const photo_profile=document.querySelectorAll(".photo-profile");


userNom.textContent = user.nom;
userPrenom.textContent = user.prenom;
useEmail.textContent = user.email;
photo_profile.forEach(_photo=> _photo.src=user.photo)
