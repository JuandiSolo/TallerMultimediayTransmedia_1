console.log("Hola")

const titulo = document.getElementById("tituloPrincipal")

titulo.innerText="Holaaa"
titulo.style.color = "pink"

let activado = false;

titulo.addEventListener("click", ()=>{
if (activado == false){


    titulo.innerText= "Tu mama raaaaaaaaaaaaa";
    titulo.style.color= "green";
    activado = true;
}else {
    titulo.innerText= "Holaaaaaa";
    titulo.style.color= "pink";
    activado =false;
    
}
}
)