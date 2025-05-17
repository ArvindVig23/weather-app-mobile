import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import global from "../styles/global";

export default function Forecast({ list, units }) {
  const unitLabel = units === "metric" ? "°C" : "°F";

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 8 }}
    >
      {list.map((item) => (
        <View
          key={item.dt}
          style={[global.card, { width: 100, marginHorizontal: 4 }]}
        >
          <Text style={global.text}>
            {new Date(item.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </Text>
          <Image
            style={{ width: 50, height: 50, alignSelf: "center" }}
            source={{
              uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            }}
          />
          <Text style={global.text}>
            {Math.round(item.main.temp)}
            {unitLabel}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
