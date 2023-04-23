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

    read1(){return fs.readlineSync('./DATA/profesor.json','[]')}
    data1(){return JSON.parse(fs.readFileSync('./DATA/profesor.json','utf8'))}

   
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
        let profesores:Profesor[]=[...this.data1(),newProfesor];///usar esto para acceder 
        fs.writeFileSync('./DATA/profesor.json',JSON.stringify(profesores,null,2))
        return newProfesor;
    }

    buscarPersona(propiedad:any,valor:string|number){
        let busqueda= readlineSync.question('¿Que desea buscar? Alumno= 1 ||| Profesor= 2: ');
        if(busqueda== "1"){
           const alumno=JSON.parse(fs.readFileSync('./DATA/alumno.json'))
           for (let i = 0; i < alumno.length; i++) {
            if(alumno[i][propiedad]=== valor){
                console.log(alumno[i])}
            }
        }else if(busqueda== '2'){
            const profesores=JSON.parse(fs.readFileSync('./DATA/profesor.json'))
            for (let i  = 0; i  < profesores.length; i ++) {
                if(profesores[i][propiedad]=== valor){
                    console.log(profesores[i])
                }
            }
        }else{
            console.log('A ingresado un valor no valido. Intente de nuevo')
        }
    }
    
    eliminarPersona(propiedad:any,valor:string|number){
        let busqueda= readlineSync.question('¿Que desea ELIMINAR? Alumno= 1 ||| Profesor = 2: ')
        if(busqueda == '1'){
            const alumno=JSON.parse(fs.readFileSync('./DATA/alumno.json'));
            for (let i = 0; i < alumno.length; i++) {
                if(alumno[i][propiedad]=== valor){
                   let consulta = (readlineSync.question(`¿esta seguro que desea Eliminar a este Alumno: ${alumno[i]}?, SI / NO `)).toLocaleUpperCase();
                    if(consulta== 'SI'){
                        alumno.splice(i,1)
                        console.log(`el alumno ${alumno[i]} a sido eliminado`)
                        return alumno;
                    }else if(consulta== 'NO'){
                        console.log('no se a eliminado ningun alumno');
                    }else{
                        console.log('comando incorrecto vuelva a intentar');
                    }
                }
                
            }
        }if(busqueda == '2'){
            const profesor=JSON.parse(fs.readFileSync('/DATA/profesor.json'));
            for (let i = 0; i < profesor.length; i++) {
                if(profesor[i][propiedad]===valor){
                    let consulta=(readlineSync.question(`¿Esta seguro que desea Eliminar a este Profesor: ${profesor[i]}?, SI / NO `)).toLocaleUpperCase();
                    if(consulta== 'SI'){
                        profesor.splice(i,1);
                        console.log(`El profesor ${profesor[i]} a sido eliminado`);
                        return profesor;
                    }else if(consulta == 'NO'){
                        console.log('NO se a eliminado ningun profesor');
                    }else{
                        console.log('comando incorrecto vuelva a intentar')
                    }
                }
                
            }
        }
    }
    
}

let escuela= new GestorColegio('tecnica 1');
//escuela.matricularAlumno();
//escuela.matricularAlumno();
//escuela.matricularAlumno();
//escuela.matricularAlumno();
//escuela.matricularAlumno();
//escuela.ContratarProfesor();
//escuela.ContratarProfesor();
//escuela.ContratarProfesor();
//escuela.ContratarProfesor();

//escuela.buscarPersona('dni',35411853)//alumno
escuela.buscarPersona('curso',"ingenieria civil")//alumno
//escuela.buscarPersona('apellido','benetti')//profesor
//escuela.buscarPersona('dni',32654987)//profesor
//escuela.eliminarPersona('dni',41329015)





















//------------------xxxxxxxxxxxxxxxxxxx-------------------------
       //console.log('seleccione el dato que desea buscar: ');
    //const datosBusqueda: Array<string>=['Apellido','DNI','Curso'];
    //const seleccionDatos= readlineSync.keyInSelect(datosBusqueda);
    //if(datosBusqueda[seleccionDatos]===datosBusqueda[0]) return this.buscarXapellido();
    //if(datosBusqueda[seleccionDatos]===datosBusqueda[1]) return this.buscarXdni();
    //if(datosBusqueda[seleccionDatos]===datosBusqueda[2]) return this.buscarXcurso();

    //}
//        
//        if(fs.existsSync('./DATA/alumno.json')){
//            return this.data
//    }
//    }
//    if(busqueda=='2'){
//        if(fs.existsSync('./DATA/profesor.json')){
//            return this.data1
//        }
//    }
//}

// buscarXdni(){
//     const SearchDni= Number(readlineSync.question('ingrese el N° de documento a buscar: '));
//     let foundDni= this.data().filter((numero: { dni: number; })=>numero.dni===SearchDni) 
//     console.log(`DNI encontrado. corresponde a:${foundDni} `)
// }
// buscarXapellido(){
//     const lastName= readlineSync.question('Escriba el apellido de la persona que desea buscar: ');
//     let foundLastName= this.buscarPersona().filter((person: { apellido: string; })=> person.apellido=== lastName);
//     console.log(`Persona encontrada: `,foundLastName);
// }
//
// buscarXcurso(){
//     const cursito=readlineSync.question('Ingrese el curso a buscar: ');
//     let foundCurso=this.buscarPersona().filter((clase: { Curso: string; })=> clase.Curso==cursito);
//     console.log(`Curso encontrado: `,foundCurso )
// }


//---------------------------------xxxxxxxxxx-----------------------------

//agregarAlumno(alumno) {
//    this.alumnos.push(alumno);
//    fs.writeFileSync('alumnos.json', JSON.stringify(this.alumnos));
//  }
//
//  agregarProfesor(profesor) {
//    this.profesores.push(profesor);
//    fs.writeFileSync('profesores.json', JSON.stringify(this.profesores));
//  }
//
//  buscarAlumno(propiedad, valor) {
//    const alumnos = JSON.parse(fs.readFileSync('alumnos.json'));
//
//    for (let i = 0; i < alumnos.length; i++) {
//      if (alumnos[i][propiedad] === valor) {
//        console.log(alumnos[i]);
//      }
//    }
//  }
//
//  buscarProfesor(propiedad, valor) {
//    const profesores = JSON.parse(fs.readFileSync('profesores.json'));
//
//    for (let i = 0; i < profesores.length; i++) {
//      if (profesores[i][propiedad] === valor) {
//        console.log(profesores[i]);
//      }
//    }
//  }
//}