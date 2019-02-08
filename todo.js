const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";

let todos = []; 

function paintTodo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteTodo);
  const span = document.createElement("span");
  span.innerText = text;
  const newId = todos.length +1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    text:text,
    id: newId
  };
  todos.push(todoObj);
  saveTodos(); //위에서 push 한 후에 localStorage에 저장
}

function saveTodos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}
//자바스크립트는 localStorage에 있는 모든 데이터를 텍스트로 형식으로 저장 그래서 JSON.stringify를 써서 localStorage에서 object로 뜨는 걸 string으로 저장할거임

function handleSubmit(event){
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = ""; 
}

function loadTodos(){
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if(loadedTodos !== null){
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function(toDo){//forEach는 array 요소 하나씩 적용하는거, 여기서는 function toDo를 적용할거임
      paintTodo(toDo.text);
    }); //소괄호 조심
  }
}
//localStorage에 저장된 JS가 스트링 형식 그래서 또 JSON(JavaScript Object Notation)을 써서 string형식을 다시 object로 불러올꺼임

function deleteTodo(event){
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter(function(toDo){//없애고 새로고침하면 다시 원래대로 돌아감 이는 localStorage에서 안지워져서 그런거임 그래서
    return toDo.id !== parseInt(li.id);//li.id가 string형태임
  });
  todos = cleanTodos // todos는 옛날거 cleanTodos변경된 것 그런데 이전에 todos는 const였음 const는 변경이 안되기 때문에 let으로 바꿔줌 
  saveTodos();
}

function init(){
  loadTodos();
  todoForm.addEventListener("submit",handleSubmit);
}
init();