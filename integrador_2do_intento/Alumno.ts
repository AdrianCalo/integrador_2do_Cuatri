import { Persona } from "./Persona";
//import { check, escribir, leer, guardar} from './utils';
const { v4: uuidv4}=require ('uuid')
import Curso from "./Curso";

export default class Alumno extends Persona {
    id=uuidv4().slice(0,7);
    matriculaID:string;
    curso:Curso;
    materias:{ nombre: string, nota: number }[] = [];             //ModSociales[]|ModNaturales[];
    contactoEmergencia:number                                                                                                       //materias la definimos en la misma propiedad junto a su nota
    
    constructor(nombre:string,apellido:string,dni:number,domicilio:string,fecha_nacimiento:string,curso:Curso,contactoEmergencia:number){
        super(nombre,apellido,dni,domicilio,fecha_nacimiento)
        this.matriculaID=uuidv4().slice(0,5);
        this.curso=curso;
        this.materias=[];
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