import Alumno from "./Alumno";
import Profesor from "./Profesor";
import Curso from "./Curso";
const fs= require ('fs');

//import { check, leer,escribir,guardar } from "./utils";
import readlineSync from 'readline-sync';
//import { check, guardar } from "./utils";
//import { read } from "fs";



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
        
        if(fs.existsSync('./DATA/alumno.json')){
            console.log('archivo existente de alumnos')
        }else{
            fs.writeFileSync('./DATA/alumno.json','[]')
        }
        if(fs.existsSync('./DATA/profesor.json')){
            console.log('archivo exitente de profesores')
        }else{
            fs.writeFileSync('./DATA/profesor.json','[]')
        }
        if(fs.existsSync('./DATA/legajos.json')){
            console.log('archivo existente de legajos')
        }else{
            fs.writeFileSync('./DATA/legajos.json','[]')
        }
    }
    read(){return fs.readlineSync('./DATA/alumno.json','[]')}
    data(){return JSON.parse(fs.readFileSync('./DATA/alumno.json','utf8'))}
   
    //data(){return JSON.parse(fs.readFileSync('./legajos.json','utf8'))}

    matricularAlumno(){//anotarlo!! algo asi
        let nombre= readlineSync.question('Ingrese nombre del alumno: ');
        let apellido= readlineSync.question('Ingrese apellido del alumno: ');
        let dni= Number(readlineSync.question('Ingrese DNI: '));
        let domicilio= readlineSync.question('Ingrese domicilio del alumno: ');
        let fecha_nacimiento= readlineSync.question('Ingrese fecha de nacimiento: ');
        let NombreCurso=readlineSync.question(`ingrese el nombre del curso a inscribirse: `);   
        let curso= new Curso(NombreCurso)
        let contactoEmergencia= Number(readlineSync.question('Ingrese contacto de emergencia: '));
        let newAlumno= new Alumno(nombre,apellido,dni,domicilio,fecha_nacimiento,curso,contactoEmergencia);
        console.log(newAlumno);
        //try{
        //    const data= fs.readFileSync('./DATA/alumno.json', "utf8");
        //    const jsonFile= JSON.parse(data);//.parse() convierte texto a objeto
        //    newAlumno=jsonFile.map((item:any)=>item);
        //}catch (error){
        //    let mensError= "no se ha podido acceder al Archivo"
        //    fs.writeFileSync("./error.txt",mensError,"utf8")
        //}
        let alumnos:Alumno[]=[...this.data(),newAlumno];
        fs.writeFileSync('./DATA/alumno.json',JSON.stringify(alumnos,null,2))
    }

    //en matricular creo al alumno y ya lo deberia guardar en el JSON. luego tengo que tener una funcion para buscar el alumno en el listado
    //y agregar las materias, usar la misma funcion para luego agregar notas! (usando las que tnego en alunnos) 

    ContratarProfesor(){
        let nombre= readlineSync.question('Ingrese nombre del profesor: ')
        let apellido= readlineSync.question('Ingrese apellido del profesor: ')
        let dni= Number(readlineSync.question('Ingrese DNI: '))
        let fecha_nacimiento= readlineSync.question('Ingrese fecha de nacimiento: ')
        let domicilio= readlineSync.question('Ingrese domicilio del profesor: ')
        let celular= Number(readlineSync.question('Ingrese N° de telefono del profesor: '))
        let email= readlineSync.question('Ingrese E-mail del profesor: ')
        let newProfesor = new Profesor(nombre,apellido,dni,fecha_nacimiento,domicilio,celular,email)
        if(newProfesor){
            let nombreNewProfesor:string= `${nombre} ${apellido}`;
            let materiaAsignar:string= readlineSync.question('indique la materia que dicta el profesor: ')
            newProfesor.AsignarMateria(materiaAsignar,nombreNewProfesor);
        }
        console.log(newProfesor);
        let profesores:Profesor[]=[...this.data(),newProfesor];
        fs.writeFileSync('./DATA/profesor.json',JSON.stringify(profesores,null,2))
        return newProfesor;
    }
}

let escuela= new GestorColegio('tecnica 1');
//escuela.matricularAlumno();
//escuela.matricularAlumno()
escuela.ContratarProfesor();

