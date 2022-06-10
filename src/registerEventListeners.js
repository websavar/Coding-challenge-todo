import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener('keydown', '[data-element="addTodoInput"]', e => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  if (e.code === 'Enter' || e.code === 'NumpadEnter')
    store.dispatch(todoActions.add(todoInput.value));
});

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

addListener('click', 'input[name="filterTodo"]', e => {
  const filterId = e.target.id;
  store.dispatch(todoActions.filter(filterId));
});
