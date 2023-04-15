export class Persona {
    private nombre:string;
    private apellido:string;
    private dni:number;
    private fecha_nacimiento:string; //yyyy/mm/dd
    private domicilio:string;

    constructor(nombre:string,apellido:string,dni:number,fecha_nacimiento:string,domicilio:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fecha_nacimiento=fecha_nacimiento;
        this.domicilio=domicilio
    }
    mostrarDatos(){
        return this
    }

}