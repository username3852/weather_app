const key = 'bJVYqxyxlzfQZipCz1J54U6UVlXayCcw';	

// get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]; // data is an object
    
};




// get city information
const getCity = async (city) => {  // async always returns promises and async is a function 
 
  const base  = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]; // returns the promises and data is object

  
};



// Below code is only for console
// getCity('london').then(data => {
//   return getWeather(data.key);
// }).then(data => {
//   console.log(data);
// }).catch(err => console.log(err.message));