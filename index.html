// Selecting DOM elements
const searchBtn = document.querySelector('#searchBtn');
const cityInput = document.querySelector('#cityInput');
// UI output targets
const locationEl = document.querySelector('#location');
const temperatureEl = document.querySelector('#temperature');
const conditionEl = document.querySelector('#condition');
const errorEl = document.querySelector('#error');

// event handler
searchBtn.addEventListener('click', getWeather);

async function getWeather() {
    // reads user input
  const city = cityInput.value.trim();
  errorEl.textContent = '';

  if (!city) {
    errorEl.textContent = 'Please enter a city name';
    return;
  }

  try {
    // 1️. Get latitude & longitude from city name
    // convert city name to coordinates
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    // parse data to JSON
    const geoData = await geoResponse.json();
    
    // handles invalid city names
    if (!geoData.results) {
      errorEl.textContent = 'City not found';
      return;
    }

    // destructuring
    const { latitude, longitude, name, country } = geoData.results[0];

    // 2️. Get weather using coordinates
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    // parse data to JSON
    const weatherData = await weatherResponse.json();

    const temp = weatherData.current_weather.temperature;
    const code = weatherData.current_weather.weathercode;

    // 3️. Update UI
    locationEl.textContent = `${name}, ${country}`;
    // displays temperature
    temperatureEl.textContent = `Temperature: ${temp}°C`;
    // displays weather condition
    conditionEl.textContent = `Weather code: ${code}`;

  } catch (error) {
    // handles errors and network failures
    errorEl.textContent = 'Something went wrong';
    console.error(error);
  }
}
