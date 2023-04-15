import Alumno from "./Alumno";
import Profesor from "./Profesor";
import { Primario } from "./modalidades";
import { Secundario } from "./modalidades";
import { Tecnica } from "./modalidades";


export default class Curso{
    nombre_curso:string;
    materias:[]=[];
    profesor:Profesor[];
    alumno:Alumno[];
    curso:{ nombre: string, profesor:[] , alumno:[] }[] = [];
      
    constructor(nombre_curso:string,profesor:Profesor[],alumno:Alumno[]){
        this.nombre_curso=nombre_curso;
        this.profesor=profesor;
        this.alumno=alumno;
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

}

