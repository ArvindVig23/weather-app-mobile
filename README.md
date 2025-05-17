# Weather Mobile App

A React Native (Expo) application that brings dynamic weather forecasting to your fingertips. Built on your existing web-based Weather App, this mobile version leverages geolocation, a clean interface, and seamless city search to deliver current conditions and a 5-day forecast wherever you are.

---

## 🎯 Purpose

- Provide on-the-go access to local weather and forecasts
- Demonstrate a mobile-first UI/UX with React Native and Expo
- Showcase geolocation, manual city search, and unit toggling

---

## ✨ Features

- **Automatic Geolocation**  
  Tap **“Use My Location”** to grant permission and immediately see your local weather.
- **Manual City Search**  
  Enter any city (e.g. `London,CA` or `New York,US`) to fetch its weather.
- **5-Day Forecast**  
  Scroll horizontally through daily forecast cards with icons and temperatures.
- **Unit Toggle**  
  Switch between Celsius (°C) and Fahrenheit (°F) instantly.
- **Error Handling**  
  Clear, friendly messages for invalid cities or denied permissions.
- **Responsive Styling**  
  A light-background, dark-text theme optimized for readability on mobile screens.

---

## 📦 Tech Stack & Libraries

- **Expo / React Native** – cross-platform mobile framework
- **expo-location** – request permissions & fetch GPS coordinates
- **expo-status-bar** – manage the device status bar appearance
- **Expo Constants** – read API key from `app.json`
- **OpenWeatherMap API** – current weather & 5-day/3-hour forecast data

---
