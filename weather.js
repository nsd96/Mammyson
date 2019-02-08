const weather = document.querySelector(".js-weather");
const API_KEYS = "67aef0268aafd25dff5e842a3ba92e1d"; //openweathermap 사용
const COORDS = "coords";

function getWeather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  }); //openweathermap의 current weather data-> by geographic coordinate-> API call에서 불러옴 fetch에서는 ``써야되고 해당 URL에 request를 보내도 새로고침 없이 바로 데이터 얻을 수 있음 갓뎀JS
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, //=>latitude: latitude
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}
function handleGeoError(){
  console.log("Cant Access");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } 
  else{
    const parsedCoords = JSON.parse(loadedcoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
} 



function init(){
  loadCoords();
}
init();