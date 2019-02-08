const body = document.querySelector("body");
const IMG_NUMBER = 3;
//Math.floor ->버림, Math.ceil ->올림

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;//Math.random이 0을 줄 수 있기 때문에 +1
  image.classList.add("bgImage");
  body.prepend(image);
  //image.addEventListener("loadend",handleImgLoad);
  //API에서 나온게 아니라서 로딩이 안됨
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();