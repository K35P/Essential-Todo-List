const todoList = document.querySelector('#todo-list');
const newTodoInput = document.querySelector('#new-todo');
const addTodoButton = document.querySelector('#add-todo');

function deleteTodoItem(event) {
  const todoItem = event.target.parentElement;
  todoList.removeChild(todoItem);
}

addTodoButton.addEventListener('click', function() {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText !== '') {
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = newTodoText;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-todo');
    deleteButton.textContent = 'Elimina';
    deleteButton.addEventListener('click', deleteTodoItem);
    newTodoItem.appendChild(deleteButton);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = '';
  }
});

const deleteTodoButtons = document.querySelectorAll('.delete-todo');
deleteTodoButtons.forEach(function(button) {
  button.addEventListener('click', deleteTodoItem);
});