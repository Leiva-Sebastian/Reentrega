let menuVisible=false;
//funcion que muestra oculta el menu
function mostrarOcultarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList="";
    menuVisible=false;
  }else{
    document.getElementById("nav").classList="responsive";
    menuVisible=true;
    
  }
}
function seleccionar(){
  //oculto el menu
  document.getElementById("nav").classList="";
  menuVisible=false;
  
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("creatividad");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("proyect");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 