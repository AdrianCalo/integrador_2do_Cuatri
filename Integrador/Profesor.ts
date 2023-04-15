import { Persona } from "./Persona_abstracta";

export default class Profesor extends Persona{
    contrato:number;
    materias:{nombre:string}[]=[];
    celular:number;
    email:string;
    constructor(nombre:string,apellido:string,dni:number,fecha_nacimiento:string,domicilio:string,contrato:number,celular:number,email:string){
        super(nombre,apellido,dni,fecha_nacimiento,domicilio);
        this.contrato=contrato;
        this.celular=celular;
        this.email=email;
   
    }
    
    
    mostrarDatos():{
        console.log(this)
        return this
    }
}