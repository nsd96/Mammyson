const title = document.getElementById("title");
//const title = document.querySelector("#title");
//title.innerHTML = "마미손";
document.title = "와나씨발이거완전좆됐네"

/*function handleResize(){
  console.log("I have been resized");
}
window.addEventListener("resize",handleResize);*/

const CLICKED_CLASS = "clicked";
function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
  /*const hasClass = title.classList.contains(CLICKED_CLASS);
  if(!hasClass){
    title.classList.add(CLICKED_CLASS);
  }
  else{
    title.classList.remove(CLICKED_CLASS);
  }*/
}

/*
function handleClick(){
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }
  else{
    title.style.color = BASE_COLOR;
  }
}*/

function init(){
  title.addEventListener("click", handleClick);
}
init();

