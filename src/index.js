
import { TodoList } from './classes/index';
import { crearTodoHtml } from './js/components';
import './styles.css';

export const todoList = new TodoList();

// console.log(todoList.todos);

// 1 todoList.todos.forEach(todo => crearTodoHtml(todo)); 
todoList.todos.forEach( crearTodoHtml);

console.log('todos', todoList.todos);

// const tarea = new Todo('Aprender javascript!!');

// 2todoList.todos[0].imprimirClase(); Ahora con el static que hicimos en el todoclass ya podemos ocupar los metodos de la clase Todos. 


// 1todoList.nuevoTodo(tarea);


// console.log(todoList);

// crearTodoHtml(tarea);


// LOCALSTORAGE && SESSIONSTORAGE:

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');
// setTimeout(() => {
    
//     localStorage.removeItem('mi-key');

// }, 1500);