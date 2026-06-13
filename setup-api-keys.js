// API Keys Setup Script
// Run this script after you get your API keys

const fs = require('fs');
const path = require('path');

console.log('🌤️ Weather App API Keys Setup');
console.log('================================\n');

console.log('📋 Follow these steps to get your API keys:\n');

console.log('1️⃣ OpenWeatherMap API Key (FREE):');
console.log('   • Go to: https://home.openweathermap.org/users/sign_up');
console.log('   • Sign up with your email');
console.log('   • Verify your email');
console.log('   • Go to "API keys" section');
console.log('   • Copy your API key\n');

console.log('2️⃣ RapidAPI GeoDB Key (FREE):');
console.log('   • Go to: https://rapidapi.com/wirefreethought/api/geodb-cities');
console.log('   • Sign up for free account');
console.log('   • Click "Subscribe to Test" (free plan)');
console.log('   • Go to "Endpoints" section');
console.log('   • Copy your RapidAPI key\n');

console.log('3️⃣ After getting both keys, create a .env file in this folder with:');
console.log('   REACT_APP_OPENWEATHER_API_KEY=your_openweather_key_here');
console.log('   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here\n');

console.log('4️⃣ Then run: npm start\n');

console.log('✅ Your weather app will work perfectly!');
