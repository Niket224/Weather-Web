// Fixed IconsUtils.js with fallback for missing icons
function importAll(r) {
  let images = {};
  try {
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
  } catch (error) {
    console.warn('Could not load weather icons:', error);
  }
  return images;
}

export function weatherIcon(imageName) {
  try {
    const allWeatherIcons = importAll(
      require.context('../assets/icons', false, /\.(png)$/)
    );

    const iconsKeys = Object.keys(allWeatherIcons);
    const iconsValues = Object.values(allWeatherIcons);
    const iconIndex = iconsKeys.indexOf(imageName);

    // If icon found, return it
    if (iconIndex !== -1) {
      return iconsValues[iconIndex];
    }
  } catch (error) {
    console.warn('Error loading weather icon:', error);
  }

  // Fallback: Return online weather icon from OpenWeatherMap
  const iconCode = imageName.replace('.png', '');
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Alternative: Create a simple weather emoji fallback
export function getWeatherEmoji(iconCode) {
  const emojiMap = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌦️', '09n': '🌦️',
    '10d': '🌧️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  };
  return emojiMap[iconCode] || '🌤️';
}