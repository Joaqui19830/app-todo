

export class Todo {

    static fromJson({id, tarea, completado, creado}){

        // Creo la instancia haciendo las propiedades asi como vengan y esto me va a permitir a mi  recuperar mis metodos que tiene mi clase
        const tempTodo = new Todo(tarea); 

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor(tarea){

        this.tarea = tarea;

        this.id    = new Date().getTime(); //1283645
        this.completado = false;
        this.creado = new Date();

    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}