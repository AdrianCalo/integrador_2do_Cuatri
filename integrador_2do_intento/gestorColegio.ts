import Alumno from "./Alumno";
import Profesor from "./Profesor";
import Curso from "./Curso";
const fs= require ('fs');

//import { check, leer,escribir,guardar } from "./utils";
import readlineSync from 'readline-sync';
import { check, guardar } from "./utils";



let rutaAlumno='./DATA/alumno.json'
let rutaProfesor='./DATA/profesor.json'
let legajos='./DATA/legajos.json'
    //read(){return fs.readFileSync('')}

 class GestorColegio{
    nombre:string;
    curso:Curso[];
    alumnos:Alumno[];
    profesor:Profesor[]; 
    matricula:[];   
    
    constructor(nombre:string){
        this.nombre=nombre;
        this.curso=[];
        this.alumnos=[];
        this.profesor=[];
        this.matricula=[];
        //fs.writeFileSync('./legajos.json','[]')
    }

    //data(){return JSON.parse(fs.readFileSync('./legajos.json','utf8'))}

    matricularAlumno(nombre:string, apellido:string,dni:number,domicilio:string,fecha_nacimiento:string,curso:Curso,contactoEmergencia:number){//anotarlo!! algo asi
        let newAlumno= new Alumno(nombre,apellido,dni,domicilio,fecha_nacimiento,curso,contactoEmergencia)
        console.log(newAlumno);
        return newAlumno
    }//en matricular creo al alumno y ya lo deberia guardar en el JSON

    crearAlumno(nombre:string, apellido:string,dni:number,domicilio:string,fecha_nacimiento:string,curso:Curso,contactoEmergencia:number){
        let newAlumno= new Alumno(nombre,apellido,dni,domicilio,fecha_nacimiento,curso,contactoEmergencia)
        let pathAlumno=rutaAlumno
        guardar(pathAlumno,newAlumno)
    }


}










let Curso1=new Curso('1A')
let profesor1= new Profesor('Juan Carlos','Gomez',11206640,'1954/06/29','25 de mayo 792',2281572898,'agy_calo@hotmail.com') 
let alumno1= new Alumno('adrian','calo',35411853,'pelegrini 331','1990/10/05',Curso1,2281572898)
//let tecnica= new GestorColegio()
//tecnica.agregarAlumno()

alumno1.mostrarDatos()
profesor1.mostrarDatos();
profesor1.AsignarMateria('fisica','Gomez, juan carlos')
alumno1.agregar_materia('Fisica')
alumno1.ingresarNotas('Fisica',8)



alumno1.agregar_materia('lengua')
alumno1.mostrarDatos()
alumno1.agregar_materia('gimnasia')
alumno1.ingresarNotas('gimnasia',7)
alumno1.ingresarNotas('lengua',9)
alumno1.PromedioNotas();
alumno1.mostrarDatos();






//agregarAlumno(){
    //    let nombre= readlineSync.question('Ingrese nombre del alumno: ')
    //    let apellido= readlineSync.question('Ingrese apellido del alumno: ')
    //    let dni= readlineSync.question('Ingrese DNI: ')
    //    let domicilio= readlineSync.question('Ingrese domicilio del alumno: ')
    //    let fecha_nacimiento= readlineSync.question('Ingrese fecha de nacimiento: ')
    //    let matriculaID= readlineSync.question('Ingrese N° de matricula: ')
    //    let curso= readlineSync.question('Ingrese curso a realizar: ')
    //    let contactoEmergencia= readlineSync.question('Ingrese contacto de emergencia: ')
    //    
    //    
    //    let nuevoAlumno=new Alumno(nombre,apellido,Number(dni),domicilio,fecha_nacimiento,[]Curso,Number(contactoEmergencia))
    //    
    //    let legajo:Alumno[]=[...this.data(),nuevoAlumno]
    //    fs.writeFileSync(rutaAlumno)
    //    fs.writeFileSync(legajos,JSON.stringify(legajo,null,2));
    //    
    //}

//let cruso1=new Curso('primeroA',profesor1[],alumno1[])
//
////console.log(alumno1.id);
//alumno1.agregar_materia('fisica')
//profesor1.AsignarMateria('fisica','Gomez juan Carlos');
//alumno1.ingresarNotas('fisica',8)
//alumno1.PromedioNotas();
//alumno1.mostrarDatos();
//profesor1.mostrarDatos();

