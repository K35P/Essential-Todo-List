// Todo List
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

// Pomodoro Timer

const pomodoroDurationInput = document.querySelector('#pomodoro-duration');
const breakDurationInput = document.querySelector('#break-duration');
const timeDisplay = document.querySelector('#time-display');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');

let countdown;
let timerIsActive = false;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      display.textContent = "00:00";
      timerIsActive = false;
      new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3').play();
      startTimer(breakDurationInput.value * 60, timeDisplay);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  timerIsActive = false;
}

function resetTimer() {
  stopTimer();
  timeDisplay.textContent = pomodoroDurationInput.value + ":00";
}

startButton.addEventListener('click', function() {
  if (!timerIsActive) {
    timerIsActive = true;
    startTimer(pomodoroDurationInput.value * 60, timeDisplay);
  }
});

resetButton.addEventListener('click', resetTimer);