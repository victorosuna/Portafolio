document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    scrollNav();
    
}

function scrollNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e){
            e.preventDefault();
            const seccionScroll= e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        })
    })
}

function navegacionFija(){
    const barra= document.querySelector(".header");
    const about= document.querySelector(".about");
    const body=document.querySelector("body");
    
    
    


    window.addEventListener("scroll", function(){
        const ancho = window.innerWidth;
    const tablet = 768;
        

        if(about.getBoundingClientRect().top < 0 && ancho > tablet){
            barra.classList.add("fijo");
            body.classList.add("body-scroll");
        }else{
            barra.classList.remove("fijo");
            body.classList.remove("body-scroll");
        }
    })
}

