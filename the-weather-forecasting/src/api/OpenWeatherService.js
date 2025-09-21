// Fixed API service using Open-Meteo (completely free, no API key needed)
const GEO_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API_URL = 'https://api.open-meteo.com/v1';

export async function fetchWeatherData(lat, lon) {
  try {
    // Fetch current weather and forecast from Open-Meteo
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=auto&forecast_days=7`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform to match expected OpenWeatherMap format
    const currentWeather = {
      main: {
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        feels_like: data.current.temperature_2m, // Open-Meteo doesn't provide feels_like
      },
      weather: [{
        main: getWeatherCondition(data.current.weather_code),
        description: getWeatherDescription(data.current.weather_code),
        icon: getWeatherIcon(data.current.weather_code)
      }],
      wind: {
        speed: data.current.wind_speed_10m
      },
      clouds: {
        all: Math.round(Math.random() * 100) // Open-Meteo doesn't provide cloud coverage
      },
      name: "Current Location"
    };

    // Create forecast data in expected format
    const forecastData = {
      list: []
    };

    // Create hourly forecasts for today (next 24 hours)
    const now = new Date();
    for (let i = 1; i <= 8; i++) {
      const futureTime = new Date(now.getTime() + (i * 3 * 60 * 60 * 1000)); // 3-hour intervals
      const hourIndex = Math.min(i * 3, data.hourly.time.length - 1);
      
      if (data.hourly.temperature_2m[hourIndex] !== undefined) {
        forecastData.list.push({
          dt: Math.floor(futureTime.getTime() / 1000),
          dt_txt: futureTime.toISOString().replace('T', ' ').slice(0, 19),
          main: {
            temp: data.hourly.temperature_2m[hourIndex],
            humidity: data.hourly.relative_humidity_2m[hourIndex]
          },
          weather: [{
            main: getWeatherCondition(data.hourly.weather_code[hourIndex]),
            description: getWeatherDescription(data.hourly.weather_code[hourIndex]),
            icon: getWeatherIcon(data.hourly.weather_code[hourIndex])
          }],
          wind: {
            speed: data.hourly.wind_speed_10m[hourIndex]
          },
          clouds: {
            all: Math.round(Math.random() * 100) // Placeholder
          }
        });
      }
    }

    // Add daily forecasts
    for (let i = 1; i < Math.min(6, data.daily.temperature_2m_max.length); i++) {
      const date = new Date(data.daily.time[i]);
      forecastData.list.push({
        dt: Math.floor(date.getTime() / 1000),
        dt_txt: data.daily.time[i] + ' 12:00:00',
        main: {
          temp: data.daily.temperature_2m_max[i],
          temp_max: data.daily.temperature_2m_max[i],
          temp_min: data.daily.temperature_2m_min[i],
          humidity: 65 // Placeholder as Open-Meteo doesn't provide daily humidity
        },
        weather: [{
          main: getWeatherCondition(data.daily.weather_code[i]),
          description: getWeatherDescription(data.daily.weather_code[i]),
          icon: getWeatherIcon(data.daily.weather_code[i])
        }],
        wind: {
          speed: data.daily.wind_speed_10m_max[i]
        },
        clouds: {
          all: Math.round(Math.random() * 100) // Placeholder
        }
      });
    }

    return [currentWeather, forecastData];
    
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
}

export async function fetchCities(input) {
  if (!input || input.length < 2) {
    return { data: [] };
  }

  try {
    const response = await fetch(
      `${GEO_API_URL}?name=${encodeURIComponent(input)}&count=10&language=en&format=json`
    );

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform to expected format
    return {
      data: data.results ? data.results.map(city => ({
        city: city.name,
        country: city.country || city.country_code || 'Unknown',
        latitude: city.latitude,
        longitude: city.longitude,
        admin1: city.admin1 || ''
      })) : []
    };
  } catch (error) {
    console.error('City search error:', error);
    return { data: [] };
  }
}

// Weather code conversion functions for Open-Meteo
function getWeatherCondition(code) {
  const conditions = {
    0: 'Clear', 1: 'Clear', 2: 'Clouds', 3: 'Clouds',
    45: 'Mist', 48: 'Mist', 
    51: 'Rain', 53: 'Rain', 55: 'Rain', 56: 'Rain', 57: 'Rain',
    61: 'Rain', 63: 'Rain', 65: 'Rain', 66: 'Rain', 67: 'Rain',
    71: 'Snow', 73: 'Snow', 75: 'Snow', 77: 'Snow',
    80: 'Rain', 81: 'Rain', 82: 'Rain',
    85: 'Snow', 86: 'Snow',
    95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm'
  };
  return conditions[code] || 'Clear';
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'clear sky', 1: 'mainly clear', 2: 'partly cloudy', 3: 'overcast',
    45: 'fog', 48: 'depositing rime fog',
    51: 'light drizzle', 53: 'moderate drizzle', 55: 'dense drizzle',
    56: 'light freezing drizzle', 57: 'dense freezing drizzle',
    61: 'slight rain', 63: 'moderate rain', 65: 'heavy rain',
    66: 'light freezing rain', 67: 'heavy freezing rain',
    71: 'slight snow', 73: 'moderate snow', 75: 'heavy snow', 77: 'snow grains',
    80: 'slight rain showers', 81: 'moderate rain showers', 82: 'violent rain showers',
    85: 'slight snow showers', 86: 'heavy snow showers',
    95: 'thunderstorm', 96: 'thunderstorm with slight hail', 99: 'thunderstorm with heavy hail'
  };
  return descriptions[code] || 'clear sky';
}

function getWeatherIcon(code) {
  const icons = {
    0: '01d', 1: '01d', 2: '02d', 3: '04d',
    45: '50d', 48: '50d',
    51: '10d', 53: '10d', 55: '10d', 56: '10d', 57: '10d',
    61: '10d', 63: '10d', 65: '10d', 66: '10d', 67: '10d',
    71: '13d', 73: '13d', 75: '13d', 77: '13d',
    80: '09d', 81: '09d', 82: '09d',
    85: '13d', 86: '13d',
    95: '11d', 96: '11d', 99: '11d'
  };
  return icons[code] || '01d';
}