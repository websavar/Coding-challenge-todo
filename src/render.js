import { Filters } from "./constants";

function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

function renderForm(activeFilter) {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>

    <div class="filterItems">
      <label>
        <input type="radio" name="filterTodo" id="all" ${activeFilter === 'all' && 'checked'}>
        <span>Show all</span>
      </label>
      <label>
        <input type="radio" name="filterTodo" id="completed" ${activeFilter === 'completed' && 'checked'}>
        <span>Show open</span>
      </label>
      <label>
        <input type="radio" name="filterTodo" id="incompleted" ${activeFilter === 'incompleted' && 'checked'}>
        <span>Show closed</span>
      </label>
    </div>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

export default (element, state) => {
  const { todos, filter } = state;

  const getTodosByFilter = (todos, filter) => {
    switch (filter) {
      case Filters.COMPLETED:
        return todos.filter(todo => todo.completed);
      case Filters.INCOMPLETED:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

  const filterTodos = getTodosByFilter(todos, filter);

  const todoItems = filterTodos.map(renderTodoItem).join('');

  element.innerHTML = renderApp(
    renderForm(filter),
    renderTodos(todoItems)
  );
}
