

let getWeather = async (coords) => {
  const APP_ID = 'e42e191951c190c593b2677369f61cbe';
  // ? 넣어서 쿼리스트링이랑 URL 구분함 
  let apiURL = 'https://api.openweathermap.org/data/2.5/weather?'

  let params = {
    lat: coords.lat,
    lon: coords.log,
    appid: APP_ID,
    lang: 'kr',
    units: 'metric'
  }

  let res = await fetch(apiURL + getQueryString(params));
  // console.dir(res.json());
  return res.json();
}





let getUserCoord = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        log: position.coords.longitude
      });
    }, error => {
      reject(error);
    });
  })
}

(async () => {
  let coords = await getUserCoord();
  let weatherData = await getWeather(coords);
  // getWeather(coords);
  // console.dir(coords);


  // name, main.temp 빼기
  let weatherDiv = $('.weather');
  let weatherSpan = createElement('span', { text: `${weatherData.main.temp}℃ @ ${weatherData.name}` });
  weatherDiv.append(weatherSpan);
})();