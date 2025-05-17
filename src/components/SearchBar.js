import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Search"
        onPress={() => {
          if (text.trim()) onSearch(text.trim());
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 16 },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});
