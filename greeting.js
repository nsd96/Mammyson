const form = document.querySelector(".js-form"),
  reset = document.querySelector(".reset"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

function paintgreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  reset.classList.add(SHOWING_CN);
}

function saveName(text){
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintgreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit);
}

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }
  else{
    paintgreeting(currentUser);
  }
}

function userReset(){
  localStorage.removeItem(USER_LS);
  askForName();
  greeting.classList.remove(SHOWING_CN);
  reset.classList.remove(SHOWING_CN);
}

function handleUserReset(){
  reset.addEventListener("click",userReset);
}

function init(){
  loadName();
  handleUserReset();
}
init();