const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDoDeleteButton = toDoList.querySelector("li button");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

function paintToDo(newToDo) {
  const _li = document.createElement("li");
  _li.id = newToDo.id;
  const _span = document.createElement("span");
  const _button = document.createElement("button");
  _button.addEventListener("click", deleteToDo);
  _span.innerText = newToDo.text;
  _button.innerText = "Delete";
  _li.appendChild(_span);
  _li.appendChild(_button);
  toDoList.appendChild(_li);
  saveToDo();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // toDos.forEach(function(toDo, index, toDos) {
  //   console.log(toDo.id, li.id);
  //   if(toDo.id === Number(li.id)) {
  //     toDos.splice(index, 1);
  //     console.log("todos ", toDo, index);
  //   }
  // });
  // toDos.splice(toDos.indexOf(_span.innerText), 1);
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  event.target.parentElement.remove();
  saveToDo();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  console.log(newToDo);
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
}

function openToDoList() {
  const toDoList = localStorage.getItem(TODOS_KEY);
  if(toDoList) {
    toDos = JSON.parse(toDoList);
    toDos.forEach((item) => paintToDo(item));  
  }
}

function toDosFilter(newToDo, id) {
  return newToDo.id !== id;
}

toDoForm.addEventListener("submit", handleToDoSubmit);
openToDoList();