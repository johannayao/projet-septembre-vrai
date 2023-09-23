function verifyPassword(text){
    return text.replaceAll(" ", "").length ===text.length && text.length <=8 && text.length >=4?true : false
}


const expressionReguliereEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

const verifyEmail = text => expressionReguliereEmail.test(text) ? true : false;