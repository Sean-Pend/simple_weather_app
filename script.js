const searchBtn = document.querySelector('#searchBtn');
const cityInput = document.querySelector('#cityInput');

const locationEl = document.querySelector('#location');
const temperatureEl = document.querySelector('#temperature');
const conditionEl = document.querySelector('#condition');
const errorEl = document.querySelector('#error');

searchBtn.addEventListener('click', getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  errorEl.textContent = '';

  if (!city) {
    errorEl.textContent = 'Please enter a city name';
    return;
  }

  try {
    // 1️⃣ Get latitude & longitude from city name
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results) {
      errorEl.textContent = 'City not found';
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // 2️⃣ Get weather using coordinates
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    const temp = weatherData.current_weather.temperature;
    const code = weatherData.current_weather.weathercode;

    // 3️⃣ Update UI
    locationEl.textContent = `${name}, ${country}`;
    temperatureEl.textContent = `Temperature: ${temp}°C`;
    conditionEl.textContent = `Weather code: ${code}`;

  } catch (error) {
    errorEl.textContent = 'Something went wrong';
    console.error(error);
  }
}