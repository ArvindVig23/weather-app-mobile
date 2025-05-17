import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function UnitToggle({ units, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>°C</Text>
      <Switch
        value={units === "imperial"}
        onValueChange={() =>
          onChange(units === "metric" ? "imperial" : "metric")
        }
      />
      <Text style={styles.label}>°F</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16, // ↑ add some space above
    marginBottom: 8, // and a bit below
  },

  label: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});
