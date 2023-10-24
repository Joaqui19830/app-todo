import { Todo } from "../classes";

import { todoList } from "../index";

// Referencias en el hatml
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro')


export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); // Esto es para que traiga el elemento hijo que seria el li y no un div ya que es una ul

    return div;
}


//Eventos
txtInput.addEventListener('keyup', (event) => {

    // console.log(event);
    if(event.keyCode === 13 && txtInput.value.length > 0){
        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        // console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (event) => {

        // console.log(event.target.localName);
        const nombreElemento = event.target.localName; // input, label, button.
        const todoElemento = event.target.parentElement.parentElement;
        // console.log(todoElemento);
        const todoId = todoElemento.getAttribute('data-id');
        // console.log(todoId);

        if(nombreElemento.includes('input')){ // click en el check
            todoList.marcarCompletado(todoId);
            todoElemento.classList.toggle('completed');
        } else if(nombreElemento.includes('button')){ // hay que borrar el todo

            todoList.eliminarTodo(todoId);
            divTodoList.removeChild(todoElemento);

        }

        // console.log(todoList);
});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    // Aca es porque hay que hacer el procedimiento inverso porque i puede tener el valor de 10 y va a ir decremetando de 10, 9, 8 y asi...
    for(let i = divTodoList.children.length - 1; i >= 0; i--){ 

        const elemento = divTodoList.children[i];
        // console.log(elemento);

        if(elemento.classList.contains('completed')){ // De esta manera podemos evaluar si ese elemento tiene una clase 
            divTodoList.removeChild(elemento);
        }

    }

});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if(!filtro) return;

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    // console.log(event.target);
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        // console.log(elemento);

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) { // Puede ser completados, pendientes o todos 
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden')
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden')
                }
                break;
        
            
        }
    }

})
