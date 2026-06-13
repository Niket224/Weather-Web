# 🌤️ Weather Forecasting Application

![Application Screenshot](screenshot.png)

<div align="center">

**A modern, responsive weather forecasting application built with React.js**

[Live Demo](#) | [Report Bug](#) | [Request Feature](#)

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-5.11.6-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

<br/>

## 📖 Overview

A beautiful and intuitive weather forecasting application that allows users to search for any city worldwide and view comprehensive weather information. Get real-time weather conditions, detailed 5-day forecasts with 3-hour intervals, and essential air quality metrics—all in a sleek, responsive interface powered by Material-UI.

<br/>

## ✨ Key Features

- 🌡️ **Current Weather**: Real-time temperature, conditions, and weather details for any location
- 📅 **5-Day Forecast**: Comprehensive weather predictions with 3-hour interval updates
- 🔍 **Smart City Search**: Intelligent location search with autocomplete suggestions
- 💨 **Air Conditions**: Real Feel temperature, wind speed, humidity, and UV index
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful, clean interface built with Material-UI components
- 🌍 **Global Coverage**: Access weather data for cities worldwide
- ⚡ **Fast & Reliable**: Powered by OpenWeatherMap API for accurate data

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

1. **Clone the repository:**
```bash
git clone https://github.com/Niket224/Weather-Web.git
cd Weather-Web
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure your API key** (see API Setup section above)

4. **Start the development server:**
```bash
npm start
```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

The app will automatically reload if you make changes to the code.

<br/>

## 🛠️ Built With

- **[React.js](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[Material-UI (MUI)](https://mui.com/)** - React UI component library
- **[OpenWeatherMap API](https://openweathermap.org/)** - Real-time weather data and forecasts
- **[GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)** - City search and location data
- **React Select Async Paginate** - Advanced select component with async data loading

<br/>

## 📁 Project Structure

```
Weather-Web/
├── public/                  # Static files
│   ├── index.html          # HTML template
│   ├── favicon.ico         # App favicon
│   └── screenshot.png      # App screenshot
├── src/
│   ├── api/                # API integration
│   │   └── OpenWeatherService.js  # Weather API service
│   ├── components/         # React components
│   │   ├── Reusable/      # Shared components
│   │   │   ├── ErrorBox.js
│   │   │   ├── LoadingBox.js
│   │   │   ├── Layout.js
│   │   │   ├── SectionHeader.js
│   │   │   └── UTCDatetime.js
│   │   ├── Search/        # Search functionality
│   │   │   └── Search.js
│   │   ├── TodayWeather/  # Current weather display
│   │   │   ├── Details/
│   │   │   ├── AirConditions/
│   │   │   └── Forecast/
│   │   └── WeeklyForecast/ # 5-day forecast
│   ├── assets/            # Images, icons, and static resources
│   │   └── icons/         # Weather condition icons
│   ├── utilities/         # Helper functions and constants
│   └── App.js             # Main application component
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (API keys)
└── README.md             # Project documentation
```

<br/>

## 🚀 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

The app can be easily deployed to any static hosting service:

- **[Netlify](https://www.netlify.com/)** - Drag and drop the build folder
- **[Vercel](https://vercel.com/)** - Connect your GitHub repo for automatic deployments
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for GitHub repositories
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)** - Google's hosting solution

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

<br/>

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/>

## 👨‍💻 Author

**Niket Kumar**

- GitHub: [@Niket224](https://github.com/Niket224)

<br/>

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- City search powered by [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)
- Icons and design inspiration from Material-UI

<br/>

---

<div align="center">

Made with ❤️ by Niket Kumar

⭐ Star this repo if you find it helpful!

</div>