![Application screenshot](./public/screenshot.png)

<br/>
<br/>

A modern weather forecasting application that allows users to search for locations by city name and view detailed weather information for the next 5-6 days with 3-hour intervals.

The app is built using React.js and Material-UI, providing a clean and responsive user interface.

<br/>

## ✨ Features

- **Current Weather**: Real-time weather conditions for any location
- **5-Day Forecast**: Detailed weather predictions for the next week
- **3-Hour Intervals**: Hourly weather updates throughout the day
- **City Search**: Easy location search with autocomplete
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with Material-UI

<br/>

## 🚀 Getting Started

### Prerequisites

- Make sure you have `Node.js` and `npm` installed on your system
- You'll need an API key from [OpenWeatherMap](https://openweathermap.org/)

### API Setup

1. Create an account at [OpenWeatherMap](https://openweathermap.org/)
2. Get your API key from [API Keys section](https://home.openweathermap.org/api_keys)
3. Open `src/api/OpenWeatherService.js` and replace `WEATHER_API_KEY` with your OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd my-weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

<br/>

## 🛠️ Built With

- **React.js** - Frontend framework
- **Material-UI** - UI component library
- **OpenWeatherMap API** - Weather data
- **RapidAPI GeoDB** - Location search

<br/>

## 📁 Project Structure

```
src/
├── api/                 # API service files
├── components/          # React components
│   ├── Reusable/       # Shared components
│   ├── Search/         # Search functionality
│   ├── TodayWeather/   # Current weather display
│   └── WeeklyForecast/ # Forecast components
├── assets/             # Images and icons
└── utilities/          # Helper functions
```

<br/>

## 🚀 Deployment

The app can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

<br/>

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

<br/>

Thank you for using my weather app! ☀️