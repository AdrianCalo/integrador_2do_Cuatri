const fs= require('fs');


//revisar si el archivo en el que vamos a escribir existe
function check(ruta){
    if(fs.existsSync(ruta)){
        console.log('existe');
        return true
    }else console.log('no existe ruta')
    return false
}

//escribimos el archivo.json en formato texto en la RUTA especifica 
function escribir(data, ruta){
    return fs.writeFileSync(ruta, JSON.stringify(data, null, 2))
}

function leer(ruta){
    try{//intentamos
        if (check(ruta)){//chequeamos que la ruta exista
            let resultado= JSON.parse(fs.readFileSync(ruta))//pasamos lo que hay dentro de la ruta a OBJETO y lo guardamos en variable resultado
            console.log(resultado)
            return resultado
        }
    }catch (error){// capturamos el error
        console.log(error)
    }
}
 
function guardar(ruta,data){
    if(check(ruta)){//chequeamos que exista la ruta
        let saveData=[...leer(ruta),data];//expres operator. recorre todo el archivo en la RUTA y toma todos los datos
        console.log(leer(ruta), 'leyendo archivo...')
        return escribir(saveData,ruta)//escribe en la Ruta lo que hay en la variable saveData
    }else{
        console.log('guardando informacion...');
        return escribir([data],ruta)// en caso que la ruta no existe directamente la crea con lo que hay en data
    }
}

export { check, escribir, leer, guardar }