import Constants from "expo-constants";
const API_KEY = Constants.expoConfig.extra.OWM_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch by city name
export async function fetchCurrentWeatherByCity(city, units = "metric") {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(
    city
  )}&units=${units}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function fetchFiveDayForecastByCity(city, units = "metric") {
  const url = `${BASE_URL}/forecast?q=${encodeURIComponent(
    city
  )}&units=${units}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Forecast not available");
  return res.json();
}

// Fetch by coordinates
export async function fetchCurrentWeatherByCoords(lat, lon, units = "metric") {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Location not found");
  return res.json();
}

export async function fetchFiveDayForecastByCoords(lat, lon, units = "metric") {
  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Forecast not available");
  return res.json();
}
