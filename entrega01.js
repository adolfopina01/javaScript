let intentos = 1

let identificar = true

do{

    let ciudad = prompt("ingrese Ciudad")
    if (ciudad === null){
    break
    }
    if (ciudad === "Tokyo" && intentos <=3)
        {
            alert("bienvenido a tokyo")
            identificar = false 

        }else
            {
            alert("no es la ciudad correcta")
            intentos++
                if (intentos >3){
                    alert("usted se equivocó de ciudad más de tres veces")
                    break
                }

    }
} while(identificar)