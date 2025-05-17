// src/screens/HomeScreen.js

import React, { useState } from "react";
import { View, ScrollView, ActivityIndicator, Button } from "react-native";
import global from "../styles/global";
import {
  fetchCurrentWeatherByCity,
  fetchFiveDayForecastByCity,
  fetchCurrentWeatherByCoords,
  fetchFiveDayForecastByCoords,
} from "../api/openWeather";
import SearchBar from "../components/SearchBar";
import UnitToggle from "../components/UnitToggle";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import ErrorMessage from "../components/ErrorMessage";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [units, setUnits] = useState("metric");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load weather by city name
  const loadWeather = async (city) => {
    setError("");
    setLoading(true);
    try {
      const data = await fetchCurrentWeatherByCity(city, units);
      const fc = await fetchFiveDayForecastByCity(city, units);
      setCurrent(data);
      setForecast(fc.list.filter((_, i) => i % 8 === 0));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Force-prompt for location permission and load by coords
  const requestLocationAndLoad = async () => {
    setError("");
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Location permission denied");
      }
      const { coords } = await Location.getCurrentPositionAsync();
      const data = await fetchCurrentWeatherByCoords(
        coords.latitude,
        coords.longitude,
        units
      );
      const fc = await fetchFiveDayForecastByCoords(
        coords.latitude,
        coords.longitude,
        units
      );
      setCurrent(data);
      setForecast(fc.list.filter((_, i) => i % 8 === 0));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={global.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Unit toggle */}
        <UnitToggle units={units} onChange={setUnits} />

        {/* Button to re-prompt for geolocation */}
        <Button title="Use My Location" onPress={requestLocationAndLoad} />

        {/* City search bar */}
        <SearchBar onSearch={loadWeather} />

        {/* Loading indicator */}
        {loading && (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        )}

        {/* Error message */}
        {error && <ErrorMessage message={error} />}

        {/* Current weather display */}
        {current && <CurrentWeather data={current} units={units} />}

        {/* 5-day forecast */}
        {forecast.length > 0 && <Forecast list={forecast} units={units} />}
      </ScrollView>
    </View>
  );
}
