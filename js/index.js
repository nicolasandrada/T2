//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    let excedente = calcularExedente()
    sueldoTotal(excedente)
})

/**
 * 1) Funcion para calcular el excedente 
 */
function calcularExedente(){
    //recorre la lista de producciones y guarda los valores numericos en el arreglo "produccion"
    let produccion = []
    document.getElementsByName("prod[]").forEach(l => {
        produccion.push(parseInt(l.value))
    })

    //trae la opcion del sector seleccionada (costura / corte / pegado / embalaje )
    let sector = document.getElementById('sector').value

    let excedente = 0 

    return excedente
}

/**
 * 2) Funcion para calcular sueldo total
 */
function sueldoTotal(exc){
    //trae la opcion del sector seleccionada (costura / corte / pegado / embalaje )
    let sector = document.getElementById('sector').value

    let adelanto = parseInt(document.getElementById('adelanto').value)

    let antiguedad = parseInt(document.getElementById('antiguedad').value)

    let total=0; 


    alert("El sueldo total es de: "+total)
}