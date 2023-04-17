import { Persona } from "./Persona";
import { v4 as uuidv4 } from 'uuid';

export default class Profesor extends Persona{
    //Id= uuidv4().slice(0,7);
    contrato:string;
    materias:{nombre:string}[]=[];//creao materias como objeto
    celular:number;
    email:string;
    constructor(nombre:string,apellido:string,dni:number,fecha_nacimiento:string,domicilio:string,celular:number,email:string){
        super(nombre,apellido,dni,fecha_nacimiento,domicilio);
        this.contrato=uuidv4().slice(0,5);
        this.celular=celular;
        this.email=email;
    }

    mostrarDatos(){
    console.log(this)
    return this;
    }

    AsignarMateria(materia:string,nombreProfesor:string){
        if(!this.materias.some(m=> m.nombre===materia)){//validamos que la materia no haya sido agregada previamente
            this.materias.push({nombre:materia});//asignamos materia a un profesor
            console.log(`la materia ${materia} fue asignada al profesor ${nombreProfesor}`)
        }
    }
}