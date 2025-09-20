# Weather App API Setup Guide

## 🚨 Current Issue
Your weather app is not showing weather data or finding cities because it's missing required API keys.

## 🔑 Required API Keys

### 1. OpenWeatherMap API Key (FREE)
- **Purpose:** Get weather data and forecasts
- **Sign up:** https://openweathermap.org/api
- **Steps:**
  1. Go to https://openweathermap.org/api
  2. Click "Sign Up" (it's free)
  3. Verify your email
  4. Go to "API keys" section
  5. Copy your API key

### 2. RapidAPI Geo Database Key (FREE)
- **Purpose:** Search for cities
- **Sign up:** https://rapidapi.com/wirefreethought/api/geo-db
- **Steps:**
  1. Go to https://rapidapi.com/wirefreethought/api/geo-db
  2. Click "Subscribe to Test" (free tier)
  3. Go to "API Keys" section
  4. Copy your RapidAPI key

## 📁 Setup Steps

### Step 1: Create .env File
Create a file named `.env` in the `the-weather-forecasting` folder with:

```env
REACT_APP_OPENWEATHER_API_KEY=your_actual_openweather_key_here
REACT_APP_RAPIDAPI_KEY=your_actual_rapidapi_key_here
```

### Step 2: Test Locally
1. Open terminal in `the-weather-forecasting` folder
2. Run: `npm start`
3. The app should open at http://localhost:3000
4. Try searching for a city and checking weather

### Step 3: Deploy to Vercel
1. Go to your Vercel dashboard
2. Go to project settings → Environment Variables
3. Add both environment variables:
   - `REACT_APP_OPENWEATHER_API_KEY`
   - `REACT_APP_RAPIDAPI_KEY`
4. Redeploy your project

## 🔧 Troubleshooting

### If port 3000 is busy:
- The app will automatically use the next available port (3001, 3002, etc.)
- Check the terminal output for the actual URL

### If cities still not found:
- Make sure RapidAPI key is correct
- Check browser console for API errors

### If weather not loading:
- Make sure OpenWeatherMap API key is correct
- Check browser console for API errors

## ✅ Success Indicators
- City search returns results when you type
- Weather data loads when you select a city
- No errors in browser console
- App works both locally and on Vercel

## 📞 Need Help?
If you're still having issues:
1. Check browser console (F12) for error messages
2. Verify API keys are correctly set
3. Make sure you're using the correct environment variable names
