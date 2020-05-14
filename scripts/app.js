const cityForm  = document.querySelector('form');
const details   = document.querySelector('.details');
const time      = document.querySelector('img.time');
const icon      = document.querySelector('.icon img');

const updateUI = (data) => {

  // const cityDets = data.cityDets;
  // const weather = data.weather;
  // we can dextructure the above objects and its method in following way:
  const {cityDets, weather} = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night/day & icon images 
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc); 

  // let timeSrc = null; 
  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // }else {
  //   timeSrc = 'img/night.svg';
  // }

  //we can use ternary operator instead for above code
  const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  //remove the d-none class if present so that it would only display after city is typed
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
}




const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key); // only key is needed 

  // return { 
  //   cityDets: cityDets, // since we are taking objects and returning it
  //   weather: weather    // so left part is property and right is the value
  // };

  //we can use the object short-hand notations i.e.
  return {cityDets, weather};
}

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  // gettting the city value
  const city = cityForm.city.value.trim();
  cityForm.reset(); //clears the form

  // update the ul with new city
  updateCity(city)
    .then(data => updateCity(data))
    .catch(err => console.log(err));

});