// Free APIs - No API keys required!
const GEO_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API_URL = 'https://api.open-meteo.com/v1';

export async function fetchWeatherData(lat, lon) {
  try {
    // Fetch current weather and forecast in one call
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    const data = await response.json();
    
    // Transform Open-Meteo data to match expected format
    const weatherData = {
      main: {
        temp: data.current_weather.temperature,
        humidity: data.hourly.relative_humidity_2m[0],
        feels_like: data.current_weather.temperature
      },
      weather: [{
        main: getWeatherCondition(data.current_weather.weather_code),
        description: getWeatherDescription(data.current_weather.weather_code),
        icon: getWeatherIcon(data.current_weather.weather_code)
      }],
      wind: {
        speed: data.current_weather.windspeed
      },
      name: "Current Location"
    };

    const forecastData = {
      list: data.daily.time.slice(0, 5).map((date, index) => ({
        dt_txt: date,
        main: {
          temp_max: data.daily.temperature_2m_max[index],
          temp_min: data.daily.temperature_2m_min[index]
        },
        weather: [{
          main: getWeatherCondition(data.daily.weather_code[index]),
          description: getWeatherDescription(data.daily.weather_code[index]),
          icon: getWeatherIcon(data.daily.weather_code[index])
        }]
      }))
    };

    return [weatherData, forecastData];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}?name=${input}&count=10&language=en&format=json`
    );

    const data = await response.json();
    
    // Transform to match expected format
    return {
      data: data.results ? data.results.map(city => ({
        city: city.name,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude
      })) : []
    };
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
}

// Weather code conversion functions
function getWeatherCondition(code) {
  const conditions = {
    0: 'Clear', 1: 'Clear', 2: 'Clouds', 3: 'Clouds',
    45: 'Mist', 48: 'Mist', 51: 'Rain', 53: 'Rain', 55: 'Rain',
    61: 'Rain', 63: 'Rain', 65: 'Rain', 71: 'Snow', 73: 'Snow', 75: 'Snow',
    77: 'Snow', 80: 'Rain', 81: 'Rain', 82: 'Rain', 85: 'Snow', 86: 'Snow',
    95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm'
  };
  return conditions[code] || 'Clear';
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Depositing rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain', 71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
    77: 'Snow grains', 80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers', 85: 'Slight snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
  };
  return descriptions[code] || 'Clear sky';
}

function getWeatherIcon(code) {
  const icons = {
    0: '01d', 1: '01d', 2: '02d', 3: '04d',
    45: '50d', 48: '50d', 51: '10d', 53: '10d', 55: '10d',
    61: '10d', 63: '10d', 65: '10d', 71: '13d', 73: '13d', 75: '13d',
    77: '13d', 80: '09d', 81: '09d', 82: '09d', 85: '13d', 86: '13d',
    95: '11d', 96: '11d', 99: '11d'
  };
  return icons[code] || '01d';
}
