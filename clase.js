class Person{
    //crear un constructor para iniciar las propiedades del objeto

    constructor(identificacion, apellido, nombre, edad, ciudad){
        this.identificacion = identificacion;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;        
        this.ciudad = ciudad;
    }

    //crera metodos
    imprimirDatos(){
        console.log("_______ ** DATOS PERSON ** ___________");
        console.log(`Identificación --> ${this.identificacion}`);
        console.log(`Nombre ----------> ${this.nombre}`);
        console.log(`Apellido --------> ${this.apellido}`);
        console.log(`Edad ------------> ${this.edad}`);
        console.log(`Ciudad ----------> ${this.ciudad}`);
        console.log("_____________________________________");
    }

}

// crear una subClase
class Student extends Person{
    constructor(identificacion, apellido, nombre, edad, ciudad,carrera){
        super(identificacion, apellido, nombre, edad, ciudad)
        this.carrera= carrera
    }
    estudiar() {
        let modulos = ['BD','Logica','programación']        
        console.log(`${this.nombre} está estudiando en el curso ${this.carrera}.y los modulos ${modulos}`);
      }
      imprimirDatos(){
        console.log("_____ ** DATOS STUDENT ** ___________");
        console.log(`Identificación --> ${this.identificacion}`);
        console.log(`Nombre ----------> ${this.nombre}`);
        console.log(`Apellido --------> ${this.apellido}`);
        console.log(`Edad ------------> ${this.edad}`);
        console.log(`Carrera----------> ${this.carrera}`);
        console.log("_____________________________________");
    }
}

let person= new Person(123,'Muriel','Albeiro',40,'Medellín')
console.log(person);
person.imprimirDatos()

let estudiante = new Student(123,'Muriel','Albeiro',40,'Medellín','Ing Desarrollo Software')

console.log(estudiante.carrera);
console.log(estudiante.estudiar());
estudiante.imprimirDatos();

