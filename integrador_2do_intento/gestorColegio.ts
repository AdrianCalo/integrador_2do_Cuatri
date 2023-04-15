import Alumno from "./Alumno";
import Profesor from "./Profesor";
//import { check, leer,escribir,guardar } from "./utils";
import Curso from "./Curso";
const fs= require ('fs');
import readlineSync from 'readline-sync';

let rutaAlumno='./alumno.json'
let rutaProfesor='./profesor.json'
let legajos='./legajos.json'
    //read(){return fs.readFileSync('')}

 class GestorColegio{
    constructor(){
        fs.writeFileSync('./legajos.json','[]')
    }

    data(){return JSON.parse(fs.readFileSync('./legajos.json','utf8'))}

    agregarAlumno(){
        let nombre= readlineSync.question('Ingrese nombre del alumno: ')
        let apellido= readlineSync.question('Ingrese apellido del alumno: ')
        let dni= readlineSync.question('Ingrese DNI: ')
        let domicilio= readlineSync.question('Ingrese domicilio del alumno: ')
        let fecha_nacimiento= readlineSync.question('Ingrese fecha de nacimiento: ')
        let matriculaID= readlineSync.question('Ingrese N° de matricula: ')
        let curso= readlineSync.question('Ingrese curso a realizar: ')
        let contactoEmergencia= readlineSync.question('Ingrese contacto de emergencia: ')
        

        let nuevoAlumno=new Alumno(nombre,apellido,Number(dni),domicilio,fecha_nacimiento,Number(matriculaID),curso,Number(contactoEmergencia))
        
        let legajo:Alumno[]=[...this.data(),nuevoAlumno]
        fs.writeFileSync(rutaAlumno)
        fs.writeFileSync(legajos,JSON.stringify(legajo,null,2));
   
    }
}































//let alumno1= new Alumno('adrian','calo',35411853,'pelegrini 331','1990/10/05',35411853,'electromecanica',2281550283)
//let profesor1= new Profesor('Juan Carlos','Gomez',11206640,'1954/06/29','25 de mayo 792',1,2281572898,'agy_calo@hotmail.com') 
//let cruso1=new Curso('primeroA',profesor1[],alumno1[])
//
////console.log(alumno1.id);
//alumno1.agregar_materia('fisica')
//profesor1.AsignarMateria('fisica','Gomez juan Carlos');
//alumno1.ingresarNotas('fisica',8)
//alumno1.PromedioNotas();
//alumno1.mostrarDatos();
//profesor1.mostrarDatos();

