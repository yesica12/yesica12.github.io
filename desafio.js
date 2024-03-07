let texto=document.getElementById("primerCampo");
let textoDos =document.getElementById("segundoCampo");
let crecePrimero =  document.getElementById("principalDesafio");
let totalDesafio =  document.getElementById("principalTotalDesaio");
let escondido=document.getElementById("DesafioEscondido");
const botonCifrar = document.getElementById("cifrar");
const botonDescifrar = document.getElementById("descifrar");
let mensaje;
let element ;
let visu;

function autoCrecer(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function CreceHeighTop() {
    // se declara variables locales
    let otroNumero;
    let aumentador;
    let mira;
    let mirados;
    var two = "px";
    var lucero;
    var tres;
    // se declara la condicion solo para la panatalla de 375  
    if (screen.width <= 375 ) {        
        // si el elemento de segundoCampo(textoDos) es menor igual a 375 pixeles cresca
        textoDos.style.height = "5px";   
        visu=(textoDos.style.height = textoDos.scrollHeight + "px");
        // convertir a entero los  segundoCampo(textoDos)
        aumentador=parseInt(visu, 10);
        // obtener el height de primerCampo(texto) y guardarlo en la variable otroNumero
        otroNumero=texto.style.height;
        // convertir a entero los  primerCampo(texto) y guardar en la variable mira
        mira=parseInt(otroNumero, 10);
        if(mira>=48   && mira<=299){
            mirados= 555;
            // convertir nuevamente de entreo a string para que lo pueda leer el top
            tres = mirados.toString();
            lucero= (escondido.style.top = (tres+two)); 
        }
        else {
            mirados= mira + 256;
            // convertir nuevamente de entreo a string para que lo pueda leer el top
            tres = mirados.toString();
            lucero= (escondido.style.top = (tres+two));     
        } 
        totalDesafio.style.height = "932px";
        totalDesafio.style.height = crecePrimero.scrollHeight + "px";       
    }  
}

function cifrar(){
    mensaje= texto.value.replace(/[e]/g, 'enter').replace(/[i]/gi, 'imes').replace(/[o]/g, 'ober').replace(/[u]/g, 'ufat').replace(/[a]/gi, 'ai');
    textoDos.innerHTML=mensaje;

}

function descifrar(){
    
    mensaje = texto.value.replace(/enter/g, 'e').replace(/imes/gi, 'i').replace(/ober/g, 'o').replace(/ai/gi, 'a').replace(/ufat/gi, 'u');
    textoDos.innerHTML=mensaje;
    
}

function SoloMinus() {
    texto.value=texto.value.toLowerCase();   

}

function caracteresDife() {

    let txt = texto.value;
    var letras= /[\^*@"#$%&/()='\\]/gi;
    txt=txt.replace(letras, " ");
    texto.value=txt;

}

function copiar(){
    texto.value=textoDos.innerHTML;
    textoDos.innerHTML="";  
}

botonCifrar.addEventListener("click", (event) => {   
    var e = document.getElementById("Busqueda");

    if (!texto.value == null || !texto.value == "") {
        escondido.style.display = "block";
        e.style.display = "none";             
    }
    texto.value = ""; 

});


botonDescifrar.addEventListener("click", (event) => {
    
    var e = document.getElementById("Busqueda");

    if (!texto.value == null || !texto.value == "") {
        escondido.style.display = "block";
        e.style.display = "none";             
    }
    texto.value = ""; 
});

texto.addEventListener("keyup", SoloMinus);
texto.addEventListener("keyup", caracteresDife);
botonCifrar.addEventListener("click", CreceHeighTop);
botonDescifrar.addEventListener("click", CreceHeighTop);


// despues colocar tiempo

// setInterval("location.reload()",40000);