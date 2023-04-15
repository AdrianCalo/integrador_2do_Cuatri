import { Persona } from "./Persona_abstracta";
import { ModSociales, ModNaturales } from "./Materias";
import { Modalidad } from "./Materias";
import {check, escribir, leer, guardar} from "./utils"

export default class Alumno extends Persona{
    matricula:number;
    modalidad:string;
    materias:{ nombre: string, nota: number }[] = [];             //ModSociales[]|ModNaturales[];
   // notas:[];
    contactoEmergencia:number                                                                                                       //materias y notas las definimos en la misma propiedad
    constructor(nombre:string,apellido:string,dni:number,domicilio:string,fecha_nacimiento:string,matricula:number,modalidad:string,contactoEmergencia:number){
        super(nombre,apellido,dni,domicilio,fecha_nacimiento)
        this.matricula=matricula;
        this.modalidad=modalidad;
        //this.materias=materias;
        //this.notas=notas;
        this.contactoEmergencia=contactoEmergencia;
    
    
    }

    mostrarDatos() {
        console.log(this)
        return this
    }
    agregar_materia(materia: string): void {
          if (!this.materias.some(m => m.nombre === materia)) {// validar que la materia no haya sido agregada previamente
          this.materias.push({ nombre: materia, nota: 0 });// agregar la materia a la lista de materias con nota 0
          console.log(`La materia ${materia} fue agregada exitosamente.`);
        } else {
          console.log(`El alumno ya está inscrito en la materia ${materia}.`);
        }
    }//nota1: some() ejecuta la funcion callback una vez por cada elemento del array hasta que encuentre uno donde el call back retorne un valor true. 
    //si se encuentra dicho elelemento, some() retorna true inmediatamente. si no some() retorna false.

    ingresarNotas(materia: string, nota: number): void {
        const foundMateria = this.materias.find(m => m.nombre === materia);
        if (foundMateria) {
           if (nota >= 0 && nota <= 10) {
            foundMateria.nota = nota;
            console.log(`La nota ${nota} fue asignada a la materia ${materia}.`);
          } else {
            console.log(`La nota ${nota} no es válida. Debe ser un número entre 0 y 10.`);
          }
        } else {
          console.log(`El alumno no está inscrito en la materia ${materia}.`);
        }
    }
    PromedioNotas(){
        let SumaNotas:number=0;
        let cantidadMaterias:number=0;
        let promedio:number=0; 

        for (let i = 0; i < this.materias.length; i++) {//recorremos el array de materias de alumno
            let notaActual=this.materias[i].nota;//obtenemos la nota actual
            if(notaActual>=0){
                SumaNotas+=notaActual;
                cantidadMaterias++
            }
        }
        if(cantidadMaterias=== 0){
            return (`el alumno no tiene notas para promediar aun`)
        }
        promedio= SumaNotas/cantidadMaterias
        console.log(`el promedio del alumno es de: ${promedio}`)
        return promedio
    }
}




/* agregar_Materia(materia:string):void{
    if(!this.materias.includes(materia)){ // validar que la materia no haya sido agregada previamente
        this.materias.push(materia);
        console.log(`la materia ${materia} fue agregada.`)
    }else{
        console.log(`el alumno ya esta inscripto en la ${materia}`)
    }

    agregar_nota(materia:string,nota:number,notasDeMaterias:string[]){
        if(notasDeMaterias){
            for(let i=0; i<notasDeMaterias.length; i++){
                notasDeMaterias.push(materia,`su nota es ${nota}`)
            }
        }return notasDeMaterias
*/