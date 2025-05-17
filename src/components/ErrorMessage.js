import React from "react";
import { View, Text } from "react-native";
import global from "../styles/global";

export default function ErrorMessage({ message }) {
  return (
    <View style={[global.card, { backgroundColor: "#fee" }]}>
      <Text style={[global.text, { color: "#c00", textAlign: "center" }]}>
        {message}
      </Text>
    </View>
  );
}
