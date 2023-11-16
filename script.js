let mdp = document.querySelector(".mdp")

mdp.addEventListener("focus",()=>{
    document.querySelector("ul").style.opacity = "1"
})

function contientMajuscule(chaine) {
    for (var i = 0; i < chaine.length; i++) {
        if (chaine[i] >= 'A' && chaine[i] <= 'Z') {
            return true;
        }
    }
    return false;
}

function contientMinuscule(chaine) {
    for (var i = 0; i < chaine.length; i++) {
        if (chaine[i] >= 'a' && chaine[i] <= 'z') {
            return true;
        }
    }
    return false;
}

mdp.addEventListener("keyup",()=>{
    let value = mdp.value
    if(/\d/.test(value)){
        document.querySelector(".chif").style.display = "none"
    }
    else{
        document.querySelector(".chif").style.display = "block"
    }

    if(value.length>=8){
        document.querySelector(".char").style.display = "none"
    }
    else{
        document.querySelector(".char").style.display = "block"
    }

    if(contientMajuscule(value)){
        document.querySelector(".maj").style.display = "none"
    }
    else{
        document.querySelector(".maj").style.display = "block" 
    }

    if(contientMinuscule(value)){
        document.querySelector(".min").style.display = "none"
    }
    else{
        document.querySelector(".min").style.display = "block" 
    }
})