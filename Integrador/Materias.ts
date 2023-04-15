//MODALIDAD


//export enum Materias{Historia, Geografia, Matematicas, Fisica, Quimica, Literatura, Ingles,Edfiscia, Artistica }

export enum ModSociales{historia='Historia', geografia='Geografia', Ed_Civica='Ed. Civica',lenguaYliteratura='Lengua y literatura',sociologia='Sociologia', antropoligia='Antropologia'}

export enum ModNaturales{matematicas='Matematica', fisica='Fisica', biologia='Biologia', quimica='Quimica', algebra='Algebra', analisisMatematico='Analisis Matematico'}

export class Modalidad {
    naturales:[];
    sociales:[];
    constructor(naturales:[],sociales:[]){
        this.naturales=naturales;
        this.sociales=sociales;
    }
}
 

