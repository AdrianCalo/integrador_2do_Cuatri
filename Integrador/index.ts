import Alumno from "./Alumno"


let alumno1 = new Alumno('adrian','calo',35411853,'1990/10/05','pelegrini 331',1,'naturales',2281572898)
console.log(alumno1);
alumno1.agregar_materia('fisica');
alumno1.agregar_materia('quimica');
alumno1.agregar_materia('matematica');
alumno1.agregar_materia('botanica');
alumno1.ingresarNotas('fisica',8);
alumno1.ingresarNotas('quimica',6);
alumno1.ingresarNotas('matematica',9);
alumno1.ingresarNotas('botanica',4);
alumno1.PromedioNotas()
alumno1.mostrarDatos();