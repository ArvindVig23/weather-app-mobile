import React from "react";
import { View, Text, Image } from "react-native";
import global from "../styles/global";

export default function CurrentWeather({ data, units }) {
  const unitLabel = units === "metric" ? "°C" : "°F";

  return (
    <View style={global.card}>
      <Text style={global.title}>
        {data.name}, {data.sys.country}
      </Text>
      <Image
        style={{ width: 100, height: 100, alignSelf: "center" }}
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        }}
      />
      <Text style={global.text}>
        {Math.round(data.main.temp)}
        {unitLabel}
      </Text>
      <Text style={global.text}>Humidity: {data.main.humidity}%</Text>
      <Text style={global.text}>
        Wind: {data.wind.speed} {units === "metric" ? "m/s" : "mph"}
      </Text>
    </View>
  );
}
