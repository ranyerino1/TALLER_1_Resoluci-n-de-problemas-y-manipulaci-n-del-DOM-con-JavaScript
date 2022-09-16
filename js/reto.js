//reto 1
let boton = document.getElementById("boton1")

function longitud() {
           let palabra = document.getElementById("palabra").value
           let longitud = palabra.length
           alert(longitud)
}

boton.addEventListener("click", longitud)


//reto 2
let divColor = document.getElementById("divColor")

function colorElement(){
    divColor.classList.replace("reto2", "reto2Color")
}
function colorElement2(){
    divColor.classList.replace("reto2Color", "reto2")
}

divColor.addEventListener("mouseover", colorElement)
divColor.addEventListener("mouseout", colorElement2)

//reto 3
let boton3 = document.getElementById("reto3")

function boton3Color() {
    boton3.classList.replace("reto3Color", "reto3Color2")
}

boton3.addEventListener("click", boton3Color)

//reto 4

let reto4 = document.getElementById("reto4")

function clickReto4() {
    console.log("oprimio el mouse");
}

function noClickReto4() {
    console.log("solto el mouse");
}

reto4.addEventListener("mousedown", clickReto4)
reto4.addEventListener("mouseup", noClickReto4)

//reto5

let reto52 = document.getElementById("reto52")
let reto5 = document.getElementById("reto5")

function textoR5() {
    reto52.classList.replace("reto5", "reto52")
}

reto5.addEventListener("dblclick", textoR5)