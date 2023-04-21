//import Alumno from "./Alumno";
//import Profesor from "./Profesor";
//import { Primario } from "./modalidades";
//import { Secundario } from "./modalidades";
//import { Tecnica } from "./modalidades";
const { v4: uuidv4}=require('uuid')

export default class Curso{
    private nombre:string;
    private IdCurso:string;

    constructor(nombre:string){
        this.nombre=nombre;
        this.IdCurso= uuidv4().slice(0,4)
    }

    mostrarDatos(){
        console.log(this)
        return this;
    }
}
   
















    /*
    nombre_curso:string;
    materias:[]=[];
    profesor:[];
    alumno:[];
    curso:{ nombre: string, profesor:[] , alumno:[] }[] = [];
      
    constructor(nombre_curso:string,profesor:Profesor[],alumno:Alumno[]){
        this.nombre_curso=nombre_curso;
        this.profesor=[];
        this.alumno=[];
    }

    mostrarDatos(){
        console.log(this)
        return this
    }
   
    asignar_Al_curso(name_curso:string,profesor:Profesor[],alumno:Alumno[]){
        if(!this.curso.some(C=> C.nombre ===this.nombre_curso )){//validamos que el curso no haya sido agregado previamente
            this.curso.push({nombre: name_curso, profesor: [], alumno: []});//asignamos al curso el nombre, el profesor y alumno
            console.log(`El curso ${name_curso},tiene al profesor ${profesor} y al alumno ${alumno}`);
            console.log(this.curso)
            return this.curso
        }
}
}*/ 